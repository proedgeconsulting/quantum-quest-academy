import { Module } from "@/data/types/courseTypes";

// Module 4: Entanglement and Quantum Information
export const module4: Module = {
  id: "2.2.4",
  title: "Entanglement and Quantum Information",
  description: "Learn how entanglement relates to quantum information processing.",
  lessons: [
    {
      id: "2.2.4.1",
      title: "Quantum Information Theory",
      description: "Explore the basics of quantum information theory and its relation to entanglement.",
      content: "Quantum information theory is the study of how quantum mechanics affects the processing and transmission of information. Entanglement plays a central role in quantum information theory, enabling new ways to encode, transmit, and process information that are impossible in classical information theory.\n\nIn this lesson, we'll explore the basic concepts of quantum information theory, including qubits, quantum entropy, and quantum channels. We'll discuss how entanglement can be used to increase the capacity of quantum channels and enable secure quantum communication.",
      type: "reading",
      duration: 20,
      points: 15
    },
    {
      id: "2.2.4.2",
      title: "Superdense Coding",
      description: "Learn how entanglement enables the transmission of two classical bits using only one qubit.",
      content: "Superdense coding is a quantum communication protocol that allows two classical bits of information to be transmitted using only one qubit, provided that the sender and receiver share a pre-existing entangled state. This protocol demonstrates the power of entanglement to enhance communication efficiency.\n\nIn this lesson, we'll walk through the superdense coding protocol step by step, explaining how it works and why it's important. We'll explore how the protocol uses entanglement to encode two classical bits into a single qubit, and discuss its applications in quantum communication networks.",
      type: "video",
      duration: 25,
      points: 20
    },
    {
      id: "2.2.4.3",
      title: "Entanglement Distillation",
      description: "Learn about purifying entangled states through interactive simulation.",
      content: "In this hands-on activity, you'll learn about entanglement distillation - a crucial process for quantum networks. You'll use our simulator to take multiple imperfect entangled pairs and distill them into fewer, but more highly entangled pairs.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Entanglement-Distillation.html",
        height: 600,
        width: "100%"
      },
      duration: 25,
      points: 20
    },
    {
      id: "2.2.4.4",
      title: "Quantum Information Quiz",
      description: "Test your knowledge of quantum information theory and entanglement.",
      content: "Let's test your understanding of quantum information theory and how it relates to entanglement!",
      type: "quiz",
      duration: 15,
      points: 20
    }
  ]
};
