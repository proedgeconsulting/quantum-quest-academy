
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

interface CompletionStatusProps {
  isCompleted: boolean;
  showComplete: boolean;
  type: "reading" | "interactive" | "video" | "quiz";
  onComplete: () => void;
  isLastLesson?: boolean;
}

const CompletionStatus = ({ isCompleted, showComplete, type, onComplete, isLastLesson = false }: CompletionStatusProps) => {
  const { toast } = useToast();
  
  useEffect(() => {
    if (isCompleted && isLastLesson) {
      toast({
        title: "Course Module Completed! 🎉",
        description: "Congratulations on completing this module of the course!",
        variant: "default",
      });
    }
  }, [isCompleted, isLastLesson, toast]);

  if (isCompleted) {
    return (
      <div className="mt-8 flex justify-center">
        {isLastLesson ? (
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center gap-2 text-green-500 font-medium bg-green-50 dark:bg-green-950/30 px-4 py-2 rounded-md">
              <CheckCircle size={16} />
              <span>Completed</span>
            </div>
            <div className="flex items-center gap-2 text-amber-500 font-medium bg-amber-50 dark:bg-amber-950/30 px-4 py-2 rounded-md">
              <Trophy size={16} />
              <span>Module Completed!</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-green-500 font-medium bg-green-50 dark:bg-green-950/30 px-4 py-2 rounded-md">
            <CheckCircle size={16} />
            <span>Completed</span>
          </div>
        )}
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
