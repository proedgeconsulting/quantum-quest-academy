
import { Module } from "@/data/types/courseTypes";

// Module 7: Quantum Pattern Detectives
export const module7: Module = {
  id: "3.1.7",
  title: "Quantum Pattern Detectives",
  description: "Become a quantum detective and solve pattern recognition mysteries!",
  lessons: [
    {
      id: "3.1.7.1",
      title: "The Case of the Hidden Patterns",
      description: "Learn how quantum computers can find patterns that are invisible to normal computers.",
      content: "Welcome, Quantum Pattern Detectives! In this adventure, we'll discover how quantum computers can be like super-powered magnifying glasses that help us see hidden patterns in data.\n\nImagine you have thousands of puzzle pieces all mixed up, and you need to sort them. A normal computer might try each piece one by one, but a quantum computer can look at many pieces at the same time!\n\nWe'll explore:\n- How quantum computers use 'superposition' to examine multiple patterns simultaneously\n- Why finding patterns is important for things like weather prediction and discovering new medicines\n- How to think like a quantum detective when searching for clues in data\n\nBy the end of this lesson, you'll understand how quantum computers can help us solve pattern mysteries that might be too difficult for classical computers!",
      type: "reading",
      duration: 15,
      points: 10
    },
    {
      id: "3.1.7.2",
      title: "Quantum Classifier Challenge",
      description: "Help train a quantum computer to recognize different types of space objects!",
      content: "Calling all space explorers! The Intergalactic Space Agency needs your help to train their quantum computer to identify different types of space objects like planets, stars, asteroids, and mysterious objects!\n\nIn this interactive challenge, you'll use a simple quantum neural network to classify different space objects based on their features like size, brightness, and color. You'll get to:\n\n1. Collect training data by observing different space objects\n2. Feed this data to your quantum classifier\n3. Test how well your classifier works on new, unseen space objects\n4. Improve your classifier to make it more accurate\n\nCan you train the quantum computer to correctly identify all the space objects? The future of space exploration depends on you!",
      type: "interactive",
      interactiveComponent: "AtomSimulation",
      duration: 20,
      points: 15
    },
    {
      id: "3.1.7.3",
      title: "The Quantum Animal Sorter",
      description: "Create a quantum program that can identify animals based on their characteristics.",
      content: "Have you ever wanted to create a computer program that can tell the difference between a lion and a house cat, or an eagle and a penguin? In this lesson, you'll build a quantum animal sorter!\n\nYour quantum computer will learn to recognize animals based on features like:\n- How big they are\n- What they eat (plants, meat, or both)\n- Where they live (land, water, or air)\n- If they have fur, feathers, or scales\n\nYou'll train your quantum circuit using examples of animals where you already know the answers, and then test it on new animals to see if it can classify them correctly. The quantum computer uses special 'quantum gates' that help it learn patterns just like your brain does when you learn to recognize animals!\n\nWill your quantum animal sorter be able to correctly identify a platypus? That's one tricky animal to classify!",
      type: "video",
      duration: 20,
      points: 15
    },
    {
      id: "3.1.7.4",
      title: "Quantum Pattern Matching Game",
      description: "Play a game to see if you can beat a quantum computer at finding patterns!",
      content: "It's human vs. quantum computer in this exciting pattern matching game! Can you find patterns faster than a quantum algorithm?\n\nIn this interactive game, you'll be shown a series of patterns, and you'll race against a simulated quantum computer to identify what comes next in the sequence. Sometimes the patterns will be in numbers, sometimes in shapes, colors, or even sounds!\n\nThe game starts simple, but gets more challenging as you progress. The quantum computer uses something called 'Grover's algorithm' which gives it a special advantage in searching through many possibilities quickly.\n\nAs you play, you'll learn:\n- How quantum computers approach pattern recognition problems\n- When quantum computers have advantages over classical ones\n- How to develop your own pattern recognition skills\n\nDo you have what it takes to beat the quantum computer? Let's find out!",
      type: "interactive",
      interactiveComponent: "QuantumCoinSimulator",
      duration: 25,
      points: 20
    }
  ]
};
