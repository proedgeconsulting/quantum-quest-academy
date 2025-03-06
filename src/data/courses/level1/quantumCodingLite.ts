
import { Course } from "@/data/types/courseTypes";

// Level 1 Course: Quantum Coding Lite
export const quantumCodingLiteCourse: Course = {
  id: "1.3",
  title: "Quantum Coding Lite",
  description: "Write your first programs to control quantum systems.",
  level: 1,
  duration: "4 weeks",
  icon: "code",
  weeks: 4,
  modules: [
    {
      id: "1.3.1",
      title: "First Steps in Quantum Programming",
      description: "Learn the basics of programming quantum computers with simplified syntax.",
      lessons: [
        {
          id: "1.3.1.1",
          title: "Introduction to Quantum Programming",
          description: "Discover what makes quantum programming different from classical programming.",
          content: "Welcome to your first steps in quantum programming! Unlike classical computers that use bits (0s and 1s), quantum computers use quantum bits or 'qubits' which can exist in multiple states simultaneously thanks to superposition.\n\nIn this course, we'll use a simplified programming syntax to help you understand quantum concepts without getting lost in complex mathematics or syntax. Think of it as learning to drive a car before understanding how the engine works!\n\nQuantum programming introduces several key concepts that don't exist in classical programming:\n\n1. **Superposition**: Qubits can be in multiple states at once\n2. **Entanglement**: Qubits can be connected in ways that their states become dependent on each other\n3. **Interference**: Quantum states can interfere with each other, enhancing or canceling out probabilities\n\nBy the end of this module, you'll write simple quantum programs that demonstrate these unique features!",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "1.3.1.2",
          title: "Your First Quantum Bit",
          description: "Learn how to create and manipulate qubits in code.",
          content: "Let's create our first qubit! In quantum programming, we start with qubits in a known state (usually |0⟩, pronounced 'ket 0'). Then we apply operations, called 'gates', to manipulate them.\n\nThe most basic quantum gate is the Hadamard gate (H), which puts a qubit into superposition - meaning it has a 50% chance of being measured as 0 and a 50% chance of being measured as 1.\n\nHere's what a simple program to create a superposition looks like in our simplified quantum coding language:\n\n```\n// Create a qubit in state |0⟩\nqubit q = 0;\n\n// Apply Hadamard gate to put it in superposition\nH(q);\n\n// Measure the qubit - will be either 0 or 1 with 50% probability each\nresult = measure(q);\n```\n\nIn the interactive component below, you can try running this program multiple times. You'll notice that the measurement gives either 0 or 1 randomly - that's quantum mechanics in action!",
          type: "interactive",
          interactiveComponent: "BuildAtomActivity",
          duration: 20,
          points: 15
        },
        {
          id: "1.3.1.3",
          title: "Quantum Gates and Operations",
          description: "Explore the basic building blocks of quantum circuits.",
          content: "Just like classical computers have logic gates (AND, OR, NOT), quantum computers have quantum gates. Let's explore the fundamental gates that we'll use in our programs:\n\n1. **X Gate (NOT Gate)**: Flips the state of a qubit (|0⟩ becomes |1⟩ and vice versa)\n\n2. **H Gate (Hadamard)**: Creates superposition (|0⟩ becomes a mix of |0⟩ and |1⟩)\n\n3. **Z Gate**: Adds a phase difference, key for interference effects\n\n4. **CNOT Gate (Controlled-NOT)**: A two-qubit gate that flips the second qubit if the first qubit is |1⟩. This is how we create entanglement!\n\nHere's a simple program that uses these gates:\n\n```\n// Create two qubits\nqubit q1 = 0;\nqubit q2 = 0;\n\n// Put first qubit in superposition\nH(q1);\n\n// Entangle the qubits\nCNOT(q1, q2);\n\n// Now q1 and q2 are entangled!\n// If q1 is measured as 0, q2 will also be 0\n// If q1 is measured as 1, q2 will also be 1\n```\n\nThis is one of the most powerful aspects of quantum computing - creating entangled states that are impossible to describe independently!",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "1.3.1.4",
          title: "First Steps Quiz",
          description: "Test your understanding of basic quantum programming concepts.",
          content: "Let's check what you've learned about the basics of quantum programming.",
          type: "quiz",
          duration: 10,
          points: 20
        }
      ]
    },
    {
      id: "1.3.2",
      title: "Simple Quantum Algorithms",
      description: "Learn to implement basic quantum algorithms and understand their power.",
      lessons: [
        {
          id: "1.3.2.1",
          title: "Building a Quantum Random Number Generator",
          description: "Create a simple program that generates true random numbers using quantum principles.",
          content: "One of the simplest and most practical applications of quantum computing is generating truly random numbers. Classical computers can only create pseudo-random numbers using mathematical formulas, but quantum computers can generate genuine randomness based on the fundamental uncertainty of quantum measurements.\n\nLet's build a quantum random number generator (QRNG) to generate a random number between 0 and 3:\n\n```\n// We need 2 qubits to represent numbers 0-3\nqubit q1 = 0;\nqubit q2 = 0;\n\n// Put both qubits in superposition\nH(q1);\nH(q2);\n\n// Measure both qubits\nbit b1 = measure(q1);\nbit b2 = measure(q2);\n\n// Combine the results to get a number between 0-3\nresult = (b1 << 1) | b2;\n```\n\nThis gives us a truly random number between 0 and 3. Each time you run the program, you'll get an unpredictable result - not because of a complex algorithm, but because of the fundamental nature of quantum mechanics.\n\nIn the interactive component, you can run this program multiple times and observe the results. Notice how unlike a classical random number generator, there's no way to predict or reproduce the exact sequence of numbers without knowing the exact quantum states.",
          type: "interactive",
          interactiveComponent: "AtomSimulation",
          duration: 20,
          points: 15
        },
        {
          id: "1.3.2.2",
          title: "Quantum Coin Flipping",
          description: "Implement a quantum program to simulate fair and biased coin flips.",
          content: "Now let's create a more flexible random generator - a quantum coin flipper that can simulate both fair and biased coins!\n\nA fair coin flip is easy - we just put a qubit in superposition and measure it:\n\n```\n// Create a qubit\nqubit q = 0;\n\n// Put it in superposition (50% chance of 0, 50% chance of 1)\nH(q);\n\n// Measure the qubit\nresult = measure(q); // 0 = heads, 1 = tails\n```\n\nBut what if we want a biased coin that lands on heads 70% of the time and tails 30% of the time? In quantum computing, we can use a special operation called a 'rotation gate' to control these probabilities.\n\n```\n// Create a qubit\nqubit q = 0;\n\n// Apply rotation to create a 70/30 bias instead of 50/50\nRY(q, 0.93); // The angle 0.93 gives approximately 70% probability of 0\n\n// Measure the qubit\nresult = measure(q); // 0 = heads (70%), 1 = tails (30%)\n```\n\nThis demonstrates how quantum computers give us fine-grained control over probabilities, which becomes incredibly powerful for more complex algorithms like quantum search or quantum machine learning.",
          type: "video",
          duration: 15,
          points: 10
        },
        {
          id: "1.3.2.3",
          title: "Quantum Teleportation: Moving Quantum Information",
          description: "Implement a simplified version of the quantum teleportation protocol.",
          content: "Quantum teleportation sounds like science fiction, but it's a real quantum algorithm that lets us transfer the state of one qubit to another, even when they're physically separated. This is the foundation for quantum networks and future quantum internet!\n\nDon't worry - we're not actually teleporting physical objects, just the quantum information (the state) from one qubit to another.\n\nHere's a simplified explanation of the quantum teleportation protocol:\n\n```\n// Step 1: Create an entangled pair of qubits (q2 and q3)\nqubit q2 = 0;\nqubit q3 = 0;\nH(q2);\nCNOT(q2, q3);\n\n// Step 2: Prepare the state we want to teleport (on q1)\nqubit q1 = 0;\n// Apply some operations to q1 to create the state we want to teleport\nH(q1);\nRZ(q1, 0.5);\n\n// Step 3: Bell measurement - entangle q1 with q2 and measure both\nCNOT(q1, q2);\nH(q1);\nbit m1 = measure(q1);\nbit m2 = measure(q2);\n\n// Step 4: Apply conditional operations on q3 based on measurements\nif (m2 == 1) X(q3);\nif (m1 == 1) Z(q3);\n\n// Now q3 has the same state that q1 had originally!\n```\n\nThe mind-blowing part? As soon as we perform the measurements, q3 instantly has information about q1's original state - even if q3 is on the other side of the universe! This is what Einstein called \"spooky action at a distance.\"",
          type: "reading",
          duration: 25,
          points: 20
        },
        {
          id: "1.3.2.4",
          title: "Simple Algorithms Quiz",
          description: "Test your understanding of basic quantum algorithms.",
          content: "Let's check what you've learned about implementing simple quantum algorithms.",
          type: "quiz",
          duration: 10,
          points: 15
        }
      ]
    }
  ]
};
