
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

export interface PeerRecommendationsSectionProps {
  recommendations: PeerInfo[];
  onConnect: (peerId: string) => Promise<void>;
  onRefresh: () => Promise<void>;
  isRefreshing: boolean;
}

export interface PeerConnectionsSectionProps {
  connections: PeerInfo[];
  pendingRequests: PeerInfo[];
  onAccept: (connectionId: string) => Promise<void>;
  onDecline: (connectionId: string) => Promise<void>;
  onRemove: (connectionId: string) => Promise<void>;
}
