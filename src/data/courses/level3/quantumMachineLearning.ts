
import { Course } from "@/data/types/courseTypes";

// Level 3 Course: Quantum Machine Learning
export const quantumMachineLearningCourse: Course = {
  id: "3.1",
  title: "Quantum Machine Learning",
  description: "Explore the intersection of quantum computing and machine learning.",
  level: 3,
  duration: "6 weeks",
  icon: "brain",
  weeks: 6,
  modules: [
    {
      id: "3.1.1",
      title: "Fundamentals of Quantum Machine Learning",
      description: "Understand the key concepts at the intersection of quantum computing and machine learning.",
      lessons: [
        {
          id: "3.1.1.1",
          title: "Introduction to Quantum Machine Learning",
          description: "Explore the fundamentals and potential of quantum-enhanced machine learning.",
          content: "Quantum Machine Learning (QML) is an exciting interdisciplinary field that combines quantum computing with machine learning techniques. In this lesson, we'll explore what QML is, why it's promising, and how it differs from classical machine learning.\n\nWe'll discuss the key advantages quantum computing might bring to machine learning, including:\n\n1. Quantum speedups for specific machine learning algorithms\n2. Ability to process quantum data natively\n3. Access to larger feature spaces through quantum embedding\n4. Potential for more expressive models in some contexts\n\nWe'll also examine the realistic near-term applications of QML versus more speculative long-term possibilities, and identify which parts of the machine learning pipeline might benefit most from quantum enhancement.",
          type: "reading",
          duration: 20,
          points: 15
        },
        {
          id: "3.1.1.2",
          title: "Linear Algebra for QML",
          description: "Review the essential linear algebra concepts for quantum machine learning.",
          content: "Quantum computing and machine learning both rely heavily on linear algebra. In this lesson, we'll review the key concepts that form the mathematical foundation of QML.\n\nWe'll cover:\n\n1. Vector spaces and Hilbert spaces in the quantum context\n2. Hermitian and unitary operators and their significance\n3. Tensor products and their role in representing multi-qubit states\n4. Eigenvalues and eigenvectors in quantum algorithms\n5. Matrix decompositions relevant to QML algorithms\n\nWe'll connect these mathematical concepts to both quantum computing operations and machine learning techniques, showing how the same underlying mathematics appears in both fields. This shared mathematical language is part of what makes the integration of quantum computing and machine learning so natural.",
          type: "video",
          duration: 25,
          points: 20
        },
        {
          id: "3.1.1.3",
          title: "Quantum Data Encoding",
          description: "Learn how to encode classical data into quantum states for processing.",
          content: "A fundamental challenge in quantum machine learning is efficiently encoding classical data into quantum states. This process, known as quantum feature encoding or quantum embedding, is crucial for any QML algorithm.\n\nIn this lesson, we'll explore different encoding strategies, including:\n\n1. Basis encoding: Representing data in the computational basis states\n2. Amplitude encoding: Encoding data in the amplitudes of a quantum state\n3. Angle encoding: Using rotation angles in quantum gates to encode features\n4. Hamiltonian encoding: Encoding data in the time evolution of quantum systems\n\nWe'll discuss the trade-offs between these methods in terms of the number of qubits required, circuit depth, and how well they preserve the structure of the original data. We'll also examine how different encodings affect the types of patterns that quantum algorithms can efficiently recognize.",
          type: "interactive",
          interactiveComponent: "AtomSimulation",
          duration: 30,
          points: 25
        }
      ]
    },
    {
      id: "3.1.2",
      title: "Quantum Neural Networks",
      description: "Learn about quantum versions of neural networks and how they differ from classical networks.",
      lessons: [
        {
          id: "3.1.2.1",
          title: "Parametrized Quantum Circuits",
          description: "Understand the building blocks of quantum neural networks.",
          content: "Parametrized Quantum Circuits (PQCs), also known as variational quantum circuits, are the quantum analog of neural networks. In this lesson, we'll explore how these circuits work and how they can be trained to perform machine learning tasks.\n\nWe'll cover:\n\n1. The structure of PQCs: encoding layers, variational layers, and measurement\n2. Common ansatz designs: hardware-efficient, problem-inspired, and expressibility-focused\n3. The barren plateau problem and strategies to mitigate it\n4. Expressivity and trainability trade-offs in circuit design\n\nWe'll also discuss how PQCs differ from classical neural networks in terms of their expressivity, trainability, and the types of functions they can efficiently represent. Understanding these differences is key to designing effective quantum machine learning models.",
          type: "reading",
          duration: 20,
          points: 15
        },
        {
          id: "3.1.2.2",
          title: "Training Quantum Neural Networks",
          description: "Learn optimization techniques for quantum machine learning models.",
          content: "Training quantum neural networks presents unique challenges compared to classical neural networks. In this lesson, we'll explore the optimization techniques used to train parametrized quantum circuits.\n\nWe'll cover:\n\n1. Calculating gradients for quantum circuits using parameter shift rules\n2. Hybrid quantum-classical optimization loops\n3. Navigating barren plateaus and rugged loss landscapes\n4. Strategies to reduce the number of circuit evaluations needed\n5. Transfer learning and warm-starting techniques for quantum models\n\nWe'll also discuss how noise in current quantum hardware affects training and how techniques like noise-aware training can help mitigate these effects. By the end of this lesson, you'll understand the practical considerations involved in training quantum machine learning models on both simulators and real quantum hardware.",
          type: "video",
          duration: 25,
          points: 20
        },
        {
          id: "3.1.2.3",
          title: "Quantum Convolutional Neural Networks",
          description: "Explore quantum versions of convolutional neural networks for pattern recognition.",
          content: "Quantum Convolutional Neural Networks (QCNNs) adapt the highly successful convolutional architecture from classical deep learning to the quantum domain. In this lesson, we'll explore how QCNNs work and their potential applications.\n\nWe'll cover:\n\n1. The structure of QCNNs: quantum convolutional layers, pooling operations, and measurement\n2. How QCNNs process quantum data while respecting its structure\n3. The relationship between QCNNs and quantum error correction codes\n4. Applications of QCNNs in quantum data classification and quantum error detection\n\nWe'll implement a simple QCNN on a quantum simulator and train it to recognize patterns in quantum data. We'll analyze its performance and compare it to classical CNNs on similar tasks to understand the potential advantages and limitations of the quantum approach.",
          type: "interactive",
          interactiveComponent: "AtomSimulation",
          duration: 30,
          points: 25
        }
      ]
    }
  ],
  progress: 0
};
