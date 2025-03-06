
import { Module } from "@/data/types/courseTypes";

// Module 3: Quantum Neural Networks
export const quantumNeuralNetworksModule: Module = {
  id: "3.2.3",
  title: "Quantum Neural Networks",
  description: "Explore quantum versions of neural network architectures.",
  lessons: [
    {
      id: "3.2.3.1",
      title: "Parametrized Quantum Circuits",
      description: "Understanding the building blocks of quantum neural networks.",
      content: "Parametrized quantum circuits (PQCs) form the foundation of quantum neural networks. Unlike classical neural networks that use weighted connections between neurons, quantum neural networks encode information in quantum states and process it through quantum gates with adjustable parameters.\n\nThis lesson covers:\n\n1. The basic structure of PQCs: input encoding, parameterized gates, and measurement\n\n2. Common gate patterns used in quantum neural networks, including layers of rotation gates and entangling operations\n\n3. The relationship between circuit depth, expressivity, and trainability\n\n4. Practical considerations when designing PQCs for specific machine learning tasks\n\n5. Techniques for initializing circuit parameters to avoid barren plateaus\n\nWe'll walk through several example circuits and demonstrate how they can be used for classification and regression tasks.",
      type: "reading",
      duration: 25,
      points: 20
    },
    {
      id: "3.2.3.2",
      title: "QNN Training Strategies",
      description: "Techniques for effectively training quantum neural networks.",
      content: "Training quantum neural networks poses unique challenges compared to classical networks. This lesson explores best practices for QNN training.\n\nWe'll cover:\n\n1. Parameter Shift Rules: Computing gradients of quantum circuits without backpropagation\n\n2. Cost Function Design: Constructing objective functions suited for quantum optimization\n\n3. Handling Barren Plateaus: Techniques to address vanishing gradients in quantum circuits\n\n4. Circuit Structure Optimization: How architecture impacts trainability\n\n5. Quantum Transfer Learning: Leveraging pre-trained classical or quantum models\n\nThe lesson includes practical examples of training quantum neural networks on actual datasets and discusses the current limitations and future directions in this rapidly evolving field.",
      type: "video",
      duration: 30,
      points: 25
    },
    {
      id: "3.2.3.3",
      title: "Quantum Convolutional Networks",
      description: "Applying quantum principles to image and pattern recognition.",
      content: "Quantum Convolutional Neural Networks (QCNNs) adapt the powerful pattern recognition capabilities of classical CNNs to quantum computing. This interactive lesson lets you experiment with a QCNN on simple image recognition tasks.\n\nThe simulator demonstrates:\n\n1. Quantum encoding of image data\n\n2. Applying quantum convolutional layers\n\n3. Pooling operations in quantum circuits\n\n4. Feature extraction and classification\n\nTry different circuit architectures and parameters to improve recognition accuracy. The visualization shows the quantum state transformations at each layer and how they contribute to the final classification decision.",
      type: "interactive",
      interactiveComponent: "QuantumSimulator",
      duration: 35,
      points: 30,
      interactiveOptions: {
        simulatorType: "quantumCNN",
        datasetOptions: ["digits", "shapes", "letters"],
        maxCircuitDepth: 8
      }
    }
  ]
};
