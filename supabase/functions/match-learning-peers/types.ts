
export interface UserProfile {
  id: string;
  username: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface UserProgress {
  id: string;
  user_id: string;
  course_id: string;
  lesson_id: string;
  completed: boolean;
  score: number | null;
  created_at: string;
  updated_at: string;
}

export interface LearningMatch {
  userId: string;
  peerId: string;
  peerUsername: string;
  similarityScore: number;
  complementarityScore: number;
  matchScore: number;
  matchType: 'similar-level' | 'complementary-skills';
}

export interface PeerConnection {
  id: string;
  user_id: string;
  peer_id: string;
  status: 'pending' | 'accepted' | 'declined';
  created_at: string;
  updated_at: string;
}

export interface PeerRecommendation {
  id: string;
  user_id: string;
  peer_id: string;
  similarity_score: number;
  complementarity_score: number;
  match_score: number;
  match_type: string;
  created_at: string;
}

export interface PeerInfo {
  id: string;
  username: string | null;
  avatar_url: string | null;
  status?: 'pending' | 'accepted' | 'declined';
  similarity_score?: number;
  complementarity_score?: number;
  match_score?: number;
  match_type?: string;
  connection_id?: string;
}

export interface LearningStreak {
  id: string;
  user_id: string;
  current_streak: number;
  longest_streak: number;
  last_activity_date: string;
  created_at: string;
  updated_at: string;
}

export interface LearningAnalytics {
  user_id: string;
  total_time_spent: number;
  average_time_per_session: number;
  most_active_day: string;
  most_active_time: string;
  completion_rate: number;
  learning_pattern: string;
  created_at: string;
  updated_at: string;
}
