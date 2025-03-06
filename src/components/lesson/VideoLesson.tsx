
import ReactMarkdown from "react-markdown";
import { Lesson } from "@/data/types/courseTypes";

interface VideoLessonProps {
  lesson: Lesson;
}

export const MarkdownContent = ({ content }: { content: string }) => {
  return (
    <div className="prose prose-quantum dark:prose-invert md:prose-lg max-w-none">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export const VideoLesson = ({ lesson }: VideoLessonProps) => {
  return (
    <div className="space-y-8">
      <div className="aspect-video overflow-hidden rounded-lg shadow-sm">
        <iframe
          src={lesson.videoUrl}
          className="w-full h-full"
          title={lesson.title}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      
      <MarkdownContent content={lesson.content} />
    </div>
  );
};

export default VideoLesson;
