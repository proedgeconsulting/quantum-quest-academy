
import { Course } from "@/data/types/courseTypes";
import { module1 } from "./module1";
import { module2 } from "./module2";
import { module3 } from "./module3";
import { module4 } from "./module4";
import { module5 } from "./module5";
import { module6 } from "./module6";
import { module7 } from "./module7";
import { module8 } from "./module8";
import { module9 } from "./module9";
import { module10 } from "./module10";
import { module11 } from "./module11";
import { module12 } from "./module12";

// Level 3 Course: Quantum Machine Learning
export const quantumMachineLearningCourse: Course = {
  id: "3.1",
  title: "Quantum Machine Learning",
  description: "Learn to combine quantum computing with machine learning techniques.",
  level: 3,
  duration: "12 weeks",
  icon: "brain",
  weeks: 12,
  modules: [
    module1,
    module2,
    module3,
    module4,
    module5,
    module6,
    module7,
    module8,
    module9,
    module10,
    module11,
    module12
  ]
};

export default quantumMachineLearningCourse;
