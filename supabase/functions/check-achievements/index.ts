
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface AchievementCriteria {
  id: string;
  name: string;
  description: string;
  icon: string;
  points: number;
  criteria: {
    type: 'course_completion' | 'lesson_count' | 'points_threshold';
    value: number;
    courseId?: string;
  };
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    // Get the user ID from the request
    const { user_id } = await req.json();
    
    if (!user_id) {
      return new Response(
        JSON.stringify({ error: 'User ID is required' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }
    
    console.log(`Checking achievements for user: ${user_id}`);
    
    // 1. Get the list of all achievements
    const { data: achievements, error: achievementsError } = await supabase
      .from('achievements')
      .select('*');
      
    if (achievementsError) {
      throw achievementsError;
    }
    
    // 2. Get user's already earned achievements
    const { data: userAchievements, error: userAchievementsError } = await supabase
      .from('user_achievements')
      .select('achievement_id')
      .eq('user_id', user_id);
      
    if (userAchievementsError) {
      throw userAchievementsError;
    }
    
    // Create a set of earned achievement IDs for quick lookup
    const earnedAchievementIds = new Set(userAchievements.map(ua => ua.achievement_id));
    
    // 3. Get user's progress data
    const { data: userProgress, error: userProgressError } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', user_id);
      
    if (userProgressError) {
      throw userProgressError;
    }
    
    // Process progress data for easier access
    const courseCompletionMap = new Map();
    let totalCompletedLessons = 0;
    
    userProgress.forEach(progress => {
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
    
    // Calculate total points from existing achievements
    let totalPoints = 0;
    
    // Define achievement criteria (this would ideally be stored in the database)
    const achievementCriteria: AchievementCriteria[] = achievements.map(achievement => {
      // Parse criteria from achievement description or name
      // This is a simplistic approach - in a real app, you'd have a more structured way
      // to store achievement criteria
      let criteria = {
        type: 'lesson_count' as const,
        value: 1,
      };
      
      if (achievement.name.includes('Complete Course')) {
        criteria = {
          type: 'course_completion' as const,
          value: 1,
          courseId: achievement.name.split(' ').pop(),
        };
      } else if (achievement.name.includes('lessons')) {
        criteria = {
          type: 'lesson_count' as const,
          value: parseInt(achievement.name.match(/\d+/)?.[0] || '5', 10),
        };
      } else if (achievement.name.includes('points')) {
        criteria = {
          type: 'points_threshold' as const,
          value: parseInt(achievement.name.match(/\d+/)?.[0] || '50', 10),
        };
      }
      
      return {
        ...achievement,
        criteria,
      };
    });
    
    // 4. Check for new achievements to award
    const newlyEarnedAchievements = [];
    
    for (const achievement of achievementCriteria) {
      // Skip if already earned
      if (earnedAchievementIds.has(achievement.id)) {
        totalPoints += achievement.points;
        continue;
      }
      
      let earned = false;
      
      // Check different criteria types
      switch (achievement.criteria.type) {
        case 'course_completion':
          if (achievement.criteria.courseId && 
              courseCompletionMap.has(achievement.criteria.courseId) && 
              courseCompletionMap.get(achievement.criteria.courseId) >= achievement.criteria.value) {
            earned = true;
          }
          break;
          
        case 'lesson_count':
          if (totalCompletedLessons >= achievement.criteria.value) {
            earned = true;
          }
          break;
          
        case 'points_threshold':
          if (totalPoints >= achievement.criteria.value) {
            earned = true;
          }
          break;
      }
      
      if (earned) {
        // Award the achievement
        const { data, error } = await supabase
          .from('user_achievements')
          .insert({
            user_id,
            achievement_id: achievement.id,
            earned_at: new Date().toISOString(),
          })
          .select();
          
        if (error) {
          console.error(`Error awarding achievement ${achievement.id}:`, error);
        } else {
          newlyEarnedAchievements.push({
            ...achievement,
            earned_at: new Date().toISOString(),
          });
          console.log(`Awarded achievement ${achievement.name} to user ${user_id}`);
          
          // Update total points for subsequent achievement checks
          totalPoints += achievement.points;
        }
      }
    }
    
    return new Response(
      JSON.stringify({ 
        newAchievements: newlyEarnedAchievements,
        totalAchievements: achievements.length,
        earnedAchievements: userAchievements.length + newlyEarnedAchievements.length,
        totalPoints 
      }),
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
