
import ReactMarkdown from "react-markdown";
import { Lesson } from "@/data/types/courseTypes";
import { useState, useEffect, useRef } from "react";
import { AlertCircle } from "lucide-react";

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
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

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
    setIsLoading(true);
    
    // Log the video URL for debugging
    console.log("Current lesson video URL:", lesson.videoUrl);
  }, [lesson.id, lesson.videoUrl]);

  const handleVideoError = () => {
    console.error("Video failed to load:", lesson.videoUrl);
    setVideoError(true);
    setIsLoading(false);
  };

  const handleVideoLoad = () => {
    console.log("Video loaded successfully");
    setIsLoading(false);
  };

  const renderVideo = () => {
    if (!lesson.videoUrl) {
      console.log("No videoUrl provided for lesson:", lesson.id, lesson.title);
      return (
        <div className="flex flex-col items-center justify-center h-64 bg-quantum-100 dark:bg-quantum-800 rounded-lg">
          <AlertCircle className="h-12 w-12 text-amber-500 mb-2" />
          <p className="text-quantum-600 dark:text-quantum-300">No video URL available for this lesson</p>
        </div>
      );
    }
    
    if (videoError) {
      return (
        <div className="flex flex-col items-center justify-center h-64 bg-red-50 dark:bg-red-900/20 rounded-lg">
          <AlertCircle className="h-12 w-12 text-red-500 mb-2" />
          <p className="text-red-600 dark:text-red-300">Video failed to load</p>
          <p className="text-sm text-red-500 dark:text-red-400 mt-1">{lesson.videoUrl}</p>
          <button 
            onClick={() => setVideoError(false)}
            className="mt-4 px-3 py-1 bg-red-100 hover:bg-red-200 dark:bg-red-800 dark:hover:bg-red-700 text-red-600 dark:text-red-300 rounded-md text-sm"
          >
            Try Again
          </button>
        </div>
      );
    }
    
    const videoId = getYoutubeVideoId(lesson.videoUrl);
    console.log("Video URL:", lesson.videoUrl, "Extracted ID:", videoId);
    
    // If we have a YouTube video ID, use the proper embed format
    if (videoId) {
      const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&origin=${window.location.origin}`;
      console.log("Using YouTube embed URL:", embedUrl);
      
      return (
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
              <div className="w-8 h-8 border-4 border-quantum-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <iframe
            ref={iframeRef}
            src={embedUrl}
            className="w-full aspect-video rounded-lg"
            title={lesson.title}
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            onError={handleVideoError}
            onLoad={handleVideoLoad}
          ></iframe>
        </div>
      );
    }
    
    // Fallback for other video types
    return (
      <div className="relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
            <div className="w-8 h-8 border-4 border-quantum-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <iframe
          ref={iframeRef}
          src={lesson.videoUrl}
          className="w-full aspect-video rounded-lg"
          title={lesson.title}
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          onError={handleVideoError}
          onLoad={handleVideoLoad}
        ></iframe>
      </div>
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
