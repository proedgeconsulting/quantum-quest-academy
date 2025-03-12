
import { Module } from "@/data/types/courseTypes";

// Module 10: Quantum Error Correction City
export const module10: Module = {
  id: "2.3.10",
  title: "Quantum Error Correction City",
  description: "Building and maintaining a city-sized quantum computer with error correction.",
  lessons: [
    {
      id: "2.3.10.1",
      title: "Building Your First Error Correction Center",
      description: "Start your quantum city by building the first error correction facility.",
      content: "Welcome to Quantum City, where you'll build and manage a city-sized quantum computer with comprehensive error correction! In this reading lesson (previously interactive), you'll learn about designing your first quantum error correction facility.\n\nWe'll explore a detailed scenario where you must:\n\n- Analyze the needs of your quantum city and identify the most critical error correction requirements\n- Select an appropriate location and design for your error correction center\n- Allocate resources for different types of error detection and correction systems\n- Balance immediate needs with future expansion possibilities\n\nThrough comprehensive explanations and illustrated diagrams, you'll learn about the components needed for a functional error correction system - from physical qubit arrays to syndrome extraction circuits and classical processing units for decoding.\n\nThe lesson covers architectural principles for quantum error correction facilities, including modular design approaches that allow for incremental scaling, redundancy strategies for fault tolerance, and integration patterns for connecting with the rest of the quantum computing infrastructure.\n\nYou'll understand how different error correction codes require different physical layouts and resource allocations, and how to make informed decisions based on the specific needs of your quantum computing applications.\n\nBy the end of this lesson, you'll have a comprehensive understanding of the considerations that go into designing large-scale quantum error correction systems.",
      type: "reading",
      duration: 30,
      points: 25
    },
    {
      id: "2.3.10.2",
      title: "Managing Error Correction Resources",
      description: "Balance resources and optimize your quantum city's error correction infrastructure.",
      content: "As your quantum city grows, managing error correction resources becomes increasingly complex. In this reading lesson (previously interactive), you'll learn about the challenges of resource management in large-scale quantum error correction systems.\n\nWe'll explore scenarios where you must:\n\n- Allocate limited resources (physical qubits, classical computing power, etc.) across different parts of your quantum city\n- Make strategic decisions about which quantum operations receive the highest levels of error protection\n- Develop maintenance schedules that minimize downtime while ensuring system reliability\n- Implement dynamic resource allocation that responds to changing error patterns and computing needs\n\nThrough detailed explanations and real-world examples, you'll understand the economics and logistics of quantum error correction at scale. You'll learn about quantitative methods for assessing error correction performance and making data-driven resource allocation decisions.\n\nThe lesson covers advanced topics like error correction overhead analysis, threshold optimization for different computing tasks, and scaling strategies for million-qubit systems. We'll discuss how classical computing resources for decoding error syndromes can become a bottleneck, and strategies for efficient parallel decoding.\n\nBy the end of this lesson, you'll have a sophisticated understanding of the resource management challenges in large-scale quantum error correction and strategies for addressing them effectively.",
      type: "reading",
      duration: 30,
      points: 25
    },
    {
      id: "2.3.10.3",
      title: "Upgrading to Advanced Error Correction",
      description: "Transition your quantum city to more sophisticated error correction techniques.",
      content: "As quantum technologies advance, your city needs to upgrade its error correction infrastructure to keep pace. In this reading lesson (previously interactive), you'll learn about the process of transitioning from basic to advanced error correction techniques in a large-scale quantum system.\n\nThe lesson explores the challenges and strategies involved in:\n\n- Evaluating when it's time to upgrade your error correction systems\n- Comparing the costs and benefits of different advanced error correction codes\n- Planning and executing upgrades with minimal disruption to ongoing quantum operations\n- Integrating new error correction techniques with existing infrastructure\n\nThrough detailed explanations and case studies, you'll understand the technical and logistical aspects of major error correction upgrades. You'll learn about migration strategies like parallel operation periods, incremental deployment, and fallback mechanisms to manage risk during transitions.\n\nWe'll cover advanced topics like converting between different code representations, transversal operation compatibility between codes, and designing universal adaptors for connecting different error correction domains.\n\nBy the end of this lesson, you'll appreciate the complexity of evolving quantum error correction infrastructure and have a framework for planning successful technology transitions in large-scale quantum systems.",
      type: "reading",
      duration: 35,
      points: 30
    },
    {
      id: "2.3.10.4",
      title: "Quantum Error Correction City Competition",
      description: "Compete with other quantum cities to build the most reliable quantum computing infrastructure.",
      content: "The annual Quantum City Competition has arrived! Cities from around the world are competing to demonstrate the most efficient and reliable quantum computing infrastructure. In this interactive simulation, you'll put your quantum error correction expertise to the test against other competitors.\n\nYou'll have a limited budget to design, build, and optimize your quantum city's error correction systems. During the competition, your city will face a series of increasingly difficult quantum computing challenges - from simple algorithms to complex simulations. The city with the most reliable results will be crowned the champion!",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Quantum-Message-Rescue.html",
        height: 600,
        width: "100%"
      },
      duration: 40,
      points: 35
    }
  ]
};
