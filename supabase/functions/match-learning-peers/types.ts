
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
