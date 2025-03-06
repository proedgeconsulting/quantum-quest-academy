import { Course } from "@/data/types/courseTypes";

// Level 2 Course: Quantum Circuits
export const quantumCircuitsCourse: Course = {
  id: "2.1",
  title: "Quantum Circuits",
  description: "Learn to build and understand quantum circuits and gates.",
  level: 2,
  duration: "6 weeks",
  icon: "circuit",
  weeks: 6,
  modules: [
    {
      id: "2.1.1",
      title: "Introduction to Quantum Circuits",
      description: "Understand the basics of quantum circuits and how they work.",
      lessons: [
        {
          id: "2.1.1.1",
          title: "What is a Quantum Circuit?",
          description: "Learn about the basics of quantum circuits and their applications.",
          content: "A quantum circuit is a computational model used by quantum computers, similar to how classical computers use logic gates and circuits. However, instead of classical bits that can only be 0 or 1, quantum circuits operate on qubits which can exist in a superposition of states.\n\nIn this course, we'll learn how to design quantum circuits using gates that manipulate qubits in various ways. You'll discover how these circuits can solve problems that would be practically impossible for classical computers.",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "2.1.1.2",
          title: "Quantum Gates: The Building Blocks",
          description: "Explore the fundamental quantum gates that manipulate qubits.",
          content: "Quantum gates are the building blocks of quantum circuits, analogous to logical gates in classical computing. However, unlike classical gates, quantum gates are reversible operations represented by unitary matrices.\n\nIn this lesson, we'll explore the most common quantum gates including:\n\n- The Hadamard (H) gate, which creates superposition\n\n- The Pauli-X, Y, and Z gates, which perform rotations\n\n- The CNOT (Controlled-NOT) gate, which entangles qubits\n\n- The Toffoli gate, which is universal for classical computation",
          type: "video",
          duration: 20,
          points: 15
        },
        {
          id: "2.1.1.3",
          title: "Build Your First Quantum Circuit",
          description: "Interactive activity to build a simple quantum circuit using basic gates.",
          content: "Now it's time to put your knowledge into practice! In this interactive activity, you'll build your first quantum circuit by arranging quantum gates in the correct order.\n\nYou'll create a simple circuit that generates a Bell state, which is one of the simplest examples of quantum entanglement. Follow the step-by-step instructions to place the Hadamard and CNOT gates correctly.",
          type: "interactive",
          interactiveComponent: "BuildAtomActivity", // Reusing existing component for now
          duration: 25,
          points: 20
        },
        {
          id: "2.1.1.4",
          title: "Quantum Circuits Quiz",
          description: "Test your understanding of quantum circuits and gates.",
          content: "Let's check what you've learned about quantum circuits and gates with this quiz.",
          type: "quiz",
          duration: 15,
          points: 25
        }
      ]
    },
    {
      id: "2.1.2",
      title: "Quantum Algorithms",
      description: "Explore fundamental quantum algorithms and their applications.",
      lessons: [
        {
          id: "2.1.2.1",
          title: "Introduction to Quantum Algorithms",
          description: "Learn about the algorithms that give quantum computers their power.",
          content: "Quantum algorithms are specifically designed to run on quantum computers and can solve certain problems much faster than classical algorithms. These algorithms leverage quantum phenomena like superposition and entanglement to achieve a computational advantage.\n\nIn this lesson, we'll introduce the concept of quantum algorithms and why they're important. We'll also discuss the types of problems where quantum algorithms offer a significant speedup compared to classical algorithms.",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "2.1.2.2",
          title: "The Deutsch-Jozsa Algorithm",
          description: "Understand one of the first quantum algorithms that demonstrated quantum advantage.",
          content: "The Deutsch-Jozsa algorithm was one of the first quantum algorithms to show a speedup over classical algorithms for a specific problem. While not particularly useful for real-world applications, it clearly demonstrates the power of quantum computing.\n\nIn this lesson, we'll walk through the algorithm step by step, from problem definition to implementation as a quantum circuit. You'll learn how it uses quantum parallelism to determine a property of a function in just one query that would take multiple queries classically.",
          type: "video",
          duration: 20,
          points: 15
        },
        {
          id: "2.1.2.3",
          title: "Grover's Search Algorithm Simulation",
          description: "Interactive simulation of Grover's quantum search algorithm.",
          content: "Grover's algorithm is a quantum algorithm for searching an unsorted database with quadratic speedup compared to classical algorithms. It's one of the most important quantum algorithms with many potential applications.\n\nIn this interactive activity, you'll explore a simplified simulation of Grover's algorithm. You'll be able to visualize how the algorithm amplifies the probability of finding the correct answer through a process known as amplitude amplification.",
          type: "interactive",
          interactiveComponent: "AtomSimulation", // Reusing existing component for now
          duration: 30,
          points: 25
        },
        {
          id: "2.1.2.4",
          title: "Quantum Algorithms Quiz",
          description: "Test your understanding of quantum algorithms.",
          content: "Let's test your knowledge of quantum algorithms with this comprehensive quiz.",
          type: "quiz",
          duration: 15,
          points: 25
        }
      ]
    },
    {
      id: "2.1.3",
      title: "Quantum Logic Gates",
      description: "Dive deep into the fundamental building blocks of quantum circuits.",
      lessons: [
        {
          id: "2.1.3.1",
          title: "Single-Qubit Gates",
          description: "Master the fundamental gates that manipulate individual qubits.",
          content: "Single-qubit gates are the most basic operations in quantum computing. These gates manipulate the state of individual qubits, rotating them in different ways on the Bloch sphere.\n\nIn this lesson, we'll explore key single-qubit gates including:\n\n- The Hadamard gate (H): Creates superposition by rotating a qubit to an equal probability of |0⟩ and |1⟩\n\n- The Pauli gates (X, Y, Z): Rotate qubits around different axes of the Bloch sphere\n\n- Phase gates (S, T): Apply phase shifts that are critical for quantum algorithms\n\n- Rotation gates (Rx, Ry, Rz): Allow rotation by any angle around the x, y, or z axes\n\nYou'll learn the mathematical representations of these gates as unitary matrices and understand their geometric interpretation on the Bloch sphere. We'll also explore how to combine these gates to create more complex qubit manipulations.",
          type: "reading",
          duration: 20,
          points: 15
        },
        {
          id: "2.1.3.2",
          title: "Multi-Qubit Gates",
          description: "Learn about gates that operate on multiple qubits to create entanglement.",
          content: "Multi-qubit gates are essential for quantum computation as they create entanglement between qubits and enable complex quantum operations that classical computers cannot efficiently simulate.\n\nIn this video lesson, we'll explore important multi-qubit gates such as:\n\n- CNOT (Controlled-NOT): Flips a target qubit if the control qubit is |1⟩, crucial for creating entanglement\n\n- SWAP: Exchanges the states of two qubits\n\n- Toffoli (CCNOT): A three-qubit gate that enables universal classical computation\n\n- Fredkin (Controlled-SWAP): Swaps two qubits conditionally based on a control qubit\n\n- Controlled phase gates: Apply phase shifts conditionally\n\nWe'll demonstrate how these gates create quantum entanglement, a phenomenon with no classical analog, and show examples of quantum circuits that use multiple qubit gates to perform useful operations.",
          type: "video",
          duration: 25,
          points: 20
        },
        {
          id: "2.1.3.3",
          title: "Gate-Based Circuit Designer",
          description: "Build your own quantum circuits using various quantum gates.",
          content: "It's time to put your knowledge of quantum gates into practice! In this interactive session, you'll use our Quantum Circuit Designer to create and test your own quantum circuits.\n\nYou'll be able to:\n\n- Drag and drop different gates onto qubits\n\n- Connect gates to form circuits\n\n- Run simulations to see how your circuit transforms input states\n\n- Visualize the quantum states at each step\n\nStart with simple circuits like creating Bell states and quantum teleportation, then progress to more complex designs. You'll gain hands-on experience with how different gates interact and how to compose them into meaningful quantum algorithms.",
          type: "interactive",
          interactiveComponent: "BuildAtomActivity", // Reusing existing component as placeholder
          duration: 30,
          points: 25
        },
        {
          id: "2.1.3.4",
          title: "Quantum Logic Gates Quiz",
          description: "Test your understanding of quantum gates and their operations.",
          content: "Let's check your understanding of quantum logic gates with this comprehensive quiz. You'll be tested on:\n\n- Identifying gates from their matrix representations\n\n- Predicting the result of applying specific gates to qubits\n\n- Understanding how gates create entanglement\n\n- Determining which combinations of gates create equivalent operations\n\n- Recognizing the appropriate gates for specific quantum operations",
          type: "quiz",
          duration: 15,
          points: 25
        }
      ]
    },
    {
      id: "2.1.4",
      title: "Quantum Circuit Simulation",
      description: "Learn to simulate and visualize quantum circuits on classical computers.",
      lessons: [
        {
          id: "2.1.4.1",
          title: "Principles of Quantum Simulation",
          description: "Understand how classical computers can simulate quantum systems.",
          content: "While quantum computers exploit quantum mechanics to perform calculations, we can use classical computers to simulate smaller quantum systems. This is crucial for developing and testing quantum algorithms before running them on actual quantum hardware.\n\nIn this lesson, you'll learn:\n\n- The mathematical foundations of quantum simulation\n\n- How state vectors and density matrices represent quantum states\n\n- The limitations of classical simulation (why it becomes exponentially harder as qubits increase)\n\n- Various simulation methods and their trade-offs\n\n- When approximation techniques become necessary\n\nWe'll also discuss the boundary between what's efficiently simulable classically and what requires quantum hardware, helping you understand the true advantage of quantum computing.",
          type: "reading",
          duration: 20,
          points: 15
        },
        {
          id: "2.1.4.2",
          title: "Visualizing Quantum States",
          description: "Learn techniques to visualize and understand complex quantum states.",
          content: "Quantum states can be difficult to conceptualize due to their complex, probabilistic nature. In this video lesson, we'll explore various visualization techniques that make quantum states more intuitive.\n\nWe'll cover:\n\n- Bloch sphere representation for single qubits\n\n- Bar charts and heatmaps for displaying probability amplitudes\n\n- Q-sphere visualizations for multi-qubit states\n\n- Density matrix visualizations\n\n- Circuit diagrams and their interpretation\n\nThese visualization techniques are not just educational tools—they're used by quantum researchers to understand the behavior of quantum systems and debug quantum algorithms. By the end of this lesson, you'll be able to interpret these visualizations and use them to understand what's happening in your quantum circuits.",
          type: "video",
          duration: 20,
          points: 15
        },
        {
          id: "2.1.4.3",
          title: "Hands-On Quantum Simulation",
          description: "Use simulation tools to explore the behavior of quantum circuits.",
          content: "In this interactive session, you'll use quantum simulation tools to explore how quantum circuits behave under different conditions. You'll be able to modify circuit parameters, observe the resulting quantum states, and gain intuition about quantum behavior.\n\nYou'll experiment with:\n\n- Simulating the Deutsch-Jozsa algorithm with different oracle functions\n\n- Observing how noise affects quantum teleportation\n\n- Exploring how the number of iterations in Grover's algorithm affects the probability of finding the correct answer\n\n- Testing quantum error correction codes\n\nBy running these simulations and seeing the results firsthand, you'll develop a deeper understanding of quantum algorithms and the challenges of quantum computation.",
          type: "interactive",
          interactiveComponent: "AtomSimulation", // Reusing existing component as placeholder
          duration: 30,
          points: 25
        },
        {
          id: "2.1.4.4",
          title: "Quantum Simulation Quiz",
          description: "Test your understanding of quantum circuit simulation concepts.",
          content: "Let's test your understanding of quantum circuit simulation with this comprehensive quiz. You'll be assessed on:\n\n- The mathematics behind quantum simulation\n\n- Interpreting visualization techniques for quantum states\n\n- Understanding the limitations of classical simulation\n\n- Identifying appropriate simulation methods for different quantum systems\n\n- Analyzing simulation results to draw conclusions about quantum algorithms",
          type: "quiz",
          duration: 15,
          points: 25
        }
      ]
    },
    {
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
        },
        {
          id: "2.1.5.3",
          title: "Implementing Error Mitigation",
          description: "Apply error mitigation techniques to improve quantum circuit performance.",
          content: "In this interactive session, you'll apply various error mitigation techniques to quantum circuits and observe how they improve results.\n\nYou'll work with a simulated noisy quantum environment to:\n\n- Implement zero-noise extrapolation on a simple algorithm\n\n- Design pulse sequences for dynamical decoupling\n\n- Apply readout error mitigation to improve measurement accuracy\n\n- Compare the performance of different mitigation strategies\n\n- Optimize circuit designs to minimize error sensitivity\n\nBy the end of this activity, you'll have practical experience implementing error mitigation techniques that are used in real quantum computing research and applications.",
          type: "interactive",
          interactiveComponent: "BuildAtomActivity", // Reusing existing component as placeholder
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
    },
    {
      id: "2.1.6",
      title: "Quantum Circuit Optimization",
      description: "Learn to design efficient quantum circuits that maximize performance.",
      lessons: [
        {
          id: "2.1.6.1",
          title: "Circuit Depth and Width",
          description: "Understand the critical metrics for quantum circuit performance.",
          content: "Quantum circuit complexity is measured primarily through two metrics: depth (the longest path from input to output) and width (the number of qubits required). Optimizing these metrics is crucial for running algorithms on near-term quantum hardware with limited coherence times and qubit counts.\n\nIn this lesson, you'll learn:\n\n- How circuit depth relates to execution time and error rates\n\n- The trade-offs between depth and width in circuit design\n\n- Techniques to estimate circuit complexity\n\n- How different quantum hardware architectures impose constraints on circuit design\n\n- The relationship between algorithmic complexity and circuit metrics\n\nUnderstanding these fundamental concepts will help you design quantum algorithms that can run effectively on real quantum hardware with its inherent limitations.",
          type: "reading",
          duration: 20,
          points: 15
        },
        {
          id: "2.1.6.2",
          title: "Circuit Transformation Techniques",
          description: "Learn methods to transform circuits into equivalent but more efficient forms.",
          content: "Quantum circuits can often be transformed into equivalent circuits that perform the same computation but with lower depth, fewer gates, or reduced error sensitivity. In this video, we'll explore various transformation techniques used by quantum compiler engineers.\n\nYou'll learn about:\n\n- Gate cancellation: Identifying and removing cancelling operations\n\n- Gate commutation rules: Reordering gates to enable optimizations\n\n- Circuit identities: Replacing sequences of gates with equivalent shorter sequences\n\n- Qubit mapping and routing: Optimizing for specific hardware connectivity\n\n- Approximate transformations: Trading small accuracy losses for significant performance gains\n\nThese techniques are essential for bridging the gap between theoretical quantum algorithms and practical implementations on real quantum hardware.",
          type: "video",
          duration: 25,
          points: 20
        },
        {
          id: "2.1.6.3",
          title: "Quantum Circuit Optimizer",
          description: "Use optimization tools to improve the efficiency of quantum circuits.",
          content: "In this interactive session, you'll work with quantum circuit optimization tools to transform inefficient circuits into more streamlined versions.\n\nYou'll have the opportunity to:\n\n- Analyze circuits to identify optimization opportunities\n\n- Apply various transformation rules to reduce gate count and depth\n\n- Optimize circuits for specific hardware architectures\n\n- Compare the performance of original and optimized circuits\n\n- Create a multi-stage optimization pipeline\n\nThrough this hands-on experience, you'll develop practical skills in quantum circuit optimization that are directly applicable to real-world quantum programming.",
          type: "interactive",
          interactiveComponent: "AtomSimulation", // Reusing existing component as placeholder
          duration: 30,
          points: 25
        },
        {
          id: "2.1.6.4",
          title: "Circuit Optimization Quiz",
          description: "Test your understanding of quantum circuit optimization techniques.",
          content: "Let's check your knowledge of quantum circuit optimization with this comprehensive quiz. You'll be tested on:\n\n- Identifying optimization opportunities in quantum circuits\n\n- Applying appropriate transformation rules for specific situations\n\n- Calculating changes in circuit metrics after optimization\n\n- Understanding the trade-offs involved in different optimization strategies\n\n- Optimizing circuits for specific hardware constraints",
          type: "quiz",
          duration: 15,
          points: 25
        }
      ]
    }
  ]
};
