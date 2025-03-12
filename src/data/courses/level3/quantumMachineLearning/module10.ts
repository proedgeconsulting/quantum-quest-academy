
import { Module } from "@/data/types/courseTypes";

// Module 10: Quantum Neural Networks
export const module10: Module = {
  id: "3.1.10",
  title: "Quantum Neural Networks",
  description: "Discover how quantum computing can supercharge artificial intelligence.",
  lessons: [
    {
      id: "3.1.10.1",
      title: "Introduction to Quantum Neural Networks",
      description: "Learn how quantum physics is creating a new type of artificial intelligence.",
      content: "Welcome to the fascinating world of Quantum Neural Networks! In this lesson, we'll explore how combining quantum computing with artificial intelligence creates powerful new possibilities for solving complex problems.\n\nQuantum Neural Networks (QNNs) are a type of machine learning model that uses quantum properties like superposition and entanglement to process information in ways that classical neural networks cannot. These networks can potentially recognize patterns and make predictions more efficiently than traditional AI for certain types of problems.\n\nWe'll cover:\n- The basic structure of classical vs. quantum neural networks\n- How quantum properties enable new types of computations\n- The potential advantages of QNNs for specific applications\n- Current research and limitations in the field\n\nBy the end of this lesson, you'll understand the fundamental concepts behind quantum neural networks and their exciting potential for the future of AI.",
      type: "reading",
      duration: 20,
      points: 15
    },
    {
      id: "3.1.10.2",
      title: "Training Quantum Neural Networks",
      description: "Explore how quantum neural networks learn and improve over time.",
      content: "How do quantum neural networks learn? In this video lesson, we'll dive into the fascinating process of training QNNs and how it differs from classical neural network training.\n\nWe'll explore:\n\n- How quantum neural networks represent and process data\n- The unique challenges of training quantum systems\n- Techniques for adjusting quantum parameters during training\n- How quantum gradient descent works\n- Methods for measuring the performance of quantum neural networks\n\nThrough animated visualizations and simple examples, you'll gain insight into how these powerful quantum systems can learn patterns from data and improve their performance over time. We'll also discuss current research directions that aim to overcome limitations in training larger quantum neural networks.",
      type: "video",
      duration: 20,
      points: 15,
      videoUrl: "https://www.youtube.com/watch?v=Lbndu5EIWvI"
    },
    {
      id: "3.1.10.3",
      title: "Quantum Neural Network Simulator",
      description: "Use a simulator to build and train your own quantum neural network.",
      content: "It's time to build your own quantum neural network! In this interactive lesson, you'll use our quantum neural network simulator to design, train, and test a simple QNN.\n\nYou'll get hands-on experience with:\n\n1. Creating a quantum circuit that acts as a neural network\n2. Preparing quantum data for the network to process\n3. Setting up trainable parameters for your network\n4. Training your network on a simple pattern recognition task\n5. Testing your network's performance on new data\n\nThrough this interactive experience, you'll gain practical insight into how quantum neural networks operate and how they can be applied to solve real problems. The simulator provides a simplified but accurate representation of how QNNs work, giving you a foundation for understanding more complex quantum machine learning systems.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/quantum-neural-network-training.html",
        height: 600,
        width: "100%"
      },
      duration: 30,
      points: 25
    },
    {
      id: "3.1.10.4",
      title: "Applications of Quantum Neural Networks",
      description: "Discover how quantum neural networks might change our world.",
      content: "What can we do with quantum neural networks that we can't do with classical AI? In this lesson, we'll explore exciting potential applications of QNNs across different fields.\n\nWe'll discover how quantum neural networks might revolutionize:\n\n- **Drug discovery**: Modeling complex molecular interactions to develop new medicines faster\n- **Materials science**: Designing new materials with specific properties for batteries, solar cells, and more\n- **Financial modeling**: Optimizing investment portfolios and predicting market movements with greater accuracy\n- **Weather forecasting**: Modeling complex climate systems more precisely\n- **Image and pattern recognition**: Identifying patterns in data that classical neural networks might miss\n\nFor each application, we'll examine why quantum approaches might offer advantages over classical methods, what research is currently underway, and the challenges that must be overcome before these technologies become practical. You'll gain insight into how quantum machine learning could transform these fields in the coming decades.",
      type: "video",
      duration: 20,
      points: 15,
      videoUrl: "https://www.youtube.com/watch?v=OKbcJCUx6xA"
    }
  ]
};
