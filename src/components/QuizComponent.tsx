
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ChevronRight, XCircle, HelpCircle, Trophy } from "lucide-react";
import { circuitsQuizQuestions, algorithmsQuizQuestions } from "@/data/quizzes/level2Quizzes";
import { quantumMLQuizQuestions, quantumAIApplicationsQuizQuestions, quantumFutureQuizQuestions } from "@/data/quizzes/level3Quizzes";

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
  
  // Determine which quiz questions to use based on the lesson ID
  const getQuizQuestions = () => {
    // Level 2 quizzes
    if (lessonId.startsWith("2.1.1")) {
      return circuitsQuizQuestions;
    } else if (lessonId.startsWith("2.1.2")) {
      return algorithmsQuizQuestions;
    } 
    // Level 3 quizzes
    else if (lessonId.startsWith("3.1.1")) {
      return quantumMLQuizQuestions;
    } else if (lessonId.startsWith("3.2.1")) {
      return quantumAIApplicationsQuizQuestions;
    } else if (lessonId.startsWith("3.3.1")) {
      return quantumFutureQuizQuestions;
    } else {
      // Default to the original quiz questions for level 1
      return [
        {
          id: "q1",
          question: "What does quantum physics primarily study?",
          options: [
            "The behavior of galaxies",
            "The behavior of matter and energy at the atomic and subatomic levels",
            "The behavior of living organisms",
            "The behavior of planets and stars"
          ],
          correctAnswer: 1
        },
        {
          id: "q2",
          question: "What are the three main subatomic particles that make up an atom?",
          options: [
            "Neutrons, electrons, and molecules",
            "Protons, electrons, and quarks",
            "Protons, neutrons, and electrons",
            "Photons, electrons, and positrons"
          ],
          correctAnswer: 2
        },
        {
          id: "q3",
          question: "Light demonstrates both wave-like and particle-like properties. This concept is known as:",
          options: [
            "Wave-particle duality",
            "Quantum entanglement",
            "Heisenberg's uncertainty principle",
            "Quantum superposition"
          ],
          correctAnswer: 0
        },
        {
          id: "q4",
          question: "What is the name of the particle of light?",
          options: [
            "Electron",
            "Photon",
            "Neutron",
            "Quark"
          ],
          correctAnswer: 1
        },
        {
          id: "q5",
          question: "Which phenomenon helped establish the quantum nature of light?",
          options: [
            "Quantum tunneling",
            "Brownian motion",
            "The photoelectric effect",
            "Nuclear fusion"
          ],
          correctAnswer: 2
        }
      ];
    }
  };
  
  const quizQuestions = getQuizQuestions();
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
  
  const quizProgress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
  
  return (
    <div className="space-y-6">
      {/* Quiz introduction */}
      <div className="prose dark:prose-invert max-w-none mb-6">
        <p>{quizContent}</p>
      </div>
      
      {/* Progress bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-quantum-600 dark:text-quantum-400">
          <span>Question {currentQuestionIndex + 1} of {quizQuestions.length}</span>
          <span>{Math.round(quizProgress)}% Complete</span>
        </div>
        <Progress value={quizProgress} className="h-2" />
      </div>
      
      {/* Question */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">{currentQuestion.question}</h3>
        
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <Card
              key={index}
              className={`p-4 cursor-pointer transition-all border-2 ${
                selectedAnswer === index
                  ? "border-quantum-500"
                  : "border-transparent hover:border-quantum-200 dark:hover:border-quantum-800"
              } ${
                showFeedback && index === currentQuestion.correctAnswer
                  ? "bg-green-50 dark:bg-green-950/30 border-green-500"
                  : ""
              } ${
                showFeedback && selectedAnswer === index && index !== currentQuestion.correctAnswer
                  ? "bg-red-50 dark:bg-red-950/30 border-red-500"
                  : ""
              }`}
              onClick={() => handleAnswerSelect(index)}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                
                {showFeedback && index === currentQuestion.correctAnswer && (
                  <CheckCircle className="text-green-500 h-5 w-5" />
                )}
                
                {showFeedback && selectedAnswer === index && index !== currentQuestion.correctAnswer && (
                  <XCircle className="text-red-500 h-5 w-5" />
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Actions */}
      <div className="mt-8 flex justify-end gap-3">
        {!showFeedback ? (
          <Button 
            onClick={handleCheckAnswer} 
            disabled={selectedAnswer === null}
          >
            Check Answer
          </Button>
        ) : (
          <Button onClick={handleNextQuestion}>
            {currentQuestionIndex < quizQuestions.length - 1 ? (
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
    </div>
  );
};

export default QuizComponent;
