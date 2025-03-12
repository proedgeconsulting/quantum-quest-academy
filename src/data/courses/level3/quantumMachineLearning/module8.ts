
import { Module } from "@/data/types/courseTypes";

// Module 8: Quantum Art Studio
export const module8: Module = {
  id: "3.1.8",
  title: "Quantum Art Studio",
  description: "Create amazing art with the help of quantum computers!",
  lessons: [
    {
      id: "3.1.8.1",
      title: "Quantum Color Explorer",
      description: "Discover how quantum computers can create and mix colors in strange new ways.",
      content: "Welcome to the Quantum Color Lab! Did you know that quantum computers can work with colors in ways that are completely different from regular computers or even artists with paint?\n\nIn this lesson, you'll learn how quantum computers can create 'superpositions' of colors - where a color can be red AND blue at the same time (not just purple, but actually both colors until we observe it)!\n\nWe'll explore:\n- How colors are represented in quantum systems\n- The strange concept of 'color superposition'\n- How measuring a quantum color causes it to pick just one color\n- Ways that quantum artists might use these weird properties to create new kinds of art\n\nBy the end of this lesson, you'll see colors in a whole new quantum way!",
      type: "reading",
      duration: 15,
      points: 10
    },
    {
      id: "3.1.8.2",
      title: "Quantum Pattern Generator",
      description: "Use quantum algorithms to create beautiful patterns that classical computers can't make!",
      content: "Time to become a quantum artist! In this interactive lesson, you'll use a special quantum pattern generator to create amazing designs that would be difficult or impossible to create with regular computers.\n\nYour quantum pattern generator uses the principles of quantum interference and entanglement to create unique patterns. You'll get to:\n\n1. Set up different quantum circuits that generate patterns\n2. Change parameters to create variations of your designs\n3. Use quantum randomness to add unexpected elements to your art\n4. Save your favorite quantum masterpieces\n\nThe patterns you create aren't just random - they follow the special rules of quantum physics, creating designs with unique symmetries and properties. No two quantum artists will create exactly the same art!",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/quantum-pattern-generator.html",
        height: 600,
        width: "100%"
      },
      duration: 25,
      points: 20
    },
    {
      id: "3.1.8.3",
      title: "Music from Another Dimension",
      description: "Compose music using quantum algorithms and hear what quantum sounds like!",
      content: "Can quantum computers make music? You bet they can! But quantum music might sound very different from what you're used to hearing.\n\nIn this lesson, you'll learn about a quantum music composer that uses quantum algorithms to create melodies, rhythms, and harmonies. You'll discover:\n\n- How quantum randomness can create unpredictable but interesting musical patterns\n- Ways to use quantum entanglement to create connected musical phrases\n- How to translate quantum measurements into musical notes and beats\n- The difference between classical computer music and quantum computer music\n\nThrough audio examples and visualizations, you'll experience what quantum-generated music might sound like - perhaps ethereal compositions that seem to come from another dimension! We'll discuss whether quantum music could become the next big thing in musical composition and performance.",
      type: "video",
      duration: 20,
      points: 15,
      videoUrl: "https://www.youtube.com/watch?v=_4WTBW4O5DI"
    },
    {
      id: "3.1.8.4",
      title: "Quantum Story Generator",
      description: "Create amazing stories with help from a quantum algorithm.",
      content: "Everyone loves a good story, but have you ever had a story created with help from a quantum computer? Today you'll learn about a quantum story generator that can create tales that might be too wild for classical computers to dream up!\n\nIn this reading lesson, we'll explore how you could build a quantum circuit that can generate story elements like:\n- Unusual characters with surprising combinations of traits\n- Unexpected plot twists using quantum randomness\n- Strange new worlds with quantum-inspired features\n- Multiple story paths that exist in superposition until you choose one\n\nYou'll learn about a special kind of quantum algorithm called a 'Quantum Generative Model' that can create new ideas by learning patterns from existing stories, then using quantum properties to make them unique.\n\nThe lesson includes examples of bizarre and fantastic story snippets that might emerge from quantum story generation, showcasing how quantum computing could potentially influence creative writing and narrative design in the future.",
      type: "reading",
      duration: 25,
      points: 20
    }
  ]
};
