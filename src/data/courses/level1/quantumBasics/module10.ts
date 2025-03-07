
import { Module } from "@/data/types/courseTypes";

// Module 10: Quantum Animals
export const module10: Module = {
  id: "1.1.10",
  title: "Quantum Animals",
  description: "Discover how animals use quantum effects in amazing ways.",
  lessons: [
    {
      id: "1.1.10.1",
      title: "Bird Navigation Mystery",
      description: "Learn how birds use quantum effects to navigate during migration.",
      content: "How do birds find their way when migrating thousands of miles without a map or GPS? Scientists believe they might be using quantum physics!\n\nEuropean robins and other migratory birds seem to detect Earth's magnetic field through a quantum effect called 'spin' in their eyes. When light hits special molecules in bird eyes, it creates pairs of particles with linked quantum properties that are sensitive to magnetic fields.\n\nThis quantum compass helps birds know which direction to fly - like having a built-in quantum GPS! Isn't it amazing that birds might be natural quantum physicists?",
      type: "reading",
      duration: 12,
      points: 10
    },
    {
      id: "1.1.10.2",
      title: "Quantum Frog Jumps",
      description: "Discover how frogs might use quantum tunneling to enhance their jumping.",
      content: "",
      type: "video",
      duration: 10,
      points: 10,
      videoUrl: "https://www.youtube.com/embed/Qc6gVht9CFQ"
    },
    {
      id: "1.1.10.3",
      title: "Design a Quantum Animal",
      description: "Create your own animal with quantum superpowers.",
      content: "It's time to get creative and design your own quantum animal! In this fun activity, you'll create a creature with special abilities based on quantum physics.\n\nWill your animal use quantum tunneling to walk through walls? Maybe it has quantum superposition to be in multiple places at once? Or perhaps it uses quantum entanglement to communicate instantly with others of its kind?\n\nUse our interactive designer to choose body parts, quantum abilities, and habitats for your creature. Then watch your quantum animal come to life in its environment!",
      type: "interactive",
      interactiveComponent: "BuildAtomActivity",
      duration: 20,
      points: 20
    },
    {
      id: "1.1.10.4",
      title: "Quantum Animals Quiz",
      description: "Test your knowledge about how animals use quantum effects.",
      content: "Let's check what you've learned about the amazing quantum abilities of animals!",
      type: "quiz",
      duration: 10,
      points: 15
    }
  ]
};
