
import { Course } from "@/data/types/courseTypes";
import { module1 } from "./module1";
import { module2 } from "./module2";
import { module3 } from "./module3";
import { module4 } from "./module4";
import { module5 } from "./module5";
import { module6 } from "./module6";

// Level 1 Course: Quantum Basics
export const quantumBasicsCourse: Course = {
  id: "1.1",
  title: "Quantum Basics",
  description: "Discover the fascinating world of atoms, light, and energy.",
  level: 1,
  duration: "4 weeks",
  icon: "atom",
  weeks: 8,
  modules: [
    module1,
    module2,
    module3,
    module4,
    module5,
    module6
  ]
};
