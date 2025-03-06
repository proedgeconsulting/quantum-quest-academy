
import { Module } from "@/data/types/courseTypes";

// Module 4: Quantum Superposition
export const module4: Module = {
  id: "1.1.4",
  title: "Quantum Superposition",
  description: "Discover how quantum objects can exist in multiple states simultaneously.",
  lessons: [
    {
      id: "1.1.4.1",
      title: "What is Superposition?",
      description: "Learn how quantum particles can be in multiple states at once.",
      content: "Superposition is perhaps the most mind-bending aspect of quantum physics. In our everyday world, objects are in definite states - a light is either on or off, a door is either open or closed. But in the quantum world, particles can exist in multiple states simultaneously until they're observed.\n\nThis means a quantum particle, like an electron, can be in two (or more) places at once, or spinning in opposite directions at the same time. It's only when we measure the particle that it 'collapses' into one definite state.",
      type: "reading",
      duration: 15,
      points: 10
    },
    {
      id: "1.1.4.2",
      title: "Schrödinger's Cat",
      description: "Explore the famous thought experiment that illustrates quantum superposition.",
      content: "Erwin Schrödinger created his famous cat thought experiment to highlight how strange quantum superposition becomes when applied to everyday objects.\n\nIn this thought experiment, a cat is placed in a sealed box with a device that has a 50% chance of releasing poison based on a quantum event (like a radioactive atom decaying). According to quantum mechanics, until the box is opened, the quantum system is in a superposition of states - and by extension, the cat would be both alive and dead simultaneously!\n\nThis paradox helps us think about the boundary between the quantum world and our everyday experience.",
      type: "video",
      duration: 15,
      points: 10,
      videoUrl: "https://www.youtube.com/embed/UjaAxUO6-Uw"
    },
    {
      id: "1.1.4.3",
      title: "Superposition Simulator",
      description: "Interactive demonstration of quantum superposition principles.",
      content: "In this interactive activity, you'll explore how quantum superposition works. You'll see how quantum particles can exist in multiple states at once, and how measurement affects these superpositions.\n\nYou'll also learn how superposition is the key to quantum computing's potential power, allowing quantum computers to explore multiple possibilities simultaneously.",
      type: "interactive",
      interactiveComponent: "BuildAtomActivity",
      duration: 20,
      points: 15
    },
    {
      id: "1.1.4.4",
      title: "Superposition Quiz",
      description: "Test your understanding of quantum superposition concepts.",
      content: "Let's test what you've learned about quantum superposition.",
      type: "quiz",
      duration: 10,
      points: 20
    }
  ]
};
