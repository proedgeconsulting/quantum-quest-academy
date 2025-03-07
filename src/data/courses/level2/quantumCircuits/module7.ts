
import { Module } from "@/data/types/courseTypes";

// Module 7: Quantum Circuit Builder
export const module7: Module = {
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
      videoUrl: "https://www.youtube.com/watch?v=7MdEHsRZxvo"
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
};
