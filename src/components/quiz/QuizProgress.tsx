
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

interface QuizProgressProps {
  currentQuestionIndex: number;
  totalQuestions: number;
}

const QuizProgress = ({ currentQuestionIndex, totalQuestions }: QuizProgressProps) => {
  const quizProgress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  
  return (
    <motion.div 
      className="space-y-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between text-sm text-quantum-600 dark:text-quantum-400">
        <motion.span
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </motion.span>
        <motion.span
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          {Math.round(quizProgress)}% Complete
        </motion.span>
      </div>
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Progress value={quizProgress} className="h-2" />
      </motion.div>
    </motion.div>
  );
};

export default QuizProgress;
