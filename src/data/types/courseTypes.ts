
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
  videoUrl?: string; // Adding videoUrl as an optional property
  interactiveOptions?: {
    simulatorType?: string;
    datasetOptions?: string[];
    maxCircuitDepth?: number;
    armOptions?: number[];
    distributionTypes?: string[];
    visibleUnits?: number[];
    hiddenUnitOptions?: number[];
    timelineRange?: number[];
    impactCategories?: string[];
    policyOptions?: string[];
    waveColor?: string;
    showParticles?: boolean;
    showUncertaintyBands?: boolean;
    showBarrier?: boolean;
    barrierHeight?: number;
    gameMode?: boolean;
    drawingMode?: boolean;
    colorOptions?: string[];
    creativeMode?: boolean;
    animalTheme?: boolean;
    timeReversalMode?: boolean;
    inventionMode?: boolean;
    maxQubits?: number;
    initialState?: string;
    treasureMode?: boolean;
    superpositionMode?: boolean;
  };
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
