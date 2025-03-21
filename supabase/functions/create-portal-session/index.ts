
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
    const { userId, return_url } = requestData;
    
    if (!userId) {
      return errorResponse('Missing required field: userId');
    }

    console.log(`Creating customer portal session for user: ${userId}, return URL: ${return_url || 'not specified'}`);

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

    // First, check if the user exists
    const { data: userData, error: userError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (userError) {
      console.error('Error fetching user data:', userError);
      return errorResponse('User not found or database error', 404, { dbError: userError.message });
    }

    // Look up user's Stripe customer ID or create one if it doesn't exist
    let customerId;
    
    // Check if user has an existing customer ID
    const { data: customerData, error: customerError } = await supabase
      .from('stripe_customers')
      .select('stripe_customer_id')
      .eq('user_id', userId)
      .maybeSingle();

    if (customerError) {
      console.error('Error fetching customer data:', customerError);
      return errorResponse('Database error while fetching customer information', 500);
    }

    if (customerData?.stripe_customer_id) {
      customerId = customerData.stripe_customer_id;
      console.log(`Found existing Stripe customer ID: ${customerId}`);
    } else {
      // Create a new customer in Stripe
      try {
        const customer = await stripe.customers.create({
          email: userData.email,
          metadata: {
            userId: userId,
          },
        });
        
        customerId = customer.id;
        console.log(`Created new Stripe customer: ${customerId}`);
        
        // Store the customer ID in our database
        const { error: insertError } = await supabase
          .from('stripe_customers')
          .insert({
            user_id: userId,
            stripe_customer_id: customerId,
            email: userData.email,
          });
          
        if (insertError) {
          console.error('Error storing customer ID:', insertError);
          return errorResponse('Failed to store customer information', 500);
        }
      } catch (stripeError) {
        console.error('Stripe error creating customer:', stripeError);
        return errorResponse('Error creating Stripe customer', 500, { 
          stripeError: stripeError.message 
        });
      }
    }

    try {
      // Create a portal session
      const session = await stripe.billingPortal.sessions.create({
        customer: customerId,
        return_url: return_url || req.headers.get('origin'),
      });

      console.log("Customer portal session created successfully:", session.id);

      return new Response(
        JSON.stringify({ url: session.url }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        }
      );
    } catch (stripeError) {
      console.error('Stripe error creating portal session:', stripeError);
      return errorResponse(
        'Error creating Stripe portal session', 
        500, 
        { 
          stripeError: stripeError.message,
          stripeCode: stripeError.code || null,
          stripeType: stripeError.type || null
        }
      );
    }
  } catch (error) {
    console.error('Unexpected error in portal session creation:', error);
    return errorResponse(
      'Unexpected error processing request', 
      500, 
      { message: error.message, stack: error.stack }
    );
  }
});
