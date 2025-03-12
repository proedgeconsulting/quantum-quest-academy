import { Module } from "@/data/types/courseTypes";

// Module 3: Quantum Logic Gates
export const module3: Module = {
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
      content: "Multi-qubit gates are essential for quantum computation as they create entanglement between qubits and enable complex quantum operations that classical computers cannot efficiently simulate.",
      type: "video",
      duration: 25,
      points: 20,
      videoUrl: "https://www.youtube.com/watch?v=iMjpZwISIlA",
    },
    {
      id: "2.1.3.3",
      title: "Gate-Based Circuit Designer",
      description: "Build your own quantum circuits using various quantum gates.",
      content: "It's time to put your knowledge of quantum gates into practice! In this interactive session, you'll use our Quantum Circuit Designer to create and test your own quantum circuits.\n\nYou'll be able to:\n\n- Drag and drop different gates onto qubits\n\n- Connect gates to form circuits\n\n- Run simulations to see how your circuit transforms input states\n\n- Visualize the quantum states at each step\n\nStart with simple circuits like creating Bell states and quantum teleportation, then progress to more complex designs. You'll gain hands-on experience with how different gates interact and how to compose them into meaningful quantum algorithms.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/quantum-circuit-builder.html",
        height: 600,
        width: "100%"
      },
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
};
