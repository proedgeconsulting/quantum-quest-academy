
import { circuitsQuizQuestions, algorithmsQuizQuestions } from "@/data/quizzes/level2Quizzes";
import { quantumMLQuizQuestions, quantumAIApplicationsQuizQuestions, quantumFutureQuizQuestions } from "@/data/quizzes/level3Quizzes";

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const getQuizQuestions = (lessonId: string): QuizQuestion[] => {
  // Level 2 quizzes
  if (lessonId.startsWith("2.1.1")) {
    return circuitsQuizQuestions;
  } else if (lessonId.startsWith("2.1.2")) {
    return algorithmsQuizQuestions;
  } 
  // Level 3 quizzes
  else if (lessonId.startsWith("3.1.1")) {
    return quantumMLQuizQuestions;
  } else if (lessonId.startsWith("3.2.1")) {
    return quantumAIApplicationsQuizQuestions;
  } else if (lessonId.startsWith("3.3.1")) {
    return quantumFutureQuizQuestions;
  } else {
    // Default to the original quiz questions for level 1
    return [
      {
        id: "q1",
        question: "What does quantum physics primarily study?",
        options: [
          "The behavior of galaxies",
          "The behavior of matter and energy at the atomic and subatomic levels",
          "The behavior of living organisms",
          "The behavior of planets and stars"
        ],
        correctAnswer: 1
      },
      {
        id: "q2",
        question: "What are the three main subatomic particles that make up an atom?",
        options: [
          "Neutrons, electrons, and molecules",
          "Protons, electrons, and quarks",
          "Protons, neutrons, and electrons",
          "Photons, electrons, and positrons"
        ],
        correctAnswer: 2
      },
      {
        id: "q3",
        question: "Light demonstrates both wave-like and particle-like properties. This concept is known as:",
        options: [
          "Wave-particle duality",
          "Quantum entanglement",
          "Heisenberg's uncertainty principle",
          "Quantum superposition"
        ],
        correctAnswer: 0
      },
      {
        id: "q4",
        question: "What is the name of the particle of light?",
        options: [
          "Electron",
          "Photon",
          "Neutron",
          "Quark"
        ],
        correctAnswer: 1
      },
      {
        id: "q5",
        question: "Which phenomenon helped establish the quantum nature of light?",
        options: [
          "Quantum tunneling",
          "Brownian motion",
          "The photoelectric effect",
          "Nuclear fusion"
        ],
        correctAnswer: 2
      }
    ];
  }
};
