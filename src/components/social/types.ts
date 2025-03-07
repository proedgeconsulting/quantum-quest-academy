
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
