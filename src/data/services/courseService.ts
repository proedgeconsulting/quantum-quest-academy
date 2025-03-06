
import { Course } from "@/data/types/courseTypes";
import { level1Courses } from "@/data/courses/level1Courses";
import { level2Courses } from "@/data/courses/level2Courses";
import { level3Courses } from "@/data/coursesData";

export const getCourseById = (courseId: string): Course | undefined => {
  return [...level1Courses, ...level2Courses, ...level3Courses].find(course => course.id === courseId);
};
