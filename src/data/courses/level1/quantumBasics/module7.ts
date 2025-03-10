
import { Module } from "@/data/types/courseTypes";

// Module 7: Quantum Heroes
export const module7: Module = {
  id: "1.1.7",
  title: "Quantum Heroes",
  description: "Meet the amazing scientists who discovered quantum physics.",
  lessons: [
    {
      id: "1.1.7.1",
      title: "Meet Max Planck",
      description: "Discover how Max Planck started the quantum revolution.",
      content: "Max Planck was a German scientist who made an amazing discovery in 1900 that started the whole field of quantum physics!\n\nAt that time, scientists couldn't explain why hot objects glow different colors as they heat up (like how a stove burner goes from red to orange). Planck figured out that energy doesn't flow in a smooth stream like water, but instead comes in tiny packets he called 'quanta'.\n\nThis was a super brave idea because everyone else thought energy was continuous. Imagine being the first person to say something that changes how everyone thinks about the world!",
      type: "reading",
      duration: 10,
      points: 10
    },
    {
      id: "1.1.7.2",
      title: "Einstein's Quantum Discovery",
      description: "Learn how Einstein explained the photoelectric effect.",
      content: "Did you know that Albert Einstein won his Nobel Prize for quantum physics, not for his famous theory of relativity?\n\nIn 1905, Einstein explained something called the 'photoelectric effect' - when light shines on certain metals, electrons pop out! He showed that light must be made of particles (later called photons) that bump into electrons like tiny tennis balls.\n\nEach photon carries a specific amount of energy, and if it has enough energy, it can knock an electron out of the metal. This proved that light wasn't just a wave, but also a particle - which was a mind-blowing idea!",
      type: "video",
      duration: 12,
      points: 10,
      videoUrl: "https://www.youtube.com/watch?v=068rdc75mHM"
    },
    {
      id: "1.1.7.3",
      title: "Quantum Heroes Card Game",
      description: "Play a memory game with famous quantum scientists.",
      content: "Let's play a fun game to learn about the heroes of quantum physics! In this interactive card matching game, you'll match quantum scientists with their discoveries.\n\nYou'll learn about Niels Bohr, who figured out how electrons orbit around atoms, Marie Curie who discovered radioactive elements, Werner Heisenberg who came up with the uncertainty principle, and Erwin Schrödinger who created the famous cat thought experiment!\n\nMatch all the cards to unlock special facts about each quantum hero!",
      type: "interactive",
      interactiveComponent: "BuildAtomActivity",
      duration: 15,
      points: 20
    },
    {
      id: "1.1.7.4",
      title: "Quantum Heroes Quiz",
      description: "Test your knowledge about quantum physics pioneers.",
      content: "Let's see how much you've learned about the amazing scientists who discovered quantum physics!",
      type: "quiz",
      duration: 10,
      points: 15
    }
  ]
};
