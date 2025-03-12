
import { Module } from "@/data/types/courseTypes";

// Module 12: Course Review and Future Directions
export const module12: Module = {
  id: "2.2.12",
  title: "Course Review and Future Directions",
  description: "Review key concepts from the course and explore emerging research in quantum entanglement.",
  lessons: [
    {
      id: "2.2.12.1",
      title: "Course Review",
      description: "Recap the key concepts and insights from the course.",
      content: "In this lesson, we'll review the key concepts and insights from the entire course on quantum entanglement. We'll revisit the mathematical formalism of entanglement, Bell inequalities and nonlocality, entanglement measures, entanglement in quantum information and computation, multipartite entanglement, and applications in various fields.\n\nThis recap will help consolidate your understanding of quantum entanglement and how it relates to various aspects of quantum science and technology. We'll also address some common misconceptions about entanglement and clarify subtle points that may have been challenging during the course.",
      type: "reading",
      duration: 30,
      points: 25
    },
    {
      id: "2.2.12.2",
      title: "Frontier Research in Entanglement",
      description: "Learn about current research frontiers in quantum entanglement.",
      content: "Quantum entanglement remains an active area of research with many open questions and exciting new directions. In this lesson, we'll survey some of the cutting-edge research topics in quantum entanglement, including:\n\n- Entanglement in gravity and spacetime, including the ER=EPR conjecture and holographic entanglement entropy\n\n- Resource theories of entanglement and their applications\n\n- Entanglement in quantum many-body systems and its connections to quantum field theory\n\n- Novel experimental platforms for generating and manipulating entanglement\n\n- Device-independent protocols based on quantum nonlocality\n\nThis lesson will give you a glimpse of the forefront of research in quantum entanglement and potential future developments in the field.",
      type: "video",
      duration: 25,
      points: 20,
      videoUrl: "https://www.youtube.com/watch?v=qa2yPE0QlZY"
    },
    {
      id: "2.2.12.3",
      title: "Quantum Heroes Match-Up",
      description: "Test your knowledge of quantum entanglement concepts in this interactive game.",
      content: "In this fun interactive game, you'll match key quantum entanglement concepts with their proper descriptions and applications. This activity will help reinforce your understanding of the main ideas from the course while providing an enjoyable review experience.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Quantum-Heroes-Match-Up.html",
        height: 600,
        width: "100%"
      },
      duration: 20,
      points: 15
    },
    {
      id: "2.2.12.4",
      title: "Final Course Assessment",
      description: "Demonstrate your mastery of quantum entanglement concepts.",
      content: "This comprehensive assessment covers all the key topics from the course on quantum entanglement. Successfully completing this assessment will demonstrate your thorough understanding of quantum entanglement and its applications.",
      type: "quiz",
      duration: 45,
      points: 50
    }
  ]
};
