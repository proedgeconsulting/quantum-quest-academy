import { Course } from "@/data/types/courseTypes";

// Level 2 Course: Quantum Entanglement
export const quantumEntanglementCourse: Course = {
  id: "2.2",
  title: "Quantum Entanglement",
  description: "Explore the phenomenon of quantum entanglement and its applications.",
  level: 2,
  duration: "15 weeks",
  icon: "circuit",
  weeks: 15,
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
    },
    {
      id: "2.2.7",
      title: "Entanglement Adventures",
      description: "Join Captain Qubit on exciting adventures through the quantum realm.",
      lessons: [
        {
          id: "2.2.7.1",
          title: "Meet Captain Qubit",
          description: "Get introduced to our quantum superhero who uses entanglement as his superpower.",
          content: "Welcome to the amazing adventures of Captain Qubit! Captain Qubit is a superhero who has a special power - quantum entanglement! In this story, we'll meet Captain Qubit and learn how he uses entanglement to help people and solve problems.\n\nCaptain Qubit can create entangled pairs of quantum particles and use them to communicate instantly across the galaxy! When he touches an object with his left hand, its quantum twin appears in his right hand, no matter how far apart they are!\n\nIn this first adventure, Captain Qubit needs to warn a distant space colony about an approaching meteor shower. How will he use his quantum entanglement powers to save the day? Let's find out!",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "2.2.7.2",
          title: "Entangled Rescue Mission",
          description: "Help Captain Qubit rescue astronauts using his quantum powers.",
          content: "Oh no! A team of astronauts is trapped in a space station that's losing oxygen, and their communication systems are down! Captain Qubit needs to find a way to rescue them using his quantum entanglement powers.\n\nIn this adventure, you'll help Captain Qubit set up a quantum link between Earth and the space station. By creating entangled particles, he can instantly send messages to the astronauts and coordinate their rescue!\n\nWatch this exciting video to see how Captain Qubit uses quantum entanglement in this thrilling rescue mission!",
          type: "video",
          duration: 12,
          points: 10,
          videoUrl: "https://www.youtube.com/embed/JFSRvAMeLe0"
        },
        {
          id: "2.2.7.3",
          title: "Captain Qubit's Entanglement Game",
          description: "Play an exciting game using quantum entanglement principles.",
          content: "Time to join Captain Qubit on an interactive mission! In this game, you'll help Captain Qubit use quantum entanglement to solve puzzles and complete a mission.\n\nYou control two entangled particles - when one moves up, the other moves down; when one turns left, the other turns right. Use this strange quantum behavior to navigate through mazes, collect quantum energy crystals, and unlock the path to success!\n\nCan you master the mysterious rules of entanglement to help Captain Qubit save the day?",
          type: "interactive",
          interactiveComponent: "QuantumSimulator",
          duration: 20,
          points: 20
        },
        {
          id: "2.2.7.4",
          title: "Quantum Adventures Quiz",
          description: "Test what you've learned from Captain Qubit's adventures.",
          content: "Let's see what you've learned from Captain Qubit's exciting quantum adventures!",
          type: "quiz",
          duration: 10,
          points: 15
        }
      ]
    },
    {
      id: "2.2.8",
      title: "Quantum Spooky Action",
      description: "Explore why Einstein called entanglement 'spooky action at a distance'.",
      lessons: [
        {
          id: "2.2.8.1",
          title: "Einstein's Spooky Mystery",
          description: "Learn why Einstein was puzzled by quantum entanglement.",
          content: "Did you know that even the brilliant Albert Einstein was puzzled by quantum entanglement? He called it 'spooky action at a distance' because he couldn't explain how entangled particles seem to communicate instantly, no matter how far apart they are!\n\nIn this lesson, we'll travel back in time to the 1930s when Einstein and his friends were debating about quantum physics. Einstein thought there must be some hidden explanation for entanglement because he believed nothing could travel faster than light. But quantum physics seemed to say that entangled particles could affect each other instantly across any distance!\n\nThis mystery puzzled Einstein for the rest of his life, and it's one of the most fascinating parts of quantum physics that scientists are still exploring today!",
          type: "reading",
          duration: 12,
          points: 10
        },
        {
          id: "2.2.8.2",
          title: "Spooky Experiments",
          description: "Watch scientists prove that entanglement really is 'spooky'!",
          content: "How do we know that quantum entanglement really is as 'spooky' as Einstein thought? In this video, we'll see the amazing experiments that scientists have done to prove that entanglement is real!\n\nWe'll watch as scientists create pairs of entangled particles and separate them by long distances. Then, when they measure one particle, the other particle instantly shows matching properties, as if by magic! These experiments have been done across rooms, across cities, and even with particles separated by many kilometers!\n\nThese amazing experiments show that Einstein's 'spooky action at a distance' is really happening in our universe, and it's one of the strangest and most exciting discoveries in all of science!",
          type: "video",
          duration: 15,
          points: 10,
          videoUrl: "https://www.youtube.com/embed/ZuvK-od647c"
        },
        {
          id: "2.2.8.3",
          title: "Spooky Action Game",
          description: "Play a game to experience the 'spooky' nature of quantum entanglement.",
          content: "Ready to experience some 'spooky action' for yourself? In this interactive game, you'll control two entangled quantum particles that are separated by a great distance.\n\nYou'll discover that when you measure one particle to have a certain property (like spinning up), the other particle instantly shows the opposite property (spinning down), no matter how far apart they are! It's as if they're communicating faster than light - which is why Einstein found it so spooky!\n\nCan you complete all the challenges and master this strange quantum behavior? Let's find out how 'spooky' quantum entanglement really is!",
          type: "interactive",
          interactiveComponent: "QuantumSimulator",
          duration: 20,
          points: 20
        },
        {
          id: "2.2.8.4",
          title: "Spooky Action Quiz",
          description: "Test your understanding of the 'spooky' nature of quantum entanglement.",
          content: "Let's test what you've learned about Einstein's 'spooky action at a distance'!",
          type: "quiz",
          duration: 10,
          points: 15
        }
      ]
    },
    {
      id: "2.2.9",
      title: "Quantum Communication",
      description: "Discover how quantum entanglement enables super-secure messaging.",
      lessons: [
        {
          id: "2.2.9.1",
          title: "Secret Quantum Messages",
          description: "Learn how quantum entanglement can create unbreakable secret codes.",
          content: "Did you know that quantum entanglement can help us send super-secret messages that no one can spy on? It's true! In this lesson, we'll discover how quantum physics creates the most secure communication method ever invented!\n\nImagine you want to send a secret message to your friend without anyone else being able to read it. With quantum communication, you can use entangled particles to create a special secret key that only you and your friend know. The amazing thing is that if anyone tries to spy on your quantum message, the entanglement breaks and you know immediately that someone is eavesdropping!\n\nScientists and governments are already building quantum communication networks because they're so secure. In the future, your personal messages might be protected by quantum entanglement!",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "2.2.9.2",
          title: "Quantum Messaging in Action",
          description: "See how scientists use quantum entanglement to send secure messages.",
          content: "Let's see quantum communication in action! In this video, we'll watch scientists use entangled particles to send secure messages that can't be hacked.\n\nFirst, we'll see how they create pairs of entangled photons (particles of light) using special crystals. Then, they'll separate these photons and send them to different locations. When they measure these entangled photons, they get random results that match each other - and these matching random results become their secret key!\n\nThe coolest part? If anyone tries to intercept the photons, the quantum properties change and the sender and receiver can immediately tell that someone is trying to spy on them! This makes quantum communication the most secure way to send messages ever invented!",
          type: "video",
          duration: 12,
          points: 10,
          videoUrl: "https://www.youtube.com/embed/JvgpDTDyvdk"
        },
        {
          id: "2.2.9.3",
          title: "Quantum Spy Catcher",
          description: "Play a game to detect quantum spies using entanglement.",
          content: "It's time to become a quantum security expert! In this interactive game, you'll use quantum entanglement to send secret messages and catch spies who try to intercept them.\n\nYou'll create pairs of entangled particles and use them to establish a secret key with your friend. Then, a spy will try to intercept your quantum message without being detected. Your job is to use the properties of quantum entanglement to figure out when the spy is listening in!\n\nAs you play, you'll learn why quantum communication is considered 'unhackable' and how it could revolutionize cybersecurity in the future. Are you ready to become a quantum spy catcher?",
          type: "interactive",
          interactiveComponent: "AtomSimulation",
          duration: 20,
          points: 20
        },
        {
          id: "2.2.9.4",
          title: "Quantum Communication Quiz",
          description: "Test your knowledge about quantum communication and security.",
          content: "Let's check what you've learned about quantum communication and how it can create super-secure messages!",
          type: "quiz",
          duration: 10,
          points: 15
        }
      ]
    },
    {
      id: "2.2.10",
      title: "Quantum Teleportation",
      description: "Learn how scientists can 'teleport' quantum information using entanglement.",
      lessons: [
        {
          id: "2.2.10.1",
          title: "What is Quantum Teleportation?",
          description: "Discover how quantum information can be 'teleported' using entanglement.",
          content: "Quantum teleportation sounds like science fiction, but it's real science! In this lesson, we'll learn how scientists can teleport quantum information from one place to another using entanglement.\n\nFirst, let's be clear - quantum teleportation doesn't transport matter like in Star Trek! Instead, it transfers the quantum state of one particle to another particle somewhere else. It's like taking all the information about Particle A and making Particle B become exactly like Particle A was!\n\nThe amazing thing is that this works instantly, no matter how far apart the particles are! Scientists have successfully teleported quantum information between particles separated by mountains, and even between Earth and satellites in space!\n\nQuantum teleportation is a key technology for future quantum computers and the quantum internet, where quantum information will need to be transferred between different quantum processors.",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "2.2.10.2",
          title: "Teleportation Experiments",
          description: "See how scientists perform real quantum teleportation in labs.",
          content: "Let's watch quantum teleportation happen in real laboratories! In this video, we'll see scientists teleport quantum information from one place to another.\n\nYou'll watch as they create entangled particle pairs and use them to transfer the quantum state of a third particle. It looks simple from the outside - just some lasers, mirrors, and detectors - but what's happening is truly amazing: the complete quantum state of one particle is disappearing from one location and reappearing at another!\n\nThe video will show both simple demonstrations and cutting-edge experiments where scientists have teleported quantum information across cities and even to satellites in space. It's not science fiction - it's real quantum physics happening today!",
          type: "video",
          duration: 15,
          points: 10,
          videoUrl: "https://www.youtube.com/embed/DxQK1WDYI_k"
        },
        {
          id: "2.2.10.3",
          title: "Quantum Teleportation Game",
          description: "Master the steps of quantum teleportation in this interactive game.",
          content: "Ready to try quantum teleportation yourself? In this interactive game, you'll perform all the steps needed to teleport quantum information from one particle to another!\n\nYou'll start by creating an entangled pair of particles, then prepare a third particle with the quantum information you want to teleport. Next, you'll perform special measurements and send the results through a classical communication channel (like a regular phone call).\n\nFinally, you'll apply the right quantum operations to complete the teleportation process. If you've done everything correctly, the quantum information will disappear from the original particle and appear in the target particle!\n\nDon't worry if it seems complicated - the game will guide you through each step and show you how this amazing quantum process works!",
          type: "interactive",
          interactiveComponent: "QuantumSimulator",
          duration: 25,
          points: 25
        },
        {
          id: "2.2.10.4",
          title: "Quantum Teleportation Quiz",
          description: "Test your understanding of quantum teleportation.",
          content: "Let's check what you've learned about quantum teleportation!",
          type: "quiz",
          duration: 10,
          points: 15
        }
      ]
    },
    {
      id: "2.2.11",
      title: "Quantum Entanglement in Nature",
      description: "Explore how plants, animals, and even humans might use quantum entanglement.",
      lessons: [
        {
          id: "2.2.11.1",
          title: "Quantum Biology",
          description: "Discover how plants use quantum effects to convert sunlight into energy.",
          content: "Did you know that plants might be using quantum entanglement to turn sunlight into food? It's true! Scientists have discovered that photosynthesis - the process plants use to make energy from sunlight - may involve quantum effects like entanglement and superposition.\n\nWhen sunlight hits a leaf, particles of light (photons) are captured by special molecules. The energy from these photons needs to travel to the plant's reaction center where it's converted into chemical energy. Scientists have found evidence that this energy travels through the plant like a quantum wave, taking multiple paths simultaneously and using entanglement to find the most efficient route!\n\nThis means that the plants in your garden or park might be using quantum physics every day to survive. Nature figured out how to use quantum effects billions of years before human scientists did!",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "2.2.11.2",
          title: "Animal Quantum Powers",
          description: "Learn how birds and other animals might use quantum entanglement.",
          content: "Some animals might have quantum superpowers! In this video, we'll explore how certain animals might be using quantum effects like entanglement in amazing ways.\n\nMigratory birds like European robins can navigate accurately over thousands of miles, and scientists think they might be using quantum entanglement to do it! Special molecules in birds' eyes create entangled electron pairs when struck by light, and these entangled particles are sensitive to Earth's magnetic field, giving birds a built-in quantum compass!\n\nWe'll also look at how some insects might use quantum tunneling in their sense of smell, and how certain bacteria might exploit quantum effects. The natural world might be full of quantum physics that we're just beginning to discover!",
          type: "video",
          duration: 12,
          points: 10,
          videoUrl: "https://www.youtube.com/embed/H6HLjpj4Nt4"
        },
        {
          id: "2.2.11.3",
          title: "Quantum Nature Explorer",
          description: "Investigate quantum effects in living organisms through interactive simulations.",
          content: "Time to become a quantum biology explorer! In this interactive activity, you'll investigate how quantum effects like entanglement might be happening in living things.\n\nYou'll simulate how birds might detect Earth's magnetic field using quantum entanglement in their eyes, explore how plant photosynthesis might use quantum waves to efficiently capture sunlight, and investigate how quantum tunneling might help enzymes speed up chemical reactions in your own body!\n\nAs you play with these simulations, you'll discover that the line between the quantum world and the living world isn't as clear as scientists once thought. Nature might be using quantum physics all around us, and you'll be among the explorers uncovering these amazing connections!",
          type: "interactive",
          interactiveComponent: "AtomSimulation",
          duration: 20,
          points: 20
        },
        {
          id: "2.2.11.4",
          title: "Quantum Biology Quiz",
          description: "Test your knowledge about quantum effects in living organisms.",
          content: "Let's check what you've learned about quantum entanglement and other quantum effects in nature!",
          type: "quiz",
          duration: 10,
          points: 15
        }
      ]
    },
    {
      id: "2.2.12",
      title: "Quantum Entanglement Challenge",
      description: "Put all your quantum entanglement knowledge to the test in exciting challenges.",
      lessons: [
        {
          id: "2.2.12.1",
          title: "Entanglement Escape Room",
          description: "Use your quantum knowledge to solve puzzles and escape!",
          content: "Welcome to the Quantum Entanglement Escape Room! You've been trapped in a special room where the only way out is to solve puzzles using your knowledge of quantum entanglement.\n\nThe room contains various devices that use entangled particles. You'll need to figure out how to use entanglement properties to unlock doors, decode messages, and eventually find your way out!\n\nYou'll need to remember what you've learned about how entangled particles behave, how measuring one affects the other, and how to use this strange quantum connection to your advantage. Good luck, quantum explorer - the clock is ticking!",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "2.2.12.2",
          title: "Quantum Game Show",
          description: "Watch contestants compete in a quantum knowledge competition.",
          content: "It's time for the Quantum Game Show! In this fun video, we'll watch as contestants compete to answer questions and solve challenges all about quantum entanglement.\n\nContestants will face brain-teasing questions about entangled particles, demonstrate quantum principles using everyday objects, and race to complete quantum experiments before time runs out. The competition gets more challenging with each round!\n\nAs you watch, see if you can answer the questions before the contestants do. How much quantum knowledge have you gained through this course?",
          type: "video",
          duration: 15,
          points: 10,
          videoUrl: "https://www.youtube.com/embed/wUPBY0Iw9Co"
        },
        {
          id: "2.2.12.3",
          title: "Ultimate Quantum Challenge",
          description: "Face the ultimate test of your quantum entanglement knowledge.",
          content: "Are you ready for the Ultimate Quantum Challenge? This interactive activity combines everything you've learned about quantum entanglement into one epic final challenge!\n\nYou'll navigate through a series of increasingly difficult quantum puzzles, each requiring you to apply different aspects of quantum entanglement. You might need to:  \n\n- Create specific entangled states  \n- Use entanglement to send secure messages  \n- Perform quantum teleportation  \n- Detect quantum 'spies' trying to intercept your particles  \n- Design quantum experiments to test entanglement properties  \n\nThis challenge brings together all the quantum concepts you've mastered throughout the course. Do you have what it takes to become a true Quantum Entanglement Master?",
          type: "interactive",
          interactiveComponent: "QuantumSimulator",
          duration: 30,
          points: 30
        },
        {
          id: "2.2.12.4",
          title: "Quantum Entanglement Final Quiz",
          description: "The ultimate test of everything you've learned about quantum entanglement.",
          content: "This is it - the final quiz to test everything you've learned about quantum entanglement! This comprehensive quiz covers all aspects of quantum entanglement from across the entire course.",
          type: "quiz",
          duration: 15,
          points: 25
        }
      ]
    }
  ]
};
