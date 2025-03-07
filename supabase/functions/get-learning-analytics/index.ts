
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.14.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Create a Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Get request data
    const requestData = await req.json();
    const { user_id } = requestData;

    if (!user_id) {
      return new Response(
        JSON.stringify({ error: "User ID is required" }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    // Get user progress data
    const { data: progressData, error: progressError } = await supabase
      .from("user_progress")
      .select("*")
      .eq("user_id", user_id);

    if (progressError) {
      throw progressError;
    }

    // Get streak data 
    // Note: In a production app, you would have a learning_streaks table
    // For now, we'll compute this from the progress data
    const totalLessons = 100; // Example value, in production would be from a count of all lessons
    const totalCompleted = progressData?.filter(p => p.completed).length || 0;
    const completionRate = totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0;

    // Create a mock analytics object
    // In a real implementation, this would be from actual analytics data
    const analytics = {
      completion_rate: completionRate,
      total_completed: totalCompleted,
      total_lessons: totalLessons,
      most_active_hour: "3PM - 4PM",
      most_active_day: "Wednesday",
      current_streak: 3,
      longest_streak: 7,
      last_week_activity: 5,
      learning_pattern: "Consistent",
      learning_activity: progressData || [] // Include the progress data as learning activity
    };

    return new Response(
      JSON.stringify(analytics),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  } catch (error) {
    console.error("Error in get-learning-analytics:", error);
    
    return new Response(
      JSON.stringify({ error: error.message || "Unknown error occurred" }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});
