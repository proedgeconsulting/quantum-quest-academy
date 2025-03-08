
import { Module } from "@/data/types/courseTypes";

// Module 8: Quantum Games
export const module8: Module = {
  id: "1.1.8",
  title: "Quantum Games",
  description: "Play fun games that demonstrate quantum principles.",
  lessons: [
    {
      id: "1.1.8.1",
      title: "Quantum Leaper",
      description: "Learn about quantum jumping through a fun platformer game.",
      content: "Get ready to play Quantum Leaper! In this game, you'll control a quantum particle that can 'tunnel' through barriers.\n\nRemember how we learned that quantum particles can sometimes pass through walls? In this game, you'll use that superpower to solve puzzles and reach the finish line.\n\nThe thicker the barrier, the less likely your particle can tunnel through it. Can you make it through all the levels using your quantum tunneling skills?",
      type: "interactive",
      interactiveComponent: "AtomSimulation",
      duration: 15,
      points: 15
    },
    {
      id: "1.1.8.2",
      title: "Superposition Sorter",
      description: "Sort quantum particles in multiple states simultaneously.",
      content: "Welcome to Superposition Sorter! This game will help you understand one of the weirdest parts of quantum physics - superposition.\n\nIn this game, quantum particles come in two colors: blue and red. But some particles are in a 'superposition' - they're both blue AND red at the same time!\n\nYour job is to sort them into the right containers. But be careful - once you measure a particle in superposition, it collapses into just one color! Can you figure out the pattern and complete all the levels?",
      type: "interactive",
      interactiveComponent: "BuildAtomActivity",
      duration: 15,
      points: 15
    },
    {
      id: "1.1.8.3",
      title: "Quantum Treasure Hunt",
      description: "Use quantum clues to find hidden treasures.",
      content: "It's time for a Quantum Treasure Hunt! In this game, you'll search for hidden quantum treasures by using probability clouds.\n\nIn quantum physics, we can't know exactly where a particle is - we only know the probability of finding it in different places. In this game, you'll see 'probability clouds' that show where treasures might be hidden.\n\nThe brighter the cloud, the more likely you'll find a treasure there. But remember - just because there's a high probability doesn't guarantee the treasure is there! Can you collect enough quantum treasures to win?",
      type: "interactive",
      interactiveComponent: "AtomSimulation",
      duration: 20,
      points: 20
    },
    {
      id: "1.1.8.4",
      title: "Quantum Games Quiz",
      description: "Test your understanding of quantum principles from the games.",
      content: "Let's check what you've learned from playing our quantum games!",
      type: "quiz",
      duration: 10,
      points: 15
    }
  ]
};
