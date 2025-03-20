
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7'
import Stripe from 'https://esm.sh/stripe@14.12.0';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2023-10-16',
});

const endpointSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET') || '';
const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

Deno.serve(async (req) => {
  const signature = req.headers.get('stripe-signature');
  
  if (!signature) {
    return new Response('Webhook signature missing', { status: 400 });
  }

  try {
    const body = await req.text();
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      endpointSecret
    );

    console.log(`Received Stripe event: ${event.type}`);

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        const userId = session.metadata.userId;
        const planId = session.metadata.planId;
        const subscriptionId = session.subscription;

        // Retrieve the subscription to get billing details
        const subscription = await stripe.subscriptions.retrieve(subscriptionId);
        
        // Determine the subscription tier based on planId
        let tier;
        if (planId.includes('basic')) {
          tier = 'basic';
        } else if (planId.includes('pro')) {
          tier = 'pro';
        } else if (planId.includes('ultimate')) {
          tier = 'ultimate';
        }

        // Create or update user_subscription record
        const { error } = await supabase.from('user_subscriptions').insert({
          user_id: userId,
          plan_id: planId,
          status: 'active',
          current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
          current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
          cancel_at_period_end: subscription.cancel_at_period_end,
          payment_method: `**** **** **** ${session.customer_details?.payment_method_details?.card?.last4 || ''}`,
          tier: tier
        });

        if (error) {
          console.error('Error creating subscription record:', error);
          throw error;
        }

        break;
      }
      
      case 'invoice.payment_succeeded': {
        const invoice = event.data.object;
        if (invoice.billing_reason === 'subscription_cycle') {
          const subscriptionId = invoice.subscription;
          const subscription = await stripe.subscriptions.retrieve(subscriptionId);
          
          // Find the subscription in our database
          const { data: subscriptionData, error: fetchError } = await supabase
            .from('user_subscriptions')
            .select('*')
            .eq('id', subscription.metadata.subscription_id)
            .single();
            
          if (fetchError) {
            console.error('Error fetching subscription:', fetchError);
            throw fetchError;
          }
          
          // Update the subscription dates
          const { error: updateError } = await supabase
            .from('user_subscriptions')
            .update({
              current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
              current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
              updated_at: new Date().toISOString()
            })
            .eq('id', subscriptionData.id);
            
          if (updateError) {
            console.error('Error updating subscription:', updateError);
            throw updateError;
          }
        }
        break;
      }
      
      case 'customer.subscription.updated': {
        const subscription = event.data.object;
        
        // Find the subscription in our database
        const { data: subscriptionData, error: fetchError } = await supabase
          .from('user_subscriptions')
          .select('*')
          .eq('id', subscription.metadata.subscription_id)
          .single();
          
        if (fetchError) {
          console.error('Error fetching subscription:', fetchError);
          // Skip if not found - might be a new subscription
          break;
        }
        
        // Update the subscription status and other fields
        const { error: updateError } = await supabase
          .from('user_subscriptions')
          .update({
            status: subscription.status,
            cancel_at_period_end: subscription.cancel_at_period_end,
            current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
            updated_at: new Date().toISOString()
          })
          .eq('id', subscriptionData.id);
          
        if (updateError) {
          console.error('Error updating subscription:', updateError);
          throw updateError;
        }
        
        break;
      }
      
      case 'customer.subscription.deleted': {
        const subscription = event.data.object;
        
        // Find the subscription in our database
        const { data: subscriptionData, error: fetchError } = await supabase
          .from('user_subscriptions')
          .select('*')
          .eq('id', subscription.metadata.subscription_id)
          .single();
          
        if (fetchError) {
          console.error('Error fetching subscription:', fetchError);
          break;
        }
        
        // Update the subscription status
        const { error: updateError } = await supabase
          .from('user_subscriptions')
          .update({
            status: 'canceled',
            updated_at: new Date().toISOString()
          })
          .eq('id', subscriptionData.id);
          
        if (updateError) {
          console.error('Error updating subscription:', updateError);
          throw updateError;
        }
        
        // Create a new free subscription
        const { error: insertError } = await supabase.from('user_subscriptions').insert({
          user_id: subscriptionData.user_id,
          plan_id: 'free',
          status: 'active',
          tier: 'free',
          current_period_start: new Date().toISOString(),
          current_period_end: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
          cancel_at_period_end: false
        });
        
        if (insertError) {
          console.error('Error creating free subscription:', insertError);
          throw insertError;
        }
        
        break;
      }
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error(`Webhook error: ${err.message}`);
    return new Response(`Webhook Error: ${err.message}`, {
      status: 400
    });
  }
});
