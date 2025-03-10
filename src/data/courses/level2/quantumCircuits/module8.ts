
import { Module } from "@/data/types/courseTypes";

// Module 8: Quantum Games Arena
export const module8: Module = {
  id: "2.1.8",
  title: "Quantum Games Arena",
  description: "Play fun games that teach quantum circuit concepts.",
  lessons: [
    {
      id: "2.1.8.1",
      title: "Quantum Gate Puzzles",
      description: "Solve puzzles by applying the right quantum gates in the right order.",
      content: "Welcome to the Quantum Gate Puzzles! In this game, you'll be given quantum puzzles to solve using different gates. Each puzzle has a starting quantum state and a target state - your job is to figure out which gates to apply (and in what order) to transform the starting state into the target state.\n\nIt's like figuring out the right combination of moves to solve a Rubik's Cube, but with quantum states! As you progress, the puzzles will get more challenging, requiring you to use more complex combinations of gates.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "simulators/quantum gate puzzles.html",
        height: 600,
        width: "100%"
      },
      duration: 20,
      points: 15
    },
    {
      id: "2.1.8.2",
      title: "Quantum Circuit Race",
      description: "Race against time to build the most efficient quantum circuits.",
      content: "3... 2... 1... GO! In the Quantum Circuit Race, you'll compete against the clock to build quantum circuits that solve specific problems. But there's a twist - you need to use as few gates as possible!\n\nIn quantum computing, simpler circuits are usually better because they have less chance of errors. Your score will depend on both how quickly you solve the problem and how efficient your solution is. Can you find the optimal circuit design for each challenge?",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "simulators/quantum circuit race.html",
        height: 600,
        width: "100%"
      },
      duration: 20,
      points: 20
    },
    {
      id: "2.1.8.3",
      title: "Quantum Error Defenders",
      description: "Defend your quantum circuit from error monsters that want to ruin your computation.",
      content: "Oh no! Error monsters are attacking your quantum circuit! In this exciting game, you'll defend your quantum computation from different types of error monsters that try to flip your qubits or change their phases.\n\nYou'll learn about different types of quantum errors and how to protect against them using special error correction codes. Deploy your quantum error correction shields at the right time and place to keep your computation safe. Can you complete the calculation before the errors take over?",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "simulators/quantum error defenders.html",
        height: 600,
        width: "100%"
      },
      duration: 25,
      points: 20
    },
    {
      id: "2.1.8.4",
      title: "Quantum Chess",
      description: "Play a variant of chess with quantum-mechanical twists.",
      content: "Quantum Chess combines the classic strategy game with quantum mechanics principles. In this game, pieces can exist in superposition, allowing them to potentially be in multiple places at once!\n\nUnlike regular chess, in Quantum Chess a piece can be placed in a quantum superposition of two different squares. When you try to capture it, the superposition collapses and the piece will be in only one of those locations. This adds a whole new layer of strategy and probability to the traditional game.\n\nCan you master this quantum twist on one of the world's oldest strategy games?",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "simulators/Quantum Chess.html",
        height: 600,
        width: "100%"
      },
      duration: 25,
      points: 20
    }
  ]
};
