
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
    const { userId, courseId, topicAreas } = await req.json();
    
    if (!userId) {
      return new Response(
        JSON.stringify({ error: 'User ID is required' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }
    
    console.log(`Generating personalized quiz for user: ${userId}`);
    
    // Fetch user's quiz history to identify weak areas
    const { data: quizData } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .eq('course_id', courseId)
      .order('score', { ascending: true })
      .limit(5);
    
    // Identify weak areas based on low scores
    let weakAreas = [];
    
    if (quizData && quizData.length > 0) {
      // If we have quiz data, use it to find weak areas
      weakAreas = quizData
        .filter(item => item.score !== null && item.score < 70)
        .map(item => item.lesson_id);
    }
    
    // If no weak areas identified or provided, use the topic areas provided
    const quizFocus = weakAreas.length > 0 ? weakAreas : topicAreas || [];
    
    if (quizFocus.length === 0) {
      // If still no focus areas, return a default message
      return new Response(
        JSON.stringify({ 
          error: 'Not enough data to generate a personalized quiz. Please complete more lessons first.' 
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }
    
    // Format areas for OpenAI prompt
    const areasPrompt = quizFocus.join(', ');
    
    // Call OpenAI API to generate quiz questions
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
            content: `You are an expert in creating educational quantum physics quizzes. Generate 5 multiple-choice questions with 4 options each, clearly marking the correct answer. Focus on the following areas: ${areasPrompt}. Format your response as a JSON array of objects with the following structure:
            [
              {
                "id": "q1",
                "question": "Question text",
                "options": ["Option A", "Option B", "Option C", "Option D"],
                "correctAnswer": 0 // index of the correct answer
              }
            ]
            Make sure each question tests understanding, not just memorization.`
          },
          {
            role: 'user',
            content: `Please generate a personalized quiz focusing on: ${areasPrompt}`
          }
        ],
        temperature: 0.7,
        max_tokens: 1500,
        response_format: { type: "json_object" }
      }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`);
    }
    
    const data = await response.json();
    let quizQuestions;
    
    try {
      // Parse the JSON string from OpenAI's response
      quizQuestions = JSON.parse(data.choices[0].message.content).map((q, idx) => ({
        ...q,
        id: `q${idx + 1}` // Ensure proper ID format
      }));
    } catch (e) {
      console.error("Error parsing quiz questions:", e);
      console.log("Raw OpenAI response:", data.choices[0].message.content);
      quizQuestions = [];
    }
    
    // Log the quiz generation
    await supabase.from('user_learning_interactions').insert({
      user_id: userId,
      interaction_type: 'personalized_quiz_generation',
      metadata: { weak_areas: quizFocus },
      created_at: new Date().toISOString()
    }).select();
    
    return new Response(
      JSON.stringify({ 
        questions: quizQuestions,
        weakAreas: quizFocus
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error('Error generating personalized quiz:', error);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
