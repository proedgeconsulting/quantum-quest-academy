
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export interface PeerRecommendation {
  id: string;
  user_id: string;
  peer_id: string;
  similarity_score: number;
  complementarity_score: number;
  match_score: number;
  match_type: string;
  created_at: string;
  peer_username?: string;
  peer_avatar_url?: string;
}

export interface PeerConnection {
  id: string;
  user_id: string;
  peer_id: string;
  status: 'pending' | 'accepted' | 'declined';
  created_at: string;
  updated_at: string;
  peer_username?: string;
  peer_avatar_url?: string;
}

export const usePeerConnections = (userId: string | undefined) => {
  const [recommendations, setRecommendations] = useState<PeerRecommendation[]>([]);
  const [connections, setConnections] = useState<PeerConnection[]>([]);
  const [pendingRequests, setPendingRequests] = useState<PeerConnection[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Generate peer recommendations
  const generateRecommendations = async () => {
    if (!userId) return;
    setLoading(true);

    try {
      // Call the edge function to generate recommendations
      const { data, error } = await supabase.functions.invoke('match-learning-peers', {
        body: { user_id: userId },
      });

      if (error) {
        throw error;
      }

      console.log('Peer recommendations generated:', data);
      toast({
        title: "Peer recommendations updated",
        description: `Found ${data.count} learning peers for you.`,
      });

      // Fetch the updated recommendations
      await fetchRecommendations();
    } catch (error: any) {
      console.error('Error generating peer recommendations:', error);
      toast({
        title: "Error generating recommendations",
        description: error.message || "Could not find peer matches",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Fetch peer recommendations from database
  const fetchRecommendations = async () => {
    if (!userId) return;

    try {
      // Get recommendations
      const { data: recommendationsData, error: recommendationsError } = await supabase
        .from('peer_recommendations')
        .select(`
          id, user_id, peer_id, similarity_score, 
          complementarity_score, match_score, match_type, created_at
        `)
        .eq('user_id', userId);

      if (recommendationsError) throw recommendationsError;

      // Fetch profile data for each peer
      if (recommendationsData && recommendationsData.length > 0) {
        const peerIds = recommendationsData.map(rec => rec.peer_id);
        
        const { data: profilesData, error: profilesError } = await supabase
          .from('profiles')
          .select('id, username, avatar_url')
          .in('id', peerIds);
          
        if (profilesError) throw profilesError;
        
        // Merge profile data with recommendations
        const enhancedRecommendations = recommendationsData.map(rec => {
          const peerProfile = profilesData?.find(p => p.id === rec.peer_id);
          return {
            ...rec,
            peer_username: peerProfile?.username || 'Quantum Learner',
            peer_avatar_url: peerProfile?.avatar_url || null,
          };
        });
        
        setRecommendations(enhancedRecommendations);
      } else {
        setRecommendations([]);
      }
    } catch (error: any) {
      console.error('Error fetching peer recommendations:', error);
      toast({
        title: "Error fetching recommendations",
        description: error.message || "Could not load peer recommendations",
        variant: "destructive",
      });
      setRecommendations([]);
    }
  };

  // Fetch peer connections from database
  const fetchConnections = async () => {
    if (!userId) return;

    try {
      // Get established connections (where user is either side of the connection)
      const { data: connectionsData, error: connectionsError } = await supabase
        .from('peer_connections')
        .select(`
          id, user_id, peer_id, status, created_at, updated_at
        `)
        .or(`user_id.eq.${userId},peer_id.eq.${userId}`)
        .eq('status', 'accepted');

      if (connectionsError) throw connectionsError;

      // Get pending requests sent to this user
      const { data: pendingData, error: pendingError } = await supabase
        .from('peer_connections')
        .select(`
          id, user_id, peer_id, status, created_at, updated_at
        `)
        .eq('peer_id', userId)
        .eq('status', 'pending');

      if (pendingError) throw pendingError;

      // Fetch profile data for peers
      if ((connectionsData && connectionsData.length > 0) || (pendingData && pendingData.length > 0)) {
        // Collect all peer IDs
        const connectionPeerIds = connectionsData
          ? connectionsData.map(conn => conn.user_id === userId ? conn.peer_id : conn.user_id)
          : [];
          
        const pendingPeerIds = pendingData 
          ? pendingData.map(req => req.user_id)
          : [];
          
        const allPeerIds = [...new Set([...connectionPeerIds, ...pendingPeerIds])];
        
        // Fetch profiles
        const { data: profilesData, error: profilesError } = await supabase
          .from('profiles')
          .select('id, username, avatar_url')
          .in('id', allPeerIds);
          
        if (profilesError) throw profilesError;
        
        // Enhance connections with profile data
        const enhancedConnections = connectionsData
          ? connectionsData.map(conn => {
              const peerId = conn.user_id === userId ? conn.peer_id : conn.user_id;
              const peerProfile = profilesData?.find(p => p.id === peerId);
              return {
                ...conn,
                peer_id: peerId,
                user_id: userId, // normalize so user_id is always the current user
                peer_username: peerProfile?.username || 'Quantum Learner',
                peer_avatar_url: peerProfile?.avatar_url || null,
              };
            })
          : [];
        
        // Enhance pending requests with profile data
        const enhancedPending = pendingData
          ? pendingData.map(req => {
              const peerProfile = profilesData?.find(p => p.id === req.user_id);
              return {
                ...req,
                peer_username: peerProfile?.username || 'Quantum Learner',
                peer_avatar_url: peerProfile?.avatar_url || null,
              };
            })
          : [];
        
        setConnections(enhancedConnections);
        setPendingRequests(enhancedPending);
      } else {
        setConnections([]);
        setPendingRequests([]);
      }
    } catch (error: any) {
      console.error('Error fetching peer connections:', error);
      toast({
        title: "Error fetching connections",
        description: error.message || "Could not load peer connections",
        variant: "destructive",
      });
      setConnections([]);
      setPendingRequests([]);
    }
  };

  // Send connection request to a peer
  const sendConnectionRequest = async (peerId: string) => {
    if (!userId) return;

    try {
      const { data, error } = await supabase
        .from('peer_connections')
        .insert({
          user_id: userId,
          peer_id: peerId,
          status: 'pending'
        })
        .select();

      if (error) throw error;

      toast({
        title: "Connection request sent",
        description: "Your learning partner request has been sent.",
      });

      // Refresh recommendations and connections
      await fetchRecommendations();
      await fetchConnections();

      return data;
    } catch (error: any) {
      console.error('Error sending connection request:', error);
      toast({
        title: "Error sending request",
        description: error.message || "Could not send connection request",
        variant: "destructive",
      });
      return null;
    }
  };

  // Accept a connection request
  const acceptConnectionRequest = async (connectionId: string) => {
    if (!userId) return;

    try {
      const { data, error } = await supabase
        .from('peer_connections')
        .update({ status: 'accepted', updated_at: new Date().toISOString() })
        .eq('id', connectionId)
        .eq('peer_id', userId) // Make sure this user is the recipient
        .select();

      if (error) throw error;

      toast({
        title: "Connection accepted",
        description: "You've added a new learning partner.",
      });

      // Refresh connections list
      await fetchConnections();

      return data;
    } catch (error: any) {
      console.error('Error accepting connection request:', error);
      toast({
        title: "Error accepting request",
        description: error.message || "Could not accept connection request",
        variant: "destructive",
      });
      return null;
    }
  };

  // Decline a connection request
  const declineConnectionRequest = async (connectionId: string) => {
    if (!userId) return;

    try {
      const { data, error } = await supabase
        .from('peer_connections')
        .update({ status: 'declined', updated_at: new Date().toISOString() })
        .eq('id', connectionId)
        .eq('peer_id', userId) // Make sure this user is the recipient
        .select();

      if (error) throw error;

      toast({
        title: "Connection declined",
        description: "The learning partner request has been declined.",
      });

      // Refresh connections list
      await fetchConnections();

      return data;
    } catch (error: any) {
      console.error('Error declining connection request:', error);
      toast({
        title: "Error declining request",
        description: error.message || "Could not decline connection request",
        variant: "destructive",
      });
      return null;
    }
  };

  // Remove an existing connection
  const removeConnection = async (connectionId: string) => {
    if (!userId) return;

    try {
      const { error } = await supabase
        .from('peer_connections')
        .delete()
        .eq('id', connectionId)
        .or(`user_id.eq.${userId},peer_id.eq.${userId}`);

      if (error) throw error;

      toast({
        title: "Connection removed",
        description: "Learning partner has been removed.",
      });

      // Refresh connections list
      await fetchConnections();

      return true;
    } catch (error: any) {
      console.error('Error removing connection:', error);
      toast({
        title: "Error removing connection",
        description: error.message || "Could not remove learning partner",
        variant: "destructive",
      });
      return false;
    }
  };

  // Initial fetch on component mount
  useEffect(() => {
    if (userId) {
      const fetchData = async () => {
        setLoading(true);
        await Promise.all([fetchRecommendations(), fetchConnections()]);
        setLoading(false);
      };
      fetchData();
    } else {
      setLoading(false);
    }
  }, [userId]);

  return {
    recommendations,
    connections,
    pendingRequests,
    loading,
    generateRecommendations,
    sendConnectionRequest,
    acceptConnectionRequest,
    declineConnectionRequest,
    removeConnection,
    refreshConnections: fetchConnections,
    refreshRecommendations: fetchRecommendations
  };
};
