
import { Module } from "@/data/types/courseTypes";

// Module 9: Quantum Teleportation Adventure
export const module9: Module = {
  id: "2.1.9",
  title: "Quantum Teleportation Adventure",
  description: "Learn how quantum teleportation works through a space-themed adventure.",
  lessons: [
    {
      id: "2.1.9.1",
      title: "The Quantum Teleportation Mission",
      description: "Join a space mission that requires quantum teleportation to succeed.",
      content: "Attention space cadets! You've been selected for a special mission to save a stranded spacecraft on the other side of an asteroid field. The only way to send the rescue codes is through quantum teleportation!\n\nIn this adventure, you'll learn about quantum teleportation - a real quantum protocol that uses entanglement to transfer quantum information from one place to another. It's not like the teleportation you see in science fiction movies, but it's just as amazing in its own way!",
      type: "reading",
      duration: 15,
      points: 10
    },
    {
      id: "2.1.9.2",
      title: "Building the Teleportation Circuit",
      description: "Learn how to build a quantum circuit that performs teleportation.",
      content: "Now that you understand the mission, it's time to build the quantum teleportation circuit! This special circuit will allow you to transfer the quantum state of one qubit to another qubit far away, using the power of entanglement and some clever quantum operations.\n\nIn this video, we'll walk through the steps to build a quantum teleportation circuit:\n\n1. Creating an entangled pair of qubits\n\n2. Performing a Bell measurement\n\n3. Applying the right quantum operations based on the measurement results\n\nPay close attention to each step - you'll need this knowledge to complete your space mission!",
      type: "video",
      duration: 20,
      points: 15,
      videoUrl: "https://www.youtube.com/embed/FjHJ7FjgL34"
    },
    {
      id: "2.1.9.3",
      title: "Quantum Teleportation Simulator",
      description: "Use a simulator to perform quantum teleportation and save the spacecraft.",
      content: "The stranded spacecraft is waiting for your help! In this interactive activity, you'll use our quantum teleportation simulator to send the rescue codes through space.\n\nYou'll prepare the quantum state that contains the rescue code, create entangled qubits to establish the quantum channel, perform the necessary measurements, and apply the correct operations to complete the teleportation process. Watch in amazement as your quantum state disappears from one qubit and appears on another!\n\nWill you successfully teleport the rescue codes and save the day?",
      type: "interactive",
      interactiveComponent: "AtomSimulation",
      duration: 25,
      points: 25
    },
    {
      id: "2.1.9.4",
      title: "Teleportation Adventure Quiz",
      description: "Test your understanding of quantum teleportation.",
      content: "Let's check what you've learned about quantum teleportation!",
      type: "quiz",
      duration: 10,
      points: 20
    }
  ]
};
