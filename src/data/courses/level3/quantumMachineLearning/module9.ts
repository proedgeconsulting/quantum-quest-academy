
import { Module } from "@/data/types/courseTypes";

// Module 9: Quantum Game Design
export const module9: Module = {
  id: "3.1.9",
  title: "Quantum Game Design",
  description: "Create games with quantum superpowers!",
  lessons: [
    {
      id: "3.1.9.1",
      title: "Quantum Character Creator",
      description: "Design game characters with quantum properties and abilities.",
      content: "Welcome to Quantum Game Studios! Today you'll learn how to create video game characters with amazing quantum superpowers that wouldn't be possible in regular games.\n\nIn this lesson, you'll design characters with quantum abilities like:\n- Superposition: Being in multiple places at once\n- Entanglement: Having connected abilities with other characters\n- Tunneling: Moving through obstacles that seem impassable\n- Quantum measurement: Causing unexpected changes when observed\n\nWe'll explore how quantum physics concepts can be turned into fun game mechanics that make your games unique. You'll learn how game designers are starting to use real quantum properties to create new types of gaming experiences.\n\nBy the end of this lesson, you'll have designed your own quantum character with special abilities based on real quantum physics!",
      type: "reading",
      duration: 15,
      points: 10
    },
    {
      id: "3.1.9.2",
      title: "Quantum Maze Adventure",
      description: "Play and design a maze game where the paths exist in superposition!",
      content: "Get ready for a maze like no other! In a quantum maze, the paths can exist in multiple configurations at once until you try to walk down them.\n\nIn this interactive lesson, you'll first play a quantum maze game where:\n- Paths exist in superposition (they might or might not be there)\n- Your observations change the maze as you explore it\n- Entangled paths affect each other when you interact with them\n- Quantum teleportation helps you find shortcuts\n\nAfter playing the game, you'll get to design your own quantum maze levels using a simple quantum circuit editor. The circuits you create will determine how the paths in your maze behave according to quantum rules.\n\nCan you create a quantum maze that's challenging but still possible to solve? Your friends can try to solve it too!",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/quantum-maze-adventure.html",
        height: 600,
        width: "100%"
      },
      duration: 25,
      points: 20
    },
    {
      id: "3.1.9.3",
      title: "Quantum Battle Simulator",
      description: "Create a battle game where quantum strategies determine the winner!",
      content: "It's time for Quantum Battle! In this video lesson, you'll learn about a new type of battle game where quantum strategies decide who wins.\n\nUnlike regular battle games where players pick a single attack move, in Quantum Battle:\n- Players create attack and defense moves using quantum circuits\n- Moves can exist in superposition (multiple attacks at once)\n- Entanglement can create powerful combo attacks\n- Quantum interference can strengthen or weaken attacks\n\nWe'll show you how a quantum battle simulator works and how to create basic quantum battle strategies. You'll see examples of winning strategies that use quantum properties in clever ways.\n\nBy understanding how quantum computing principles can be used in games, you'll get a fun glimpse into how quantum algorithms work to solve real problems too!",
      type: "video",
      duration: 20,
      points: 15
      videoUrl: "https://www.youtube.com/watch?v=7Bh3bZYEHGQ"
    },
    {
      id: "3.1.9.4",
      title: "Build Your Own Quantum Game",
      description: "Design a simple quantum game using drag-and-drop quantum circuits.",
      content: "Now it's your turn to become a quantum game designer! In this reading lesson, you'll learn how to create your very own simple quantum game from scratch.\n\nWe'll explore a process where you would:\n1. Choose a game style (puzzle, action, or strategy)\n2. Add quantum elements that use superposition and entanglement\n3. Create game rules that follow quantum physics principles\n4. Test your game and refine it to make it fun\n\nThe lesson explains how quantum game engines can translate quantum circuits into game behavior automatically, allowing you to focus on the creative part of game design without needing complex programming knowledge.\n\nThrough case studies of successful quantum games and detailed design principles, you'll understand how quantum mechanics can create entirely new gaming experiences that wouldn't be possible with classical computing approaches. The lesson includes examples of quantum game concepts and how they might be implemented in different gaming genres.",
      type: "reading",
      duration: 30,
      points: 25
    }
  ]
};
