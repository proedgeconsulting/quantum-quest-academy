
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { PeerInfo } from "../components/social/types";

export const usePeerConnections = (userId: string | undefined) => {
  const [recommendations, setRecommendations] = useState<PeerInfo[]>([]);
  const [connections, setConnections] = useState<PeerInfo[]>([]);
  const [pendingRequests, setPendingRequests] = useState<PeerInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Generate peer recommendations
  const generateRecommendations = async () => {
    if (!userId) return;
    
    setLoading(true);
    try {
      // Call the edge function to generate recommendations
      const { error } = await supabase.functions.invoke('match-learning-peers', {
        body: { user_id: userId }
      });
      
      if (error) {
        console.error("Error generating peer recommendations:", error);
        throw error;
      }
      
      console.log("Peer recommendations generated successfully");
      
      // Fetch the newly generated recommendations
      await fetchRecommendations();
      
      toast({
        title: "Recommendations Updated",
        description: "Your peer recommendations have been updated.",
      });
    } catch (error: any) {
      console.error("Error in recommendation process:", error);
      toast({
        title: "Error generating recommendations",
        description: error.message || "Failed to generate peer recommendations",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Fetch recommendations
  const fetchRecommendations = async () => {
    if (!userId) return;
    
    try {
      const { data, error } = await supabase.functions.invoke('get-peer-recommendations', {
        body: { user_id: userId }
      });
      
      if (error) {
        console.error("Error fetching peer recommendations:", error);
        throw error;
      }
      
      setRecommendations(data?.recommendations || []);
      console.log("Fetched peer recommendations:", data?.recommendations?.length || 0);
    } catch (error: any) {
      console.error("Error fetching peer recommendations:", error);
      toast({
        title: "Error fetching recommendations",
        description: error.message || "Failed to load peer recommendations",
        variant: "destructive",
      });
      setRecommendations([]);
    }
  };

  // Fetch connections
  const fetchConnections = async () => {
    if (!userId) return;
    
    try {
      const { data, error } = await supabase.functions.invoke('get-peer-connections', {
        body: { user_id: userId, status: 'accepted' }
      });
      
      if (error) {
        console.error("Error fetching peer connections:", error);
        throw error;
      }
      
      setConnections(data?.connections || []);
      console.log("Fetched peer connections:", data?.connections?.length || 0);
    } catch (error: any) {
      console.error("Error fetching peer connections:", error);
      toast({
        title: "Error fetching connections",
        description: error.message || "Failed to load peer connections",
        variant: "destructive",
      });
      setConnections([]);
    }
  };

  // Fetch pending connection requests
  const fetchPendingRequests = async () => {
    if (!userId) return;
    
    try {
      const { data, error } = await supabase.functions.invoke('get-peer-connections', {
        body: { user_id: userId, status: 'pending' }
      });
      
      if (error) {
        console.error("Error fetching pending requests:", error);
        throw error;
      }
      
      setPendingRequests(data?.connections || []);
      console.log("Fetched pending requests:", data?.connections?.length || 0);
    } catch (error: any) {
      console.error("Error fetching pending requests:", error);
      setPendingRequests([]);
    }
  };

  // Send connection request to peer
  const sendConnectionRequest = async (peerId: string) => {
    if (!userId) return;
    
    try {
      const { data, error } = await supabase.functions.invoke('create-peer-connection', {
        body: { user_id: userId, peer_id: peerId }
      });
      
      if (error) {
        console.error("Error sending connection request:", error);
        throw error;
      }
      
      toast({
        title: "Connection Request Sent",
        description: "Your connection request has been sent.",
      });
      
      // Refresh recommendations to update UI
      await fetchRecommendations();
    } catch (error: any) {
      console.error("Error sending connection request:", error);
      toast({
        title: "Error sending request",
        description: error.message || "Failed to send connection request",
        variant: "destructive",
      });
    }
  };

  // Accept connection request
  const acceptConnectionRequest = async (connectionId: string) => {
    if (!userId) return;
    
    try {
      const { error } = await supabase.functions.invoke('update-connection-status', {
        body: { connection_id: connectionId, status: 'accepted' }
      });
      
      if (error) {
        console.error("Error accepting connection request:", error);
        throw error;
      }
      
      toast({
        title: "Connection Accepted",
        description: "You have accepted the connection request.",
      });
      
      // Refresh connections and pending requests
      await Promise.all([fetchConnections(), fetchPendingRequests()]);
    } catch (error: any) {
      console.error("Error accepting connection request:", error);
      toast({
        title: "Error accepting request",
        description: error.message || "Failed to accept connection request",
        variant: "destructive",
      });
    }
  };

  // Decline connection request
  const declineConnectionRequest = async (connectionId: string) => {
    if (!userId) return;
    
    try {
      const { error } = await supabase.functions.invoke('update-connection-status', {
        body: { connection_id: connectionId, status: 'declined' }
      });
      
      if (error) {
        console.error("Error declining connection request:", error);
        throw error;
      }
      
      toast({
        title: "Connection Declined",
        description: "You have declined the connection request.",
      });
      
      // Refresh pending requests
      await fetchPendingRequests();
    } catch (error: any) {
      console.error("Error declining connection request:", error);
      toast({
        title: "Error declining request",
        description: error.message || "Failed to decline connection request",
        variant: "destructive",
      });
    }
  };

  // Remove connection
  const removeConnection = async (connectionId: string) => {
    if (!userId) return;
    
    try {
      const { error } = await supabase.functions.invoke('delete-peer-connection', {
        body: { connection_id: connectionId }
      });
      
      if (error) {
        console.error("Error removing connection:", error);
        throw error;
      }
      
      toast({
        title: "Connection Removed",
        description: "The connection has been removed.",
      });
      
      // Refresh connections
      await fetchConnections();
    } catch (error: any) {
      console.error("Error removing connection:", error);
      toast({
        title: "Error removing connection",
        description: error.message || "Failed to remove connection",
        variant: "destructive",
      });
    }
  };

  // Initial data fetch
  useEffect(() => {
    if (userId) {
      setLoading(true);
      Promise.all([
        fetchRecommendations(),
        fetchConnections(),
        fetchPendingRequests()
      ]).finally(() => setLoading(false));
    } else {
      setRecommendations([]);
      setConnections([]);
      setPendingRequests([]);
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
    removeConnection
  };
};
