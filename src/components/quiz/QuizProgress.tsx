
import { Progress } from "@/components/ui/progress";

interface QuizProgressProps {
  currentQuestionIndex: number;
  totalQuestions: number;
}

const QuizProgress = ({ currentQuestionIndex, totalQuestions }: QuizProgressProps) => {
  const quizProgress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-quantum-600 dark:text-quantum-400">
        <span>Question {currentQuestionIndex + 1} of {totalQuestions}</span>
        <span>{Math.round(quizProgress)}% Complete</span>
      </div>
      <Progress value={quizProgress} className="h-2" />
    </div>
  );
};

export default QuizProgress;
