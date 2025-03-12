
import { Module } from "@/data/types/courseTypes";

// Module 12: Quantum Error Correction Heroes
export const module12: Module = {
  id: "2.3.12",
  title: "Quantum Error Correction Heroes",
  description: "Become a quantum error correction hero and save the quantum world!",
  lessons: [
    {
      id: "2.3.12.1",
      title: "The Quantum Error Crisis",
      description: "Learn about a global quantum computing crisis caused by mysterious new error patterns.",
      content: "Breaking news: Quantum computers around the world are experiencing unprecedented error rates, threatening critical infrastructure and research projects! In this engaging story-based lesson, you'll learn about a fictional but scientifically grounded quantum computing crisis.\n\nYou'll discover how a sudden increase in quantum errors could impact different sectors of society, from financial systems to medical research. Through compelling narratives and expert perspectives, you'll gain appreciation for the real-world importance of reliable quantum error correction.\n\nThe lesson sets the stage for your role as a quantum error correction hero who will help investigate and address this global crisis in subsequent lessons.",
      type: "reading",
      duration: 20,
      points: 15
    },
    {
      id: "2.3.12.2",
      title: "Quantum Error Detective Agency",
      description: "Establish your detective agency to investigate the source of the quantum error crisis.",
      content: "With the quantum computing world in crisis, it's time to establish your Quantum Error Detective Agency! In this reading lesson (previously interactive), you'll learn about the process of investigating unusual error patterns in quantum systems.\n\nThe lesson explores the methodical approach quantum error detectives would take to:\n\n- Gather data from affected quantum computers around the world\n- Analyze error statistics to identify patterns and anomalies\n- Compare error signatures across different quantum hardware platforms\n- Form and test hypotheses about the source of the errors\n\nThrough detailed explanations and case studies, you'll understand the scientific methodology behind quantum error forensics. You'll learn about advanced diagnostic techniques like tomographic error reconstruction, temporal correlation analysis, and environmental noise spectroscopy.\n\nThe lesson covers how real quantum computing teams investigate unusual error patterns, including the tools and techniques they use to distinguish between hardware failures, environmental interference, and more exotic sources of quantum noise. You'll understand how to interpret error syndromes as clues that can reveal the underlying physical processes affecting quantum systems.\n\nBy the end of this lesson, you'll appreciate the detective work involved in troubleshooting complex quantum systems and have a framework for approaching quantum error investigation methodically.",
      type: "reading",
      duration: 30,
      points: 25
    },
    {
      id: "2.3.12.3",
      title: "Developing the Ultimate Error Correction Strategy",
      description: "Create a comprehensive strategy to address the quantum error crisis.",
      content: "Now that you've identified the source of the quantum error crisis, it's time to develop a solution! In this reading lesson (previously interactive), you'll learn about designing comprehensive error correction strategies for complex, large-scale quantum systems.\n\nWe'll explore a scenario where you must:\n\n- Develop a multi-layered approach to quantum error mitigation and correction\n- Coordinate implementation across diverse quantum hardware platforms\n- Balance immediate fixes with sustainable long-term solutions\n- Account for resource constraints and practical implementation challenges\n\nThrough detailed explanations and strategic frameworks, you'll understand how to approach systemic quantum error problems. You'll learn about hierarchical error correction strategies that combine hardware improvements, error mitigation techniques, and advanced error correction codes.\n\nThe lesson covers methods for evaluating different solution approaches, including simulation-based testing, small-scale prototype implementations, and rigorous performance benchmarking. You'll understand how to translate theoretical error correction concepts into practical implementation plans with clear technical specifications and resource requirements.\n\nBy the end of this lesson, you'll have a sophisticated understanding of strategic quantum error correction planning and the ability to design comprehensive solutions for complex quantum computing challenges.",
      type: "reading",
      duration: 35,
      points: 30
    },
    {
      id: "2.3.12.4",
      title: "Quantum Error Correction Heroes: Final Challenge",
      description: "Implement your solution and save the quantum computing world in this final challenge!",
      content: "The moment of truth has arrived! In this final interactive challenge, you'll implement your quantum error correction solution and attempt to resolve the global quantum computing crisis.\n\nYou'll coordinate a worldwide effort across different quantum computing platforms, carefully monitoring the results of your error correction strategy. As new challenges arise, you'll need to adapt your approach and make critical decisions under pressure.\n\nThis simulation combines everything you've learned throughout the course, testing your technical knowledge, problem-solving skills, and strategic thinking. Can you become the ultimate Quantum Error Correction Hero and save quantum computing?",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Quantum-Message-Rescue.html",
        height: 600,
        width: "100%"
      },
      duration: 45,
      points: 40
    }
  ]
};
