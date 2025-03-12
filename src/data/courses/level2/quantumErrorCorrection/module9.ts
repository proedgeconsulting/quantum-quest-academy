
import { Module } from "@/data/types/courseTypes";

// Module 9: Quantum Error Correction Adventures
export const module9: Module = {
  id: "2.3.9",
  title: "Quantum Error Correction Adventures",
  description: "Join exciting adventures that explore quantum error correction challenges.",
  lessons: [
    {
      id: "2.3.9.1",
      title: "The Quantum Error Olympics",
      description: "Compete in various error correction challenges to win quantum gold!",
      content: "Welcome to the Quantum Error Olympics! In this exciting event, you'll compete in a series of challenges that test your quantum error correction skills in fun and engaging ways.\n\nYou'll participate in events like:\n- Error Detection Dash: Quickly identify errors in quantum circuits\n- Syndrome Decoding Marathon: Decode error syndromes against the clock\n- Code Design Gymnastics: Create elegant error correction codes with minimal resources\n- Quantum Noise Obstacle Course: Navigate increasingly complex noise environments\n\nCompete for medals and set new records in the quantum error correction world!",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Quantum-Error-Olympics.html",
        height: 600,
        width: "100%"
      },
      duration: 35,
      points: 30
    },
    {
      id: "2.3.9.2",
      title: "Quantum Error City Builder",
      description: "Build a thriving quantum city protected by error correction infrastructure.",
      content: "In this engaging city-building adventure, you'll construct a quantum metropolis where the citizens (qubits) need protection from quantum noise pollution.\n\nYou'll need to strategically place error detection stations, correction facilities, and fault-tolerant zones to keep your quantum city running smoothly. Balance your limited resources between expanding your city and improving its error correction infrastructure.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Quantum-Error-City-Builder.html",
        height: 600,
        width: "100%"
      },
      duration: 40,
      points: 35
    },
    {
      id: "2.3.9.3",
      title: "Rescue Mission: Save the Quantum Data",
      description: "Embark on a mission to rescue quantum data from a failing quantum computer.",
      content: "Oh no! A quantum computer is failing, and valuable quantum data is at risk of being lost forever. In this thrilling reading lesson (previously interactive), you'll learn about a rescue mission to save the quantum information before it's too late!\n\nIn this immersive narrative, we'll explore a scenario where quantum error correction experts must:\n\n- Quickly assess the damage to a quantum system with rapidly degrading qubits\n- Identify which qubits are still reliable and which are compromised\n- Implement emergency error correction protocols under time pressure\n- Transfer quantum information from failing qubits to a backup system\n\nThrough detailed explanations and illustrated diagrams, you'll learn about the strategies used for quantum data rescue operations. You'll understand the principles behind quantum state transfer, error syndrome analysis, and recovery operations in emergency scenarios.\n\nWe'll discuss the concept of quantum error correction triage - how to prioritize resources when not all quantum information can be saved, and how to maximize the chances of recovering the most critical quantum states. The lesson also covers the design of robust quantum memory systems that can maintain coherence during emergency transfers.\n\nBy the end of this lesson, you'll appreciate the challenges of quantum data preservation in extreme conditions and understand the sophisticated error correction techniques that make quantum information rescue possible.",
      type: "reading",
      duration: 30,
      points: 25
    },
    {
      id: "2.3.9.4",
      title: "Visit the Quantum Pioneers",
      description: "Travel back in time to meet the pioneers of quantum error correction.",
      content: "Step into a time machine and journey through the history of quantum error correction! In this interactive adventure, you'll meet the brilliant scientists who developed the field and help them solve the problems they faced.\n\nYou'll assist Peter Shor with the first quantum error correction code, help Andrew Steane optimize the 7-qubit code, and collaborate with other quantum pioneers on their groundbreaking discoveries. Along the way, you'll gain a deeper appreciation for how quantum error correction evolved and the creative insights that made it possible.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Quantum-Pioneers-Visit.html",
        height: 600,
        width: "100%"
      },
      duration: 35,
      points: 30
    }
  ]
};
