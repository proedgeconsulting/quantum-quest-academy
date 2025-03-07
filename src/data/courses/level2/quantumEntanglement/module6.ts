
import { Module } from "@/data/types/courseTypes";

// Module 6: Quantum Networks and The Quantum Internet
export const module6: Module = {
  id: "2.2.6",
  title: "Quantum Networks and The Quantum Internet",
  description: "Explore how entanglement enables quantum networks and a future quantum internet.",
  lessons: [
    {
      id: "2.2.6.1",
      title: "Quantum Repeaters",
      description: "Learn how quantum repeaters use entanglement to extend the range of quantum networks.",
      content: "One of the greatest challenges in building quantum networks is the fundamental no-cloning theorem, which prevents us from simply amplifying quantum signals as we do with classical signals. Quantum repeaters offer an elegant solution to this problem by using entanglement to extend quantum communications over long distances.\n\nIn this lesson, we'll explore:\n\n- **The Distance Problem**: How photon loss and decoherence limit direct quantum communication\n\n- **Entanglement Swapping**: The key mechanism behind quantum repeaters that allows entanglement to be extended across multiple network nodes\n\n- **Nested Purification**: How repeaters combine entanglement swapping with distillation to maintain high-fidelity entanglement\n\n- **Memory Requirements**: The quantum memory technologies needed to store entangled states while waiting for operations at distant nodes\n\n- **Experimental Progress**: Current implementations and demonstrations of quantum repeater protocols\n\nWe'll also discuss different repeater architectures, their performance characteristics, and the timeline for deploying practical quantum repeater networks in the real world. Understanding quantum repeaters is essential for grasping how a future quantum internet might function and what capabilities it could offer.\n\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/5XmjMYYgmzA\" title=\"Quantum Repeaters Explained\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
      type: "video",
      duration: 25,
      points: 20
    },
    {
      id: "2.2.6.2",
      title: "Entanglement-Based Quantum Internet Protocols",
      description: "Discover protocols that use entanglement as a resource for the quantum internet.",
      content: "The quantum internet will enable capabilities impossible with classical networks, from unhackable communications to distributed quantum computing. At the heart of these capabilities is entanglement, which serves as the fundamental resource for most quantum network protocols.\n\nIn this lesson, we'll examine key quantum internet protocols that leverage entanglement:\n\n- **Quantum Teleportation Networks**: How teleportation can be used to transmit arbitrary quantum states across a network\n\n- **Blind Quantum Computing**: Protocols that allow users to perform quantum computations on remote servers while keeping their data and algorithms private\n\n- **Distributed Quantum Computing**: Using entanglement to connect multiple quantum processors into a more powerful virtual system\n\n- **Conference Key Agreement**: Extending quantum key distribution to multiple parties simultaneously\n\n- **Anonymous Communication**: Quantum protocols that provide stronger anonymity guarantees than classical systems\n\nFor each protocol, we'll discuss the entanglement resources required, the classical communication needed, and the security and efficiency advantages compared to classical alternatives. We'll also examine the different generations of quantum networks being developed and what capabilities each generation will enable.",
      type: "reading",
      duration: 30,
      points: 25
    },
    {
      id: "2.2.6.3",
      title: "Quantum Network Simulator",
      description: "Design and test a quantum network using an interactive simulator.",
      content: "In this interactive lesson, you'll use a simulator to design, build, and test your own quantum network. The simulator provides a graphical interface where you can place quantum nodes (such as quantum processors, memories, and repeaters) and connect them with quantum and classical channels.\n\nYou'll start by creating simple point-to-point connections and gradually scale up to more complex network topologies. As you build your network, you'll be challenged to implement various quantum protocols across it, including:\n\n- Establishing entanglement between distant nodes\n- Performing quantum teleportation across the network\n- Creating multi-party entangled states\n- Implementing quantum key distribution\n- Designing efficient repeater chains\n\nThe simulator incorporates realistic noise models and resource constraints, so you'll need to consider factors like decoherence, channel losses, and memory limitations as you design your network. This hands-on experience will give you practical insight into the engineering challenges and design considerations involved in building real quantum networks.\n\nBy completing various network design challenges, you'll develop an intuitive understanding of how entanglement serves as the fundamental resource that powers quantum networks and the future quantum internet.",
      type: "interactive",
      interactiveComponent: "AtomSimulation",
      duration: 45,
      points: 40
    }
  ]
};
