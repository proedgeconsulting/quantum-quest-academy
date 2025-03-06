
import { LucideIcon } from "lucide-react";

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  type: "reading" | "interactive" | "video" | "quiz";
  duration: number; // in minutes
  points: number;
  interactiveComponent?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  level: 1 | 2 | 3;
  modules: Module[];
  duration: string;
  icon: "atom" | "brain" | "code" | "graduation" | "circuit" | "wave";
  weeks: number;
  progress?: number; // Making this optional since it might be calculated dynamically
}
