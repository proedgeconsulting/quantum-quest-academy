
import ReactMarkdown from "react-markdown";
import { Lesson } from "@/data/types/courseTypes";
import { useState, useEffect } from "react";

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
  const [videoError, setVideoError] = useState(false);

  // Extract video ID from YouTube URL if it's a YouTube video
  const getYoutubeVideoId = (url: string): string | null => {
    if (!url) return null;
    
    // Handle various YouTube URL formats
    const patterns = [
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/i,
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]+)/i,
      /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]+)/i
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) return match[1];
    }
    
    return null;
  };

  // Reset video error state when lesson changes
  useEffect(() => {
    setVideoError(false);
  }, [lesson.id]);

  const handleVideoError = () => {
    console.error("Video failed to load:", lesson.videoUrl);
    setVideoError(true);
  };

  const renderVideo = () => {
    if (!lesson.videoUrl || videoError) {
      // Log for debugging
      console.log("No videoUrl provided for lesson or video error:", lesson.id, lesson.title);
      return (
        <div className="flex items-center justify-center h-64 bg-quantum-100 dark:bg-quantum-800 rounded-lg">
          <p className="text-quantum-600 dark:text-quantum-300">No video available</p>
        </div>
      );
    }
    
    const videoId = getYoutubeVideoId(lesson.videoUrl);
    console.log("Video URL:", lesson.videoUrl, "Extracted ID:", videoId);
    
    // If we have a YouTube video ID, use the proper embed format with additional parameters for better compatibility
    if (videoId) {
      return (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&origin=${window.location.origin}`}
          className="w-full aspect-video rounded-lg"
          title={lesson.title}
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          onError={handleVideoError}
        ></iframe>
      );
    }
    
    // Fallback to the original URL if not a YouTube video or couldn't extract ID
    return (
      <iframe
        src={lesson.videoUrl}
        className="w-full aspect-video rounded-lg"
        title={lesson.title}
        frameBorder="0"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        onError={handleVideoError}
      ></iframe>
    );
  };

  return (
    <div className="space-y-8">
      <div className="overflow-hidden rounded-lg shadow-sm">
        {renderVideo()}
      </div>
      
      <MarkdownContent content={lesson.content} />
    </div>
  );
};

export default VideoLesson;
