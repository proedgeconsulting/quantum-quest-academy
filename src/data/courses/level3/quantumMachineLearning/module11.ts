
import { Module } from "@/data/types/courseTypes";

// Module 11: Quantum Nature Explorer
export const module11: Module = {
  id: "3.1.11",
  title: "Quantum Nature Explorer",
  description: "Use quantum computing to discover secrets of nature!",
  lessons: [
    {
      id: "3.1.11.1",
      title: "Quantum Weather Predictor",
      description: "Learn how quantum computers might help predict weather better than classical computers.",
      content: "Did you know that predicting the weather is one of the hardest problems for computers to solve? That's because weather is super complicated with lots of changing factors like temperature, wind, humidity, and pressure all affecting each other.\n\nIn this lesson, we'll explore how quantum computers might someday help make better weather predictions by:\n- Processing huge amounts of weather data more efficiently\n- Modeling complex relationships between different weather factors\n- Running multiple weather simulations simultaneously using quantum superposition\n- Finding patterns in weather data that classical computers might miss\n\nYou'll get to experiment with a simple quantum weather model that shows how small changes in starting conditions can lead to very different weather outcomes - something scientists call the 'butterfly effect'!\n\nBy the end of this lesson, you'll understand how quantum computing could potentially revolutionize weather forecasting and help us better prepare for storms and other weather events.",
      type: "reading",
      duration: 15,
      points: 10
    },
    {
      id: "3.1.11.2",
      title: "Quantum Molecule Designer",
      description: "Build molecules atom by atom using quantum simulation!",
      content: "Become a quantum chemist and design your own molecules! In this interactive lesson, you'll use a quantum simulator to build and analyze molecular structures.\n\nMolecules are governed by quantum physics, which makes them perfect for quantum computers to simulate. You'll get to:\n1. Build different molecules by arranging atoms\n2. Use a simplified quantum circuit to calculate the molecule's properties\n3. Discover which molecular configurations are stable or unstable\n4. Design molecules with specific properties like flexibility, strength, or reactivity\n\nYou'll learn how quantum computers can model molecules much more accurately than classical computers because they speak the same 'quantum language' that atoms and molecules use in nature.\n\nWho knows? Maybe the molecules you design could inspire future scientists to create new materials, medicines, or clean energy solutions!",
      type: "reading",
      duration: 25,
      points: 20
    },
    {
      id: "3.1.11.3",
      title: "Quantum Animal Tracker",
      description: "Help wildlife scientists track and protect animals using quantum pattern recognition.",
      content: "Wildlife scientists need your help! They're using new quantum technology to track and monitor endangered animals, and they need quantum computing experts like you to help analyze the data.\n\nIn this video lesson, you'll learn about the Quantum Animal Tracking System, which:\n- Collects data from cameras, microphones, and sensors in wildlife habitats\n- Uses quantum pattern recognition to identify different animal species\n- Tracks movement patterns to understand animal behavior\n- Helps predict how animals might respond to changes in their environment\n\nYou'll see how quantum machine learning algorithms can be trained to identify animals from images, sounds, and other data more efficiently than classical algorithms. The lesson includes examples of how this technology is being developed to help conservation efforts around the world.\n\nBy the end, you'll understand how quantum computing could become an important tool for scientists working to protect endangered species and maintain biodiversity.",
      type: "video",
      videoUrl: "https://www.youtube.com/watch?v=LGx_6lBWFCI",
      duration: 20,
      points: 15
    },
    {
      id: "3.1.11.4",
      title: "Quantum Ecosystem Simulator",
      description: "Create and balance your own ecosystem using quantum simulation tools.",
      content: "Ecosystems are incredibly complex with many plants and animals all affecting each other. In this interactive lesson, you'll learn about a quantum ecosystem simulator used to create and manage balanced ecosystems.\n\nA quantum simulator can model the complex relationships between:\n- Different plant species and their growth patterns\n- Herbivores that eat plants\n- Predators that eat herbivores\n- Decomposers that recycle nutrients\n- Weather and climate factors\n\nThe lesson explains how you would start with a simple ecosystem and gradually add more species and environmental factors. Your challenge would be to create a stable ecosystem that can survive different challenges like changes in climate, introduction of new species, or loss of habitat.\n\nYou'll learn how quantum simulators can model multiple possible ecosystem states simultaneously, helping scientists see how small changes might have big effects over time. Through detailed examples and case studies, you'll understand how quantum computing could revolutionize ecological modeling and conservation planning.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/quantum-ecosystem-simulator.html",
        height: 600,
        width: "100%"
      },
      duration: 30,
      points: 25
    }
  ]
};
