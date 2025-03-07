
import { Module } from "@/data/types/courseTypes";

// Module 10: Quantum Teleportation
export const module10: Module = {
  id: "2.2.10",
  title: "Quantum Teleportation",
  description: "Learn how scientists can 'teleport' quantum information using entanglement.",
  lessons: [
    {
      id: "2.2.10.1",
      title: "What is Quantum Teleportation?",
      description: "Discover how quantum information can be 'teleported' using entanglement.",
      content: "Quantum teleportation sounds like science fiction, but it's real science! In this lesson, we'll learn how scientists can teleport quantum information from one place to another using entanglement.\n\nFirst, let's be clear - quantum teleportation doesn't transport matter like in Star Trek! Instead, it transfers the quantum state of one particle to another particle somewhere else. It's like taking all the information about Particle A and making Particle B become exactly like Particle A was!\n\nThe amazing thing is that this works instantly, no matter how far apart the particles are! Scientists have successfully teleported quantum information between particles separated by mountains, and even between Earth and satellites in space!\n\nQuantum teleportation is a key technology for future quantum computers and the quantum internet, where quantum information will need to be transferred between different quantum processors.",
      type: "reading",
      duration: 15,
      points: 10
    },
    {
      id: "2.2.10.2",
      title: "Teleportation Experiments",
      description: "See how scientists perform real quantum teleportation in labs.",
      content: "Let's watch quantum teleportation happen in real laboratories! In this video, we'll see scientists teleport quantum information from one place to another.\n\nYou'll watch as they create entangled particle pairs and use them to transfer the quantum state of a third particle. It looks simple from the outside - just some lasers, mirrors, and detectors - but what's happening is truly amazing: the complete quantum state of one particle is disappearing from one location and reappearing at another!\n\nThe video will show both simple demonstrations and cutting-edge experiments where scientists have teleported quantum information across cities and even to satellites in space. It's not science fiction - it's real quantum physics happening today!",
      type: "video",
      duration: 15,
      points: 10,
      videoUrl: "https://www.youtube.com/embed/DxQK1WDYI_k"
    },
    {
      id: "2.2.10.3",
      title: "Quantum Teleportation Game",
      description: "Master the steps of quantum teleportation in this interactive game.",
      content: "Ready to try quantum teleportation yourself? In this interactive game, you'll perform all the steps needed to teleport quantum information from one particle to another!\n\nYou'll start by creating an entangled pair of particles, then prepare a third particle with the quantum information you want to teleport. Next, you'll perform special measurements and send the results through a classical communication channel (like a regular phone call).\n\nFinally, you'll apply the right quantum operations to complete the teleportation process. If you've done everything correctly, the quantum information will disappear from the original particle and appear in the target particle!\n\nDon't worry if it seems complicated - the game will guide you through each step and show you how this amazing quantum process works!",
      type: "interactive",
      interactiveComponent: "QuantumSimulator",
      duration: 25,
      points: 25
    },
    {
      id: "2.2.10.4",
      title: "Quantum Teleportation Quiz",
      description: "Test your understanding of quantum teleportation.",
      content: "Let's check what you've learned about quantum teleportation!",
      type: "quiz",
      duration: 10,
      points: 15
    }
  ]
};
