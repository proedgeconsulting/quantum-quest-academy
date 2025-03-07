
import type { UserProgress } from './types.ts';

/**
 * Process user progress data to calculate completion metrics
 */
export function processProgressData(progressData: UserProgress[]) {
  const courseCompletionMap = new Map<string, number>();
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
        courseCompletionMap.get(progress.course_id)! + 1
      );
    }
  });
  
  return { courseCompletionMap, totalCompletedLessons };
}

/**
 * Fetch user's progress data from the database
 */
export async function fetchUserProgress(supabase: any, userId: string) {
  const { data, error } = await supabase
    .from('user_progress')
    .select('*')
    .eq('user_id', userId);
  
  if (error) throw error;
  return data;
}
