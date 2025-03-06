
import { Course } from "@/data/types/courseTypes";
import { level1Courses } from "@/data/courses/level1Courses";

export const getCourseById = (courseId: string): Course | undefined => {
  return [...level1Courses].find(course => course.id === courseId);
};
