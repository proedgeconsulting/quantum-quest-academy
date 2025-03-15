
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Clock, Star, ChevronLeft, ChevronRight, Trophy } from "lucide-react";
import { Lesson } from "@/data/courseData";
import LessonContent from "@/components/LessonContent";
import QuizComponent from "@/components/QuizComponent";

interface LessonContainerProps {
  currentLesson: Lesson | undefined;
  userProgress: Record<string, any>;
  handleLessonComplete: (lessonId: string, completed: boolean, score?: number) => Promise<void>;
  handleNextLesson: () => void;
  handlePrevLesson: () => void;
  isFirstLesson: boolean;
  isLastLesson: boolean;
}

const LessonContainer = ({ 
  currentLesson, 
  userProgress, 
  handleLessonComplete,
  handleNextLesson,
  handlePrevLesson,
  isFirstLesson,
  isLastLesson
}: LessonContainerProps) => {
  if (!currentLesson) return null;
  
  return (
    <>
      <Card className="mb-4">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle>{currentLesson.title}</CardTitle>
            <CardDescription className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{currentLesson.duration} min</span>
              </div>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center gap-1">
                <Star size={14} className="text-amber-500" />
                <span>{currentLesson.points} points</span>
              </div>
            </CardDescription>
          </div>
          
          {currentLesson.type === "interactive" && (
            <Badge variant="secondary" className="bg-quantum-500/10 text-quantum-500">
              Interactive
            </Badge>
          )}
          
          {currentLesson.type === "video" && (
            <Badge variant="secondary" className="bg-red-500/10 text-red-500">
              Video
            </Badge>
          )}
          
          {currentLesson.type === "quiz" && (
            <Badge variant="secondary" className="bg-amber-500/10 text-amber-500">
              Quiz
            </Badge>
          )}
          
          {currentLesson.type === "reading" && (
            <Badge variant="secondary" className="bg-blue-500/10 text-blue-500">
              Reading
            </Badge>
          )}
        </CardHeader>
        
        <CardContent className="pt-4">
          {currentLesson.type === "quiz" ? (
            <QuizComponent 
              lessonId={currentLesson.id}
              quizContent={currentLesson.content}
              onComplete={(score) => {
                handleLessonComplete(currentLesson.id, true, score);
                handleNextLesson();
              }}
            />
          ) : (
            <LessonContent 
              lesson={currentLesson} 
              onComplete={() => handleLessonComplete(currentLesson.id, true)}
              isCompleted={!!userProgress[currentLesson.id]?.completed}
              isLastLesson={isLastLesson}
            />
          )}
        </CardContent>
      </Card>
      
      <div className="flex justify-between mt-6">
        <Button 
          variant="outline" 
          onClick={handlePrevLesson}
          disabled={isFirstLesson}
        >
          <ChevronLeft className="mr-1" size={16} />
          Previous Lesson
        </Button>
        
        {isLastLesson && userProgress[currentLesson.id]?.completed ? (
          <Button 
            variant="default"
            className="bg-green-600 hover:bg-green-700"
          >
            <Trophy className="mr-2" size={16} />
            Module Completed
          </Button>
        ) : (
          <Button 
            onClick={handleNextLesson}
            disabled={isLastLesson}
          >
            Next Lesson
            <ChevronRight className="ml-1" size={16} />
          </Button>
        )}
      </div>
    </>
  );
};

export default LessonContainer;
