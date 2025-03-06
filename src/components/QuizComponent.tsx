
import { useState } from "react";
import QuizProgress from "@/components/quiz/QuizProgress";
import QuizQuestion from "@/components/quiz/QuizQuestion";
import QuizActions from "@/components/quiz/QuizActions";
import { getQuizQuestions, QuizQuestion as QuizQuestionType } from "@/utils/quizHelpers";

interface QuizComponentProps {
  lessonId: string;
  quizContent: string;
  onComplete: (score: number) => void;
}

const QuizComponent = ({ lessonId, quizContent, onComplete }: QuizComponentProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const quizQuestions = getQuizQuestions(lessonId);
  const currentQuestion = quizQuestions[currentQuestionIndex];
  
  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback) return;
    setSelectedAnswer(answerIndex);
  };
  
  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return;
    
    setShowFeedback(true);
    
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };
  
  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
      const score = Math.round((correctAnswers / quizQuestions.length) * 100);
      onComplete(score);
    }
  };
  
  return (
    <div className="space-y-6">
      {/* Quiz introduction */}
      <div className="prose dark:prose-invert max-w-none mb-6">
        <p>{quizContent}</p>
      </div>
      
      {/* Progress bar */}
      <QuizProgress 
        currentQuestionIndex={currentQuestionIndex} 
        totalQuestions={quizQuestions.length} 
      />
      
      {/* Question and answers */}
      <QuizQuestion
        question={currentQuestion.question}
        options={currentQuestion.options}
        selectedAnswer={selectedAnswer}
        correctAnswer={currentQuestion.correctAnswer}
        showFeedback={showFeedback}
        onSelectAnswer={handleAnswerSelect}
      />
      
      {/* Actions */}
      <QuizActions
        showFeedback={showFeedback}
        selectedAnswer={selectedAnswer}
        isLastQuestion={currentQuestionIndex === quizQuestions.length - 1}
        onCheckAnswer={handleCheckAnswer}
        onNextQuestion={handleNextQuestion}
      />
    </div>
  );
};

export default QuizComponent;
