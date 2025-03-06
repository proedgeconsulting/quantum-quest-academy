
import { Course } from "@/data/types/courseTypes";

// Level 1 Course: Quantum Basics
export const quantumBasicsCourse: Course = {
  id: "1.1",
  title: "Quantum Basics",
  description: "Discover the fascinating world of atoms, light, and energy.",
  level: 1,
  duration: "4 weeks",
  icon: "atom",
  weeks: 4,
  modules: [
    {
      id: "1.1.1",
      title: "Introduction to Quantum World",
      description: "Learn about the strange and fascinating quantum world around us.",
      lessons: [
        {
          id: "1.1.1.1",
          title: "What is Quantum Physics?",
          description: "An introduction to the fundamental concepts of quantum physics.",
          content: "Quantum physics is the study of matter and energy at its most fundamental level. Unlike classical physics that we experience in our everyday lives, quantum physics deals with the behavior of particles at the atomic and subatomic levels, where strange and counterintuitive phenomena occur.\n\nIn this course, we'll explore the weird and wonderful world of quantum physics, where particles can exist in multiple places at once, teleport across space, and even communicate instantaneously across vast distances.",
          type: "reading",
          duration: 10,
          points: 5
        },
        {
          id: "1.1.1.2",
          title: "The Building Blocks of Reality",
          description: "Explore atoms, electrons, and the fundamental particles.",
          content: "Everything in our universe is made up of tiny building blocks called atoms. But what are atoms made of? In this lesson, we'll dive into the subatomic world to discover protons, neutrons, and electrons.\n\nWe'll learn how these particles come together to form atoms, and how atoms combine to create everything from the air we breathe to the stars in the sky.",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "1.1.1.3",
          title: "Build Your Own Atom",
          description: "Interactive activity to build different atoms by adding protons, neutrons, and electrons.",
          content: "Now it's time to put your knowledge into practice! In this interactive activity, you'll build your own atoms by adding the correct number of protons, neutrons, and electrons.\n\nSee how changing the number of particles affects the element you create, and learn about the periodic table of elements.",
          type: "interactive",
          interactiveComponent: "BuildAtomActivity",
          duration: 20,
          points: 15
        },
        {
          id: "1.1.1.4",
          title: "Introduction Quiz",
          description: "Test your understanding of quantum basics.",
          content: "Let's check what you've learned so far about the quantum world.",
          type: "quiz",
          duration: 10,
          points: 20
        }
      ]
    },
    {
      id: "1.1.2",
      title: "Light and Energy",
      description: "Discover the dual nature of light as both a wave and a particle.",
      lessons: [
        {
          id: "1.1.2.1",
          title: "The Mystery of Light",
          description: "Understand the wave-particle duality of light.",
          content: "Light is one of the most fascinating phenomena in the universe. For centuries, scientists debated whether light was a wave or a particle. The surprising answer? It's both!\n\nIn this lesson, we'll explore how light can behave as both a wave and a particle, a concept known as wave-particle duality. This strange property is a fundamental aspect of quantum physics.",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "1.1.2.2",
          title: "Light in Action",
          description: "See how light interacts with different materials.",
          content: "Light interacts with matter in fascinating ways. In this lesson, we'll explore phenomena like reflection, refraction, and absorption.\n\nWe'll also learn about the electromagnetic spectrum, from radio waves to gamma rays, and discover how different types of light affect our world.",
          type: "video",
          duration: 10,
          points: 10
        },
        {
          id: "1.1.2.3",
          title: "Photon Explorer",
          description: "Interactive simulation to explore the properties of photons.",
          content: "In this interactive activity, you'll explore the behavior of photons - the particles of light. See how they travel through space, interact with objects, and demonstrate both wave-like and particle-like properties.\n\nYou'll also learn about the photoelectric effect, a phenomenon that helped establish the quantum nature of light.",
          type: "interactive",
          interactiveComponent: "AtomSimulation",
          duration: 20,
          points: 15
        },
        {
          id: "1.1.2.4",
          title: "Light and Energy Quiz",
          description: "Test your understanding of light and energy concepts.",
          content: "Let's check what you've learned about light, photons, and energy.",
          type: "quiz",
          duration: 10,
          points: 20
        }
      ]
    }
  ]
};

// Level 1 Course: Quantum Playground
export const quantumPlaygroundCourse: Course = {
  id: "1.2",
  title: "Quantum Playground",
  description: "Explore quantum concepts through fun games and activities.",
  level: 1,
  duration: "4 weeks",
  icon: "wave",
  weeks: 4,
  modules: [
    {
      id: "1.2.1",
      title: "Quantum Games",
      description: "Learn quantum principles through engaging games and puzzles.",
      lessons: [
        {
          id: "1.2.1.1",
          title: "Quantum Tic-Tac-Toe",
          description: "Play a quantum version of the classic game where pieces exist in superposition.",
          content: "Welcome to Quantum Tic-Tac-Toe! In this fascinating twist on the classic game, each move places a piece in superposition across multiple squares rather than just one location.\n\nUnlike classical Tic-Tac-Toe where a piece occupies a single square, quantum pieces exist in multiple squares simultaneously until a 'measurement' forces them to collapse to a definite position. This mirrors the quantum concept of superposition, where particles exist in multiple states until observed.\n\nThrough playing this game, you'll develop an intuitive feel for how quantum particles behave differently from the classical objects we encounter in everyday life. Let's get started with the basic rules and see how quantum mechanics can transform even simple games into mind-bending challenges!",
          type: "interactive",
          interactiveComponent: "BuildAtomActivity", // Reusing existing component as placeholder
          duration: 25,
          points: 20
        },
        {
          id: "1.2.1.2",
          title: "Quantum Coin Flips",
          description: "Explore probability and quantum randomness with virtual quantum coins.",
          content: "In the classical world, a coin flip has only two possible outcomes: heads or tails. But what happens when we enter the quantum realm?\n\nIn this lesson, we'll explore the concept of quantum coin flips, where a quantum coin can exist in a superposition of both heads and tails simultaneously. We'll see how measuring the state of the coin forces it to 'choose' one outcome, and how this relates to the fundamental nature of quantum mechanics.\n\nWe'll also investigate how quantum random number generators work, and why they provide true randomness unlike classical computer algorithms that can only produce pseudo-random numbers.",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "1.2.1.3",
          title: "Quantum Chess Challenge",
          description: "Play a modified version of chess with quantum moves and strategies.",
          content: "Quantum Chess introduces mind-bending new possibilities to the ancient game of strategy. In this quantum variant, pieces can exist in superposition (multiple places at once) and become entangled with other pieces.\n\nThis creates fascinating new tactical possibilities that even grandmasters find challenging! You might split your queen into a superposition across multiple squares, or entangle your knights so that moving one affects the other.\n\nIn this lesson, we'll explore the rules of Quantum Chess and practice some basic strategies. By playing this game, you'll develop intuition for quantum superposition, entanglement, and measurement - three of the most important concepts in quantum physics.",
          type: "interactive",
          interactiveComponent: "AtomSimulation", // Reusing existing component as placeholder
          duration: 30,
          points: 25
        },
        {
          id: "1.2.1.4",
          title: "Quantum Games Quiz",
          description: "Test your understanding of quantum game concepts.",
          content: "Let's check what you've learned about quantum games and their connection to quantum principles.",
          type: "quiz",
          duration: 10,
          points: 15
        }
      ]
    },
    {
      id: "1.2.2",
      title: "Quantum Thought Experiments",
      description: "Explore famous quantum thought experiments through interactive simulations.",
      lessons: [
        {
          id: "1.2.2.1",
          title: "Schrödinger's Cat",
          description: "Understand the famous thought experiment about quantum superposition.",
          content: "Schrödinger's Cat is perhaps the most famous thought experiment in quantum physics. Proposed by physicist Erwin Schrödinger in 1935, it illustrates the apparent paradox of quantum superposition when applied to everyday objects.\n\nIn this thought experiment, a cat is placed in a sealed box with a radioactive atom, a Geiger counter, and a vial of poison. If the radioactive atom decays (a quantum event with probability), the Geiger counter detects it and triggers the release of poison, killing the cat.\n\nAccording to quantum mechanics, until we open the box and observe the system, the radioactive atom exists in a superposition of decayed and not-decayed states. This would mean the cat is simultaneously both alive and dead until observed - a conclusion that seems absurd when applied to macroscopic objects like cats!\n\nThis thought experiment highlights the difficulty of reconciling quantum mechanics with our everyday experience of reality.",
          type: "reading",
          duration: 20,
          points: 15
        },
        {
          id: "1.2.2.2",
          title: "Double-Slit Experiment",
          description: "Visualize the experiment that reveals the wave-particle duality of matter.",
          content: "The Double-Slit Experiment is one of the most profound demonstrations of quantum mechanics. In this interactive lesson, we'll explore how this experiment reveals the wave-particle duality of matter and light.\n\nWhen we send particles (like electrons) through two narrow slits onto a detection screen, we don't see two bands of particles as classical physics would predict. Instead, we observe an interference pattern similar to what happens when waves pass through two openings.\n\nEven more bizarrely, this interference pattern appears even when we send particles one at a time - as if each particle interferes with itself! But when we try to observe which slit each particle goes through, the interference pattern disappears and we see the classical result.\n\nThrough this experiment, we'll see how quantum entities behave as both particles and waves, and how the act of measurement affects quantum behavior.",
          type: "video",
          duration: 15,
          points: 10
        },
        {
          id: "1.2.2.3",
          title: "Quantum Entanglement Simulator",
          description: "Explore the 'spooky action at a distance' that puzzled Einstein.",
          content: "Quantum entanglement is one of the most counterintuitive phenomena in quantum physics - what Einstein famously called 'spooky action at a distance.'\n\nWhen two particles become entangled, their properties become correlated in such a way that the state of one particle instantly influences the state of the other, regardless of the distance separating them. This seems to violate the speed of light as a cosmic speed limit, which troubled Einstein greatly.\n\nIn this interactive simulation, you'll create entangled particle pairs and perform measurements on them. You'll observe how measuring one particle instantly determines the state of its entangled partner, and explore how this strange phenomenon is being harnessed for quantum computing, quantum cryptography, and quantum teleportation.",
          type: "interactive",
          interactiveComponent: "BuildAtomActivity", // Reusing existing component as placeholder
          duration: 25,
          points: 20
        },
        {
          id: "1.2.2.4",
          title: "Thought Experiments Quiz",
          description: "Test your understanding of quantum thought experiments.",
          content: "Let's check what you've learned about famous quantum thought experiments and their implications.",
          type: "quiz",
          duration: 10,
          points: 15
        }
      ]
    }
  ]
};

// Level 1 Course: Quantum Coding Lite
export const quantumCodingLiteCourse: Course = {
  id: "1.3",
  title: "Quantum Coding Lite",
  description: "Write your first programs to control quantum systems.",
  level: 1,
  duration: "4 weeks",
  icon: "code",
  weeks: 4,
  modules: [
    {
      id: "1.3.1",
      title: "First Steps in Quantum Programming",
      description: "Learn the basics of programming quantum computers with simplified syntax.",
      lessons: [
        {
          id: "1.3.1.1",
          title: "Introduction to Quantum Programming",
          description: "Discover what makes quantum programming different from classical programming.",
          content: "Welcome to your first steps in quantum programming! Unlike classical computers that use bits (0s and 1s), quantum computers use quantum bits or 'qubits' which can exist in multiple states simultaneously thanks to superposition.\n\nIn this course, we'll use a simplified programming syntax to help you understand quantum concepts without getting lost in complex mathematics or syntax. Think of it as learning to drive a car before understanding how the engine works!\n\nQuantum programming introduces several key concepts that don't exist in classical programming:\n\n1. **Superposition**: Qubits can be in multiple states at once\n2. **Entanglement**: Qubits can be connected in ways that their states become dependent on each other\n3. **Interference**: Quantum states can interfere with each other, enhancing or canceling out probabilities\n\nBy the end of this module, you'll write simple quantum programs that demonstrate these unique features!",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "1.3.1.2",
          title: "Your First Quantum Bit",
          description: "Learn how to create and manipulate qubits in code.",
          content: "Let's create our first qubit! In quantum programming, we start with qubits in a known state (usually |0⟩, pronounced 'ket 0'). Then we apply operations, called 'gates', to manipulate them.\n\nThe most basic quantum gate is the Hadamard gate (H), which puts a qubit into superposition - meaning it has a 50% chance of being measured as 0 and a 50% chance of being measured as 1.\n\nHere's what a simple program to create a superposition looks like in our simplified quantum coding language:\n\n```\n// Create a qubit in state |0⟩\nqubit q = 0;\n\n// Apply Hadamard gate to put it in superposition\nH(q);\n\n// Measure the qubit - will be either 0 or 1 with 50% probability each\nresult = measure(q);\n```\n\nIn the interactive component below, you can try running this program multiple times. You'll notice that the measurement gives either 0 or 1 randomly - that's quantum mechanics in action!",
          type: "interactive",
          interactiveComponent: "BuildAtomActivity",
          duration: 20,
          points: 15
        },
        {
          id: "1.3.1.3",
          title: "Quantum Gates and Operations",
          description: "Explore the basic building blocks of quantum circuits.",
          content: "Just like classical computers have logic gates (AND, OR, NOT), quantum computers have quantum gates. Let's explore the fundamental gates that we'll use in our programs:\n\n1. **X Gate (NOT Gate)**: Flips the state of a qubit (|0⟩ becomes |1⟩ and vice versa)\n\n2. **H Gate (Hadamard)**: Creates superposition (|0⟩ becomes a mix of |0⟩ and |1⟩)\n\n3. **Z Gate**: Adds a phase difference, key for interference effects\n\n4. **CNOT Gate (Controlled-NOT)**: A two-qubit gate that flips the second qubit if the first qubit is |1⟩. This is how we create entanglement!\n\nHere's a simple program that uses these gates:\n\n```\n// Create two qubits\nqubit q1 = 0;\nqubit q2 = 0;\n\n// Put first qubit in superposition\nH(q1);\n\n// Entangle the qubits\nCNOT(q1, q2);\n\n// Now q1 and q2 are entangled!\n// If q1 is measured as 0, q2 will also be 0\n// If q1 is measured as 1, q2 will also be 1\n```\n\nThis is one of the most powerful aspects of quantum computing - creating entangled states that are impossible to describe independently!",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "1.3.1.4",
          title: "First Steps Quiz",
          description: "Test your understanding of basic quantum programming concepts.",
          content: "Let's check what you've learned about the basics of quantum programming.",
          type: "quiz",
          duration: 10,
          points: 20
        }
      ]
    },
    {
      id: "1.3.2",
      title: "Simple Quantum Algorithms",
      description: "Learn to implement basic quantum algorithms and understand their power.",
      lessons: [
        {
          id: "1.3.2.1",
          title: "Building a Quantum Random Number Generator",
          description: "Create a simple program that generates true random numbers using quantum principles.",
          content: "One of the simplest and most practical applications of quantum computing is generating truly random numbers. Classical computers can only create pseudo-random numbers using mathematical formulas, but quantum computers can generate genuine randomness based on the fundamental uncertainty of quantum measurements.\n\nLet's build a quantum random number generator (QRNG) to generate a random number between 0 and 3:\n\n```\n// We need 2 qubits to represent numbers 0-3\nqubit q1 = 0;\nqubit q2 = 0;\n\n// Put both qubits in superposition\nH(q1);\nH(q2);\n\n// Measure both qubits\nbit b1 = measure(q1);\nbit b2 = measure(q2);\n\n// Combine the results to get a number between 0-3\nresult = (b1 << 1) | b2;\n```\n\nThis gives us a truly random number between 0 and 3. Each time you run the program, you'll get an unpredictable result - not because of a complex algorithm, but because of the fundamental nature of quantum mechanics.\n\nIn the interactive component, you can run this program multiple times and observe the results. Notice how unlike a classical random number generator, there's no way to predict or reproduce the exact sequence of numbers without knowing the exact quantum states.",
          type: "interactive",
          interactiveComponent: "AtomSimulation",
          duration: 20,
          points: 15
        },
        {
          id: "1.3.2.2",
          title: "Quantum Coin Flipping",
          description: "Implement a quantum program to simulate fair and biased coin flips.",
          content: "Now let's create a more flexible random generator - a quantum coin flipper that can simulate both fair and biased coins!\n\nA fair coin flip is easy - we just put a qubit in superposition and measure it:\n\n```\n// Create a qubit\nqubit q = 0;\n\n// Put it in superposition (50% chance of 0, 50% chance of 1)\nH(q);\n\n// Measure the qubit\nresult = measure(q); // 0 = heads, 1 = tails\n```\n\nBut what if we want a biased coin that lands on heads 70% of the time and tails 30% of the time? In quantum computing, we can use a special operation called a 'rotation gate' to control these probabilities.\n\n```\n// Create a qubit\nqubit q = 0;\n\n// Apply rotation to create a 70/30 bias instead of 50/50\nRY(q, 0.93); // The angle 0.93 gives approximately 70% probability of 0\n\n// Measure the qubit\nresult = measure(q); // 0 = heads (70%), 1 = tails (30%)\n```\n\nThis demonstrates how quantum computers give us fine-grained control over probabilities, which becomes incredibly powerful for more complex algorithms like quantum search or quantum machine learning.",
          type: "video",
          duration: 15,
          points: 10
        },
        {
          id: "1.3.2.3",
          title: "Quantum Teleportation: Moving Quantum Information",
          description: "Implement a simplified version of the quantum teleportation protocol.",
          content: "Quantum teleportation sounds like science fiction, but it's a real quantum algorithm that lets us transfer the state of one qubit to another, even when they're physically separated. This is the foundation for quantum networks and future quantum internet!\n\nDon't worry - we're not actually teleporting physical objects, just the quantum information (the state) from one qubit to another.\n\nHere's a simplified explanation of the quantum teleportation protocol:\n\n```\n// Step 1: Create an entangled pair of qubits (q2 and q3)\nqubit q2 = 0;\nqubit q3 = 0;\nH(q2);\nCNOT(q2, q3);\n\n// Step 2: Prepare the state we want to teleport (on q1)\nqubit q1 = 0;\n// Apply some operations to q1 to create the state we want to teleport\nH(q1);\nRZ(q1, 0.5);\n\n// Step 3: Bell measurement - entangle q1 with q2 and measure both\nCNOT(q1, q2);\nH(q1);\nbit m1 = measure(q1);\nbit m2 = measure(q2);\n\n// Step 4: Apply conditional operations on q3 based on measurements\nif (m2 == 1) X(q3);\nif (m1 == 1) Z(q3);\n\n// Now q3 has the same state that q1 had originally!\n```\n\nThe mind-blowing part? As soon as we perform the measurements, q3 instantly has information about q1's original state - even if q3 is on the other side of the universe! This is what Einstein called \"spooky action at a distance.\"",
          type: "reading",
          duration: 25,
          points: 20
        },
        {
          id: "1.3.2.4",
          title: "Simple Algorithms Quiz",
          description: "Test your understanding of basic quantum algorithms.",
          content: "Let's check what you've learned about implementing simple quantum algorithms.",
          type: "quiz",
          duration: 10,
          points: 15
        }
      ]
    }
  ]
};

// All Level 1 courses
export const level1Courses: Course[] = [
  quantumBasicsCourse,
  quantumPlaygroundCourse,
  quantumCodingLiteCourse
];
