
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7'
import Stripe from 'https://esm.sh/stripe@14.12.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2023-10-16',
});

const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { planId, userId, redirectPath } = await req.json();
    console.log(`Creating checkout session for plan: ${planId}, user: ${userId}`);

    // Fetch user data to pass to Stripe
    const { data: userData, error: userError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (userError) {
      console.error('Error fetching user data:', userError);
      throw new Error('User not found');
    }

    // Determine the Stripe price ID based on the plan ID from our system
    let stripePriceId;
    switch (planId) {
      case 'basic-monthly':
        stripePriceId = 'price_basic_monthly';
        break;
      case 'basic-yearly':
        stripePriceId = 'price_basic_yearly';
        break;
      case 'pro-monthly':
        stripePriceId = 'price_pro_monthly';
        break;
      case 'pro-yearly':
        stripePriceId = 'price_pro_yearly';
        break;
      case 'ultimate-monthly':
        stripePriceId = 'price_ultimate_monthly';
        break;
      case 'ultimate-yearly':
        stripePriceId = 'price_ultimate_yearly';
        break;
      default:
        throw new Error('Invalid plan ID');
    }

    // Create a Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: stripePriceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${req.headers.get('origin')}${redirectPath || '/subscription'}?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/pricing`,
      customer_email: userData.email || undefined,
      client_reference_id: userId,
      metadata: {
        userId,
        planId,
      },
    });

    return new Response(
      JSON.stringify({ sessionId: session.id, url: session.url }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    );
  }
});
