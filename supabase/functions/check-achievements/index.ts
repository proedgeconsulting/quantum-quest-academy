
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";
import { parseAchievementCriteria, checkAchievementCriteria } from "./achievementCriteria.ts";
import type { AchievementCriteria, UserProgress } from "./types.ts";

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

// Fetch all achievements from database
async function fetchAchievements(supabase) {
  const { data, error } = await supabase.from('achievements').select('*');
  if (error) throw error;
  return data;
}

// Fetch user's earned achievements
async function fetchUserAchievements(supabase, userId) {
  const { data, error } = await supabase
    .from('user_achievements')
    .select('achievement_id')
    .eq('user_id', userId);
  if (error) throw error;
  return data;
}

// Fetch user's progress data
async function fetchUserProgress(supabase, userId) {
  const { data, error } = await supabase
    .from('user_progress')
    .select('*')
    .eq('user_id', userId);
  if (error) throw error;
  return data;
}

// Process progress data for easier access
function processProgressData(progressData: UserProgress[]) {
  const courseCompletionMap = new Map();
  let totalCompletedLessons = 0;
  
  progressData.forEach(progress => {
    if (progress.completed) {
      totalCompletedLessons++;
      
      // Count completed lessons per course
      if (!courseCompletionMap.has(progress.course_id)) {
        courseCompletionMap.set(progress.course_id, 0);
      }
      courseCompletionMap.set(
        progress.course_id, 
        courseCompletionMap.get(progress.course_id) + 1
      );
    }
  });
  
  return { courseCompletionMap, totalCompletedLessons };
}

// Award an achievement to a user
async function awardAchievement(supabase, userId, achievement) {
  const { data, error } = await supabase
    .from('user_achievements')
    .insert({
      user_id: userId,
      achievement_id: achievement.id,
      earned_at: new Date().toISOString(),
    })
    .select();
    
  if (error) {
    console.error(`Error awarding achievement ${achievement.id}:`, error);
    return null;
  }
  
  console.log(`Awarded achievement ${achievement.name} to user ${userId}`);
  return {
    ...achievement,
    earned_at: new Date().toISOString(),
  };
}

// Main function to check and award achievements
async function checkAndAwardAchievements(supabase, userId) {
  try {
    // 1. Get the list of all achievements
    const achievements = await fetchAchievements(supabase);
    
    // 2. Get user's already earned achievements
    const userAchievements = await fetchUserAchievements(supabase, userId);
    
    // Create a set of earned achievement IDs for quick lookup
    const earnedAchievementIds = new Set(userAchievements.map(ua => ua.achievement_id));
    
    // 3. Get user's progress data
    const userProgress = await fetchUserProgress(supabase, userId);
    
    // Process progress data for easier access
    const { courseCompletionMap, totalCompletedLessons } = processProgressData(userProgress);
    
    // Calculate total points from existing achievements
    let totalPoints = 0;
    
    // Define achievement criteria
    const achievementCriteria = parseAchievementCriteria(achievements);
    
    // 4. Check for new achievements to award
    const newlyEarnedAchievements = [];
    
    for (const achievement of achievementCriteria) {
      // Skip if already earned
      if (earnedAchievementIds.has(achievement.id)) {
        totalPoints += achievement.points;
        continue;
      }
      
      // Check if achievement criteria is met
      const earned = checkAchievementCriteria(
        achievement,
        totalCompletedLessons,
        courseCompletionMap,
        totalPoints
      );
      
      if (earned) {
        // Award the achievement
        const newAchievement = await awardAchievement(supabase, userId, achievement);
        
        if (newAchievement) {
          newlyEarnedAchievements.push(newAchievement);
          
          // Update total points for subsequent achievement checks
          totalPoints += achievement.points;
        }
      }
    }
    
    return {
      newAchievements: newlyEarnedAchievements,
      totalAchievements: achievements.length,
      earnedAchievements: userAchievements.length + newlyEarnedAchievements.length,
      totalPoints
    };
  } catch (error) {
    console.error('Error in checkAndAwardAchievements:', error);
    throw error;
  }
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
    const { user_id } = await req.json();
    
    if (!user_id) {
      return new Response(
        JSON.stringify({ error: 'User ID is required' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }
    
    console.log(`Checking achievements for user: ${user_id}`);
    
    // Check and award achievements
    const result = await checkAndAwardAchievements(supabase, user_id);
    
    return new Response(
      JSON.stringify(result),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error('Error checking achievements:', error);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
