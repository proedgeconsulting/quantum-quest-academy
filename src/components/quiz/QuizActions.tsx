
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

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
    <div className="mt-8 flex justify-end gap-3">
      {!showFeedback ? (
        <Button 
          onClick={onCheckAnswer} 
          disabled={selectedAnswer === null}
        >
          Check Answer
        </Button>
      ) : (
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
      )}
    </div>
  );
};

export default QuizActions;
