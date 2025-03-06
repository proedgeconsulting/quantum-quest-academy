
// This file contains sample quiz questions for Level 2 courses

export const circuitsQuizQuestions = [
  {
    id: "q1",
    question: "Which quantum gate creates a superposition of states?",
    options: [
      "CNOT gate",
      "Hadamard gate",
      "Pauli-X gate",
      "Toffoli gate"
    ],
    correctAnswer: 1
  },
  {
    id: "q2",
    question: "What is the purpose of the CNOT gate in quantum circuits?",
    options: [
      "To create superposition",
      "To measure qubits",
      "To entangle qubits",
      "To perform classical logic"
    ],
    correctAnswer: 2
  },
  {
    id: "q3",
    question: "How many qubits does a basic CNOT gate operate on?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    correctAnswer: 1
  },
  {
    id: "q4",
    question: "Which quantum gate is equivalent to the classical NOT gate?",
    options: [
      "Hadamard gate",
      "Pauli-X gate",
      "Pauli-Z gate",
      "SWAP gate"
    ],
    correctAnswer: 1
  },
  {
    id: "q5",
    question: "What is a Bell state in quantum computing?",
    options: [
      "A single qubit in superposition",
      "A maximally entangled state of two qubits",
      "A three-qubit error correction code",
      "The ground state of a quantum system"
    ],
    correctAnswer: 1
  }
];

export const algorithmsQuizQuestions = [
  {
    id: "q1",
    question: "Which quantum algorithm provides a quadratic speedup for searching an unsorted database?",
    options: [
      "Shor's algorithm",
      "Grover's algorithm",
      "Deutsch-Jozsa algorithm",
      "Quantum Fourier Transform"
    ],
    correctAnswer: 1
  },
  {
    id: "q2",
    question: "What problem does Shor's algorithm solve efficiently?",
    options: [
      "Searching databases",
      "Machine learning",
      "Integer factorization",
      "Optimization problems"
    ],
    correctAnswer: 2
  },
  {
    id: "q3",
    question: "The Deutsch-Jozsa algorithm determines which property of a function?",
    options: [
      "Whether it's constant or balanced",
      "Whether it's reversible",
      "Whether it's computable",
      "Whether it's polynomial time"
    ],
    correctAnswer: 0
  },
  {
    id: "q4",
    question: "What quantum phenomenon does Grover's algorithm rely on?",
    options: [
      "Teleportation",
      "Entanglement",
      "Amplitude amplification",
      "Quantum tunneling"
    ],
    correctAnswer: 2
  },
  {
    id: "q5",
    question: "Which of these is NOT a quantum algorithm?",
    options: [
      "Simon's algorithm",
      "QuickSort algorithm",
      "HHL algorithm",
      "Quantum phase estimation"
    ],
    correctAnswer: 1
  }
];
