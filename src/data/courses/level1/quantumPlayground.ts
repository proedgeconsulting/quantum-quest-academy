
import { Course } from "@/data/types/courseTypes";

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
          content: "# Quantum Tic-Tac-Toe\n\nWelcome to Quantum Tic-Tac-Toe, where the classic game gets a quantum twist!\n\n## How It Works\n\nIn classical Tic-Tac-Toe, you place an X or O in one square. But in the quantum version, your move creates a **quantum mark** that exists in *superposition* across two squares at once.\n\n## Game Rules\n\n1. On your turn, select TWO squares to place your quantum mark (X or O)\n2. This creates a superposition - your mark exists in both squares simultaneously\n3. When a **quantum collapse** occurs (when moves create a cycle), marks resolve to specific squares\n4. Win by getting three of your marks in a row after collapses\n\n## What You'll Learn\n\n- **Superposition**: How quantum particles exist in multiple states simultaneously\n- **Entanglement**: How quantum marks become correlated across the board\n- **Measurement**: How observation forces quantum systems to choose specific states\n\nTry playing a few rounds against the computer to see these quantum principles in action!",
          type: "interactive",
          interactiveComponent: "BuildAtomActivity", // Reusing existing component as placeholder
          duration: 30,
          points: 25
        },
        {
          id: "1.2.1.2",
          title: "Quantum Coin Flip Challenge",
          description: "Experiment with quantum randomness through virtual coin flips.",
          content: "# Quantum Coin Flip Challenge\n\n## Not Just Heads or Tails\n\nA quantum coin is nothing like the coins in your pocket! In this activity, you'll flip a special quantum coin that demonstrates the weird and wonderful properties of quantum mechanics.\n\n## Your Challenge\n\n1. **Predict the Pattern**: Can you predict the outcome of quantum coin flips?\n2. **Create Interference**: Use quantum gates to manipulate the probability of heads vs. tails\n3. **Build a Quantum Random Number Generator**: Use quantum coin flips to generate truly random numbers\n\n## The Science\n\nIn quantum mechanics, a coin can be in a **superposition** of both heads AND tails until measured. By applying different quantum operations before measurement, you can control the probabilities of each outcome.\n\nThis isn't just a game - quantum random number generators are used today in cryptography and security applications because they produce truly unpredictable results unlike classical computer algorithms.\n\nFlip the quantum coin 50 times and see if you can identify patterns in truly random quantum events!",
          type: "interactive",
          interactiveComponent: "BuildAtomActivity", // Reusing existing component as placeholder
          duration: 25,
          points: 20
        },
        {
          id: "1.2.1.3",
          title: "Quantum Maze Explorer",
          description: "Navigate through a maze using quantum tunneling and superposition.",
          content: "# Quantum Maze Explorer\n\n## Escape Using Quantum Powers\n\nIn this quantum maze game, you'll navigate through barriers that would be impossible to cross in the classical world!\n\n## Quantum Abilities\n\n1. **Quantum Tunneling**: Pass through certain barriers that would block classical objects\n2. **Superposition Walking**: Explore multiple paths simultaneously\n3. **Quantum Teleportation**: Transport across entangled maze locations\n\n## Game Mechanics\n\nYour character exists as a quantum particle with wave-like properties. As you navigate the maze:\n\n- **Energy levels** determine your tunneling ability\n- **Entangled gates** allow instant transportation between distant points\n- **Measurement zones** collapse your superposition to a single location\n\n## The Science Behind the Fun\n\nThis game illustrates real quantum phenomena like the **wave-particle duality** that allows electrons to tunnel through energy barriers, and the principle of **quantum walks** where particles explore multiple paths simultaneously.\n\nCan you find the quickest path through the quantum maze using these strange quantum properties?",
          type: "interactive",
          interactiveComponent: "AtomSimulation", // Reusing existing component as placeholder
          duration: 35,
          points: 30
        },
        {
          id: "1.2.1.4",
          title: "Quantum Games Quiz",
          description: "Test your understanding of quantum game concepts.",
          content: "Let's check what you've learned about quantum games and their connection to quantum principles.",
          type: "quiz",
          duration: 15,
          points: 15
        }
      ]
    },
    {
      id: "1.2.2",
      title: "Quantum Puzzles & Paradoxes",
      description: "Solve mind-bending quantum puzzles and explore famous quantum paradoxes.",
      lessons: [
        {
          id: "1.2.2.1",
          title: "Schrödinger's Cat Escape Room",
          description: "Help the quantum cat escape its famous paradoxical box.",
          content: "# Schrödinger's Cat Escape Room\n\n## Save the Quantum Cat!\n\nIn this interactive puzzle, you must help Schrödinger's cat escape from its paradoxical predicament before time runs out!\n\n## The Setup\n\nYou've entered a virtual escape room representing the famous thought experiment:\n\n- A cat is trapped in a box with a radioactive atom\n- If the atom decays, a poison is released\n- According to quantum mechanics, until observed, the atom exists in a superposition of decayed and not-decayed states\n- Therefore, the cat is theoretically both alive and dead simultaneously\n\n## Your Mission\n\n1. Manipulate quantum states to keep the cat alive\n2. Solve quantum puzzles to prevent atom decay\n3. Find the observer key that opens the box without collapsing the wave function in the wrong state\n\n## What You'll Learn\n\nThis puzzle illustrates the famous **measurement problem** in quantum mechanics - how quantum superpositions appear to collapse into definite states when observed, and the paradoxes this creates when applied to macroscopic objects.\n\nCan you save the quantum cat by cleverly using quantum principles?",
          type: "interactive",
          interactiveComponent: "BuildAtomActivity", // Reusing existing component as placeholder
          duration: 30,
          points: 25
        },
        {
          id: "1.2.2.2",
          title: "Double-Slit Experiment Game",
          description: "Control particles and waves to reveal quantum wave-particle duality.",
          content: "# Double-Slit Experiment Game\n\n## Wave or Particle? You Decide!\n\nIn this interactive simulation, you'll control the famous double-slit experiment that revolutionized physics and revealed the wave-particle duality of matter.\n\n## Game Controls\n\n1. **Source Control**: Adjust particle emission rate and type (electrons, photons, etc.)\n2. **Detector Setup**: Position detectors to observe which slit particles pass through\n3. **Screen Analysis**: Examine the pattern that forms on the detection screen\n\n## The Challenge\n\nYour mission is to create specific patterns on the detection screen by manipulating the experimental setup. Can you:\n\n- Create a classic two-band particle pattern?\n- Generate a wave interference pattern?\n- Make the pattern change by observing the particles?\n\n## The Mind-Bending Science\n\nThe double-slit experiment demonstrates that quantum entities like electrons behave as waves when not observed, creating an interference pattern, but act as particles when measured. This strange behavior is at the heart of quantum mechanics.\n\nAs physicist Richard Feynman said, this experiment contains \"the only mystery\" of quantum mechanics. Can you solve the mystery by playing with the variables yourself?",
          type: "interactive",
          interactiveComponent: "BuildAtomActivity", // Reusing existing component as placeholder
          duration: 40,
          points: 30
        },
        {
          id: "1.2.2.3",
          title: "Quantum Entanglement Puzzle",
          description: "Solve puzzles using 'spooky action at a distance' between entangled particles.",
          content: "# Quantum Entanglement Puzzle\n\n## Master \"Spooky Action at a Distance\"\n\nIn this mind-bending puzzle game, you'll manipulate entangled particles to solve increasingly challenging puzzles.\n\n## Game Mechanics\n\n1. **Create Entangled Pairs**: Generate particles that remain connected regardless of distance\n2. **Measure Properties**: When you measure one particle, its entangled partner instantly reflects complementary properties\n3. **Solve the Puzzles**: Use entanglement to trigger mechanisms and unlock solutions\n\n## Puzzle Examples\n\n- **The Bell Test**: Arrange detectors to prove entanglement is real\n- **Quantum Teleportation**: Transfer information using entangled particles\n- **Entanglement Swapping**: Create connections between particles that never interacted\n\n## The Science\n\nEntanglement is what Einstein famously called \"spooky action at a distance.\" When two particles become entangled, their properties become correlated in such a way that measuring one instantly affects the other, regardless of the distance separating them.\n\nThis isn't just theoretical - entanglement is the key resource enabling quantum computers, quantum cryptography, and quantum teleportation protocols.\n\nCan you harness the power of entanglement to solve all the puzzles?",
          type: "interactive",
          interactiveComponent: "AtomSimulation", // Reusing existing component as placeholder
          duration: 35,
          points: 30
        },
        {
          id: "1.2.2.4",
          title: "Quantum Paradoxes Quiz",
          description: "Test your understanding of quantum paradoxes and thought experiments.",
          content: "Let's check what you've learned about quantum paradoxes and thought experiments.",
          type: "quiz",
          duration: 15,
          points: 15
        }
      ]
    },
    {
      id: "1.2.3",
      title: "Quantum Art & Music",
      description: "Create art and music using quantum principles and randomness.",
      lessons: [
        {
          id: "1.2.3.1",
          title: "Quantum Generative Art",
          description: "Create unique artwork using quantum randomness and superposition.",
          content: "# Quantum Generative Art\n\n## Paint with Quantum Probability\n\nIn this creative activity, you'll make beautiful digital art using quantum principles as your brush!\n\n## Your Quantum Art Studio\n\n1. **Quantum Random Number Generator**: Creates truly random values for colors and positions\n2. **Superposition Brush**: Paint in multiple locations simultaneously\n3. **Entanglement Effects**: Link different elements of your artwork\n4. **Interference Patterns**: Create wave-like visual effects\n\n## Creative Challenges\n\n- Create a \"quantum landscape\" where elements exist in multiple states\n- Design a symmetrical pattern using entangled quantum bits\n- Generate an abstract composition using quantum randomness\n\n## The Science Behind the Art\n\nQuantum systems produce truly random results unlike classical computers, which use pseudo-random algorithms. Artists and designers are increasingly using quantum computers to generate unique patterns and explore new creative possibilities.\n\nYour artwork will visualize quantum probabilities and demonstrate how quantum indeterminism can be harnessed for creative expression.\n\nShare your quantum masterpiece when you're done!",
          type: "interactive",
          interactiveComponent: "BuildAtomActivity", // Reusing existing component as placeholder
          duration: 30,
          points: 25
        },
        {
          id: "1.2.3.2",
          title: "Quantum Music Composer",
          description: "Compose music using quantum algorithms and probability.",
          content: "# Quantum Music Composer\n\n## Compose with Quantum Harmonies\n\nIn this musical activity, you'll create unique compositions using quantum principles to generate melodies, harmonies, and rhythms.\n\n## Your Quantum Studio\n\n1. **Quantum Dice**: Generate truly random musical notes and patterns\n2. **Superposition Sequencer**: Create musical phrases that explore multiple possibilities simultaneously\n3. **Entanglement Harmonizer**: Link different musical elements that respond to each other\n4. **Wave Function Mixer**: Blend musical elements according to quantum probability distributions\n\n## Composition Challenges\n\n- Create a quantum melody that never repeats the same way twice\n- Design a rhythm section using entangled quantum beats\n- Compose a piece that changes based on quantum measurement outcomes\n\n## The Science Behind the Music\n\nQuantum randomness and probability distributions offer new ways to think about musical composition. Rather than deterministic patterns, quantum music explores probability spaces and the emergence of patterns from quantum uncertainty.\n\nProfessional musicians and researchers are already exploring how quantum computing can inspire new forms of generative music and sound design.\n\nShare your quantum composition when you're finished!",
          type: "interactive",
          interactiveComponent: "AtomSimulation", // Reusing existing component as placeholder
          duration: 35,
          points: 30
        },
        {
          id: "1.2.3.3",
          title: "Quantum Art & Music Quiz",
          description: "Test your understanding of quantum-inspired creative techniques.",
          content: "Let's check what you've learned about applying quantum concepts to art and music.",
          type: "quiz",
          duration: 15,
          points: 15
        }
      ]
    },
    {
      id: "1.2.4",
      title: "Quantum Games Tournament",
      description: "Test your skills in competitive quantum games against friends or AI.",
      lessons: [
        {
          id: "1.2.4.1",
          title: "Quantum Battle Ships",
          description: "Play a quantum version of the classic game with ships in superposition.",
          content: "# Quantum Battle Ships\n\n## Naval Combat with a Quantum Twist\n\nIn this quantum version of the classic Battleship game, your fleet exists in a superposition of multiple positions until measured!\n\n## Game Rules\n\n1. **Quantum Ship Placement**: Ships exist in multiple possible positions simultaneously\n2. **Probability Shots**: Target locations with varying probabilities of hitting\n3. **Wave Function Collapse**: Ships only settle into definite positions when successfully hit\n4. **Entanglement Mines**: Special weapons that can affect multiple board locations\n\n## Strategy Tips\n\n- Use quantum probability to your advantage when placing ships\n- Track enemy shot patterns to predict their ship superpositions\n- Use strategic measurements to force enemy ships to collapse in predictable positions\n\n## The Science\n\nThis game illustrates quantum superposition (ships existing in multiple places), measurement collapse (ships settling into definite positions when hit), and how probability works in quantum systems.\n\nCompete against the AI or challenge a friend to see who can master quantum naval tactics!",
          type: "interactive",
          interactiveComponent: "BuildAtomActivity", // Reusing existing component as placeholder
          duration: 30,
          points: 25
        },
        {
          id: "1.2.4.2",
          title: "Quantum Card Tournament",
          description: "Play quantum card games where cards exist in multiple states.",
          content: "# Quantum Card Tournament\n\n## Cards in Superposition\n\nWelcome to the Quantum Card Tournament, where the cards in your hand exist in multiple states until played!\n\n## Game Mechanics\n\n1. **Quantum Cards**: Each card exists as a superposition of multiple possible values\n2. **Entangled Pairs**: Some cards are entangled - playing one affects the state of others\n3. **Measurement Rules**: Playing a card forces it to collapse to a specific value\n4. **Probability Strategy**: Success depends on understanding quantum probability\n\n## Tournament Challenges\n\n- **Quantum Poker**: Play poker where cards exist in multiple states\n- **Entanglement Rummy**: Form sets with entangled cards\n- **Superposition Bridge**: Team play with quantum cards\n\n## The Science\n\nThese games demonstrate how quantum systems maintain multiple possible states simultaneously, how measurement affects quantum systems, and how entanglement creates correlations between separate quantum objects.\n\nAdvance through the tournament levels to become the Quantum Card Champion!",
          type: "interactive",
          interactiveComponent: "AtomSimulation", // Reusing existing component as placeholder
          duration: 35,
          points: 30
        },
        {
          id: "1.2.4.3",
          title: "Quantum Tournament Final Challenge",
          description: "Compete in the ultimate quantum game that combines all quantum principles.",
          content: "# Quantum Tournament Final Challenge\n\n## The Ultimate Quantum Game\n\nCongratulations on reaching the Quantum Tournament Finals! This ultimate challenge combines all the quantum principles you've learned into one comprehensive game.\n\n## Game Elements\n\n1. **Quantum Resource Management**: Collect and utilize quantum resources like entanglement, superposition, and interference\n2. **Multi-dimensional Strategy**: Plan moves across probability spaces, not just physical spaces\n3. **Quantum Advantage Zones**: Areas where quantum tactics provide special advantages\n4. **Wave Function Engineering**: Shape probability distributions to increase your chances of success\n\n## Winning Strategies\n\n- Balance observation (which collapses quantum states) with maintaining useful superpositions\n- Use entanglement to coordinate actions across the game board\n- Apply quantum tunneling to bypass obstacles\n- Create constructive interference to amplify your probability of success\n\n## The Science\n\nThis final challenge integrates all major quantum principles - superposition, entanglement, interference, measurement, and tunneling - into a comprehensive game that demonstrates how these concepts work together in quantum systems.\n\nDo you have what it takes to become the Quantum Tournament Champion?",
          type: "interactive",
          interactiveComponent: "BuildAtomActivity", // Reusing existing component as placeholder
          duration: 40,
          points: 35
        },
        {
          id: "1.2.4.4",
          title: "Quantum Tournament Quiz",
          description: "Test your mastery of all quantum gaming concepts.",
          content: "Let's check your mastery of quantum gaming concepts and strategies.",
          type: "quiz",
          duration: 15,
          points: 15
        }
      ]
    }
  ]
};
