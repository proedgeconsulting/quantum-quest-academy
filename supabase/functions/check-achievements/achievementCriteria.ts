
import { AchievementCriteria } from './types.ts';

// Parse achievement criteria from achievement data
export function parseAchievementCriteria(achievements: any[]): AchievementCriteria[] {
  return achievements.map(achievement => {
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
}

// Check if achievement criteria is met
export function checkAchievementCriteria(
  achievement: AchievementCriteria, 
  totalCompletedLessons: number, 
  courseCompletionMap: Map<string, number>, 
  totalPoints: number
): boolean {
  switch (achievement.criteria.type) {
    case 'course_completion':
      return achievement.criteria.courseId && 
        courseCompletionMap.has(achievement.criteria.courseId) && 
        courseCompletionMap.get(achievement.criteria.courseId)! >= achievement.criteria.value;
    
    case 'lesson_count':
      return totalCompletedLessons >= achievement.criteria.value;
    
    case 'points_threshold':
      return totalPoints >= achievement.criteria.value;
    
    default:
      return false;
  }
}
