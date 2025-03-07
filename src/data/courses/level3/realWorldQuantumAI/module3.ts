
import { Module } from "@/data/types/courseTypes";

// Module 3: Quantum Neural Networks
export const quantumNeuralNetworksModule: Module = {
  id: "3.2.3",
  title: "Quantum Neural Networks",
  description: "Discover how quantum computing enhances neural networks for better pattern recognition.",
  lessons: [
    {
      id: "3.2.3.1",
      title: "Neural Networks: The Quantum Upgrade",
      description: "Learn how quantum properties can make neural networks more powerful.",
      content: "Neural networks are like the brain of AI - they help computers learn from examples just like you learn from experience. In this lesson, we'll explore how adding quantum properties gives neural networks superpowers!\n\nUsing simple examples and colorful visuals, you'll learn how quantum neural networks can process information in entirely new ways. We'll see how they can find connections that regular neural networks might miss, and how scientists are using them to solve complex problems in science, medicine, and more.",
      type: "reading",
      duration: 20,
      points: 50
    },
    {
      id: "3.2.3.2",
      title: "Train Your Quantum Neural Network",
      description: "Build and train a simple quantum neural network to recognize patterns.",
      content: "Get ready to train your very own quantum neural network! In this interactive lesson, you'll build a simple quantum neural network that can recognize different shapes and patterns.\n\nYou'll feed your network example images to train it, and then test how well it can identify new images it hasn't seen before. You'll discover how quantum properties like superposition and entanglement help your network learn more efficiently. Can your quantum neural network tell the difference between cats and dogs, or recognize handwritten numbers? Let's find out!",
      type: "interactive",
      duration: 25,
      points: 100,
      interactiveComponent: "QuantumSimulator"
    },
    {
      id: "3.2.3.3",
      title: "Quantum Image Detective",
      description: "Use a quantum neural network to find hidden details in images that classical networks miss.",
      content: "Become a quantum image detective and find details that regular computers might miss! In this fun activity, you'll use a quantum neural network to analyze images with hidden features or patterns.\n\nYour mission is to detect objects in blurry satellite photos, find camouflaged animals in nature scenes, or spot tiny details in medical images. The quantum neural network can consider many possibilities at once, helping you find things that might be invisible to classical AI. Put your detective skills to the test and see what you can discover!",
      type: "interactive",
      duration: 30,
      points: 120,
      interactiveComponent: "AtomSimulation"
    }
  ]
};

// For backwards compatibility
export const module3 = quantumNeuralNetworksModule;
