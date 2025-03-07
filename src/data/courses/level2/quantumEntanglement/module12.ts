
import { Module } from "@/data/types/courseTypes";

// Module 12: Quantum Entanglement Challenge
export const module12: Module = {
  id: "2.2.12",
  title: "Quantum Entanglement Challenge",
  description: "Put all your quantum entanglement knowledge to the test in exciting challenges.",
  lessons: [
    {
      id: "2.2.12.1",
      title: "Entanglement Escape Room",
      description: "Use your quantum knowledge to solve puzzles and escape!",
      content: "Welcome to the Quantum Entanglement Escape Room! You've been trapped in a special room where the only way out is to solve puzzles using your knowledge of quantum entanglement.\n\nThe room contains various devices that use entangled particles. You'll need to figure out how to use entanglement properties to unlock doors, decode messages, and eventually find your way out!\n\nYou'll need to remember what you've learned about how entangled particles behave, how measuring one affects the other, and how to use this strange quantum connection to your advantage. Good luck, quantum explorer - the clock is ticking!",
      type: "reading",
      duration: 15,
      points: 10
    },
    {
      id: "2.2.12.2",
      title: "Quantum Game Show",
      description: "Watch contestants compete in a quantum knowledge competition.",
      content: "It's time for the Quantum Game Show! In this fun video, we'll watch as contestants compete to answer questions and solve challenges all about quantum entanglement.\n\nContestants will face brain-teasing questions about entangled particles, demonstrate quantum principles using everyday objects, and race to complete quantum experiments before time runs out. The competition gets more challenging with each round!\n\nAs you watch, see if you can answer the questions before the contestants do. How much quantum knowledge have you gained through this course?",
      type: "video",
      duration: 15,
      points: 10,
      videoUrl: "https://www.youtube.com/embed/wUPBY0Iw9Co"
    },
    {
      id: "2.2.12.3",
      title: "Ultimate Quantum Challenge",
      description: "Face the ultimate test of your quantum entanglement knowledge.",
      content: "Are you ready for the Ultimate Quantum Challenge? This interactive activity combines everything you've learned about quantum entanglement into one epic final challenge!\n\nYou'll navigate through a series of increasingly difficult quantum puzzles, each requiring you to apply different aspects of quantum entanglement. You might need to:  \n\n- Create specific entangled states  \n- Use entanglement to send secure messages  \n- Perform quantum teleportation  \n- Detect quantum 'spies' trying to intercept your particles  \n- Design quantum experiments to test entanglement properties  \n\nThis challenge brings together all the quantum concepts you've mastered throughout the course. Do you have what it takes to become a true Quantum Entanglement Master?",
      type: "interactive",
      interactiveComponent: "QuantumSimulator",
      duration: 30,
      points: 30
    },
    {
      id: "2.2.12.4",
      title: "Quantum Entanglement Final Quiz",
      description: "The ultimate test of everything you've learned about quantum entanglement.",
      content: "This is it - the final quiz to test everything you've learned about quantum entanglement! This comprehensive quiz covers all aspects of quantum entanglement from across the entire course.",
      type: "quiz",
      duration: 15,
      points: 25
    }
  ]
};
