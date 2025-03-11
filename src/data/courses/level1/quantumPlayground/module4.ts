
import { Module } from "@/data/types/courseTypes";

// Module 4: Quantum Games Tournament
export const module4: Module = {
  id: "1.2.4",
  title: "Quantum Games Tournament",
  description: "Apply your quantum knowledge in competitive quantum games.",
  lessons: [
    {
      id: "1.2.4.1",
      title: "Quantum Chess",
      description: "Play chess with quantum moves and superposition.",
      content: `# Quantum Chess

## Chess with a Quantum Twist

Quantum Chess adds quantum mechanical principles to the traditional game of chess, creating entirely new strategic possibilities.

## Quantum Rules

In Quantum Chess:
- Pieces can exist in superposition across multiple squares
- Quantum moves allow pieces to be in two places at once
- Measurement occurs when pieces interact
- Entanglement can link the fate of different pieces

## How to Play

1. Make classical moves as in regular chess
2. Use quantum moves to place pieces in superposition
3. Strategic measurement forces pieces to resolve to definite positions
4. Win by checkmating the opponent's king`,
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Quantum-Chess.html",
        height: 500,
        width: "100%"
      },
      duration: 40,
      points: 35
    },
    {
      id: "1.2.4.2",
      title: "Quantum Tic-Tac-Toe",
      description: "Play tic-tac-toe with quantum moves and entanglement.",
      content: `# Quantum Tic-Tac-Toe

## A Quantum Twist on a Simple Game

Quantum Tic-Tac-Toe transforms the simple game of Tic-Tac-Toe by adding quantum mechanical principles, making it much more complex and strategically rich.

## Game Rules

1. Players make quantum marks that exist in superposition across two squares
2. Each move creates entanglement between squares
3. When a cycle of entanglement forms, a "quantum collapse" occurs
4. Win by getting three classical marks in a row after collapses

## Strategic Thinking

Quantum Tic-Tac-Toe requires:
- Thinking about probabilities and possibilities
- Creating advantageous entanglements
- Forcing collapses at strategically beneficial times
- Planning several moves ahead with branching possibilities`,
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Quantum-Tic-Tac-Toe.html",
        height: 500,
        width: "100%"
      },
      duration: 30,
      points: 25
    },
    {
      id: "1.2.4.3",
      title: "Quantum Games Tournament Quiz",
      description: "Test your understanding of quantum gaming strategies and concepts.",
      content: "Let's check what you've learned about quantum gaming principles and strategies.",
      type: "quiz",
      duration: 15,
      points: 15
    }
  ]
};
