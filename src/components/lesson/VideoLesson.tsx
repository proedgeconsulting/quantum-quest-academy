
import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import { Lesson } from "@/data/types/courseTypes";

// Function to get default video URL based on lesson ID
const getDefaultVideoUrl = (lessonId: string) => {
  const videoMap: Record<string, string> = {
    // Level 1 videos - Quantum Basics
    "1.1.1.2": "https://www.youtube.com/embed/HpNMT6x-Hls", // Building Blocks of Reality
    "1.1.2.2": "https://www.youtube.com/embed/FjHJ7FjgL34", // Light in Action
    "1.1.3.2": "https://www.youtube.com/embed/TQKELOE9eY4", // Uncertainty in Everyday Life
    "1.1.4.2": "https://www.youtube.com/embed/UjaAxUO6-Uw", // Schrödinger's Cat
    "1.1.5.2": "https://www.youtube.com/embed/cTodS8hkSDg", // Tunneling in the Real World
    "1.1.6.2": "https://www.youtube.com/embed/7SEmv2f8w5I", // Medical Quantum Technologies

    // Level 1 - Quantum Playground
    "1.2.1.2": "https://www.youtube.com/embed/J4Wb_2KPB6U", // Quantum Computing Basics
    "1.2.2.2": "https://www.youtube.com/embed/2iDjgy0kZ5U", // Quantum Gate Visualization
    "1.2.3.2": "https://www.youtube.com/embed/YQQn0h8CmQo", // Quantum Coin Flipping
    "1.2.4.2": "https://www.youtube.com/embed/Jv5LvfUDQGs", // Quantum Dice Rolling
    "1.2.5.2": "https://www.youtube.com/embed/_a5UQo8R9Vw", // Quantum Random Number Generation

    // Level 1 - Quantum Coding Lite
    "1.3.1.2": "https://www.youtube.com/embed/F_Riqjdh2oM", // Quantum Programming Introduction
    "1.3.2.2": "https://www.youtube.com/embed/S4xf9TQkvkY", // Quantum Pseudocode
    "1.3.3.2": "https://www.youtube.com/embed/ZoqtEBzE1-0", // Quantum Algorithms Basics
    "1.3.4.2": "https://www.youtube.com/embed/JGq0CQCShQE", // Simple Quantum Circuit Design
    "1.3.5.2": "https://www.youtube.com/embed/bOxx-hB0Iao", // Quantum Measurement
    
    // Level 2 - Quantum Circuits
    "2.1.1.2": "https://www.youtube.com/embed/F_Riqjdh2oM", // Quantum Gates: The Building Blocks
    "2.1.2.2": "https://www.youtube.com/embed/F8U1d2Hqark", // The Deutsch-Jozsa Algorithm
    "2.1.3.2": "https://www.youtube.com/embed/0Zzw6XGwZOE", // Multi-Qubit Gates
    "2.1.4.2": "https://www.youtube.com/embed/q7FS0YTRzKI", // Visualizing Quantum States
    "2.1.5.2": "https://www.youtube.com/embed/QHZ_XLxERzA", // Error Mitigation Techniques
    "2.1.6.2": "https://www.youtube.com/embed/OqUGBjp2aKs", // Circuit Transformation Techniques
    
    // Level 2 - Quantum Entanglement
    "2.2.1.2": "https://www.youtube.com/embed/zcqZHYo7ONs", // Entanglement Explained
    "2.2.2.2": "https://www.youtube.com/embed/1PnK2NCR9RY", // Bell States and Measurements
    "2.2.3.2": "https://www.youtube.com/embed/ZuvK-od647c", // Quantum Teleportation
    "2.2.4.2": "https://www.youtube.com/embed/dAaHHGHuy1c", // Superdense Coding
    "2.2.5.2": "https://www.youtube.com/embed/BknkZjB0FVk", // Applications of Entanglement
    
    // Level 2 - Quantum Error Correction
    "2.3.1.2": "https://www.youtube.com/embed/CS2ds9pJ8yA", // Classical Error Correction
    "2.3.2.2": "https://www.youtube.com/embed/ltJ1jXQeDl8", // Quantum Error Types
    "2.3.3.2": "https://www.youtube.com/embed/qOh5wHQBWak", // Error Correction Codes
    "2.3.4.2": "https://www.youtube.com/embed/IgoGReFG8Vk", // Surface Codes
    "2.3.5.2": "https://www.youtube.com/embed/CzoS7sL_ezM", // Fault Tolerance
    
    // Level 3 - Quantum Machine Learning
    "3.1.1.2": "https://www.youtube.com/embed/OKbcJCUx6xA", // Classical vs Quantum ML
    "3.1.2.2": "https://www.youtube.com/embed/6l5ekzCiPmk", // Quantum Neural Networks
    "3.1.3.2": "https://www.youtube.com/embed/OkoZXBMPcXU", // Quantum Clustering
    "3.1.4.2": "https://www.youtube.com/embed/Lbndu5EIWvI", // Quantum SVM
    "3.1.5.2": "https://www.youtube.com/embed/AAO4oq2M_48", // Quantum Generative Models
    
    // Level 3 - Real World Quantum AI
    "3.2.1.2": "https://www.youtube.com/embed/TVkdQhNdzHU", // Quantum Neural Networks
    "3.2.2.2": "https://www.youtube.com/embed/p_6n6q2jGjk", // Quantum Feature Spaces
    "3.2.3.2": "https://www.youtube.com/embed/9XQFaIrtJ_k", // Drug Discovery Applications
    "3.2.4.2": "https://www.youtube.com/embed/xSWmw--L92E", // Finance Applications
    "3.2.5.2": "https://www.youtube.com/embed/sICLRSSnITY", // Energy Applications
    "3.2.6.2": "https://www.youtube.com/embed/mLWV0bLaZLQ", // Industry Integration
    
    // Level 3 - Quantum Future
    "3.3.1.2": "https://www.youtube.com/embed/vqKkLT1zONc", // Quantum Internet
    "3.3.2.2": "https://www.youtube.com/embed/2w7Y5H85xX8", // Quantum Policy and Governance
    "3.3.3.2": "https://www.youtube.com/embed/RZfYLNDKu0o", // Quantum IP Strategy
    "3.3.4.2": "https://www.youtube.com/embed/kEJBxotcxRw", // Quantum Security
    "3.3.5.2": "https://www.youtube.com/embed/qY6lfxgu5mU", // Future Applications
  };
  
  // If no specific video is mapped, return a relevant quantum video based on lesson id prefix
  const courseLevel = lessonId.split('.')[0];
  
  // Default videos based on course level if specific lesson ID not found
  const defaultVideos = {
    "1": "https://www.youtube.com/embed/0gh3JrdL-Zg", // Quantum Computing for Beginners
    "2": "https://www.youtube.com/embed/F_Riqjdh2oM", // Intermediate Quantum Computing
    "3": "https://www.youtube.com/embed/OKbcJCUx6xA"  // Advanced Quantum Applications
  };
  
  return videoMap[lessonId] || defaultVideos[courseLevel as keyof typeof defaultVideos] || "https://www.youtube.com/embed/0gh3JrdL-Zg";
};

interface VideoLessonProps {
  lesson: Lesson;
}

const VideoLesson = ({ lesson }: VideoLessonProps) => {
  const videoUrl = useMemo(() => lesson.videoUrl || getDefaultVideoUrl(lesson.id), [lesson.id, lesson.videoUrl]);
  
  return (
    <>
      <div className="aspect-video bg-black rounded-lg overflow-hidden mb-6">
        <iframe 
          src={videoUrl}
          title={lesson.title}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <MarkdownContent content={lesson.content} />
    </>
  );
};

// Helper component for rendering markdown content
const MarkdownContent = ({ content }: { content: string }) => {
  const hasIframe = content.includes('<iframe');
  
  if (hasIframe) {
    // Split content by iframe tags and render each part
    const parts = content.split(/(<iframe.*?<\/iframe>)/s);
    
    return (
      <div className="prose dark:prose-invert max-w-none">
        {parts.map((part, index) => {
          if (part.startsWith('<iframe')) {
            // Extract iframe src and attributes
            return (
              <div key={`iframe-${index}`} className="my-6 rounded-lg overflow-hidden border border-quantum-200 dark:border-quantum-700">
                <div dangerouslySetInnerHTML={{ __html: part }} />
              </div>
            );
          } else {
            // Render markdown for non-iframe parts
            return <div key={`markdown-${index}`}>
              <ReactMarkdown>{part}</ReactMarkdown>
            </div>;
          }
        })}
      </div>
    );
  } else {
    // Regular markdown rendering
    return (
      <div className="prose dark:prose-invert max-w-none">
        <div>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    );
  }
};

export { VideoLesson, MarkdownContent, getDefaultVideoUrl };
