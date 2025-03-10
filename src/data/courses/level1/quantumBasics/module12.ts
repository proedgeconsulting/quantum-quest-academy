import { Module } from "@/data/types/courseTypes";

// Module 12: Quantum Future
export const module12: Module = {
  id: "1.1.12",
  title: "Quantum Future",
  description: "Explore how quantum technology will shape our future world.",
  lessons: [
    {
      id: "1.1.12.1",
      title: "Quantum Computers: The Next Superpower",
      description: "Learn how quantum computers will change everything.",
      content: "Quantum computers are like regular computers with superpowers! Instead of using regular bits (0s and 1s), they use quantum bits or 'qubits' that can be 0 and 1 at the same time thanks to superposition.\n\nThis means quantum computers can solve problems that would take regular computers millions of years to figure out! They'll help us design new medicines, create better materials, solve complex climate models, and crack codes that no regular computer could ever break.\n\nScientists are already building quantum computers, but they're still small and experimental. By the time you grow up, quantum computers might be as common as smartphones are today!",
      type: "reading",
      duration: 12,
      points: 10
    },
    {
      id: "1.1.12.2",
      title: "Quantum Internet",
      description: "Discover the unhackable internet of the future.",
      content: "Imagine an internet that's completely secure and impossible to hack - that's the quantum internet! In this lesson, we'll explore how quantum physics will create a super-secure internet of the future.\n\nThe quantum internet will use entangled particles to create encryption keys that are absolutely secure. If anyone tries to spy on these quantum messages, the entanglement breaks and alerts both sender and receiver immediately!\n\nWe'll see how scientists are already building the first quantum networks and how one day your messages might travel through quantum teleportation!",
      type: "video",
      duration: 10,
      points: 10,
      videoUrl: "https://www.youtube.com/watch?v=m8fi0fODVDw"
    },
    {
      id: "1.1.12.3",
      title: "Design Your Quantum Invention",
      description: "Create your own futuristic quantum technology.",
      content: "Time to become a quantum inventor! In this activity, you'll design your own futuristic quantum technology to solve a problem or create something amazing.\n\nWill you create a quantum teleporter to transport people instantly? A quantum microscope that can see individual atoms? Or maybe a quantum weather controller that uses quantum effects to predict and modify weather patterns?\n\nUse our interactive lab to design your invention, select which quantum effects it uses, and see it come to life in a simulation. Then present your invention to see if others think it could really work!",
      type: "interactive",
      interactiveComponent: "BuildAtomActivity",
      duration: 20,
      points: 20
    },
    {
      id: "1.1.12.4",
      title: "Quantum Future Quiz",
      description: "Test your knowledge about future quantum technologies.",
      content: "Let's check what you've learned about the exciting quantum technologies of the future!",
      type: "quiz",
      duration: 10,
      points: 15
    }
  ]
};
