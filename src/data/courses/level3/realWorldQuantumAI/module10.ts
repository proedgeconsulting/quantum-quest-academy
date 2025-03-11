
import { Module } from "@/data/types/courseTypes";

// Module 10: Quantum Space Explorers
export const module10: Module = {
  id: "3.2.10",
  title: "Quantum Space Explorers",
  description: "Use quantum AI to explore space, discover exoplanets, and plan space missions.",
  lessons: [
    {
      id: "3.2.10.1",
      title: "Quantum Exoplanet Hunter",
      description: "Learn how quantum AI helps astronomers discover planets around distant stars.",
      content: "Become a space explorer and hunt for exoplanets—planets outside our solar system! In this exciting lesson, you'll learn how astronomers use quantum AI to detect tiny changes in starlight that indicate planets orbiting around distant stars.\n\nYour mission is to use a quantum telescope simulator to analyze light data from different stars. The quantum computer can process many light patterns simultaneously, helping you spot planets that might be missed by classical computers. Will you discover an Earth-like planet that could potentially support life? The universe is waiting for you to explore it!",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/quantum-exoplanet-hunter.html",
        height: 600,
        width: "100%"
      },
      duration: 25,
      points: 100
    },
    {
      id: "3.2.10.2",
      title: "Mission Control: Quantum Route Planner",
      description: "Plan optimal space mission routes using quantum optimization algorithms.",
      content: "Welcome to Mission Control! You're in charge of planning routes for spacecraft exploring our solar system. This is a perfect job for quantum AI because finding the best route through many planets and moons is extremely complicated.\n\nIn this hands-on activity, you'll use a quantum route planner to design efficient missions that can visit multiple destinations while using the least amount of fuel. You'll learn about quantum optimization algorithms that can solve these 'traveling spacecraft' problems much faster than classical computers. Can you plan the perfect mission to explore the outer planets?",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/quantum-route-planner.html",
        height: 600,
        width: "100%"
      },
      duration: 30,
      points: 120
    },
    {
      id: "3.2.10.3",
      title: "Quantum Space Colony Designer",
      description: "Design a space habitat using quantum AI to optimize life support systems and resources.",
      content: "Humanity is reaching for the stars, and you're designing the space colonies that will take us there! In this creative challenge, you'll use quantum AI to design efficient and sustainable space habitats.\n\nYour quantum computer can simulate complex life support systems, energy production, and resource management all at once. This helps you create space colonies that can support human life while using resources efficiently. Build habitats for the Moon, Mars, or even the moons of Jupiter! Will your design win the Galactic Architecture Award for the best space colony?",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/quantum-colony-designer.html",
        height: 600,
        width: "100%"
      },
      duration: 25,
      points: 110
    }
  ]
};
