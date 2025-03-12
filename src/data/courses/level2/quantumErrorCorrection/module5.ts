
import { Module } from "@/data/types/courseTypes";

// Module 5: Fault-Tolerant Quantum Computation
export const module5: Module = {
  id: "2.3.5",
  title: "Fault-Tolerant Quantum Computation",
  description: "Learn how to perform reliable quantum computations in the presence of noise.",
  lessons: [
    {
      id: "2.3.5.1",
      title: "Principles of Fault Tolerance",
      description: "Understand the key concepts behind fault-tolerant quantum computation.",
      content: "Error correction alone isn't enough for reliable quantum computing - we also need fault tolerance. In this lesson, we'll explore what fault tolerance means and why it's crucial.\n\nYou'll learn about:\n\n- The difference between error correction and fault tolerance\n- How errors can propagate through quantum circuits\n- The threshold theorem and its implications\n- Designing circuits that prevent error propagation\n\nThrough clear explanations and examples, you'll understand why fault tolerance is considered the holy grail of quantum computing and what challenges remain in achieving it.",
      type: "reading",
      duration: 20,
      points: 15
    },
    {
      id: "2.3.5.2",
      title: "Fault-Tolerant Gates",
      description: "Learn how to implement quantum gates in a fault-tolerant manner.",
      content: "Implementing quantum gates fault-tolerantly is a major challenge in quantum computing. In this video lesson, we'll explore techniques for performing reliable quantum operations even when components are noisy.\n\nYou'll learn about:\n\n- Transversal gates and why they're naturally fault-tolerant\n- Gate teleportation and how it enables universal computation\n- Magic state distillation and injection\n- The trade-offs between different approaches to fault-tolerant gates\n\nThrough animations and circuit diagrams, we'll demystify these advanced techniques and show how they contribute to reliable quantum computation.",
      type: "video",
      duration: 25,
      points: 20,
      videoUrl: "https://www.youtube.com/watch?v=hd0DhwcmIaE"
    },
    {
      id: "2.3.5.3",
      title: "Measurement and Error Correction",
      description: "Understand how measurements are used in quantum error correction.",
      content: "Measurement plays a crucial role in quantum error correction, but it must be performed carefully to avoid introducing new errors. Originally an interactive simulation, this comprehensive reading lesson now explores the relationship between measurement and error correction in detail.\n\nWe'll cover:\n\n- How syndrome measurements identify errors without collapsing the encoded quantum information\n- The concept of measurement-based quantum error correction\n- Flag qubits and how they help detect measurement errors\n- The role of repeated measurements in achieving reliability\n\nThrough detailed diagrams and step-by-step explanations, you'll understand how careful measurement design is essential for effective quantum error correction. You'll learn about measurement circuits for common error correction codes and how these measurements propagate through the system to identify errors while preserving the quantum state.\n\nWe'll also discuss statistical analysis of measurement outcomes and how multiple rounds of measurement can provide confidence in error detection and correction processes. By the end of this lesson, you'll have a thorough understanding of the measurement techniques that underpin practical quantum error correction.",
      type: "reading",
      duration: 30,
      points: 25
    },
    {
      id: "2.3.5.4",
      title: "Fault Tolerance Quiz",
      description: "Test your understanding of fault-tolerant quantum computation.",
      content: "Let's check your understanding of fault tolerance principles and techniques.",
      type: "quiz",
      duration: 15,
      points: 25
    }
  ]
};
