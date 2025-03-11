
import { Course } from "@/data/types/courseTypes";
import { module1 } from "./module1";
import { module2 } from "./module2";
import { module3 } from "./module3";
import { module4 } from "./module4";

// Level 1 Course: Quantum Playground
export const quantumPlaygroundCourse: Course = {
  id: "1.2",
  title: "Quantum Playground",
  description: "Explore quantum concepts through fun games and activities.",
  level: 1,
  duration: "4 weeks",
  icon: "wave",
  weeks: 4,
  modules: [
    module1,
    module2,
    module3,
    module4
  ]
};

export default quantumPlaygroundCourse;
