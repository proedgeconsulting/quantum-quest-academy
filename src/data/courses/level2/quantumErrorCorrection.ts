
import { Course } from "@/data/types/courseTypes";

// Level 2 Course: Quantum Error Correction
export const quantumErrorCorrectionCourse: Course = {
  id: "2.3",
  title: "Quantum Error Correction",
  description: "Learn about quantum error correction and fault tolerance.",
  level: 2,
  duration: "4 weeks",
  icon: "code",
  weeks: 4,
  modules: [
    {
      id: "2.3.1",
      title: "Introduction to Quantum Errors",
      description: "Understand the sources and types of errors in quantum systems.",
      lessons: [
        {
          id: "2.3.1.1",
          title: "Why Quantum Errors Matter",
          description: "Learn why error correction is crucial for quantum computing.",
          content: "Quantum computing faces a fundamental challenge: quantum states are incredibly fragile and susceptible to errors. Unlike classical computers, where bits have well-defined values of 0 or 1, quantum bits (qubits) exist in delicate superpositions that can be disturbed by the slightest interaction with their environment.\n\nIn this lesson, we'll explore why quantum errors pose such a significant challenge to building useful quantum computers, and why quantum error correction is essential for the future of quantum computing. We'll discuss the different types of errors that can affect qubits, including bit flips, phase flips, and decoherence.",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "2.3.1.2",
          title: "Types of Quantum Errors",
          description: "Explore the different ways qubits can be affected by errors.",
          content: "In this lesson, we'll dive deeper into the specific types of errors that affect quantum systems. Unlike classical computers that only experience bit flips (0→1 or 1→0), quantum computers can experience a wider variety of errors due to the continuous nature of quantum states.\n\nWe'll explore bit flip errors, phase flip errors, and combinations of both. We'll also discuss environmental decoherence - the process by which quantum superpositions decay into classical states through interaction with the environment - and how it poses a fundamental challenge for quantum computing.",
          type: "video",
          duration: 20,
          points: 15
        },
        {
          id: "2.3.1.3",
          title: "Measuring Quantum Error Rates",
          description: "Learn how to quantify and benchmark errors in quantum systems.",
          content: "Before we can correct quantum errors, we need to be able to measure them accurately. This lesson covers the experimental techniques and mathematical frameworks used to characterize errors in quantum systems.\n\nWe'll explore concepts like fidelity, which measures how close a quantum state is to its ideal form, and quantum process tomography, which characterizes the errors in quantum operations. We'll also discuss noise models that help us predict and simulate how real quantum hardware will behave under different conditions.\n\nFinally, we'll look at benchmarking protocols like Randomized Benchmarking and Quantum Volume that allow us to compare the performance of different quantum processors in a standardized way.",
          type: "interactive",
          interactiveComponent: "BuildAtomActivity",
          duration: 25,
          points: 20
        }
      ]
    },
    {
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
        }
      ]
    }
  ]
};
