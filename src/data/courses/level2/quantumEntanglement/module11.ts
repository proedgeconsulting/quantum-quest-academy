
import { Module } from "@/data/types/courseTypes";

// Module 11: Quantum Entanglement in Nature
export const module11: Module = {
  id: "2.2.11",
  title: "Quantum Entanglement in Nature",
  description: "Explore how plants, animals, and even humans might use quantum entanglement.",
  lessons: [
    {
      id: "2.2.11.1",
      title: "Quantum Biology",
      description: "Discover how plants use quantum effects to convert sunlight into energy.",
      content: "Did you know that plants might be using quantum entanglement to turn sunlight into food? It's true! Scientists have discovered that photosynthesis - the process plants use to make energy from sunlight - may involve quantum effects like entanglement and superposition.\n\nWhen sunlight hits a leaf, particles of light (photons) are captured by special molecules. The energy from these photons needs to travel to the plant's reaction center where it's converted into chemical energy. Scientists have found evidence that this energy travels through the plant like a quantum wave, taking multiple paths simultaneously and using entanglement to find the most efficient route!\n\nThis means that the plants in your garden or park might be using quantum physics every day to survive. Nature figured out how to use quantum effects billions of years before human scientists did!",
      type: "reading",
      duration: 15,
      points: 10
    },
    {
      id: "2.2.11.2",
      title: "Animal Quantum Powers",
      description: "Learn how birds and other animals might use quantum entanglement.",
      content: "Some animals might have quantum superpowers! In this video, we'll explore how certain animals might be using quantum effects like entanglement in amazing ways.\n\nMigratory birds like European robins can navigate accurately over thousands of miles, and scientists think they might be using quantum entanglement to do it! Special molecules in birds' eyes create entangled electron pairs when struck by light, and these entangled particles are sensitive to Earth's magnetic field, giving birds a built-in quantum compass!\n\nWe'll also look at how some insects might use quantum tunneling in their sense of smell, and how certain bacteria might exploit quantum effects. The natural world might be full of quantum physics that we're just beginning to discover!",
      type: "video",
      duration: 12,
      points: 10,
      videoUrl: "https://www.youtube.com/embed/H6HLjpj4Nt4"
    },
    {
      id: "2.2.11.3",
      title: "Quantum Nature Explorer",
      description: "Investigate quantum effects in living organisms through interactive simulations.",
      content: "Time to become a quantum biology explorer! In this interactive activity, you'll investigate how quantum effects like entanglement might be happening in living things.\n\nYou'll simulate how birds might detect Earth's magnetic field using quantum entanglement in their eyes, explore how plant photosynthesis might use quantum waves to efficiently capture sunlight, and investigate how quantum tunneling might help enzymes speed up chemical reactions in your own body!\n\nAs you play with these simulations, you'll discover that the line between the quantum world and the living world isn't as clear as scientists once thought. Nature might be using quantum physics all around us, and you'll be among the explorers uncovering these amazing connections!",
      type: "interactive",
      interactiveComponent: "AtomSimulation",
      duration: 20,
      points: 20
    },
    {
      id: "2.2.11.4",
      title: "Quantum Biology Quiz",
      description: "Test your knowledge about quantum effects in living organisms.",
      content: "Let's check what you've learned about quantum entanglement and other quantum effects in nature!",
      type: "quiz",
      duration: 10,
      points: 15
    }
  ]
};
