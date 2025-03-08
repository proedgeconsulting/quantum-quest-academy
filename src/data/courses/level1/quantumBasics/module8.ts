
import { Module } from "@/data/types/courseTypes";

// Module 8: Quantum Games
export const module8: Module = {
  id: "1.1.8",
  title: "Quantum Games",
  description: "Play fun games that demonstrate quantum principles.",
  lessons: [
    {
      id: "1.1.8.1",
      title: "Qubit Measurement Probability Simulator",
      description: "Interact with a qubit measurement probability simulator.",
      content: "In this interactive lesson, you'll explore how qubit states are represented and how measurement probabilities work in quantum computing. This simulator allows you to adjust the alpha and beta parameters of a qubit state and see how that affects the probability of measuring |0⟩ or |1⟩.\n\nBy experimenting with different values, you'll gain an intuitive understanding of quantum superposition and how quantum measurement works. This is fundamental to understanding how quantum computers process information differently from classical computers.",
      type: "interactive",
      duration: 25,
      points: 20,
      externalSimulator: {
        type: "iframe",
        url: "Qubit Measurement Probability.html",
        height: 600,
        width: "100%"
      }
    },
    {
      id: "1.1.8.2",
      title: "Quantum Heroes Card Game",
      description: "Learn about quantum pioneers through an interactive card game.",
      content: "It's time to have some fun while learning about the pioneers of quantum physics! In this interactive card matching game, you'll match famous quantum scientists with their groundbreaking discoveries.\n\nYou'll learn about scientists like Niels Bohr, Marie Curie, Werner Heisenberg, and Erwin Schrödinger in an engaging way. Each correct match reveals a fascinating fact about these quantum heroes. Try to match all the cards to complete the game!",
      type: "interactive",
      duration: 20,
      points: 15,
      externalSimulator: {
        type: "iframe",
        url: "Quantum Heroes Card Game.html",
        height: 600,
        width: "100%"
      }
    },
    {
      id: "1.1.8.3",
      title: "Quantum Chess Simulator",
      description: "Explore quantum principles through a modified chess game.",
      content: "Quantum Chess is a variant of chess that incorporates quantum phenomena like superposition and entanglement. In this simulator, you'll see how these quantum principles can change the strategies in a familiar game.\n\nExperiment with placing pieces in superposition across multiple squares and observe what happens when you 'measure' them. This interactive simulation helps demonstrate quantum concepts in a fun and intuitive way.",
      type: "interactive",
      duration: 30,
      points: 25,
      externalSimulator: {
        type: "iframe",
        url: "Quantum Chess.html",
        height: 700,
        width: "100%"
      }
    },
    {
      id: "1.1.8.4",
      title: "Quantum Heroes Match-Up",
      description: "Match quantum pioneers with their contributions in this fun game.",
      content: "Let's reinforce your knowledge of quantum pioneers with another interactive game! In this match-up challenge, you'll connect quantum physicists with their most significant contributions to the field.\n\nThis game will help you remember the key figures in quantum physics and their groundbreaking work. Each successful match provides additional information about these quantum heroes and their impact on our understanding of the quantum world.",
      type: "interactive",
      duration: 15,
      points: 15,
      externalSimulator: {
        type: "iframe",
        url: "Quantum Heroes Match-Up.html",
        height: 600,
        width: "100%"
      }
    },
    {
      id: "1.1.8.5",
      title: "Quantum Leaper",
      description: "Learn about quantum jumping through a fun platformer game.",
      content: "Get ready to play Quantum Leaper! In this game, you'll control a quantum particle that can 'tunnel' through barriers.\n\nRemember how we learned that quantum particles can sometimes pass through walls? In this game, you'll use that superpower to solve puzzles and reach the finish line.\n\nThe thicker the barrier, the less likely your particle can tunnel through it. Can you make it through all the levels using your quantum tunneling skills?",
      type: "interactive",
      duration: 15,
      points: 15,
      externalSimulator: {
        type: "iframe",
        url: "Quantum Leaper.html",
        height: 600,
        width: "100%"
      }
    },
    {
      id: "1.1.8.6",
      title: "Superposition Sorter",
      description: "Sort quantum particles in multiple states simultaneously.",
      content: "Welcome to Superposition Sorter! This game will help you understand one of the weirdest parts of quantum physics - superposition.\n\nIn this game, quantum particles come in two colors: blue and red. But some particles are in a 'superposition' - they're both blue AND red at the same time!\n\nYour job is to sort them into the right containers. But be careful - once you measure a particle in superposition, it collapses into just one color! Can you figure out the pattern and complete all the levels?",
      type: "interactive",
      duration: 15,
      points: 15,
      externalSimulator: {
        type: "iframe",
        url: "Superposition Sorter.html",
        height: 600,
        width: "100%"
      }
    },
    {
      id: "1.1.8.7",
      title: "Quantum Treasure Hunt",
      description: "Use quantum clues to find hidden treasures.",
      content: "It's time for a Quantum Treasure Hunt! In this game, you'll search for hidden quantum treasures by using probability clouds.\n\nIn quantum physics, we can't know exactly where a particle is - we only know the probability of finding it in different places. In this game, you'll see 'probability clouds' that show where treasures might be hidden.\n\nThe brighter the cloud, the more likely you'll find a treasure there. But remember - just because there's a high probability doesn't guarantee the treasure is there! Can you collect enough quantum treasures to win?",
      type: "interactive",
      duration: 20,
      points: 20,
      externalSimulator: {
        type: "iframe",
        url: "Quantum Treasure Hunt.html",
        height: 600,
        width: "100%"
      }
    },
    {
      id: "1.1.8.8",
      title: "Quantum Games Quiz",
      description: "Test your understanding of quantum principles from the games.",
      content: "Let's check what you've learned from playing our quantum games!",
      type: "quiz",
      duration: 10,
      points: 15
    }
  ]
};
