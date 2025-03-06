
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface QuizActionsProps {
  showFeedback: boolean;
  selectedAnswer: number | null;
  isLastQuestion: boolean;
  onCheckAnswer: () => void;
  onNextQuestion: () => void;
}

const QuizActions = ({
  showFeedback,
  selectedAnswer,
  isLastQuestion,
  onCheckAnswer,
  onNextQuestion,
}: QuizActionsProps) => {
  return (
    <motion.div 
      className="mt-8 flex justify-end gap-3"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.3 }}
    >
      <AnimatePresence mode="wait">
        {!showFeedback ? (
          <motion.div
            key="check"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <Button 
              onClick={onCheckAnswer} 
              disabled={selectedAnswer === null}
            >
              Check Answer
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="next"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2 }}
          >
            <Button onClick={onNextQuestion}>
              {!isLastQuestion ? (
                <>
                  Next Question
                  <ChevronRight className="ml-1 h-4 w-4" />
                </>
              ) : (
                "Complete Quiz"
              )}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default QuizActions;
