
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7'
import Stripe from 'https://esm.sh/stripe@14.12.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Helper function for standardized error responses
function errorResponse(message, statusCode = 400, details = null) {
  console.error(`Error: ${message}`, details ? JSON.stringify(details) : '');
  return new Response(
    JSON.stringify({ 
      error: message,
      details: details 
    }),
    {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: statusCode,
    }
  );
}

// Map Stripe plan IDs to subscription tiers
const PLAN_TIER_MAP = {
  'price_1OzrHpDrUl6z9Ym5EBXz4JQm': 'basic', // basic-monthly
  'price_1OzrHpDrUl6z9Ym5aatrKKFD': 'basic', // basic-yearly
  'price_1OzrHqDrUl6z9Ym599CIxKJw': 'pro',   // pro-monthly
  'price_1OzrHqDrUl6z9Ym5pBctdEXq': 'pro',   // pro-yearly
  'price_1OzrHrDrUl6z9Ym5Y5Y4DTRT': 'ultimate', // ultimate-monthly
  'price_1OzrHrDrUl6z9Ym5v0pROsZD': 'ultimate'  // ultimate-yearly
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Validate request method
    if (req.method !== 'POST') {
      return errorResponse('Method not allowed', 405);
    }

    // Get the Stripe webhook secret
    const stripeWebhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET');
    if (!stripeWebhookSecret) {
      return errorResponse('Webhook secret not configured', 500);
    }

    // Get the stripe-signature header
    const signature = req.headers.get('stripe-signature');
    if (!signature) {
      return errorResponse('Missing stripe-signature header', 400);
    }

    // Initialize Stripe with proper error handling
    const stripeKey = Deno.env.get('STRIPE_SECRET_KEY');
    if (!stripeKey) {
      return errorResponse('Stripe configuration error: Missing API key', 500);
    }

    const stripe = new Stripe(stripeKey, {
      apiVersion: '2023-10-16',
    });

    // Get the raw body as text
    const rawBody = await req.text();
    if (!rawBody) {
      return errorResponse('Empty request body', 400);
    }

    // Initialize Supabase with proper error handling
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    
    if (!supabaseUrl || !supabaseServiceKey) {
      return errorResponse('Supabase configuration error: Missing URL or service key', 500);
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Verify the webhook signature
    let event;
    try {
      event = stripe.webhooks.constructEvent(
        rawBody,
        signature,
        stripeWebhookSecret
      );
    } catch (err) {
      console.error(`⚠️ Webhook signature verification failed:`, err.message);
      return errorResponse(`Webhook signature verification failed: ${err.message}`, 400);
    }

    console.log(`✅ Received Stripe webhook: ${event.type}`);

    // Handle different event types
    try {
      switch (event.type) {
        case 'checkout.session.completed':
          await handleCheckoutSessionCompleted(event.data.object, stripe, supabase);
          break;
          
        case 'customer.subscription.created':
        case 'customer.subscription.updated':
          await handleSubscriptionChange(event.data.object, stripe, supabase);
          break;
          
        case 'customer.subscription.deleted':
          await handleSubscriptionDeleted(event.data.object, supabase);
          break;
          
        case 'invoice.payment_succeeded':
          await handleInvoicePaymentSucceeded(event.data.object, supabase);
          break;
          
        case 'invoice.payment_failed':
          await handleInvoicePaymentFailed(event.data.object, supabase);
          break;
          
        default:
          console.log(`Unhandled event type: ${event.type}`);
      }

      console.log(`✅ Successfully processed webhook: ${event.type}`);
      return new Response(JSON.stringify({ received: true }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      });
    } catch (error) {
      console.error(`❌ Error processing webhook ${event.type}:`, error);
      return errorResponse(
        `Error processing webhook: ${error.message}`, 
        500,
        { eventType: event.type }
      );
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    return errorResponse('Unexpected error', 500, { message: error.message });
  }
});

async function handleCheckoutSessionCompleted(session, stripe, supabase) {
  console.log('Processing checkout.session.completed');
  
  // Validation
  if (!session.customer || !session.client_reference_id) {
    console.error('Missing customer or client_reference_id in session');
    return;
  }
  
  const userId = session.client_reference_id;
  
  // Get the subscription ID from the session
  const subscriptionId = session.subscription;
  if (!subscriptionId) {
    console.error('No subscription ID found in completed checkout session');
    return;
  }
  
  // Get the subscription details from Stripe
  const subscription = await stripe.subscriptions.retrieve(subscriptionId);
  if (!subscription) {
    console.error(`Failed to retrieve subscription: ${subscriptionId}`);
    return;
  }
  
  // Extract subscription details
  const priceId = subscription.items.data[0].price.id;
  const productId = subscription.items.data[0].price.product;
  const currentPeriodStart = new Date(subscription.current_period_start * 1000).toISOString();
  const currentPeriodEnd = new Date(subscription.current_period_end * 1000).toISOString();
  const cancelAtPeriodEnd = subscription.cancel_at_period_end;
  
  // Determine the subscription tier based on the price ID
  const tier = PLAN_TIER_MAP[priceId] || 'basic';
  
  // Check if the customer exists in the stripe_customers table
  const { data: existingCustomer, error: customerError } = await supabase
    .from('stripe_customers')
    .select('*')
    .eq('stripe_customer_id', session.customer)
    .single();
    
  if (customerError && !customerError.message.includes('No rows found')) {
    console.error('Error checking for existing customer:', customerError);
  }
  
  // If customer doesn't exist, create it
  if (!existingCustomer) {
    const { error: insertCustomerError } = await supabase
      .from('stripe_customers')
      .insert({
        user_id: userId,
        stripe_customer_id: session.customer,
        email: session.customer_details?.email
      });
      
    if (insertCustomerError) {
      console.error('Error inserting customer record:', insertCustomerError);
      throw new Error('Failed to create customer record');
    }
  }
  
  // Create or update subscription in the user_subscriptions table
  const subscriptionData = {
    user_id: userId,
    stripe_subscription_id: subscriptionId,
    stripe_customer_id: session.customer,
    plan_id: productId,
    price_id: priceId,
    status: subscription.status,
    tier: tier,
    current_period_start: currentPeriodStart,
    current_period_end: currentPeriodEnd,
    cancel_at_period_end: cancelAtPeriodEnd,
    payment_method: 'card' // Default to card for checkout
  };
  
  // Check if subscription already exists
  const { data: existingSubscription, error: subError } = await supabase
    .from('user_subscriptions')
    .select('id')
    .eq('stripe_subscription_id', subscriptionId)
    .maybeSingle();
    
  if (subError && !subError.message.includes('No rows found')) {
    console.error('Error checking for existing subscription:', subError);
  }
  
  if (existingSubscription) {
    // Update existing subscription
    const { error: updateError } = await supabase
      .from('user_subscriptions')
      .update(subscriptionData)
      .eq('id', existingSubscription.id);
      
    if (updateError) {
      console.error('Error updating subscription:', updateError);
      throw new Error('Failed to update subscription');
    }
  } else {
    // Insert new subscription
    const { error: insertError } = await supabase
      .from('user_subscriptions')
      .insert(subscriptionData);
      
    if (insertError) {
      console.error('Error inserting subscription:', insertError);
      throw new Error('Failed to create subscription');
    }
  }
  
  console.log(`✅ Successfully processed checkout for subscription: ${subscriptionId}, user: ${userId}`);
}

async function handleSubscriptionChange(subscription, stripe, supabase) {
  console.log(`Processing subscription ${subscription.status} event`);
  
  if (!subscription.id || !subscription.customer) {
    console.error('Missing subscription ID or customer ID');
    return;
  }
  
  // Get the customer record to find the user ID
  const { data: customerData, error: customerError } = await supabase
    .from('stripe_customers')
    .select('user_id')
    .eq('stripe_customer_id', subscription.customer)
    .single();
    
  if (customerError) {
    console.error('Error finding customer record:', customerError);
    throw new Error('Customer not found in database');
  }
  
  const userId = customerData.user_id;
  
  // Extract subscription details
  const priceId = subscription.items.data[0].price.id;
  const productId = subscription.items.data[0].price.product;
  const currentPeriodStart = new Date(subscription.current_period_start * 1000).toISOString();
  const currentPeriodEnd = new Date(subscription.current_period_end * 1000).toISOString();
  const cancelAtPeriodEnd = subscription.cancel_at_period_end;
  
  // Determine the subscription tier based on the price ID
  const tier = PLAN_TIER_MAP[priceId] || 'basic';
  
  // Check if subscription already exists
  const { data: existingSubscription, error: subError } = await supabase
    .from('user_subscriptions')
    .select('id')
    .eq('stripe_subscription_id', subscription.id)
    .maybeSingle();
    
  if (subError && !subError.message.includes('No rows found')) {
    console.error('Error checking for existing subscription:', subError);
  }
  
  const subscriptionData = {
    user_id: userId,
    stripe_subscription_id: subscription.id,
    stripe_customer_id: subscription.customer,
    plan_id: productId,
    price_id: priceId,
    status: subscription.status,
    tier: tier,
    current_period_start: currentPeriodStart,
    current_period_end: currentPeriodEnd,
    cancel_at_period_end: cancelAtPeriodEnd
  };
  
  if (existingSubscription) {
    // Update existing subscription
    const { error: updateError } = await supabase
      .from('user_subscriptions')
      .update(subscriptionData)
      .eq('id', existingSubscription.id);
      
    if (updateError) {
      console.error('Error updating subscription:', updateError);
      throw new Error('Failed to update subscription');
    }
  } else {
    // Insert new subscription
    const { error: insertError } = await supabase
      .from('user_subscriptions')
      .insert(subscriptionData);
      
    if (insertError) {
      console.error('Error inserting subscription:', insertError);
      throw new Error('Failed to create subscription');
    }
  }
  
  console.log(`✅ Successfully processed subscription change for: ${subscription.id}, user: ${userId}`);
}

async function handleSubscriptionDeleted(subscription, supabase) {
  console.log('Processing subscription.deleted event');
  
  if (!subscription.id) {
    console.error('Missing subscription ID');
    return;
  }
  
  // Update the subscription status in the database
  const { error } = await supabase
    .from('user_subscriptions')
    .update({ 
      status: 'canceled',
      cancel_at_period_end: true
    })
    .eq('stripe_subscription_id', subscription.id);
    
  if (error) {
    console.error('Error updating subscription status:', error);
    throw new Error('Failed to update subscription status');
  }
  
  console.log(`✅ Successfully marked subscription as canceled: ${subscription.id}`);
}

async function handleInvoicePaymentSucceeded(invoice, supabase) {
  console.log('Processing invoice.payment_succeeded event');
  
  if (!invoice.subscription || !invoice.customer) {
    console.error('Missing subscription ID or customer ID in invoice');
    return;
  }
  
  // Update the subscription payment status
  const { error } = await supabase
    .from('user_subscriptions')
    .update({ 
      status: 'active',
      last_payment_status: 'succeeded',
      last_payment_date: new Date().toISOString()
    })
    .eq('stripe_subscription_id', invoice.subscription);
    
  if (error) {
    console.error('Error updating payment status:', error);
    throw new Error('Failed to update payment status');
  }
  
  console.log(`✅ Successfully recorded payment for subscription: ${invoice.subscription}`);
}

async function handleInvoicePaymentFailed(invoice, supabase) {
  console.log('Processing invoice.payment_failed event');
  
  if (!invoice.subscription) {
    console.error('Missing subscription ID in invoice');
    return;
  }
  
  // Update the subscription payment status
  const { error } = await supabase
    .from('user_subscriptions')
    .update({ 
      status: 'past_due',
      last_payment_status: 'failed',
      last_payment_failure_date: new Date().toISOString()
    })
    .eq('stripe_subscription_id', invoice.subscription);
    
  if (error) {
    console.error('Error updating payment failure status:', error);
    throw new Error('Failed to update payment failure status');
  }
  
  console.log(`⚠️ Recorded payment failure for subscription: ${invoice.subscription}`);
}
