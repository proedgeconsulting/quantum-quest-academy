
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseGrid from "./CourseGrid";
import { level1Courses, level2Courses, level3Courses, allCourses } from "@/data/coursesData";

const CourseTabs = () => {
  return (
    <Tabs defaultValue="all" className="w-full">
      <div className="flex justify-center mb-10">
        <TabsList className="grid grid-cols-4 h-12">
          <TabsTrigger value="all" className="text-sm md:text-base">All Courses</TabsTrigger>
          <TabsTrigger value="level1" className="text-sm md:text-base">Level 1</TabsTrigger>
          <TabsTrigger value="level2" className="text-sm md:text-base">Level 2</TabsTrigger>
          <TabsTrigger value="level3" className="text-sm md:text-base">Level 3</TabsTrigger>
        </TabsList>
      </div>
      
      <TabsContent value="all">
        <CourseGrid courses={allCourses} />
      </TabsContent>
      
      <TabsContent value="level1">
        <CourseGrid courses={level1Courses} />
      </TabsContent>
      
      <TabsContent value="level2">
        <CourseGrid courses={level2Courses} />
      </TabsContent>
      
      <TabsContent value="level3">
        <CourseGrid courses={level3Courses} />
      </TabsContent>
    </Tabs>
  );
};

export default CourseTabs;
