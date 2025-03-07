
export interface AchievementCriteria {
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

export interface UserProgress {
  course_id: string;
  lesson_id: string;
  completed: boolean;
}
