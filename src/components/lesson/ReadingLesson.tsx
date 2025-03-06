
import { Lesson } from "@/data/types/courseTypes";
import { MarkdownContent } from "./VideoLesson";

interface ReadingLessonProps {
  lesson: Lesson;
}

const ReadingLesson = ({ lesson }: ReadingLessonProps) => {
  return <MarkdownContent content={lesson.content} />;
};

export default ReadingLesson;
