
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Book, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface CourseProgressItem {
  course_id: string;
  course_name: string;
  completed_lessons: number;
  total_lessons: number;
  percent_complete: number;
  level: number;
}

interface CourseProgressSectionProps {
  courseProgress: CourseProgressItem[];
}

const CourseProgressSection: React.FC<CourseProgressSectionProps> = ({ 
  courseProgress 
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GraduationCap className="text-quantum-500" />
          Course Progress
        </CardTitle>
        <CardDescription>Your progress through quantum courses</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {courseProgress.length > 0 ? (
            courseProgress.map((course) => (
              <div key={course.course_id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-quantum-900 dark:text-quantum-100">
                    {course.course_name}
                  </h3>
                  <Badge variant={course.percent_complete === 100 ? "default" : "outline"}>
                    {course.completed_lessons}/{course.total_lessons} lessons
                  </Badge>
                </div>
                <Progress value={course.percent_complete} className="h-2" />
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-quantum-500 dark:text-quantum-400">
              <Book className="h-12 w-12 mx-auto mb-2 opacity-40" />
              <p>You haven't started any courses yet.</p>
              <Button className="mt-4" asChild>
                <a href="/curriculum">Browse Courses</a>
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseProgressSection;
