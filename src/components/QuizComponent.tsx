
import { useState } from "react";
import QuizProgress from "@/components/quiz/QuizProgress";
import QuizQuestion from "@/components/quiz/QuizQuestion";
import QuizActions from "@/components/quiz/QuizActions";
import QuizResult from "@/components/quiz/QuizResult";
import { getQuizQuestions, QuizQuestion as QuizQuestionType } from "@/utils/quizHelpers";
import { AnimatePresence, motion } from "framer-motion";

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
  const finalScore = Math.round((correctAnswers / quizQuestions.length) * 100);
  
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
    }
  };
  
  const handleQuizComplete = () => {
    onComplete(finalScore);
  };
  
  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setCorrectAnswers(0);
    setQuizCompleted(false);
  };
  
  if (quizCompleted) {
    return (
      <QuizResult 
        score={finalScore} 
        onRestart={handleRestartQuiz}
        onContinue={handleQuizComplete}
      />
    );
  }
  
  return (
    <motion.div 
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Quiz introduction */}
      <motion.div 
        className="prose dark:prose-invert max-w-none mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <p>{quizContent}</p>
      </motion.div>
      
      {/* Progress bar */}
      <QuizProgress 
        currentQuestionIndex={currentQuestionIndex} 
        totalQuestions={quizQuestions.length} 
      />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          {/* Question and answers */}
          <QuizQuestion
            question={currentQuestion.question}
            options={currentQuestion.options}
            selectedAnswer={selectedAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            showFeedback={showFeedback}
            onSelectAnswer={handleAnswerSelect}
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Actions */}
      <QuizActions
        showFeedback={showFeedback}
        selectedAnswer={selectedAnswer}
        isLastQuestion={currentQuestionIndex === quizQuestions.length - 1}
        onCheckAnswer={handleCheckAnswer}
        onNextQuestion={handleNextQuestion}
      />
    </motion.div>
  );
};

export default QuizComponent;
