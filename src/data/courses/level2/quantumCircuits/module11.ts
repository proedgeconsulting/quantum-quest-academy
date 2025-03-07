import { Module } from "@/data/types/courseTypes";

// Module 11: Quantum Music Maker
export const module11: Module = {
  id: "2.1.11",
  title: "Quantum Music Maker",
  description: "Create music using quantum circuits and interference.",
  lessons: [
    {
      id: "2.1.11.1",
      title: "Quantum Harmonies",
      description: "Discover the connection between quantum interference and music.",
      content: "Did you know that quantum physics and music have something amazing in common? Both use waves and interference to create beautiful patterns!\n\nIn this lesson, you'll learn how quantum interference works - when quantum waves meet, they can enhance each other (constructive interference) or cancel each other out (destructive interference), creating patterns just like sound waves do in music.\n\nWe'll explore how these quantum interference patterns can be used to create unique musical compositions that would be difficult to imagine without quantum physics.",
      type: "reading",
      duration: 15,
      points: 10
    },
    {
      id: "2.1.11.2",
      title: "Quantum Music Circuits",
      description: "Learn how to design quantum circuits that produce musical patterns.",
      content: "Now it's time to see how quantum circuits can create music! In this video, we'll show you how different quantum gates create different interference patterns, which we can map to musical notes and rhythms.\n\nYou'll learn about:\n\n- How the Hadamard gate creates a musical superposition\n\n- How phase gates adjust the 'tone' of quantum notes\n\n- How entangling gates create harmonies between quantum notes\n\n- How measurement turns quantum possibilities into actual musical sequences\n\nBy the end of this video, you'll understand how quantum circuits can be transformed into unique musical experiences.",
      type: "video",
      duration: 15,
      points: 15,
      videoUrl: "https://www.youtube.com/watch?v=HzlZt2TqSzU"
    },
    {
      id: "2.1.11.3",
      title: "Create Your Quantum Symphony",
      description: "Use a quantum music generator to compose your own quantum-inspired music.",
      content: "It's time to become a quantum composer! In this interactive activity, you'll use our Quantum Music Maker to create your own musical compositions based on quantum circuits.\n\nStart by designing a quantum circuit with different gates and qubit configurations. As you build your circuit, you'll hear how each element affects the music. The quantum interference patterns will create melodies, harmonies, and rhythms that change based on your circuit design.\n\nExperiment with different quantum gates to find the sound you like best, then save your quantum symphony to share with friends and family!",
      type: "interactive",
      interactiveComponent: "AtomSimulation",
      duration: 25,
      points: 20
    },
    {
      id: "2.1.11.4",
      title: "Quantum Music Quiz",
      description: "Test your understanding of quantum interference and music.",
      content: "Let's check what you've learned about quantum music making!",
      type: "quiz",
      duration: 10,
      points: 15
    }
  ]
};
