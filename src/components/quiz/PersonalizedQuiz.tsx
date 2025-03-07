
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Loader2, RefreshCcw } from "lucide-react";
import QuizQuestion from "@/components/quiz/QuizQuestion";
import QuizActions from "@/components/quiz/QuizActions";
import QuizResult from "@/components/quiz/QuizResult";
import QuizProgress from "@/components/quiz/QuizProgress";

interface PersonalizedQuizProps {
  courseId: string;
  topicAreas?: string[];
  onComplete?: (score: number) => void;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

const PersonalizedQuiz = ({ courseId, topicAreas = [], onComplete }: PersonalizedQuizProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [weakAreas, setWeakAreas] = useState<string[]>([]);
  const { user } = useAuth();
  const { toast } = useToast();

  const loadQuiz = async () => {
    if (!user) return;
    
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('generate-personalized-quiz', {
        body: {
          userId: user.id,
          courseId,
          topicAreas
        }
      });
      
      if (error) throw error;
      
      if (data.error) {
        toast({
          title: "Unable to generate quiz",
          description: data.error,
          variant: "destructive",
        });
        return;
      }
      
      setQuestions(data.questions || []);
      setWeakAreas(data.weakAreas || []);
      
      // Reset quiz state
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setCorrectAnswers(0);
      setQuizCompleted(false);
      
    } catch (error) {
      console.error("Error generating quiz:", error);
      toast({
        title: "Failed to generate quiz",
        description: "There was an error creating your personalized quiz. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      loadQuiz();
    }
  }, [user, courseId]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback) return;
    setSelectedAnswer(answerIndex);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return;
    
    setShowFeedback(true);
    
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleQuizComplete = () => {
    const finalScore = Math.round((correctAnswers / questions.length) * 100);
    
    if (onComplete) {
      onComplete(finalScore);
    }
  };

  if (isLoading) {
    return (
      <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle>Generating Your Personalized Quiz</CardTitle>
          <CardDescription>Analyzing your learning patterns to create tailored questions...</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-quantum-500" />
        </CardContent>
      </Card>
    );
  }

  if (questions.length === 0) {
    return (
      <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle>Not enough data</CardTitle>
          <CardDescription>
            We need more information about your learning progress to generate a personalized quiz.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4">Please complete more lessons and quizzes first.</p>
        </CardContent>
      </Card>
    );
  }

  if (quizCompleted) {
    const finalScore = Math.round((correctAnswers / questions.length) * 100);
    
    return (
      <QuizResult 
        score={finalScore} 
        onRestart={loadQuiz}
        onContinue={handleQuizComplete}
      />
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Personalized Quiz</CardTitle>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={loadQuiz}
            className="flex items-center gap-1"
          >
            <RefreshCcw size={14} />
            Regenerate
          </Button>
        </div>
        <CardDescription>
          This quiz focuses on your learning needs in: {weakAreas.join(', ')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Progress bar */}
        <QuizProgress 
          currentQuestionIndex={currentQuestionIndex} 
          totalQuestions={questions.length} 
        />
        
        {/* Question and options */}
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
          isLastQuestion={currentQuestionIndex === questions.length - 1}
          onCheckAnswer={handleCheckAnswer}
          onNextQuestion={handleNextQuestion}
        />
      </CardContent>
    </Card>
  );
};

export default PersonalizedQuiz;
