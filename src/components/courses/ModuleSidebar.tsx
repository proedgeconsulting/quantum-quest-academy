
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Course, Module, Lesson } from "@/data/courseData";

interface ModuleSidebarProps {
  course: Course;
  activeModule: string;
  activeLesson: string;
  userProgress: Record<string, any>;
  setActiveModule: (moduleId: string) => void;
  setActiveLesson: (lessonId: string) => void;
  calculateModuleProgress: (moduleId: string) => number;
}

const ModuleSidebar = ({ 
  course, 
  activeModule, 
  activeLesson, 
  userProgress, 
  setActiveModule, 
  setActiveLesson,
  calculateModuleProgress 
}: ModuleSidebarProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Content</CardTitle>
        <CardDescription>
          {course.modules.length} modules • {
            course.modules.reduce((total, module) => total + module.lessons.length, 0)
          } lessons
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-6">
        <div className="space-y-6">
          {course.modules.map((module, index) => (
            <div key={module.id} className="space-y-2">
              <div 
                className="flex justify-between items-center cursor-pointer" 
                onClick={() => setActiveModule(module.id)}
              >
                <h3 className="font-medium">
                  {index + 1}. {module.title}
                </h3>
                <Badge variant="outline" className="text-xs">
                  {calculateModuleProgress(module.id)}%
                </Badge>
              </div>
              
              {activeModule === module.id && (
                <motion.div 
                  className="pl-4 border-l-2 border-quantum-200 dark:border-quantum-700 ml-2 mt-3 space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {module.lessons.map((lesson, lessonIndex) => (
                    <div 
                      key={lesson.id}
                      className={`flex items-center gap-2 py-1 px-2 rounded-md cursor-pointer ${
                        activeLesson === lesson.id 
                          ? 'bg-quantum-100 dark:bg-quantum-800' 
                          : 'hover:bg-quantum-50 dark:hover:bg-quantum-900'
                      }`}
                      onClick={() => setActiveLesson(lesson.id)}
                    >
                      {userProgress[lesson.id]?.completed ? (
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-quantum-300 dark:border-quantum-600 flex-shrink-0" />
                      )}
                      <span className="text-sm truncate">
                        {lessonIndex + 1}. {lesson.title}
                      </span>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ModuleSidebar;
