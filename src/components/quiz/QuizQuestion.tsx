
import { Card } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface QuizQuestionProps {
  question: string;
  options: string[];
  selectedAnswer: number | null;
  correctAnswer: number;
  showFeedback: boolean;
  onSelectAnswer: (index: number) => void;
}

const QuizQuestion = ({
  question,
  options,
  selectedAnswer,
  correctAnswer,
  showFeedback,
  onSelectAnswer,
}: QuizQuestionProps) => {
  return (
    <motion.div 
      className="mt-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.h3 
        className="text-xl font-semibold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        {question}
      </motion.h3>
      
      <div className="space-y-3">
        <AnimatePresence>
          {options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + (index * 0.08), duration: 0.3 }}
            >
              <Card
                className={`p-4 cursor-pointer transition-all border-2 ${
                  selectedAnswer === index
                    ? "border-quantum-500"
                    : "border-transparent hover:border-quantum-200 dark:hover:border-quantum-800"
                } ${
                  showFeedback && index === correctAnswer
                    ? "bg-green-50 dark:bg-green-950/30 border-green-500"
                    : ""
                } ${
                  showFeedback && selectedAnswer === index && index !== correctAnswer
                    ? "bg-red-50 dark:bg-red-950/30 border-red-500"
                    : ""
                }`}
                onClick={() => onSelectAnswer(index)}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  
                  {showFeedback && index === correctAnswer && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <CheckCircle className="text-green-500 h-5 w-5" />
                    </motion.div>
                  )}
                  
                  {showFeedback && selectedAnswer === index && index !== correctAnswer && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <XCircle className="text-red-500 h-5 w-5" />
                    </motion.div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default QuizQuestion;
