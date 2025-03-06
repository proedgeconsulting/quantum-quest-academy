
import { Course } from "@/data/types/courseTypes";

// Level 3 Course: Quantum Machine Learning Basics
export const quantumMachineLearningCourse: Course = {
  id: "3.1",
  title: "Quantum Machine Learning Basics",
  description: "Discover how quantum computing can supercharge AI.",
  level: 3,
  duration: "4 weeks",
  icon: "brain",
  weeks: 4,
  modules: [
    {
      id: "3.1.1",
      title: "Introduction to Quantum Machine Learning",
      description: "Learn the fundamentals of quantum approaches to machine learning.",
      lessons: [
        {
          id: "3.1.1.1",
          title: "Classical vs. Quantum Machine Learning",
          description: "Understanding the key differences between classical and quantum approaches to ML.",
          content: "This lesson explores the fundamental differences between classical and quantum machine learning approaches. Classical machine learning algorithms process information encoded in classical bits, which can be either 0 or 1. In contrast, quantum machine learning leverages quantum bits (qubits) that can exist in superpositions of states, allowing for potentially exponential speedups for certain problems.\n\nOne of the key advantages of quantum machine learning is the ability to explore vast solution spaces simultaneously through quantum parallelism. This property makes quantum computers particularly promising for complex optimization problems, feature spaces with high dimensionality, and certain types of pattern recognition tasks.\n\nHowever, quantum machine learning also faces significant challenges, including decoherence, noise sensitivity, and the limited number of qubits in current quantum computers. These limitations require creative approaches to algorithm design and problem encoding.",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "3.1.1.2",
          title: "Quantum Data Encoding Strategies",
          description: "Learn how to encode classical data into quantum states.",
          content: "Encoding classical data into quantum states is a crucial step in quantum machine learning. This lesson covers several approaches to quantum data encoding.\n\nBasis encoding: The simplest approach is to encode classical bit strings directly into computational basis states. For example, the classical string '101' would be encoded as the quantum state |101⟩. This approach is straightforward but doesn't leverage quantum superposition.\n\nAmplitude encoding: This method encodes classical data into the amplitudes of a quantum state. This is more efficient in terms of qubit usage, allowing n qubits to represent 2^n classical values. However, preparing such states efficiently can be challenging.\n\nQuantum feature maps: These are quantum circuits that map classical data into quantum states in a way that helps separate different classes of data, similar to kernel methods in classical machine learning. The goal is to map the data into a higher-dimensional Hilbert space where patterns become more apparent.",
          type: "reading",
          duration: 20,
          points: 15
        },
        {
          id: "3.1.1.3",
          title: "Quantum ML Quiz",
          description: "Test your understanding of quantum machine learning concepts.",
          content: "Let's test your understanding of the key concepts in quantum machine learning. Answer the following questions to assess your knowledge.",
          type: "quiz",
          duration: 10,
          points: 20
        }
      ]
    },
    {
      id: "3.1.2",
      title: "Quantum Neural Networks",
      description: "Explore how quantum computing can enhance neural networks.",
      lessons: [
        {
          id: "3.1.2.1",
          title: "Quantum Neural Network Architecture",
          description: "Understanding the structure of quantum neural networks.",
          content: "Quantum Neural Networks (QNNs) represent a fascinating intersection of quantum computing and neural network principles. Unlike classical neural networks that process discrete values through mathematical operations, QNNs operate on quantum states through unitary transformations.\n\nA typical QNN architecture consists of several key components:\n\n1. Input encoding layer: Transforms classical data into quantum states\n2. Quantum processing layers: Series of parameterized quantum gates that are trainable\n3. Measurement layer: Extracts classical information from the quantum state\n\nThe power of QNNs comes from their ability to explore exponentially large feature spaces with relatively few qubits. The trainable parameters in a QNN are adjusted through gradient-based optimization, similar to backpropagation in classical neural networks, although calculating gradients for quantum circuits presents unique challenges.",
          type: "reading",
          duration: 15,
          points: 15
        },
        {
          id: "3.1.2.2",
          title: "Training Quantum Neural Networks",
          description: "Learn about optimization techniques for quantum neural networks.",
          content: "Training a Quantum Neural Network (QNN) shares some similarities with classical neural network training, but also introduces unique challenges due to the quantum nature of the computations.\n\nThe first challenge is defining a suitable cost function that can be minimized to optimize the network parameters. Common approaches include measuring the difference between the desired output and the actual output of the quantum circuit.\n\nParameter optimization typically uses gradient-based methods. The parameter-shift rule is a widely used technique for calculating gradients of quantum circuits, as it avoids the need for complex differentiation. It works by evaluating the circuit at different parameter values and using these evaluations to estimate the gradient.\n\nAnother important consideration is barren plateaus - regions of the optimization landscape where gradients vanish exponentially with the number of qubits. This phenomenon can make training deep quantum neural networks particularly challenging. Techniques to mitigate this include carefully initializing parameters, using layer-wise training approaches, and designing cost functions that avoid flat regions in the optimization landscape.",
          type: "reading",
          duration: 20,
          points: 15
        },
        {
          id: "3.1.2.3",
          title: "QNN Interactive Simulation",
          description: "Interact with a simplified quantum neural network model.",
          content: "In this interactive session, you'll explore a simplified simulation of a quantum neural network. You can adjust parameters and see how they affect the network's performance on a classification task.\n\nThe simulation provides a visual representation of how quantum neural networks process information and make predictions. While this is a simplified model running on classical hardware, it illustrates the key principles behind quantum neural networks.",
          type: "interactive",
          duration: 30,
          points: 25,
          interactiveComponent: "AtomSimulation"
        }
      ]
    }
  ],
  progress: 0
};
