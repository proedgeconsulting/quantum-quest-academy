
import { Module } from "@/data/types/courseTypes";

// Module 11: Quantum Time
export const module11: Module = {
  id: "1.1.11",
  title: "Quantum Time",
  description: "Explore how time works differently in the quantum world.",
  lessons: [
    {
      id: "1.1.11.1",
      title: "Does Time Exist for Photons?",
      description: "Discover the strange way photons experience time.",
      content: "Did you know that for particles of light (photons), time doesn't exist at all? This is one of the strangest ideas in quantum physics!\n\nAccording to Einstein's theory of relativity, when something travels at the speed of light, time stops completely for that object. Since photons always travel at the speed of light, they don't experience the passage of time!\n\nThis means that from a photon's perspective, it's created and absorbed at the exact same moment, even if it traveled billions of light-years across the universe. Can you imagine experiencing everything in your life at exactly the same instant?",
      type: "reading",
      duration: 12,
      points: 10
    },
    {
      id: "1.1.11.2",
      title: "The Quantum Time Machine",
      description: "Learn about the delayed choice quantum eraser experiment.",
      content: "Can quantum physics let us change the past? In this lesson, we'll explore a mind-bending experiment called the 'delayed choice quantum eraser'.\n\nIn this experiment, scientists found that measuring a particle NOW seems to change what happened to it in the PAST! It's like having a time machine that lets you affect things that already happened.\n\nDon't worry if this sounds confusing - even professional scientists find it weird! We'll use simple animations to understand how quantum particles seem to know what will happen to them in the future.",
      type: "video",
      duration: 12,
      points: 10,
      videoUrl: "https://www.youtube.com/embed/8ORLN_KwAgs"
    },
    {
      id: "1.1.11.3",
      title: "Quantum Time Adventure",
      description: "Play a game where you navigate quantum time paradoxes.",
      content: "Ready for a quantum time adventure? In this interactive game, you'll navigate through strange quantum time puzzles!\n\nYou'll control a quantum particle that can exist in multiple times simultaneously. Use this ability to solve puzzles where you need to be in different time periods at once.\n\nYou'll also encounter quantum time paradoxes, where you need to figure out how your future actions affect your past self. Can you master the weird rules of quantum time?",
      type: "interactive",
      interactiveComponent: "AtomSimulation",
      duration: 20,
      points: 20
    },
    {
      id: "1.1.11.4",
      title: "Quantum Time Quiz",
      description: "Test your understanding of time in the quantum realm.",
      content: "Let's see what you've learned about the strange nature of time in quantum physics!",
      type: "quiz",
      duration: 10,
      points: 15
    }
  ]
};
