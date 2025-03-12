
export interface LearningAnalytics {
  completion_rate: number;
  total_completed: number;
  total_lessons: number;
  most_active_hour: string;
  most_active_day: string;
  current_streak: number;
  longest_streak: number;
  last_week_activity: number;
  learning_pattern: string;
  learning_activity?: any[]; 
}

export interface StreakInfo {
  current_streak: number;
  longest_streak: number;
  is_new_streak: boolean;
  is_continued_streak: boolean;
}
