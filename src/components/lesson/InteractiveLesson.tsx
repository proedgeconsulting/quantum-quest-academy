
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Lesson } from "@/data/types/courseTypes";
import { MarkdownContent } from "./VideoLesson";

interface InteractiveLessonProps {
  lesson: Lesson;
  onComplete: () => void;
}

const InteractiveLesson = ({ lesson, onComplete }: InteractiveLessonProps) => {
  return (
    <div className="interactive-lesson">
      <MarkdownContent content={lesson.content} />
      
      <div className="mt-8">
        <div className="interactive-component-wrapper bg-gray-50 dark:bg-gray-900 p-4 rounded-xl">
          <div className="relative w-full aspect-video mb-4">
            <iframe
              src="https://www.youtube.com/embed/2vk1Z1AMUR8"
              className="w-full h-full rounded-lg"
              title={lesson.title}
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
          <div className="mt-6 flex justify-center">
            <Button onClick={onComplete} className="gap-2">
              <CheckCircle size={16} />
              Complete {lesson.title}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveLesson;
