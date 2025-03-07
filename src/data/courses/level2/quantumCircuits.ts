import { Course } from "@/data/types/courseTypes";

// Level 2 Course: Quantum Circuits
export const quantumCircuitsCourse: Course = {
  id: "2.1",
  title: "Quantum Circuits",
  description: "Learn to build and understand quantum circuits and gates.",
  level: 2,
  duration: "12 weeks",
  icon: "circuit",
  weeks: 12,
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
          interactiveComponent: "BuildAtomActivity",
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
          interactiveComponent: "AtomSimulation",
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
          interactiveComponent: "BuildAtomActivity",
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
          interactiveComponent: "AtomSimulation",
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
          interactiveComponent: "BuildAtomActivity",
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
          interactiveComponent: "AtomSimulation",
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
    },
    {
      id: "2.1.7",
      title: "Quantum Circuit Builder",
      description: "Create your own quantum circuits in a fun, interactive environment.",
      lessons: [
        {
          id: "2.1.7.1",
          title: "Circuit Building Blocks",
          description: "Learn about the essential components of a quantum circuit.",
          content: "Welcome to the Quantum Circuit Builder! In this module, you'll learn how to build your own quantum circuits using simple building blocks. Think of quantum circuits like LEGO sets - you connect different pieces to create something amazing!\n\nWe'll start by exploring the basic components:\n\n- Qubits: The quantum version of classical bits\n\n- Quantum gates: Special operations that change qubit states\n\n- Measurement: How we read the final results\n\nBy the end of this lesson, you'll understand how these components work together to make a complete quantum circuit.",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "2.1.7.2",
          title: "Drag and Drop Circuit Creator",
          description: "Build quantum circuits by dragging and dropping components.",
          content: "Time to get creative! In this interactive activity, you'll use our drag-and-drop interface to build your own quantum circuits. It's as easy as playing a video game!\n\nYou'll start with a blank canvas and a toolbox of quantum components. Drag qubits onto your circuit, add gates to manipulate them, and place measurement tools to see the results. As you build, you'll see your circuit come to life with animations showing how the quantum states change.\n\nTry completing the circuit challenges to unlock new components and achievements!",
          type: "interactive",
          interactiveComponent: "BuildAtomActivity",
          duration: 25,
          points: 20
        },
        {
          id: "2.1.7.3",
          title: "Circuit Challenge: Bell State",
          description: "Create your first useful quantum circuit - a Bell state generator.",
          content: "Ready for your first real quantum circuit challenge? In this activity, you'll build a circuit that creates a Bell state - one of the simplest and most important examples of quantum entanglement.\n\nYour mission is to entangle two qubits so they become connected in a special way. When you measure one qubit, you'll instantly know the state of the other, no matter how far apart they might be!\n\nFollow the step-by-step instructions to place a Hadamard gate on the first qubit, then use a CNOT gate to connect the two qubits. When you're done, run your circuit and see the magic of quantum entanglement in action!",
          type: "video",
          duration: 15,
          points: 15,
          videoUrl: "https://www.youtube.com/embed/FjHJ7FjgL34"
        },
        {
          id: "2.1.7.4",
          title: "Circuit Builder Quiz",
          description: "Test your understanding of quantum circuit building.",
          content: "Let's check what you've learned about building quantum circuits!",
          type: "quiz",
          duration: 10,
          points: 20
        }
      ]
    },
    {
      id: "2.1.8",
      title: "Quantum Games Arena",
      description: "Play fun games that teach quantum circuit concepts.",
      lessons: [
        {
          id: "2.1.8.1",
          title: "Quantum Gate Puzzles",
          description: "Solve puzzles by applying the right quantum gates in the right order.",
          content: "Welcome to the Quantum Gate Puzzles! In this game, you'll be given quantum puzzles to solve using different gates. Each puzzle has a starting quantum state and a target state - your job is to figure out which gates to apply (and in what order) to transform the starting state into the target state.\n\nIt's like figuring out the right combination of moves to solve a Rubik's Cube, but with quantum states! As you progress, the puzzles will get more challenging, requiring you to use more complex combinations of gates.",
          type: "interactive",
          interactiveComponent: "AtomSimulation",
          duration: 20,
          points: 15
        },
        {
          id: "2.1.8.2",
          title: "Quantum Circuit Race",
          description: "Race against time to build the most efficient quantum circuits.",
          content: "3... 2... 1... GO! In the Quantum Circuit Race, you'll compete against the clock to build quantum circuits that solve specific problems. But there's a twist - you need to use as few gates as possible!\n\nIn quantum computing, simpler circuits are usually better because they have less chance of errors. Your score will depend on both how quickly you solve the problem and how efficient your solution is. Can you find the optimal circuit design for each challenge?",
          type: "interactive",
          interactiveComponent: "BuildAtomActivity",
          duration: 20,
          points: 20
        },
        {
          id: "2.1.8.3",
          title: "Quantum Error Defenders",
          description: "Defend your quantum circuit from error monsters that want to ruin your computation.",
          content: "Oh no! Error monsters are attacking your quantum circuit! In this exciting game, you'll defend your quantum computation from different types of error monsters that try to flip your qubits or change their phases.\n\nYou'll learn about different types of quantum errors and how to protect against them using special error correction codes. Deploy your quantum error correction shields at the right time and place to keep your computation safe. Can you complete the calculation before the errors take over?",
          type: "interactive",
          interactiveComponent: "AtomSimulation",
          duration: 25,
          points: 20
        },
        {
          id: "2.1.8.4",
          title: "Quantum Games Quiz",
          description: "Test your understanding of the quantum concepts behind the games.",
          content: "Let's check what you've learned while playing quantum games!",
          type: "quiz",
          duration: 10,
          points: 15
        }
      ]
    },
    {
      id: "2.1.9",
      title: "Quantum Teleportation Adventure",
      description: "Learn how quantum teleportation works through a space-themed adventure.",
      lessons: [
        {
          id: "2.1.9.1",
          title: "The Quantum Teleportation Mission",
          description: "Join a space mission that requires quantum teleportation to succeed.",
          content: "Attention space cadets! You've been selected for a special mission to save a stranded spacecraft on the other side of an asteroid field. The only way to send the rescue codes is through quantum teleportation!\n\nIn this adventure, you'll learn about quantum teleportation - a real quantum protocol that uses entanglement to transfer quantum information from one place to another. It's not like the teleportation you see in science fiction movies, but it's just as amazing in its own way!",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "2.1.9.2",
          title: "Building the Teleportation Circuit",
          description: "Learn how to build a quantum circuit that performs teleportation.",
          content: "Now that you understand the mission, it's time to build the quantum teleportation circuit! This special circuit will allow you to transfer the quantum state of one qubit to another qubit far away, using the power of entanglement and some clever quantum operations.\n\nIn this video, we'll walk through the steps to build a quantum teleportation circuit:\n\n1. Creating an entangled pair of qubits\n\n2. Performing a Bell measurement\n\n3. Applying the right quantum operations based on the measurement results\n\nPay close attention to each step - you'll need this knowledge to complete your space mission!",
          type: "video",
          duration: 20,
          points: 15,
          videoUrl: "https://www.youtube.com/embed/FjHJ7FjgL34"
        },
        {
          id: "2.1.9.3",
          title: "Quantum Teleportation Simulator",
          description: "Use a simulator to perform quantum teleportation and save the spacecraft.",
          content: "The stranded spacecraft is waiting for your help! In this interactive activity, you'll use our quantum teleportation simulator to send the rescue codes through space.\n\nYou'll prepare the quantum state that contains the rescue code, create entangled qubits to establish the quantum channel, perform the necessary measurements, and apply the correct operations to complete the teleportation process. Watch in amazement as your quantum state disappears from one qubit and appears on another!\n\nWill you successfully teleport the rescue codes and save the day?",
          type: "interactive",
          interactiveComponent: "AtomSimulation",
          duration: 25,
          points: 25
        },
        {
          id: "2.1.9.4",
          title: "Teleportation Adventure Quiz",
          description: "Test your understanding of quantum teleportation.",
          content: "Let's check what you've learned about quantum teleportation!",
          type: "quiz",
          duration: 10,
          points: 20
        }
      ]
    },
    {
      id: "2.1.10",
      title: "Quantum Detective Agency",
      description: "Solve mysteries using quantum circuits as a quantum detective.",
      lessons: [
        {
          id: "2.1.10.1",
          title: "The Quantum Detective",
          description: "Learn how quantum algorithms can help solve mysteries.",
          content: "Welcome to the Quantum Detective Agency! As a quantum detective, you'll use special quantum circuits to solve mysteries that would be difficult or impossible to solve using classical methods.\n\nIn this lesson, you'll learn about quantum search algorithms that can find clues hidden in large databases much faster than classical search methods. You'll discover how quantum superposition and interference can help you narrow down suspects and find the solution to complex mysteries.",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "2.1.10.2",
          title: "The Case of the Hidden Message",
          description: "Use a quantum oracle to find a hidden message.",
          content: "Your first case as a quantum detective has arrived! Someone has hidden an important message in a quantum database, and you need to find it using a special quantum circuit called Grover's algorithm.\n\nIn this video, we'll explain how Grover's algorithm works like a quantum flashlight that gradually brightens the location of the hidden message. You'll learn about quantum oracles (special circuits that recognize the right answer) and how quantum amplitude amplification can make the correct answer stand out from all the wrong answers.",
          type: "video",
          duration: 15,
          points: 15,
          videoUrl: "https://www.youtube.com/embed/FjHJ7FjgL34"
        },
        {
          id: "2.1.10.3",
          title: "Solving the Quantum Mystery",
          description: "Build and run a circuit to solve a quantum detective case.",
          content: "Time to put your quantum detective skills to the test! In this interactive activity, you'll build a quantum circuit using Grover's algorithm to solve a mystery.\n\nThe mystery involves finding which of 16 suspects committed the crime. A classical detective would need to check up to all 16 suspects one by one, but as a quantum detective, you can find the culprit much faster using your quantum circuit. \n\nFollow the step-by-step instructions to build your quantum search circuit, run it, and measure the results to identify the culprit. How quickly can you solve the case?",
          type: "interactive",
          interactiveComponent: "BuildAtomActivity",
          duration: 25,
          points: 25
        },
        {
          id: "2.1.10.4",
          title: "Quantum Detective Quiz",
          description: "Test your understanding of quantum search algorithms.",
          content: "Let's check what you've learned about being a quantum detective!",
          type: "quiz",
          duration: 10,
          points: 20
        }
      ]
    },
    {
      id: "2.1.11",
      title: "Quantum Music Maker",
      description: "Create music using quantum circuits and interference.",
      lessons: [
        {
          id: "2.1.11.1",
          title: "Quantum Harmonies",
          description: "Discover the connection between quantum interference and music.",
          content: "Did you know that quantum physics and music have something amazing in common? Both use waves and interference to create beautiful patterns!\n\nIn this lesson, you'll learn how quantum interference works - when quantum waves meet, they can enhance each other (constructive interference) or cancel each other out (destructive interference), creating patterns just like sound waves do in music.\n\nWe'll explore how these quantum interference patterns can be used to create unique musical compositions that would be difficult to imagine without quantum physics.",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "2.1.11.2",
          title: "Quantum Music Circuits",
          description: "Learn how to design quantum circuits that produce musical patterns.",
          content: "Now it's time to see how quantum circuits can create music! In this video, we'll show you how different quantum gates create different interference patterns, which we can map to musical notes and rhythms.\n\nYou'll learn about:\n\n- How the Hadamard gate creates a musical superposition\n\n- How phase gates adjust the 'tone' of quantum notes\n\n- How entangling gates create harmonies between quantum notes\n\n- How measurement turns quantum possibilities into actual musical sequences\n\nBy the end of this video, you'll understand how quantum circuits can be transformed into unique musical experiences.",
          type: "video",
          duration: 15,
          points: 15,
          videoUrl: "https://www.youtube.com/embed/FjHJ7FjgL34"
        },
        {
          id: "2.1.11.3",
          title: "Create Your Quantum Symphony",
          description: "Use a quantum music generator to compose your own quantum-inspired music.",
          content: "It's time to become a quantum composer! In this interactive activity, you'll use our Quantum Music Maker to create your own musical compositions based on quantum circuits.\n\nStart by designing a quantum circuit with different gates and qubit configurations. As you build your circuit, you'll hear how each element affects the music. The quantum interference patterns will create melodies, harmonies, and rhythms that change based on your circuit design.\n\nExperiment with different quantum gates to find the sound you like best, then save your quantum symphony to share with friends and family!",
          type: "interactive",
          interactiveComponent: "AtomSimulation",
          duration: 25,
          points: 20
        },
        {
          id: "2.1.11.4",
          title: "Quantum Music Quiz",
          description: "Test your understanding of quantum interference and music.",
          content: "Let's check what you've learned about quantum music making!",
          type: "quiz",
          duration: 10,
          points: 15
        }
      ]
    },
    {
      id: "2.1.12",
      title: "Quantum Circuit Challenge",
      description: "Put all your quantum circuit knowledge to the test in a final challenge.",
      lessons: [
        {
          id: "2.1.12.1",
          title: "Preparing for the Challenge",
          description: "Review key quantum circuit concepts before the final challenge.",
          content: "The ultimate Quantum Circuit Challenge awaits! Before you begin, let's review the key concepts you've learned throughout this course:\n\n- Quantum gates: Hadamard, Pauli-X/Y/Z, CNOT, and others\n\n- Quantum algorithms: Deutsch-Jozsa, Grover's search, quantum teleportation\n\n- Circuit design principles: minimizing depth and width, error mitigation\n\n- Quantum phenomena: superposition, entanglement, interference\n\nMake sure you understand these concepts well - you'll need them all to complete the final challenge!",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "2.1.12.2",
          title: "The Quantum Challenge Explained",
          description: "Learn about the multi-part quantum circuit challenge.",
          content: "The Quantum Circuit Challenge consists of three increasingly difficult tasks that will test your understanding of quantum circuits. In this video, we'll explain each part of the challenge:\n\n1. The Identity Quest: Create a circuit that starts with a certain quantum state and ends with the same state, despite all the transformations in between.\n\n2. The Entanglement Puzzle: Design a circuit that entangles multiple qubits in a specific pattern.\n\n3. The Algorithm Adventure: Implement a simple quantum algorithm that solves a practical problem.\n\nListen carefully to the requirements for each part - understanding the challenge is the first step to solving it!",
          type: "video",
          duration: 15,
          points: 15,
          videoUrl: "https://www.youtube.com/embed/FjHJ7FjgL34"
        },
        {
          id: "2.1.12.3",
          title: "Quantum Circuit Challenge",
          description: "Complete the multi-part quantum circuit challenge.",
          content: "The time has come to prove your quantum circuit mastery! In this interactive challenge, you'll work through the three tasks we discussed in the previous lesson.\n\nYou'll have access to all the quantum gates and tools you've learned about throughout the course. For each task, you'll build a quantum circuit that meets the specified requirements, test it to make sure it works correctly, and then submit your solution.\n\nThere may be multiple ways to solve each challenge - try to find the most elegant solution! Can you complete all three parts of the challenge and earn your Quantum Circuit Master badge?",
          type: "interactive",
          interactiveComponent: "BuildAtomActivity",
          duration: 30,
          points: 30
        },
        {
          id: "2.1.12.4",
          title: "Final Quantum Circuits Quiz",
          description: "Test your comprehensive understanding of quantum circuits.",
          content: "Congratulations on completing the Quantum Circuit Challenge! Now, let's check your overall understanding of quantum circuits with this final comprehensive quiz. It will cover all the topics you've learned throughout the course, from basic gates to complex algorithms.",
          type: "quiz",
          duration: 15,
          points: 25
        }
      ]
    }
  ]
};
