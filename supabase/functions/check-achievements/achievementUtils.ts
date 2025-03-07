
import type { AchievementCriteria } from './types.ts';

/**
 * Fetch all achievements from database
 */
export async function fetchAchievements(supabase: any) {
  const { data, error } = await supabase.from('achievements').select('*');
  if (error) throw error;
  return data;
}

/**
 * Fetch user's earned achievements
 */
export async function fetchUserAchievements(supabase: any, userId: string) {
  const { data, error } = await supabase
    .from('user_achievements')
    .select('achievement_id')
    .eq('user_id', userId);
  
  if (error) throw error;
  return data;
}

/**
 * Award an achievement to a user
 */
export async function awardAchievement(supabase: any, userId: string, achievement: AchievementCriteria) {
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
