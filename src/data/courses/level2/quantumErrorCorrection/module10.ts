
import { Module } from "@/data/types/courseTypes";

// Module 10: Quantum Error Correction City
export const module10: Module = {
  id: "2.3.10",
  title: "Quantum Error Correction City",
  description: "Build and manage your own quantum error correction systems in a virtual city.",
  lessons: [
    {
      id: "2.3.10.1",
      title: "Building Your First Error Correction Facility",
      description: "Construct a basic quantum error correction system for your city.",
      content: "Welcome to Quantum Error Correction City! In this simulation game, you'll build and manage quantum error correction systems that protect the city's quantum computing infrastructure.\n\nYou'll start by constructing a basic error correction facility that can detect and correct simple errors. You'll need to place encoder stations, syndrome extractors, and correction units in the right configuration to effectively protect quantum information.\n\nAs your facility processes quantum data, you'll earn resources that can be used to upgrade your equipment or expand your facility. But be careful - if too many errors go uncorrected, your facility's reliability rating will drop, and citizens will lose trust in your quantum systems!",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Quantum-Error-City-Builder.html",
        height: 600,
        width: "100%"
      },
      duration: 25,
      points: 20
    },
    {
      id: "2.3.10.2",
      title: "Managing Error Correction Resources",
      description: "Learn to balance resources as you protect your city's quantum computers.",
      content: "Running a quantum error correction facility requires careful resource management! In this lesson, you'll learn how to balance different resources while keeping your city's quantum computers running smoothly.\n\nYou'll need to manage:\n\n- Power: Running quantum error correction requires energy\n\n- Qubits: Physical qubits are limited and must be allocated efficiently\n\n- Processing time: Some correction operations take longer than others\n\n- Staff: Trained quantum engineers are needed to maintain your systems\n\nDifferent error correction codes have different resource requirements, and you'll need to choose the right codes for different situations. As the city grows, you'll face increasing demands on your quantum infrastructure. Can you scale up your error correction systems to meet these challenges while staying within your resource budget?",
      type: "video",
      duration: 15,
      points: 10
    },
    {
      id: "2.3.10.3",
      title: "Upgrading to Advanced Error Correction",
      description: "Implement more sophisticated error correction systems in your quantum city.",
      content: "Your quantum error correction facilities have been running successfully, and now it's time to upgrade to more advanced systems! In this interactive lesson, you'll research and implement sophisticated error correction codes like surface codes.\n\nYou'll redesign your facilities to implement these advanced codes, which offer better protection but require more qubits and more complex syndrome extraction. You'll need to carefully test your new systems before fully deploying them across the city.\n\nAs you upgrade, you'll face new challenges like correlated errors that affect multiple qubits simultaneously or adaptive noise that seems to learn from your correction patterns. Your advanced error correction systems will need to be both powerful and flexible to handle these sophisticated error models.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Advanced-Error-Correction.html",
        height: 600,
        width: "100%"
      },
      duration: 30,
      points: 25
    },
    {
      id: "2.3.10.4",
      title: "Quantum Error Correction City Competition",
      description: "Compete with other cities to build the most efficient error correction system.",
      content: "The annual Quantum City Competition has arrived! Cities from around the world are competing to demonstrate the most efficient and reliable quantum error correction systems, and your city is participating.\n\nIn this challenge, you'll optimize your quantum error correction infrastructure to achieve the highest score across multiple categories: error correction effectiveness, resource efficiency, processing speed, and scalability.\n\nYou'll have a limited budget to make final improvements to your systems before the competition begins. During the competition, all cities will face the same sequence of quantum computing tasks and error patterns. Your city's performance will be measured and scored in real-time, with a live leaderboard showing your ranking. Can your city become the world champion of quantum error correction?",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/City-Competition.html",
        height: 600,
        width: "100%"
      },
      duration: 35,
      points: 30
    }
  ]
};
