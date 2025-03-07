
import { Module } from "@/data/types/courseTypes";

// Module 2: Light and Energy
export const module2: Module = {
  id: "1.1.2",
  title: "Light and Energy",
  description: "Discover the dual nature of light as both a wave and a particle.",
  lessons: [
    {
      id: "1.1.2.1",
      title: "The Mystery of Light",
      description: "Understand the wave-particle duality of light.",
      content: "Light is one of the most fascinating phenomena in the universe. For centuries, scientists debated whether light was a wave or a particle. The surprising answer? It's both!\n\nIn this lesson, we'll explore how light can behave as both a wave and a particle, a concept known as wave-particle duality. This strange property is a fundamental aspect of quantum physics.",
      type: "reading",
      duration: 15,
      points: 10
    },
    {
      id: "1.1.2.2",
      title: "Light in Action",
      description: "See how light interacts with different materials.",
      content: "Light interacts with matter in fascinating ways. In this lesson, we'll explore phenomena like reflection, refraction, and absorption.\n\nWe'll also learn about the electromagnetic spectrum, from radio waves to gamma rays, and discover how different types of light affect our world.",
      type: "video",
      duration: 10,
      points: 10,
      videoUrl: "https://www.youtube.com/watch?v=ajWogac3eM0"
    },
    {
      id: "1.1.2.3",
      title: "Photon Explorer",
      description: "Interactive simulation to explore the properties of photons.",
      content: "In this interactive activity, you'll explore the behavior of photons - the particles of light. Photons are tiny packets of energy that make up light waves.\n\n**How to use the Photon Explorer:**\n\n1. Observe the yellow photons moving around the simulation\n2. Notice how they behave both as waves (following wavy patterns) and as particles (discrete points)\n3. Use the slider controls to adjust the simulation speed and particle size\n4. Watch what happens when photons interact with the central nucleus\n5. Toggle the instructions panel using the info button for more details\n\nTry experimenting with different settings to see how energy levels affect photon behavior, and observe the wave-particle duality in action!",
      type: "interactive",
      interactiveComponent: "QuantumWaveVisualizer",
      duration: 20,
      points: 15,
      interactiveOptions: {
        simulationType: "photon",
        waveColor: "yellow",
        showParticles: true
      }
    },
    {
      id: "1.1.2.4",
      title: "Light and Energy Quiz",
      description: "Test your understanding of light and energy concepts.",
      content: "Let's check what you've learned about light, photons, and energy.",
      type: "quiz",
      duration: 10,
      points: 20
    }
  ]
};
