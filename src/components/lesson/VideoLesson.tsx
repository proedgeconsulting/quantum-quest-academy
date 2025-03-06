
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
  // Extract video ID from YouTube URL if it's a YouTube video
  const getYoutubeVideoId = (url: string): string | null => {
    // Handle both embed links and watch links
    const embedRegex = /embed\/([a-zA-Z0-9_-]+)/;
    const watchRegex = /v=([a-zA-Z0-9_-]+)/;
    
    let match = url.match(embedRegex);
    if (match) return match[1];
    
    match = url.match(watchRegex);
    if (match) return match[1];
    
    return null;
  };

  const renderVideo = () => {
    if (!lesson.videoUrl) return null;
    
    const videoId = getYoutubeVideoId(lesson.videoUrl);
    // If we have a YouTube video ID, use the proper embed format
    if (videoId) {
      return (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          className="w-full h-full"
          title={lesson.title}
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      );
    }
    
    // Fallback to the original URL if not a YouTube video or couldn't extract ID
    return (
      <iframe
        src={lesson.videoUrl}
        className="w-full h-full"
        title={lesson.title}
        frameBorder="0"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    );
  };

  return (
    <div className="space-y-8">
      <div className="aspect-video overflow-hidden rounded-lg shadow-sm">
        {renderVideo()}
      </div>
      
      <MarkdownContent content={lesson.content} />
    </div>
  );
};

export default VideoLesson;
