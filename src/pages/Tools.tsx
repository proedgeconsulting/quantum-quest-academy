
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";
import ToolsHeader from "@/components/tools/ToolsHeader";
import ToolsGrid from "@/components/tools/ToolsGrid";
import ToolDialog from "@/components/tools/ToolDialog";

const Tools = () => {
  const { user, loading: authLoading } = useAuth();
  const [activeToolDialog, setActiveToolDialog] = useState<string | null>(null);

  if (!user && !authLoading) {
    return <Navigate to="/auth" replace />;
  }

  const handleLaunchTool = (toolId: string) => {
    setActiveToolDialog(toolId);
  };

  const closeToolDialog = () => {
    setActiveToolDialog(null);
  };

  return (
    <div className="min-h-screen bg-quantum-50 dark:bg-quantum-950">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <ToolsHeader />
        <ToolsGrid onLaunchTool={handleLaunchTool} />
      </div>

      <ToolDialog 
        activeToolDialog={activeToolDialog} 
        onClose={closeToolDialog} 
      />
    </div>
  );
};

export default Tools;
