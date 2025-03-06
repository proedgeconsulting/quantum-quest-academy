
import { Course } from "@/data/types/courseTypes";
import { level1Courses } from "@/data/courses/level1";
import { level2Courses } from "@/data/courses/level2/index";
import { level3Courses } from "@/data/courses/level3/index";

export const getCourseById = (courseId: string): Course | undefined => {
  const allCourses = [...level1Courses, ...level2Courses, ...level3Courses];
  const course = allCourses.find(course => course.id === courseId);
  return course;
};
