
import { Module } from "@/data/types/courseTypes";

// Module 3: Quantum Generative Models
export const module3: Module = {
  id: "3.1.3",
  title: "Quantum Generative Models",
  description: "Explore how quantum computers can be used to generate new data samples.",
  lessons: [
    {
      id: "3.1.3.1",
      title: "Quantum Generative Adversarial Networks",
      description: "Understand how quantum circuits can be used in GANs.",
      content: "Quantum Generative Adversarial Networks (QGANs) represent a quantum analogue of classical GANs, using the power of quantum computing to potentially generate more complex distributions with fewer parameters.\n\nIn this lesson, we'll explore:\n\n1. **The architecture of QGANs**: How the generator and discriminator networks are implemented using quantum circuits\n\n2. **Training challenges**: The unique optimization problems when training adversarial quantum networks\n\n3. **Potential advantages**: How quantum superposition and entanglement might enable more efficient generative models\n\n4. **Example applications**: Image generation, molecule design, and quantum state tomography\n\nWe'll examine recent research results that demonstrate QGAN applications in generating synthetic quantum data and their potential use in scientific discovery and drug design.",
      type: "reading",
      duration: 25,
      points: 20
    },
    {
      id: "3.1.3.2",
      title: "Quantum Boltzmann Machines",
      description: "Learn about quantum versions of energy-based generative models.",
      content: "Quantum Boltzmann Machines (QBMs) extend classical Boltzmann machines by replacing the binary units with quantum bits, allowing them to potentially model more complex probability distributions than their classical counterparts.\n\nIn this video lesson, we'll cover:\n\n- The theoretical foundations of QBMs and how they differ from classical Boltzmann machines\n- The role of quantum tunneling in potentially helping QBMs escape local minima during training\n- Implementation strategies on near-term quantum hardware\n- Applications in generative modeling and reinforcement learning\n\nWe'll also discuss the challenges of training QBMs and recent advances in quantum annealing that have made them more practical for certain applications.",
      type: "video",
      duration: 30,
      points: 25
    },
    {
      id: "3.1.3.3",
      title: "Quantum Autoencoder Design",
      description: "Build quantum circuits that can compress and reconstruct quantum data.",
      content: "Quantum autoencoders use quantum circuits to perform dimensionality reduction on quantum data, potentially offering exponential compression advantages for certain quantum states. In this interactive lesson, you'll design and implement a simple quantum autoencoder.\n\nYou'll learn how to:\n\n1. Design the encoding and decoding quantum circuits\n2. Define appropriate cost functions for training\n3. Implement the training loop using variational methods\n4. Evaluate the reconstruction fidelity\n\nThis hands-on exercise will provide practical experience with quantum data compression techniques that could be valuable for quantum state preparation and quantum memory applications.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/quantum-autoencoder-design.html",
        height: 600,
        width: "100%"
      },
      duration: 35,
      points: 30
    },
    {
      id: "3.1.3.4",
      title: "Quantum Generative Models Quiz",
      description: "Test your understanding of quantum generative modeling techniques.",
      content: "Let's check your understanding of quantum generative models and how they differ from classical approaches.",
      type: "quiz",
      duration: 15,
      points: 25
    }
  ]
};
