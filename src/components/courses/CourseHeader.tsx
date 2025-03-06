
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Course } from "@/data/types/courseTypes";

interface CourseHeaderProps {
  course: Course;
  courseProgress: number;
}

const CourseHeader = ({ course, courseProgress }: CourseHeaderProps) => {
  const navigate = useNavigate();
  
  return (
    <section className="bg-quantum-100 dark:bg-quantum-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <Button 
              variant="ghost" 
              className="mb-2" 
              onClick={() => navigate("/courses")}
            >
              <ChevronLeft className="mr-1" size={16} />
              Back to Courses
            </Button>
            <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
            <p className="text-muted-foreground mb-4">{course.description}</p>
            
            <div className="flex items-center gap-4 text-sm">
              <Badge variant="outline" className="bg-quantum-100 dark:bg-quantum-800 border-none">
                Level {course.level}
              </Badge>
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>{course.duration}</span>
              </div>
            </div>
          </div>
          
          <Card className="w-full md:w-64 bg-white/80 dark:bg-quantum-800/80 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Your Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Overall Completion</span>
                  <span>{courseProgress}%</span>
                </div>
                <Progress value={courseProgress} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CourseHeader;
