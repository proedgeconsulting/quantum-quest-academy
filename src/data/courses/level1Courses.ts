
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
  modules: [] // To be filled in later
};

// All Level 1 courses
export const level1Courses: Course[] = [
  quantumBasicsCourse,
  quantumPlaygroundCourse,
  quantumCodingLiteCourse
];
