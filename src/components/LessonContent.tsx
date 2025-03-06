
import LessonContentWrapper from "./lesson/LessonContentWrapper";

interface LessonContentProps {
  lesson?: {
    id: string;
    title: string;
    description: string;
    content: string;
    type: "reading" | "interactive" | "video" | "quiz";
    duration: number;
    points: number;
    interactiveComponent?: string;
    videoUrl?: string;
  };
  onComplete: () => void;
  isCompleted: boolean;
}

// This is now just a thin wrapper around the actual implementation
const LessonContent = ({ lesson, onComplete, isCompleted }: LessonContentProps) => {
  return (
    <LessonContentWrapper
      lesson={lesson}
      onComplete={onComplete}
      isCompleted={isCompleted}
    />
  );
};

export default LessonContent;
