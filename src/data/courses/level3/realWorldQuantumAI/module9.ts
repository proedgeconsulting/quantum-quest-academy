
import { Module } from "@/data/types/courseTypes";

// Module 9: Quantum Wildlife Rescue
export const module9: Module = {
  id: "3.2.9",
  title: "Quantum Wildlife Rescue",
  description: "Help endangered animals by applying quantum AI to track, study, and protect wildlife.",
  lessons: [
    {
      id: "3.2.9.1",
      title: "Animal Tracking with Quantum AI",
      description: "Learn how quantum AI can process wildlife camera images to identify and track endangered animals.",
      content: "Join the Wildlife Rescue Team and help save endangered animals using quantum AI! In this lesson, you'll learn how scientists use quantum computing to process thousands of wildlife camera images much faster than traditional computers.\n\nYour mission is to set up a virtual quantum animal tracking system in a rainforest preserve. You'll need to identify different species, track their movements, and count their populations. With quantum AI, you can analyze patterns that might indicate if an animal is in trouble or if their habitat is changing. Get ready to become a quantum wildlife protector!",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/quantum-animal-tracking.html",
        height: 600,
        width: "100%"
      },
      duration: 25,
      points: 100
    },
    {
      id: "3.2.9.2",
      title: "Quantum Migration Mapper",
      description: "Create a quantum-powered system to predict and map animal migration patterns.",
      content: "Animals migrate across the globe following complex patterns that are affected by weather, food availability, and environmental changes. In this activity, you'll build a quantum migration mapper that can predict where animals will go next.\n\nUsing quantum algorithms, your system will analyze data from animal trackers, weather patterns, and satellite images all at once! This helps scientists know where to focus conservation efforts and protect migration routes. Your challenge is to predict the migration paths of birds, sea turtles, and whales. The more accurate your predictions, the more animals you can help!",
      type: "reading",
      duration: 30,
      points: 120
    },
    {
      id: "3.2.9.3",
      title: "Save the Habitat: Quantum Conservation Game",
      description: "Play a strategic game where you use quantum AI to make optimal conservation decisions.",
      content: "A wildlife preserve is facing multiple threats, and you need to make smart decisions to protect it! In this conservation game, you'll use quantum AI to simulate and evaluate different conservation strategies.\n\nYour quantum computer can process complex ecosystems with hundreds of interacting species and environmental factors. This helps you predict the outcomes of different conservation actions, like creating wildlife corridors, removing invasive species, or establishing protected areas. Make the right choices to maintain biodiversity and save endangered species from extinction!",
      type: "reading",
      duration: 25,
      points: 110
    }
  ]
};
