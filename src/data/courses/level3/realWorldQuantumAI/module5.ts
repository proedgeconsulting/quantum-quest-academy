
import { Module } from "@/data/types/courseTypes";

// Module 5: Quantum Generative Models
export const quantumGenerativeModelsModule: Module = {
  id: "3.2.5",
  title: "Quantum Generative Models",
  description: "Learn how quantum computers can help AI create new content and designs.",
  lessons: [
    {
      id: "3.2.5.1",
      title: "Creative Quantum AI",
      description: "Discover how quantum generative models can create art, music, and more.",
      content: "Can AI be creative? In this fascinating lesson, we'll explore how quantum computers are helping AI generate new content that's never existed before! From artwork and music to new molecular designs, quantum generative models are pushing the boundaries of AI creativity.\n\nYou'll learn how quantum computers can explore vastly more possibilities than classical computers, helping AI come up with more unique and innovative creations. We'll look at examples of quantum-enhanced art, music composition, and even drug discovery, showing how these creative AIs might change our world.",
      type: "reading",
      duration: 20,
      points: 50
    },
    {
      id: "3.2.5.2",
      title: "Quantum Music Composer",
      description: "Create a quantum AI that can compose original music in different styles.",
      content: "Become a quantum music producer! In this fun activity, you'll build a quantum generative model that can compose original music in different styles, from classical to pop to electronic.\n\nYour quantum AI will learn patterns from existing music and then use quantum superposition to explore countless musical possibilities simultaneously. You can guide your AI by selecting instruments, tempo, and musical style, then listen to the unique compositions it creates. Will your quantum composer create the next hit song? Let's make some quantum music!",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/quantum-music-composer.html",
        height: 600,
        width: "100%"
      },
      duration: 25,
      points: 100
    },
    {
      id: "3.2.5.3",
      title: "Quantum Fashion Designer",
      description: "Use quantum generative models to create unique fashion designs.",
      content: "Step into the shoes of a quantum fashion designer! In this creative challenge, you'll use quantum generative models to create unique clothing designs that have never been seen before.\n\nYour quantum AI will analyze thousands of existing fashion designs and then use quantum computing to explore new combinations of colors, patterns, and styles. You can guide the creative process by selecting different design elements and seeing what your quantum AI comes up with. Who knows - your quantum-generated design might become the next fashion trend!",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/quantum-fashion-designer.html",
        height: 600,
        width: "100%"
      },
      duration: 30,
      points: 120
    }
  ]
};

// For backwards compatibility
export const module5 = quantumGenerativeModelsModule;
