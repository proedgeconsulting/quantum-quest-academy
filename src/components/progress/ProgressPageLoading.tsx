
import React from "react";
import { Trophy } from "lucide-react";
import Navbar from "@/components/Navbar";

const ProgressPageLoading: React.FC = () => {
  return (
    <div className="min-h-screen bg-quantum-50 dark:bg-quantum-950">
      <Navbar />
      <div className="container mx-auto py-8 flex justify-center items-center h-[calc(100vh-80px)]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="relative">
            <Trophy size={48} className="text-quantum-300 dark:text-quantum-700" />
          </div>
          <div className="mt-4 text-lg text-quantum-500">Loading your progress...</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPageLoading;
