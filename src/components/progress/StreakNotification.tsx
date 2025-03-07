
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StreakInfo } from "@/hooks/useLearningAnalytics";

interface StreakNotificationProps {
  streakInfo: StreakInfo | null;
  onClose: () => void;
}

const StreakNotification: React.FC<StreakNotificationProps> = ({ 
  streakInfo, 
  onClose 
}) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Only show notification for continued or new streaks
    if (streakInfo && (streakInfo.is_continued_streak || streakInfo.is_new_streak)) {
      setVisible(true);
      
      // Auto-hide after 8 seconds
      const timer = setTimeout(() => {
        setVisible(false);
      }, 8000);
      
      return () => clearTimeout(timer);
    }
  }, [streakInfo]);
  
  const handleClose = () => {
    setVisible(false);
    onClose();
  };
  
  // Don't render anything if no streak info or not supposed to be visible
  if (!streakInfo || !visible) return null;
  
  // Determine message based on streak type
  let message = "";
  let streakClass = "";
  
  if (streakInfo.is_continued_streak) {
    if (streakInfo.current_streak % 5 === 0) {
      // Milestone streak
      message = `Amazing! ${streakInfo.current_streak} day streak achieved!`;
      streakClass = "bg-energy-500 text-white";
    } else {
      // Regular continuation
      message = `Day ${streakInfo.current_streak} of your learning streak!`;
      streakClass = "bg-quantum-100 dark:bg-quantum-800 text-quantum-900 dark:text-quantum-100";
    }
  } else if (streakInfo.is_new_streak) {
    message = "New learning streak started today!";
    streakClass = "bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100";
  }
  
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-4 right-4 z-50 max-w-xs"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <div className={`rounded-lg shadow-lg p-4 ${streakClass}`}>
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <Flame className="h-5 w-5 text-energy-600 dark:text-energy-400" />
                <span className="font-semibold">Streak Update</span>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-6 w-6 rounded-full -mt-1 -mr-1"
                onClick={handleClose}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-1 text-sm">{message}</p>
            {streakInfo.is_continued_streak && streakInfo.current_streak % 5 === 0 && (
              <div className="mt-2 text-xs bg-white/20 p-2 rounded">
                Keep going to beat your record of {streakInfo.longest_streak} days!
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StreakNotification;
