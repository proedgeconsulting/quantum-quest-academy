
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
    const openAIKey = Deno.env.get('OPENAI_API_KEY') ?? '';
    
    if (!openAIKey) {
      throw new Error('OpenAI API key is required');
    }
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    // Get request data
    const { concept, userId, context } = await req.json();
    
    if (!concept) {
      return new Response(
        JSON.stringify({ error: 'Concept is required' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }
    
    console.log(`Generating explanation for concept: ${concept}`);
    
    // Call OpenAI API for the explanation
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are an expert quantum physics tutor. Provide clear, concise explanations with helpful analogies for complex quantum concepts. Make your explanations accessible to learners who are new to the field.'
          },
          {
            role: 'user',
            content: `Please explain the concept of "${concept}" in quantum physics. ${context ? `Context: ${context}` : ''}`
          }
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`);
    }
    
    const data = await response.json();
    const explanation = data.choices[0].message.content;
    
    // Log the interaction if userId is provided
    if (userId) {
      await supabase.from('user_learning_interactions').insert({
        user_id: userId,
        concept: concept,
        interaction_type: 'explanation_request',
        created_at: new Date().toISOString()
      }).select();
    }
    
    return new Response(
      JSON.stringify({ explanation }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error('Error generating explanation:', error);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
