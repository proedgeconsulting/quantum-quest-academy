
import { useState, useEffect } from "react";
import { Course, Module, Lesson } from "@/data/courseData";

export const useLessonNavigation = (course: Course | undefined) => {
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [activeLesson, setActiveLesson] = useState<string | null>(null);
  
  // Set initial active module and lesson
  useEffect(() => {
    if (course && course.modules.length > 0) {
      setActiveModule(course.modules[0].id);
      if (course.modules[0].lessons.length > 0) {
        setActiveLesson(course.modules[0].lessons[0].id);
      }
    }
  }, [course]);
  
  // Get current module and lesson
  const currentModule = course?.modules.find(m => m.id === activeModule);
  const currentLesson = currentModule?.lessons.find(l => l.id === activeLesson);
  
  // Check if we're at the first or last lesson
  const isFirstLesson = 
    activeModule === course?.modules[0].id && 
    activeLesson === course?.modules[0].lessons[0].id;
  
  const isLastLesson = course ? (
    activeModule === course.modules[course.modules.length - 1].id && 
    activeLesson === course.modules[course.modules.length - 1].lessons[
      course.modules[course.modules.length - 1].lessons.length - 1
    ].id
  ) : false;
  
  const handleNextLesson = () => {
    if (!currentModule || !currentLesson) return;
    
    const currentLessonIndex = currentModule.lessons.findIndex(l => l.id === currentLesson.id);
    
    // If there's another lesson in the current module
    if (currentLessonIndex < currentModule.lessons.length - 1) {
      setActiveLesson(currentModule.lessons[currentLessonIndex + 1].id);
    } 
    // If we need to move to the next module
    else {
      const currentModuleIndex = course?.modules.findIndex(m => m.id === currentModule.id) || 0;
      
      // If there's another module
      if (course && currentModuleIndex < course.modules.length - 1) {
        const nextModule = course.modules[currentModuleIndex + 1];
        setActiveModule(nextModule.id);
        if (nextModule.lessons.length > 0) {
          setActiveLesson(nextModule.lessons[0].id);
        }
      }
    }
  };
  
  const handlePrevLesson = () => {
    if (!currentModule || !currentLesson) return;
    
    const currentLessonIndex = currentModule.lessons.findIndex(l => l.id === currentLesson.id);
    
    // If there's a previous lesson in the current module
    if (currentLessonIndex > 0) {
      setActiveLesson(currentModule.lessons[currentLessonIndex - 1].id);
    } 
    // If we need to move to the previous module
    else {
      const currentModuleIndex = course?.modules.findIndex(m => m.id === currentModule.id) || 0;
      
      // If there's a previous module
      if (currentModuleIndex > 0 && course) {
        const prevModule = course.modules[currentModuleIndex - 1];
        setActiveModule(prevModule.id);
        if (prevModule.lessons.length > 0) {
          setActiveLesson(prevModule.lessons[prevModule.lessons.length - 1].id);
        }
      }
    }
  };
  
  return {
    activeModule,
    activeLesson,
    setActiveModule,
    setActiveLesson,
    currentModule,
    currentLesson,
    handleNextLesson,
    handlePrevLesson,
    isFirstLesson,
    isLastLesson
  };
};
