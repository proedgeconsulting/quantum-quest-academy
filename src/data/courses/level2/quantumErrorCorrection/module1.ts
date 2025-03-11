
import { Module } from "@/data/types/courseTypes";

// Module 1: Introduction to Quantum Errors
export const module1: Module = {
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
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Quantum-Error-Measurement.html",
        height: 600,
        width: "100%"
      },
      duration: 25,
      points: 20
    },
    {
      id: "2.3.1.4",
      title: "Error Detection vs. Correction",
      description: "Understand the difference between detecting and correcting quantum errors.",
      content: "In quantum computing, there's an important distinction between error detection (knowing an error has occurred) and error correction (fixing the error without damaging the quantum information). This lesson explores this distinction and its implications.\n\nWe'll discuss the challenges of quantum measurement, which can destroy the very quantum states we're trying to preserve. We'll see how quantum error correction codes must be designed to extract just enough information about errors without collapsing quantum superpositions.\n\nWe'll also look at practical examples of error detection circuits and how they form the foundation for more complex error correction schemes. By the end of this lesson, you'll understand why quantum error detection is necessary but not sufficient for scalable quantum computing.",
      type: "reading",
      duration: 15,
      points: 10
    }
  ]
};
