
import { Card } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

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
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">{question}</h3>
      
      <div className="space-y-3">
        {options.map((option, index) => (
          <Card
            key={index}
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
                <CheckCircle className="text-green-500 h-5 w-5" />
              )}
              
              {showFeedback && selectedAnswer === index && index !== correctAnswer && (
                <XCircle className="text-red-500 h-5 w-5" />
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
