
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Initialize Supabase client
function initSupabaseClient() {
  const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
  return createClient(supabaseUrl, supabaseServiceKey);
}

// Main request handler
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    // Create Supabase client
    const supabase = initSupabaseClient();
    
    // Get the user ID from the request
    const { user_id, activity_type } = await req.json();
    
    if (!user_id) {
      return new Response(
        JSON.stringify({ error: 'User ID is required' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }
    
    console.log(`Tracking learning activity for user: ${user_id}, type: ${activity_type}`);
    
    // 1. Update learning streak
    const { data: streakData, error: streakError } = await supabase.rpc(
      'update_learning_streak',
      { user_id }
    );
    
    if (streakError) {
      console.error('Error updating streak:', streakError);
      throw streakError;
    }
    
    console.log('Streak updated:', streakData);
    
    // 2. Generate notification if needed
    let notification = null;
    
    if (streakData.is_continued_streak && streakData.current_streak % 5 === 0) {
      // Milestone streak (5, 10, 15, etc.)
      notification = {
        type: 'streak_milestone',
        title: `${streakData.current_streak} Day Streak!`,
        message: `Congratulations! You've maintained your learning streak for ${streakData.current_streak} days. Keep up the great work!`,
        streak: streakData.current_streak
      };
    } else if (streakData.is_new_streak && streakData.current_streak === 1 && streakData.longest_streak > 1) {
      // Streak broken but restarted
      notification = {
        type: 'streak_restart',
        title: 'New Streak Started',
        message: 'Welcome back! You\'ve started a new learning streak today. Keep going to beat your record!',
        longest_streak: streakData.longest_streak
      };
    }
    
    // 3. Store notification if we have one
    if (notification) {
      const { error: notificationError } = await supabase
        .from('user_notifications')
        .insert({
          user_id,
          title: notification.title,
          message: notification.message,
          type: notification.type,
          data: notification
        });
      
      if (notificationError) {
        console.error('Error saving notification:', notificationError);
      } else {
        console.log('Notification created:', notification.title);
      }
    }
    
    // 4. Return streak data and notification
    return new Response(
      JSON.stringify({
        streak: streakData,
        notification
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error('Error tracking learning activity:', error);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
