
import { Module } from "@/data/types/courseTypes";

// Module 2: Quantum Error Correction Codes
export const module2: Module = {
  id: "2.3.2",
  title: "Quantum Error Correction Codes",
  description: "Learn the fundamental techniques for protecting quantum information.",
  lessons: [
    {
      id: "2.3.2.1",
      title: "The No-Cloning Theorem Challenge",
      description: "Understand why quantum information can't be copied and how this affects error correction.",
      content: "Classical error correction relies heavily on the ability to make multiple copies of information, but the No-Cloning Theorem in quantum mechanics states that it's impossible to create an exact copy of an arbitrary unknown quantum state. This fundamental restriction means that quantum error correction requires entirely new approaches.\n\nIn this lesson, we'll explore the No-Cloning Theorem and its implications for quantum error correction. We'll discuss how this challenge was initially thought to make quantum error correction impossible, and how this view was dramatically changed by the discovery of quantum error correction codes in the mid-1990s.",
      type: "reading",
      duration: 15,
      points: 10
    },
    {
      id: "2.3.2.2",
      title: "The 3-Qubit Code",
      description: "Learn about the simplest quantum error correction code.",
      content: "The 3-qubit code is the simplest quantum error correction code, designed to protect against bit flip errors. While not powerful enough for practical quantum computing, it illustrates the core principles of quantum error correction.\n\nIn this lesson, we'll explore how the 3-qubit code works by encoding one logical qubit across three physical qubits. We'll walk through the encoding circuit, the error detection process, and the correction procedure. We'll also discuss the limitations of this simple code and why more sophisticated codes are needed for full error protection.",
      type: "video",
      duration: 20,
      points: 15
    },
    {
      id: "2.3.2.3",
      title: "Shor's 9-Qubit Code",
      description: "Understand the first complete quantum error correction code.",
      content: "Shor's 9-qubit code, published by Peter Shor in 1995, was the first quantum error correction code capable of protecting against both bit flip and phase flip errors. This groundbreaking code demonstrated that quantum error correction was indeed possible, opening up the path to fault-tolerant quantum computing.\n\nIn this lesson, we'll explore how Shor's code works by concatenating two layers of protection: one for bit flips and one for phase flips. We'll examine the encoding circuit, the syndrome measurement process, and the correction procedures. We'll also discuss how this code achieves the remarkable feat of extracting information about errors without collapsing the quantum state being protected.",
      type: "interactive",
      interactiveComponent: "AtomSimulation",
      duration: 30,
      points: 25
    },
    {
      id: "2.3.2.4",
      title: "Surface Codes: The Future of Quantum Error Correction",
      description: "Explore the error correction codes most likely to be used in future quantum computers.",
      content: "Surface codes are currently the most promising quantum error correction codes for large-scale quantum computers. Unlike the 3-qubit and 9-qubit codes we've studied, surface codes are designed to be implemented on a 2D grid of qubits with only nearest-neighbor interactions, making them well-suited for actual quantum hardware.\n\nIn this lesson, we'll introduce the basic concepts of surface codes and why they're so attractive for practical quantum computing. We'll discuss how they can achieve high error thresholds (around 1% error rate per operation), making them more tolerant of hardware imperfections than other codes.\n\nWe'll also look at how surface codes scale, requiring approximately 1,000-10,000 physical qubits for each logical qubit that can perform reliable computation. This helps explain why building large-scale, fault-tolerant quantum computers is such a significant engineering challenge.",
      type: "reading",
      duration: 25,
      points: 20
    },
    {
      id: "2.3.2.5",
      title: "Error Correction Codes Quiz",
      description: "Test your understanding of quantum error correction codes.",
      content: "Let's check what you've learned about quantum error correction codes and their implementation.",
      type: "quiz",
      duration: 15,
      points: 25
    }
  ]
};
