
import { Module } from "@/data/types/courseTypes";

// Module 4: Quantum Entanglement and Reality
export const module4: Module = {
  id: "2.2.4",
  title: "Quantum Entanglement and Reality",
  description: "Explore the philosophical implications of quantum entanglement for our understanding of reality.",
  lessons: [
    {
      id: "2.2.4.1",
      title: "The EPR Paradox",
      description: "Understand Einstein, Podolsky, and Rosen's famous thought experiment that challenged quantum mechanics.",
      content: "In 1935, Albert Einstein, Boris Podolsky, and Nathan Rosen published a paper that presented what became known as the EPR paradox - a thought experiment designed to show that quantum mechanics must be incomplete because it seemed to allow for 'spooky action at a distance.'\n\nThe EPR paper argued that if quantum mechanics were complete, it would violate locality (the principle that objects are only influenced by their immediate surroundings) or reality (the principle that physical quantities exist independently of observation). Since Einstein and his colleagues considered these principles to be fundamental to any physical theory, they concluded that quantum mechanics must be incomplete.\n\nThis challenge to quantum mechanics sparked decades of theoretical and experimental work, culminating in Bell's theorem and subsequent experiments that proved Einstein wrong - quantum mechanics is indeed complete, and nature truly does exhibit nonlocal behavior through entanglement.\n\nIn this lesson, we'll explore the original EPR paradox in detail, the assumptions it made about physical reality, and how our understanding of quantum entanglement has evolved since then to reshape our conception of reality itself.",
      type: "reading",
      duration: 25,
      points: 20
    },
    {
      id: "2.2.4.2",
      title: "Quantum Game: Entanglement Puzzles",
      description: "Play through a series of puzzles that demonstrate the counterintuitive properties of quantum entanglement.",
      content: "In this interactive lesson, you'll tackle a series of increasingly challenging puzzles based on the properties of entangled quantum systems. Each puzzle represents a scenario that would be impossible to solve using classical physics alone but becomes solvable when you leverage the unique properties of quantum entanglement.\n\nThrough these puzzles, you'll develop an intuition for how entanglement works and how it can be used as a resource for quantum information protocols. You'll face challenges related to:  \n\n- Creating specific entangled states  \n- Using entanglement to send information (within the bounds of physics)  \n- Distinguishing between different types of entangled states  \n- Using entanglement to solve coordination problems  \n\nThe puzzles are designed to highlight the non-classical correlations that exist in entangled systems and the ways these correlations can be harnessed for practical purposes. By the end of this lesson, you'll have a much deeper understanding of entanglement as both a fundamental physical phenomenon and a powerful resource for quantum technologies.\n\n<iframe src=\"https://quantum-game.github.io/\" width=\"100%\" height=\"600px\" frameborder=\"0\" allowfullscreen></iframe>",
      type: "interactive",
      interactiveComponent: "QuantumSimulator",
      duration: 35,
      points: 30
    },
    {
      id: "2.2.4.3",
      title: "Interpretations of Quantum Mechanics",
      description: "Compare different interpretations of quantum mechanics and how they explain entanglement.",
      content: "Quantum entanglement challenges our deepest intuitions about reality, leading to a variety of interpretations of quantum mechanics that attempt to make sense of this bizarre phenomenon. In this lesson, we'll explore the major interpretations and how they address the puzzle of entanglement:\n\n- **Copenhagen Interpretation**: The traditional interpretation that emphasizes measurement and wave function collapse, viewing entanglement as a fundamental, irreducible property of quantum systems.\n\n- **Many-Worlds Interpretation**: Suggests that quantum measurements cause the universe to branch into multiple realities, with entanglement representing correlations between branches.\n\n- **Bohm's Pilot Wave Theory**: Proposes that particles have definite positions guided by a quantum wave, with entanglement explained through nonlocal influences mediated by this wave.\n\n- **QBism (Quantum Bayesianism)**: Views quantum states as representing an observer's beliefs rather than objective reality, reframing entanglement as correlated beliefs.\n\n- **Relational Quantum Mechanics**: Suggests that quantum states are relational rather than absolute, with entanglement reflecting relations between different observers' descriptions.\n\nWe'll examine how each interpretation addresses the apparent nonlocality of entanglement, Bell's theorem, and the EPR paradox, and discuss the philosophical implications each interpretation has for concepts like determinism, locality, and the nature of reality itself.",
      type: "reading",
      duration: 30,
      points: 20
    }
  ]
};
