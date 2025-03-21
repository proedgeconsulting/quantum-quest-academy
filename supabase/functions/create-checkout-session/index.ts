import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7'
import Stripe from 'https://esm.sh/stripe@14.12.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Function to create a standardized error response
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

// Map of plan IDs to Stripe price IDs
// In production, this should be stored in a database or environment variables
const PLAN_PRICE_MAP = {
  'basic-monthly': 'price_1OzrHpDrUl6z9Ym5EBXz4JQm', // Example price ID
  'basic-yearly': 'price_1OzrHpDrUl6z9Ym5aatrKKFD',  // These should be updated with actual
  'pro-monthly': 'price_1OzrHqDrUl6z9Ym599CIxKJw',    // price IDs from your Stripe dashboard
  'pro-yearly': 'price_1OzrHqDrUl6z9Ym5pBctdEXq',
  'ultimate-monthly': 'price_1OzrHrDrUl6z9Ym5Y5Y4DTRT',
  'ultimate-yearly': 'price_1OzrHrDrUl6z9Ym5v0pROsZD'
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

    // Extract and validate request data
    let requestData;
    try {
      requestData = await req.json();
    } catch (e) {
      return errorResponse('Invalid JSON in request body', 400);
    }

    // Validate required fields
    const { planId, userId, redirectPath } = requestData;
    
    if (!planId) {
      return errorResponse('Missing required field: planId');
    }
    if (!userId) {
      return errorResponse('Missing required field: userId');
    }

    console.log(`Creating checkout session for plan: ${planId}, user: ${userId}, redirect: ${redirectPath || '/subscription'}`);

    // Initialize Stripe with proper error handling
    const stripeKey = Deno.env.get('STRIPE_SECRET_KEY');
    if (!stripeKey) {
      return errorResponse('Stripe configuration error: Missing API key', 500);
    }

    const stripe = new Stripe(stripeKey, {
      apiVersion: '2023-10-16',
    });

    // Initialize Supabase with proper error handling
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    
    if (!supabaseUrl || !supabaseServiceKey) {
      return errorResponse('Supabase configuration error: Missing URL or service key', 500);
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Fetch user data with proper error handling
    const { data: userData, error: userError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (userError) {
      console.error('Error fetching user data:', userError);
      return errorResponse('User not found or database error', 404, { dbError: userError.message });
    }

    if (!userData) {
      return errorResponse('User profile not found', 404);
    }

    // Validate plan ID and determine Stripe price
    const validPlans = Object.keys(PLAN_PRICE_MAP);
    
    if (!validPlans.includes(planId)) {
      return errorResponse('Invalid plan ID', 400, { providedPlanId: planId, validPlans });
    }

    // Get the Stripe price ID for the selected plan
    const stripePriceId = PLAN_PRICE_MAP[planId];
    
    // Check if user already has a Stripe customer ID
    const { data: customerData, error: customerError } = await supabase
      .from('stripe_customers')
      .select('stripe_customer_id')
      .eq('user_id', userId)
      .maybeSingle();
      
    if (customerError) {
      console.error('Error fetching customer data:', customerError);
    }
    
    let customerId = customerData?.stripe_customer_id;

    try {
      // Create checkout session options
      const sessionOptions = {
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
        client_reference_id: userId,
        metadata: {
          userId,
          planId,
        },
      };
      
      // If customer exists, use it
      if (customerId) {
        sessionOptions.customer = customerId;
        console.log(`Using existing customer ID: ${customerId}`);
      } else if (userData.email) {
        // Otherwise use the email
        sessionOptions.customer_email = userData.email;
        console.log(`No customer ID found, using email: ${userData.email}`);
      }
      
      // Create a Stripe Checkout Session
      const session = await stripe.checkout.sessions.create(sessionOptions);

      console.log("Checkout session created successfully:", session.id);

      return new Response(
        JSON.stringify({ 
          sessionId: session.id, 
          url: session.url 
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        }
      );
    } catch (stripeError) {
      console.error('Stripe error creating checkout session:', stripeError);
      return errorResponse(
        'Error creating Stripe checkout session', 
        500, 
        { 
          stripeError: stripeError.message,
          stripeCode: stripeError.code || null,
          stripeType: stripeError.type || null
        }
      );
    }
  } catch (error) {
    console.error('Unexpected error in checkout session creation:', error);
    return errorResponse(
      'Unexpected error processing request', 
      500, 
      { message: error.message, stack: error.stack }
    );
  }
});
