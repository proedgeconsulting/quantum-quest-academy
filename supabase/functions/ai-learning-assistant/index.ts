
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
      return new Response(
        JSON.stringify({ error: 'OpenAI API key not configured', reply: "I'm sorry, the assistant is not properly configured. Please contact support." }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      );
    }
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    // Get request data
    const requestData = await req.json();
    const message = requestData.message;
    const userId = requestData.userId;
    const context = requestData.context;
    const chatMode = requestData.chatMode;
    
    console.log(`Processing message: ${message}, user: ${userId}, mode: ${chatMode}`);
    
    if (!message) {
      return new Response(
        JSON.stringify({ error: 'Message is required', reply: "I couldn't understand your message. Please try again." }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }
    
    // Set system message based on chat mode
    let systemMessage = 'You are a helpful assistant that provides concise and accurate information.';
    
    if (chatMode === 'quantum') {
      systemMessage = 'You are an expert quantum physics tutor. Provide clear, concise explanations with helpful analogies for complex quantum concepts. Make your explanations accessible to learners who are new to the field.';
    }
    
    // Call OpenAI API for the response
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
            content: systemMessage
          },
          {
            role: 'user',
            content: `${message} ${context ? `Context: ${context}` : ''}`
          }
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error(`OpenAI API error: ${JSON.stringify(errorData)}`);
      return new Response(
        JSON.stringify({ 
          error: `OpenAI API error: ${JSON.stringify(errorData)}`,
          reply: "I'm having trouble generating a response right now. Please try again later."
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      );
    }
    
    const data = await response.json();
    
    if (!data || !data.choices || !data.choices[0] || !data.choices[0].message) {
      console.error("Invalid response from OpenAI API:", data);
      return new Response(
        JSON.stringify({ 
          error: "Invalid response from OpenAI API", 
          reply: "I received an invalid response. Please try again later."
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      );
    }
    
    const reply = data.choices[0].message.content;
    
    // Log the interaction if userId is provided
    if (userId) {
      try {
        await supabase.from('user_learning_interactions').insert({
          user_id: userId,
          concept: message.substring(0, 100), // Store first 100 chars as concept
          interaction_type: chatMode === 'quantum' ? 'quantum_chat' : 'general_chat',
          created_at: new Date().toISOString()
        }).select();
      } catch (dbError) {
        console.error("Could not log interaction:", dbError);
        // Continue anyway, don't fail if just the logging fails
      }
    }
    
    return new Response(
      JSON.stringify({ reply }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error('Error generating response:', error);
    
    return new Response(
      JSON.stringify({ 
        error: error.message,
        reply: "I'm sorry, I encountered an error while processing your request. Please try again."
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
