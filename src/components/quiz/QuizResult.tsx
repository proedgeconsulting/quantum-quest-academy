
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Award, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface QuizResultProps {
  score: number;
  onRestart?: () => void;
  onContinue: () => void;
}

const QuizResult = ({ score, onRestart, onContinue }: QuizResultProps) => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  // Determine feedback based on score
  const getFeedback = () => {
    if (score >= 90) return "Outstanding! You've mastered this material!";
    if (score >= 75) return "Great job! You have a solid understanding!";
    if (score >= 60) return "Good work! You're making good progress!";
    return "Keep practicing! You're on your way to understanding this topic.";
  };
  
  // Select icon based on score
  const ScoreIcon = () => {
    if (score >= 90) return <Trophy className="text-yellow-500 h-10 w-10" />;
    if (score >= 75) return <Award className="text-blue-500 h-10 w-10" />;
    if (score >= 60) return <Sparkles className="text-quantum-500 h-10 w-10" />;
    return <Star className="text-energy-500 h-10 w-10" />;
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8"
    >
      <Card className="p-8 text-center">
        <div className="mb-6 flex justify-center">
          <div className={cn(
            "rounded-full p-6 transition-all duration-700",
            animate ? "scale-100 opacity-100" : "scale-50 opacity-0",
            score >= 90 ? "bg-yellow-100 dark:bg-yellow-900/30" :
            score >= 75 ? "bg-blue-100 dark:bg-blue-900/30" :
            score >= 60 ? "bg-quantum-100 dark:bg-quantum-900/30" :
            "bg-energy-100 dark:bg-energy-900/30"
          )}>
            <ScoreIcon />
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-2">Quiz Completed!</h3>
          
          <div className="my-6">
            <span className="text-4xl font-bold text-quantum-600 dark:text-quantum-400">
              {score}%
            </span>
            <p className="text-muted-foreground mt-1">Your Score</p>
          </div>
          
          <p className="mb-6 text-lg">{getFeedback()}</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            {onRestart && (
              <Button variant="outline" onClick={onRestart}>
                Try Again
              </Button>
            )}
            <Button onClick={onContinue}>
              Continue
            </Button>
          </div>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default QuizResult;
