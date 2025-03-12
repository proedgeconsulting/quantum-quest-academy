
import { Module } from "@/data/types/courseTypes";

// Module 5: Quantum Transfer Learning
export const module5: Module = {
  id: "3.1.5",
  title: "Quantum Transfer Learning",
  description: "Explore how to combine classical deep learning with quantum enhancements.",
  lessons: [
    {
      id: "3.1.5.1",
      title: "Hybrid Classical-Quantum Architectures",
      description: "Learn strategies for integrating quantum circuits into classical neural networks.",
      content: "Hybrid classical-quantum models offer a practical approach to leveraging quantum advantages while working within the constraints of current quantum hardware. This lesson explores how to effectively combine classical and quantum components.\n\nWe'll cover:\n\n1. **Architecture design patterns**: Various ways to integrate quantum circuits with classical networks\n\n2. **Feature extraction strategies**: Using classical networks for feature extraction and quantum circuits for classification\n\n3. **Embedding techniques**: How to map classical data between the classical and quantum domains\n\n4. **Training methodologies**: Approaches for end-to-end training of hybrid systems\n\nWe'll study real-world examples where hybrid models have shown promising results, including image classification and natural language processing applications enhanced with quantum components.",
      type: "reading",
      duration: 25,
      points: 20
    },
    {
      id: "3.1.5.2",
      title: "Pre-trained Quantum Layers",
      description: "Explore techniques for creating reusable quantum components for transfer learning.",
      content: "Transfer learning has revolutionized classical deep learning by allowing knowledge transfer between tasks. This video lesson explores how similar approaches can be developed for quantum machine learning.\n\nWe'll examine:\n\n- Methods for pre-training quantum circuits on foundational tasks\n- Techniques for freezing and fine-tuning quantum layers\n- Approaches for adapting pre-trained quantum encoders to new domains\n- Evaluation methodologies for quantum transfer learning performance\n\nThe lesson features demonstrations of how pre-trained quantum components can be integrated into larger models and fine-tuned for specific applications, potentially reducing the quantum resources needed for new tasks.",
      type: "video",
      duration: 30,
      points: 25
      videoUrl: "https://www.youtube.com/watch?v=lz8BOz5KPZg"
    },
    {
      id: "3.1.5.3",
      title: "Quantum Feature Transfer",
      description: "Implement a hybrid model that transfers features between classical and quantum domains.",
      content: "In this interactive session, you'll learn about implementing a hybrid model that uses a pre-trained classical network for feature extraction and a quantum circuit for enhanced classification. This practical approach allows you to leverage the strengths of both paradigms.\n\nThe lesson covers how to:\n\n1. Extract meaningful features from a pre-trained classical convolutional network\n2. Design an appropriate quantum circuit to process these features\n3. Train only the quantum portion while keeping the classical weights frozen\n4. Evaluate the performance compared to fully classical and fully quantum approaches\n\nThrough detailed examples and visualizations, we'll explore the architecture and training process of hybrid quantum-classical models. We'll examine case studies where this approach has shown promise, particularly for image classification tasks where classical networks excel at feature extraction but quantum processing may offer advantages for the final classification step.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/quantum-feature-transfer.html",
        height: 600,
        width: "100%"
      },
      duration: 40,
      points: 35
    },
    {
      id: "3.1.5.4",
      title: "Quantum Transfer Learning Quiz",
      description: "Test your understanding of hybrid classical-quantum learning approaches.",
      content: "Let's check your understanding of quantum transfer learning and hybrid model architectures.",
      type: "quiz",
      duration: 15,
      points: 25
    }
  ]
};
