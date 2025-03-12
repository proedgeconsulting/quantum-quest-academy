
import { Module } from "@/data/types/courseTypes";

// Module 5: Quantum Error Mitigation
export const module5: Module = {
  id: "2.1.5",
  title: "Quantum Error Mitigation",
  description: "Learn techniques to reduce errors in quantum computations.",
  lessons: [
    {
      id: "2.1.5.1",
      title: "Sources of Quantum Errors",
      description: "Understand the different types of errors that affect quantum computations.",
      content: "Quantum computers are extremely sensitive to noise and environmental interference. This makes error management a central challenge in quantum computing. In this lesson, we'll explore the various sources of errors in quantum systems.\n\nYou'll learn about:\n\n- Decoherence: How quantum systems lose their quantum properties through interaction with the environment\n\n- Gate errors: Imperfections in quantum operations\n\n- Measurement errors: Inaccuracies when reading qubit states\n\n- Crosstalk: Unwanted interactions between qubits\n\n- Thermal noise: How temperature affects quantum systems\n\n- Systematic vs. random errors: Understanding their different impacts and mitigation strategies\n\nBy understanding these error sources, you'll be better prepared to design quantum circuits that are more resilient to real-world imperfections.",
      type: "reading",
      duration: 20,
      points: 15
    },
    {
      id: "2.1.5.2",
      title: "Error Mitigation Techniques",
      description: "Explore strategies to reduce the impact of errors without full error correction.",
      content: "While quantum error correction promises to solve the error problem completely, it requires significant qubit overhead that's beyond current hardware capabilities. Error mitigation techniques offer a more practical alternative for near-term quantum devices.\n\nIn this video, we'll explore various error mitigation strategies including:\n\n- Zero-noise extrapolation: Running circuits at different noise levels and extrapolating to zero noise\n\n- Probabilistic error cancellation: Deliberately introducing errors that cancel out existing ones\n\n- Dynamical decoupling: Using pulse sequences to reduce the impact of environmental noise\n\n- Readout error mitigation: Correcting for measurement errors\n\n- Circuit cutting: Breaking large circuits into smaller, more manageable pieces\n\nThese techniques can significantly improve the accuracy of quantum computations on noisy devices, making it possible to run useful algorithms before full error correction is available.",
      type: "video",
      duration: 25,
      points: 20
      videoUrl:"https://www.youtube.com/watch?v=JCrvxWZEtSY"
    },
    {
      id: "2.1.5.3",
      title: "Implementing Error Mitigation",
      description: "Apply error mitigation techniques to improve quantum circuit performance.",
      content: "In this interactive session, you'll apply various error mitigation techniques to quantum circuits and observe how they improve results.\n\nYou'll work with a simulated noisy quantum environment to:\n\n- Implement zero-noise extrapolation on a simple algorithm\n\n- Design pulse sequences for dynamical decoupling\n\n- Apply readout error mitigation to improve measurement accuracy\n\n- Compare the performance of different mitigation strategies\n\n- Optimize circuit designs to minimize error sensitivity\n\nBy the end of this activity, you'll have practical experience implementing error mitigation techniques that are used in real quantum computing research and applications.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/quantum-error-mitigation.html",
        height: 600,
        width: "100%"
      },
      duration: 30,
      points: 25
    },
    {
      id: "2.1.5.4",
      title: "Error Mitigation Quiz",
      description: "Test your understanding of quantum error sources and mitigation techniques.",
      content: "Let's check your understanding of quantum error mitigation with this comprehensive quiz. You'll be tested on:\n\n- Identifying different sources of quantum errors\n\n- Selecting appropriate mitigation techniques for specific error types\n\n- Understanding the mathematics behind error mitigation methods\n\n- Interpreting results from mitigated circuits\n\n- Comparing the efficiency of different mitigation strategies",
      type: "quiz",
      duration: 15,
      points: 25
    }
  ]
};
