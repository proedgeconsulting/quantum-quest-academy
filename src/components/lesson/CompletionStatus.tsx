
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface CompletionStatusProps {
  isCompleted: boolean;
  showComplete: boolean;
  type: "reading" | "interactive" | "video" | "quiz";
  onComplete: () => void;
}

const CompletionStatus = ({ isCompleted, showComplete, type, onComplete }: CompletionStatusProps) => {
  if (isCompleted) {
    return (
      <div className="mt-8 flex justify-center">
        <div className="flex items-center gap-2 text-green-500 font-medium bg-green-50 dark:bg-green-950/30 px-4 py-2 rounded-md">
          <CheckCircle size={16} />
          <span>Completed</span>
        </div>
      </div>
    );
  }
  
  if (showComplete && type !== "interactive") {
    return (
      <motion.div 
        className="mt-8 flex justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Button onClick={onComplete} className="gap-2">
          <CheckCircle size={16} />
          Mark as Complete
        </Button>
      </motion.div>
    );
  }
  
  return null;
};

export default CompletionStatus;
