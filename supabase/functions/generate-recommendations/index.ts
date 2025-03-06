
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

// Define CORS headers
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
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    );

    // Get the user ID from the request
    const { data: { user } } = await supabaseClient.auth.getUser();
    
    if (!user) {
      return new Response(
        JSON.stringify({ error: 'Not authenticated' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const userId = user.id;
    console.log(`Generating recommendations for user: ${userId}`);

    // Fetch user's progress data
    const { data: userProgress, error: progressError } = await supabaseClient
      .from('user_progress')
      .select('*')
      .eq('user_id', userId);

    if (progressError) {
      console.error('Error fetching user progress:', progressError);
      throw progressError;
    }

    // Get completed course IDs
    const completedCoursesIds = new Set();
    const inProgressCoursesIds = new Set();
    
    // Process progress data
    userProgress?.forEach(progress => {
      if (progress.completed) {
        completedCoursesIds.add(progress.course_id);
      } else {
        inProgressCoursesIds.add(progress.course_id);
      }
    });

    // Determine user level based on completed courses
    let userLevel = 1;
    
    // Simple algorithm: if user completed any level 1 courses, suggest level 2
    // If completed any level 2 courses, suggest level 3
    completedCoursesIds.forEach(courseId => {
      const level = parseInt(courseId.split('.')[0]);
      if (level > userLevel && level <= 3) {
        userLevel = level;
      }
    });

    // Clear previous recommendations
    const { error: deleteError } = await supabaseClient
      .from('recommendations')
      .delete()
      .eq('user_id', userId);

    if (deleteError) {
      console.error('Error clearing previous recommendations:', deleteError);
      throw deleteError;
    }

    // Generate recommendations based on user's level and progress
    const recommendations = [];

    // Suggest next level courses
    const targetLevel = Math.min(userLevel + 1, 3); // Don't go beyond level 3
    
    // Mock courses to recommend based on level
    const coursesByLevel = {
      1: [
        { id: '1.1', title: 'Quantum Basics', reason: 'Foundational knowledge for beginners' },
        { id: '1.2', title: 'Quantum Playground', reason: 'Interactive introduction to quantum concepts' },
        { id: '1.3', title: 'Quantum Coding Lite', reason: 'Basic programming with quantum concepts' }
      ],
      2: [
        { id: '2.1', title: 'Quantum Circuits', reason: 'Build on your foundational knowledge' },
        { id: '2.2', title: 'Quantum Entanglement', reason: 'Advance your understanding of quantum mechanics' },
        { id: '2.3', title: 'Quantum Error Correction', reason: 'Essential for practical quantum computing' }
      ],
      3: [
        { id: '3.1', title: 'Quantum Machine Learning', reason: 'Apply your knowledge to machine learning' },
        { id: '3.2', title: 'Real-World Quantum AI', reason: 'Practical applications in AI' },
        { id: '3.3', title: 'Quantum Future', reason: 'Explore cutting-edge quantum technologies' }
      ]
    };

    // Calculate relevance scores and generate recommendations
    const potentialCourses = [...coursesByLevel[targetLevel]];
    
    // Add courses from current level that aren't in progress or completed
    coursesByLevel[userLevel].forEach(course => {
      if (!completedCoursesIds.has(course.id) && !inProgressCoursesIds.has(course.id)) {
        potentialCourses.push({
          ...course,
          reason: `Complete your level ${userLevel} curriculum`
        });
      }
    });

    // Sort and rank recommendations (simple algorithm for now)
    const rankedRecommendations = potentialCourses
      .filter(course => !completedCoursesIds.has(course.id))
      .map(course => {
        // Higher relevance for current level courses if user has few completions
        const isCurrentLevel = parseInt(course.id.split('.')[0]) === userLevel;
        const isNextLevel = parseInt(course.id.split('.')[0]) === userLevel + 1;
        
        let relevanceScore = 0.5; // Base score
        
        // Adjust score based on level appropriateness
        if (isCurrentLevel && completedCoursesIds.size < 3) {
          relevanceScore += 0.3; // Prioritize current level if few completions
        } else if (isNextLevel && completedCoursesIds.size >= 3) {
          relevanceScore += 0.4; // Prioritize next level if many completions
        }
        
        // Add small random factor to create variety
        relevanceScore += Math.random() * 0.1;
        
        return {
          course_id: course.id,
          user_id: userId,
          relevance_score: relevanceScore,
          reason: course.reason
        };
      })
      .sort((a, b) => b.relevance_score - a.relevance_score)
      .slice(0, 3); // Limit to top 3 recommendations

    // Insert recommendations into the database
    if (rankedRecommendations.length > 0) {
      const { error: insertError } = await supabaseClient
        .from('recommendations')
        .insert(rankedRecommendations);

      if (insertError) {
        console.error('Error inserting recommendations:', insertError);
        throw insertError;
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Recommendations generated successfully',
        count: rankedRecommendations.length
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in generate-recommendations function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
