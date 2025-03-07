
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PeerRecommendationsSection from "@/components/social/PeerRecommendationsSection";
import PeerConnectionsSection from "@/components/social/PeerConnectionsSection";
import { usePeerConnections } from "@/hooks/usePeerConnections";

const Social = () => {
  const { user, loading: authLoading } = useAuth();
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const {
    recommendations,
    connections,
    pendingRequests,
    loading,
    generateRecommendations,
    sendConnectionRequest,
    acceptConnectionRequest,
    declineConnectionRequest,
    removeConnection
  } = usePeerConnections(user?.id);

  // Handle refresh of peer recommendations
  const handleRefreshRecommendations = async () => {
    if (!user) return;
    
    setIsRefreshing(true);
    try {
      await generateRecommendations();
    } catch (error) {
      console.error("Error refreshing recommendations:", error);
    } finally {
      setIsRefreshing(false);
    }
  };

  // Handle connect to peer
  const handleConnectToPeer = async (peerId: string) => {
    if (!user) return;
    await sendConnectionRequest(peerId);
  };

  // Redirect to login if not authenticated
  if (!user && !authLoading) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-quantum-50 dark:bg-quantum-950">
      <Navbar />
      <div className="container mx-auto py-8 px-4 flex-grow">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-quantum-900 dark:text-white mb-2">
            Social Learning
          </h1>
          <p className="text-quantum-600 dark:text-quantum-300">
            Connect with peers, share knowledge, and accelerate your quantum learning journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recommendations Section */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <PeerRecommendationsSection
              recommendations={recommendations}
              onConnect={handleConnectToPeer}
              onRefresh={handleRefreshRecommendations}
              isRefreshing={isRefreshing || loading}
            />
          </motion.div>

          {/* Connections Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <PeerConnectionsSection
              connections={connections}
              pendingRequests={pendingRequests}
              onAccept={acceptConnectionRequest}
              onDecline={declineConnectionRequest}
              onRemove={removeConnection}
            />
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Social;
