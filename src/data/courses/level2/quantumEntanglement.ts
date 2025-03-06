import { Course } from "@/data/types/courseTypes";

// Level 2 Course: Quantum Entanglement
export const quantumEntanglementCourse: Course = {
  id: "2.2",
  title: "Quantum Entanglement",
  description: "Explore the phenomenon of quantum entanglement and its applications.",
  level: 2,
  duration: "9 weeks",
  icon: "circuit",
  weeks: 9,
  modules: [
    {
      id: "2.2.1",
      title: "Understanding Entanglement",
      description: "Explore the fundamental concept of quantum entanglement.",
      lessons: [
        {
          id: "2.2.1.1",
          title: "What is Quantum Entanglement?",
          description: "Learn about the 'spooky action at a distance' that puzzled Einstein.",
          content: "Quantum entanglement is one of the most counterintuitive phenomena in quantum physics - what Einstein famously called 'spooky action at a distance.' When two particles become entangled, their properties become correlated in such a way that the state of one particle instantly affects the state of the other, regardless of the distance separating them.\n\nIn this lesson, we'll explore the concept of quantum entanglement, how it challenges our classical intuition about reality, and why it's such a powerful resource for quantum computing and quantum communication.",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "2.2.1.2",
          title: "Creating Entangled States",
          description: "Learn how to create and verify entangled quantum states.",
          content: "In this lesson, we'll explore how entangled quantum states are created and verified in both theoretical and experimental settings. We'll start with the simplest entangled state - the Bell state - and learn how to create it using a Hadamard gate followed by a CNOT gate.\n\nWe'll also discuss more complex entangled states involving multiple qubits, and how these states can be used for quantum computing, quantum cryptography, and quantum teleportation.",
          type: "video",
          duration: 20,
          points: 15
        },
        {
          id: "2.2.1.3",
          title: "Bell's Inequality",
          description: "Understand the mathematical test that proves quantum mechanics is non-local.",
          content: "Bell's Inequality is a mathematical theorem proposed by physicist John Bell in 1964 that has profound implications for our understanding of quantum entanglement. This theorem provides a way to distinguish between quantum mechanical predictions and those of any local hidden variable theory.\n\nIn this lesson, we'll explore Bell's Inequality and the subsequent experimental tests that have consistently confirmed the predictions of quantum mechanics, demonstrating that entanglement is a real phenomenon that cannot be explained by classical physics. We'll discuss the concept of non-locality and what it means for our understanding of reality.",
          type: "reading",
          duration: 20,
          points: 15
        }
      ]
    },
    {
      id: "2.2.2",
      title: "Applications of Entanglement",
      description: "Learn how entanglement enables powerful quantum technologies.",
      lessons: [
        {
          id: "2.2.2.1",
          title: "Quantum Teleportation",
          description: "Understand how entanglement enables quantum teleportation protocols.",
          content: "Quantum teleportation is a process that transfers the quantum state of one particle to another distant particle without physically moving the particle itself. This remarkable protocol, first proposed in 1993, relies entirely on quantum entanglement and classical communication.\n\nIn this lesson, we'll walk through the quantum teleportation protocol step by step, explaining how it works and why it's important. We'll explore how the protocol uses entanglement as a resource to transmit quantum information, and discuss its applications in quantum communication networks and distributed quantum computing.",
          type: "video",
          duration: 25,
          points: 20
        },
        {
          id: "2.2.2.2",
          title: "Quantum Cryptography",
          description: "Learn how entanglement enables secure quantum key distribution.",
          content: "Quantum cryptography uses the principles of quantum mechanics to enable secure communication between parties. In particular, quantum key distribution (QKD) protocols like BB84 and E91 allow two parties to produce a shared random secret key that can be used to encrypt and decrypt messages.\n\nIn this lesson, we'll focus on entanglement-based QKD protocols, explaining how the unique properties of entangled states make it possible to detect any eavesdropping attempt. We'll walk through the E91 protocol designed by Artur Ekert, which uses Bell's inequality to guarantee security, and discuss the advantages of quantum cryptography over classical cryptographic methods.",
          type: "interactive",
          interactiveComponent: "AtomSimulation",
          duration: 30,
          points: 25
        },
        {
          id: "2.2.2.3",
          title: "Entanglement in Quantum Computing",
          description: "Discover how entanglement provides quantum computers their power.",
          content: "Entanglement is a crucial resource for quantum computing, enabling many quantum algorithms to achieve speedups over classical algorithms. Without entanglement, quantum computers would offer little or no advantage over classical computers.\n\nIn this lesson, we'll explore how entanglement is used in important quantum algorithms like Shor's factoring algorithm and Grover's search algorithm. We'll discuss the concept of quantum parallelism and how entanglement allows quantum computers to process vast amounts of information simultaneously. We'll also look at how entanglement enables quantum error correction, which is essential for building large-scale quantum computers.",
          type: "reading",
          duration: 20,
          points: 15
        }
      ]
    },
    {
      id: "2.2.3",
      title: "Entanglement in the Lab",
      description: "Learn how scientists create and measure entangled quantum states in laboratory settings.",
      lessons: [
        {
          id: "2.2.3.1",
          title: "Creating Entangled Photons",
          description: "Discover the experimental techniques used to generate entangled photon pairs.",
          content: "Entangled photon pairs are among the most common and well-established forms of quantum entanglement created in laboratories around the world. These pairs are typically generated through a process called Spontaneous Parametric Down-Conversion (SPDC).\n\nIn SPDC, a high-energy photon from a laser passes through a nonlinear crystal, which splits it into two lower-energy photons that are entangled. These photon pairs share correlated properties like polarization - if one photon is measured to have horizontal polarization, the other will have vertical polarization, regardless of distance between them.\n\nScientists can verify this entanglement through Bell tests, which demonstrate behavior that cannot be explained by classical physics. In this lesson, we'll explore the apparatus used to generate entangled photons, the methods for measuring their quantum states, and how researchers use these systems to study fundamental properties of quantum mechanics.\n\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/ZuvK-od647c\" title=\"Quantum Entanglement Experiment\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
          type: "video",
          duration: 25,
          points: 20
        },
        {
          id: "2.2.3.2",
          title: "Entanglement with Trapped Ions",
          description: "Explore how scientists use trapped ions to create highly-controlled entangled states.",
          content: "Trapped ion quantum computers represent one of the most promising platforms for quantum computing and precise studies of quantum entanglement. In these systems, individual ions (charged atoms) are trapped using electromagnetic fields and cooled to near absolute zero temperatures.\n\nResearchers can manipulate these ions with precise laser pulses to control their quantum states and create entanglement between them. The ions' repulsive electrical interaction causes them to form an ordered structure, making it possible to address and entangle specific pairs or groups.\n\nUnlike photonic systems, trapped ions can maintain their quantum states for relatively long periods, making them ideal for studying entanglement dynamics over time. This has allowed scientists to create entangled states with record-breaking fidelity and to observe quantum effects that would be difficult to see in other systems.\n\nIn this lesson, we'll examine the apparatus and techniques used in trapped ion experiments, how entanglement is generated and measured, and recent breakthroughs in trapped ion quantum computing that rely on entanglement as a resource.",
          type: "reading",
          duration: 20,
          points: 15
        },
        {
          id: "2.2.3.3",
          title: "Quantum Entanglement Simulation",
          description: "Use an interactive simulator to visualize and experiment with entangled quantum states.",
          content: "Quantum entanglement is often described as 'spooky action at a distance,' but what does it really look like when two quantum systems become entangled? In this interactive lesson, you'll use a quantum simulator to create, manipulate, and measure entangled qubits.\n\nYou'll start by preparing two individual qubits in superposition states, then apply a CNOT gate to entangle them. The simulator will visualize the resulting quantum state, showing how the probabilities of different measurement outcomes change when the qubits become entangled.\n\nMost importantly, you'll perform virtual experiments that demonstrate the non-local nature of quantum entanglement by seeing how measuring one qubit instantaneously affects its entangled partner, regardless of simulated distance.\n\nThis hands-on approach will help you develop an intuition for quantum entanglement that goes beyond mathematical formulas, allowing you to grasp one of the most profound and counterintuitive aspects of quantum mechanics.",
          type: "interactive",
          interactiveComponent: "QuantumSimulator",
          duration: 30,
          points: 25
        }
      ]
    },
    {
      id: "2.2.4",
      title: "Quantum Entanglement and Reality",
      description: "Explore the philosophical implications of quantum entanglement for our understanding of reality.",
      lessons: [
        {
          id: "2.2.4.1",
          title: "The EPR Paradox",
          description: "Understand Einstein, Podolsky, and Rosen's famous thought experiment that challenged quantum mechanics.",
          content: "In 1935, Albert Einstein, Boris Podolsky, and Nathan Rosen published a paper that presented what became known as the EPR paradox - a thought experiment designed to show that quantum mechanics must be incomplete because it seemed to allow for 'spooky action at a distance.'\n\nThe EPR paper argued that if quantum mechanics were complete, it would violate locality (the principle that objects are only influenced by their immediate surroundings) or reality (the principle that physical quantities exist independently of observation). Since Einstein and his colleagues considered these principles to be fundamental to any physical theory, they concluded that quantum mechanics must be incomplete.\n\nThis challenge to quantum mechanics sparked decades of theoretical and experimental work, culminating in Bell's theorem and subsequent experiments that proved Einstein wrong - quantum mechanics is indeed complete, and nature truly does exhibit nonlocal behavior through entanglement.\n\nIn this lesson, we'll explore the original EPR paradox in detail, the assumptions it made about physical reality, and how our understanding of quantum entanglement has evolved since then to reshape our conception of reality itself.",
          type: "reading",
          duration: 25,
          points: 20
        },
        {
          id: "2.2.4.2",
          title: "Quantum Game: Entanglement Puzzles",
          description: "Play through a series of puzzles that demonstrate the counterintuitive properties of quantum entanglement.",
          content: "In this interactive lesson, you'll tackle a series of increasingly challenging puzzles based on the properties of entangled quantum systems. Each puzzle represents a scenario that would be impossible to solve using classical physics alone but becomes solvable when you leverage the unique properties of quantum entanglement.\n\nThrough these puzzles, you'll develop an intuition for how entanglement works and how it can be used as a resource for quantum information protocols. You'll face challenges related to:  \n\n- Creating specific entangled states  \n- Using entanglement to send information (within the bounds of physics)  \n- Distinguishing between different types of entangled states  \n- Using entanglement to solve coordination problems  \n\nThe puzzles are designed to highlight the non-classical correlations that exist in entangled systems and the ways these correlations can be harnessed for practical purposes. By the end of this lesson, you'll have a much deeper understanding of entanglement as both a fundamental physical phenomenon and a powerful resource for quantum technologies.\n\n<iframe src=\"https://quantum-game.github.io/\" width=\"100%\" height=\"600px\" frameborder=\"0\" allowfullscreen></iframe>",
          type: "interactive",
          interactiveComponent: "QuantumSimulator",
          duration: 35,
          points: 30
        },
        {
          id: "2.2.4.3",
          title: "Interpretations of Quantum Mechanics",
          description: "Compare different interpretations of quantum mechanics and how they explain entanglement.",
          content: "Quantum entanglement challenges our deepest intuitions about reality, leading to a variety of interpretations of quantum mechanics that attempt to make sense of this bizarre phenomenon. In this lesson, we'll explore the major interpretations and how they address the puzzle of entanglement:\n\n- **Copenhagen Interpretation**: The traditional interpretation that emphasizes measurement and wave function collapse, viewing entanglement as a fundamental, irreducible property of quantum systems.\n\n- **Many-Worlds Interpretation**: Suggests that quantum measurements cause the universe to branch into multiple realities, with entanglement representing correlations between branches.\n\n- **Bohm's Pilot Wave Theory**: Proposes that particles have definite positions guided by a quantum wave, with entanglement explained through nonlocal influences mediated by this wave.\n\n- **QBism (Quantum Bayesianism)**: Views quantum states as representing an observer's beliefs rather than objective reality, reframing entanglement as correlated beliefs.\n\n- **Relational Quantum Mechanics**: Suggests that quantum states are relational rather than absolute, with entanglement reflecting relations between different observers' descriptions.\n\nWe'll examine how each interpretation addresses the apparent nonlocality of entanglement, Bell's theorem, and the EPR paradox, and discuss the philosophical implications each interpretation has for concepts like determinism, locality, and the nature of reality itself.",
          type: "reading",
          duration: 30,
          points: 20
        }
      ]
    },
    {
      id: "2.2.5",
      title: "Advanced Entanglement Concepts",
      description: "Delve into cutting-edge research on multipartite entanglement and entanglement measures.",
      lessons: [
        {
          id: "2.2.5.1",
          title: "Multipartite Entanglement",
          description: "Explore entanglement between three or more quantum systems and its unique properties.",
          content: "While entanglement between two qubits (bipartite entanglement) is well understood, entanglement becomes far more complex and rich when it involves three or more quantum systems. This is called multipartite entanglement, and it exhibits fascinating properties not seen in simpler entangled systems.\n\nIn this lesson, we'll explore:\n\n- **GHZ States**: Named after Greenberger, Horne, and Zeilinger, these states exhibit perfect correlations between all particles and can demonstrate quantum nonlocality without using statistical inequalities.\n\n- **W States**: These states maintain their entanglement even if one particle is lost, making them more robust than GHZ states for certain applications.\n\n- **Cluster States**: These highly entangled states form the basis for measurement-based quantum computing, a powerful alternative model to the circuit model.\n\n- **Classification Challenges**: Unlike bipartite entanglement, multipartite entanglement cannot be characterized by a single measure, leading to a rich classification problem.\n\nWe'll discuss how scientists create and verify multipartite entanglement in the lab, its applications in quantum computing and quantum networking, and the fundamental insights it provides into the structure of quantum information.\n\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/5l1p-GX8veo\" title=\"Multipartite Entanglement Explained\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
          type: "video",
          duration: 30,
          points: 25
        },
        {
          id: "2.2.5.2",
          title: "Entanglement Measures",
          description: "Learn how to quantify the amount of entanglement in quantum systems using mathematical measures.",
          content: "Entanglement is not just a yes-or-no property - quantum systems can be more or less entangled, and measuring this 'amount' of entanglement is crucial for both theoretical understanding and practical applications. In this lesson, we'll explore the mathematical framework for quantifying entanglement.\n\nWe'll cover key entanglement measures including:\n\n- **Entanglement Entropy**: Using von Neumann entropy to measure the entanglement in pure states\n\n- **Entanglement of Formation**: A measure for mixed states that quantifies the minimum number of maximally entangled pairs needed to create the state\n\n- **Concurrence**: A convenient measure for two-qubit systems that has a closed-form expression\n\n- **Negativity**: Based on the partial transpose operation, this measure is easier to compute for higher-dimensional systems\n\n- **Geometric Measures**: Approaches that quantify entanglement based on the distance from the set of separable states\n\nWe'll also discuss the properties that any good entanglement measure should satisfy, such as not increasing under local operations and classical communication (LOCC), and explain why multiple measures exist rather than a single universal measure of entanglement.",
          type: "reading",
          duration: 35,
          points: 25
        },
        {
          id: "2.2.5.3",
          title: "Entanglement Distillation Simulation",
          description: "Use an interactive simulator to learn about entanglement distillation protocols.",
          content: "In real-world quantum systems, noise and environmental interactions often degrade the quality of entanglement. Entanglement distillation protocols allow us to convert many copies of weakly entangled states into fewer copies of more strongly entangled states, a crucial capability for practical quantum networks and quantum repeaters.\n\nIn this interactive lesson, you'll use a simulator to learn about and experiment with entanglement distillation protocols. You'll start with partially entangled or noisy quantum states and apply various distillation algorithms to purify them into more useful forms of entanglement.\n\nThe simulator will allow you to visualize:\n\n- How noise affects entangled quantum states\n- How distillation protocols transform the quantum state at each step\n- The trade-off between the number of initial states and the quality of the final states\n- The performance of different distillation strategies under various noise models\n\nBy the end of this hands-on experience, you'll understand why entanglement distillation is essential for practical quantum technologies and how it works at a fundamental level.",
          type: "interactive",
          interactiveComponent: "QuantumSimulator",
          duration: 40,
          points: 35
        }
      ]
    },
    {
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
    }
  ]
};
