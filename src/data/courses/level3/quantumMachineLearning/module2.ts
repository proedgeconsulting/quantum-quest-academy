import { Module } from "@/data/types/courseTypes";

// Module 2: Quantum Neural Networks
export const module2: Module = {
  id: "3.1.2",
  title: "Quantum Neural Networks",
  description: "Learn about parameterized quantum circuits that function like neural networks.",
  lessons: [
    {
      id: "3.1.2.1",
      title: "Variational Quantum Algorithms",
      description: "Understand the hybrid quantum-classical approach that powers quantum ML.",
      content: "Variational Quantum Algorithms (VQAs) form the backbone of most near-term quantum machine learning approaches. These hybrid quantum-classical algorithms use parameterized quantum circuits combined with classical optimization to solve complex problems on noisy intermediate-scale quantum (NISQ) devices.\n\nIn this lesson, we'll explore the general structure of VQAs:\n\n1. **Parameterized quantum circuits** with trainable rotation gates\n2. **Quantum measurements** to extract information from the quantum state\n3. **Classical optimization** to update the circuit parameters\n\nWe'll discuss important examples like the Variational Quantum Eigensolver (VQE) for chemistry problems and the Quantum Approximate Optimization Algorithm (QAOA) for combinatorial optimization. We'll also examine the challenges of barren plateaus and optimization landscapes that make training these algorithms difficult.",
      type: "reading",
      duration: 20,
      points: 15
    },
    {
      id: "3.1.2.2",
      title: "Designing Quantum Neural Networks",
      description: "Learn how to structure quantum circuits that can learn complex patterns.",
      content: "Quantum Neural Networks (QNNs) are parameterized quantum circuits designed to mimic the functionality of classical neural networks. In this lesson, we'll examine how to design effective QNN architectures for different types of learning tasks.\n\nWe'll explore:\n\n- **Layer structures** and the concept of expressivity in quantum circuits\n- **Entanglement strategies** and their importance for quantum advantage\n- **Measurement approaches** and how they affect what the network can learn\n- **Parameter initialization** techniques to avoid training difficulties\n\nWe'll also discuss the concept of quantum transfer learning, where pre-trained classical neural networks are combined with quantum circuits to potentially enhance performance on specific tasks.",
      type: "video",
      duration: 25,
      points: 20,
      videoUrl: "https://www.youtube.com/watch?v=xL383DseSpE"
    },
    {
      id: "3.1.2.3",
      title: "Training Quantum Neural Networks",
      description: "Implement and train a simple quantum neural network for classification.",
      content: "In this interactive lesson, we'll implement a simple quantum neural network for a binary classification task and learn how to train it effectively. We'll use a variational circuit with several trainable parameters and explore how different hyperparameters affect training performance.\n\nWe'll walk through:\n\n- **Preparing the dataset** and encoding it into quantum states\n- **Designing the variational quantum circuit** with trainable parameters\n- **Setting up the classical optimizer** to update the parameters\n- **Training the network** and visualizing the learning process\n- **Evaluating performance** on test data\n\nThis hands-on experience will give you practical insight into the challenges and techniques involved in training quantum machine learning models.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/training-quantum-neural-networks.html",
        height: 600,
        width: "100%"
      },
      duration: 35,
      points: 30
    },
    {
      id: "3.1.2.4",
      title: "Quantum Convolutional Neural Networks",
      description: "Explore quantum versions of convolutional neural networks for pattern recognition.",
      content: "Quantum Convolutional Neural Networks (QCNNs) adapt the highly successful CNN architecture from classical deep learning to the quantum domain. In this lesson, we'll explore how QCNNs can potentially process quantum data more efficiently than classical approaches.\n\nWe'll discuss:\n\n- The structure of quantum convolutional layers using local unitary operations\n- Quantum pooling operations that reduce the number of qubits\n- Translation invariance in quantum neural networks\n- Potential applications in quantum image processing and quantum data analysis\n\nWe'll also examine recent research results on QCNNs and their potential advantages for specific types of structured data, particularly in quantum chemistry and quantum many-body physics problems.",
      type: "reading",
      duration: 20,
      points: 15
    },
    {
      id: "3.1.2.5",
      title: "Quantum Neural Networks Quiz",
      description: "Test your understanding of quantum neural networks.",
      content: "Let's check what you've learned about quantum neural networks and how to design and train them effectively.",
      type: "quiz",
      duration: 15,
      points: 30
    }
  ]
};
