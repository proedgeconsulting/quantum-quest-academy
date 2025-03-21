
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7'
import Stripe from 'https://esm.sh/stripe@14.12.0';

// Initialize Stripe
const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2023-10-16',
});

// Initialize Supabase
const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Map of plan IDs
// This should match the planId in your frontend code
const STRIPE_PRICE_TO_PLAN_MAP = {
  'price_1OzrHpDrUl6z9Ym5EBXz4JQm': 'basic-monthly',
  'price_1OzrHpDrUl6z9Ym5aatrKKFD': 'basic-yearly',
  'price_1OzrHqDrUl6z9Ym599CIxKJw': 'pro-monthly',
  'price_1OzrHqDrUl6z9Ym5pBctdEXq': 'pro-yearly',
  'price_1OzrHrDrUl6z9Ym5Y5Y4DTRT': 'ultimate-monthly',
  'price_1OzrHrDrUl6z9Ym5v0pROsZD': 'ultimate-yearly'
};

// Map of plan tiers
const PLAN_TO_TIER_MAP = {
  'basic-monthly': 'basic',
  'basic-yearly': 'basic',
  'pro-monthly': 'pro',
  'pro-yearly': 'pro',
  'ultimate-monthly': 'ultimate',
  'ultimate-yearly': 'ultimate'
};

Deno.serve(async (req) => {
  try {
    // Ensure this is a POST request
    if (req.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    // Get the signature from the header
    const signature = req.headers.get('stripe-signature');
    if (!signature) {
      return new Response('Stripe signature missing', { status: 400 });
    }

    // Get the webhook secret
    const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET');
    if (!webhookSecret) {
      return new Response('Webhook secret not configured', { status: 500 });
    }

    // Get the request body as text
    const body = await req.text();

    // Verify the webhook signature
    let event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      return new Response(`Webhook signature verification failed: ${err.message}`, { status: 400 });
    }

    console.log(`Processing webhook event: ${event.type}`);

    // Handle the event based on its type
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        const { client_reference_id: userId, metadata } = session;

        // Get the subscription
        const subscriptionId = session.subscription;
        if (!subscriptionId) {
          console.error('No subscription ID in checkout session');
          break;
        }

        const subscription = await stripe.subscriptions.retrieve(subscriptionId);
        
        // Get plan details
        const priceId = subscription?.items?.data[0]?.price?.id;
        if (!priceId || !STRIPE_PRICE_TO_PLAN_MAP[priceId]) {
          console.error('Invalid price ID or no mapping found:', priceId);
          break;
        }
        
        const planId = STRIPE_PRICE_TO_PLAN_MAP[priceId];
        const tier = PLAN_TO_TIER_MAP[planId];

        // Store subscription details
        if (userId) {
          // Store customer ID if needed
          const customerId = session.customer;
          if (customerId) {
            const { data: customerExists } = await supabase
              .from('stripe_customers')
              .select('id')
              .eq('user_id', userId)
              .maybeSingle();

            if (!customerExists) {
              await supabase.from('stripe_customers').insert({
                user_id: userId,
                stripe_customer_id: customerId,
                email: session.customer_details?.email
              });
            }
          }
          
          // Start and end dates
          const current_period_start = new Date(subscription.current_period_start * 1000).toISOString();
          const current_period_end = new Date(subscription.current_period_end * 1000).toISOString();
          
          // Insert/update subscription record
          const { error } = await supabase.from('user_subscriptions').insert({
            user_id: userId,
            plan_id: planId,
            stripe_subscription_id: subscriptionId,
            payment_method: 'Stripe',
            status: subscription.status,
            tier,
            current_period_start,
            current_period_end,
            cancel_at_period_end: subscription.cancel_at_period_end
          });
          
          if (error) {
            console.error('Error storing subscription:', error);
          } else {
            console.log(`Subscription created for user: ${userId}, plan: ${planId}`);
          }
        }
        break;
      }
      
      case 'customer.subscription.updated': {
        const subscription = event.data.object;
        const subscriptionId = subscription.id;
        
        // Get user ID from subscription
        const { data: userData, error: userError } = await supabase
          .from('user_subscriptions')
          .select('user_id')
          .eq('stripe_subscription_id', subscriptionId)
          .maybeSingle();
        
        if (userError || !userData) {
          console.error('Error fetching user for subscription update:', userError);
          break;
        }
        
        const userId = userData.user_id;
        
        // Get plan details
        const priceId = subscription?.items?.data[0]?.price?.id;
        if (!priceId || !STRIPE_PRICE_TO_PLAN_MAP[priceId]) {
          console.error('Invalid price ID or no mapping found:', priceId);
          break;
        }
        
        const planId = STRIPE_PRICE_TO_PLAN_MAP[priceId];
        const tier = PLAN_TO_TIER_MAP[planId];
        
        // Update subscription record
        const { error } = await supabase
          .from('user_subscriptions')
          .update({
            status: subscription.status,
            current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
            current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
            cancel_at_period_end: subscription.cancel_at_period_end,
            plan_id: planId,
            tier
          })
          .eq('stripe_subscription_id', subscriptionId);
        
        if (error) {
          console.error('Error updating subscription:', error);
        } else {
          console.log(`Subscription updated for user: ${userId}, status: ${subscription.status}`);
        }
        break;
      }
      
      case 'customer.subscription.deleted': {
        const subscription = event.data.object;
        const subscriptionId = subscription.id;
        
        // Get user ID from subscription
        const { data: userData, error: userError } = await supabase
          .from('user_subscriptions')
          .select('user_id')
          .eq('stripe_subscription_id', subscriptionId)
          .maybeSingle();
        
        if (userError || !userData) {
          console.error('Error fetching user for subscription deletion:', userError);
          break;
        }
        
        const userId = userData.user_id;
        
        // Update subscription record to cancelled
        const { error } = await supabase
          .from('user_subscriptions')
          .update({
            status: 'canceled',
            cancel_at_period_end: true
          })
          .eq('stripe_subscription_id', subscriptionId);
        
        if (error) {
          console.error('Error marking subscription as cancelled:', error);
        } else {
          console.log(`Subscription cancelled for user: ${userId}`);
          
          // Create a new free subscription
          const endDate = new Date(subscription.current_period_end * 1000);
          const oneYearLater = new Date(endDate);
          oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);
          
          await supabase.from('user_subscriptions').insert({
            user_id: userId,
            plan_id: 'free',
            status: 'active',
            tier: 'free',
            current_period_start: endDate.toISOString(),
            current_period_end: oneYearLater.toISOString(),
            cancel_at_period_end: false
          });
        }
        break;
      }
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});
