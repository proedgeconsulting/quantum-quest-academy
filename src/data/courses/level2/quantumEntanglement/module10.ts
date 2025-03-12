
import { Module } from "@/data/types/courseTypes";

// Module 10: Quantum Games and Puzzles
export const module10: Module = {
  id: "2.2.10",
  title: "Quantum Games and Puzzles",
  description: "Have fun with quantum games while deepening your understanding of entanglement.",
  lessons: [
    {
      id: "2.2.10.1",
      title: "Quantum Game Theory",
      description: "Learn how entanglement changes the landscape of game theory.",
      content: "Classical game theory has revolutionized economics, political science, and evolutionary biology by providing a framework for analyzing strategic decision-making. Quantum game theory extends this framework to the quantum realm, where entanglement and superposition can lead to surprising new equilibria and strategies.\n\nIn this lesson, we'll explore how quantum mechanics changes familiar games like the Prisoner's Dilemma, the Battle of the Sexes, and coordination games. We'll discuss quantum strategies that can outperform classical ones and the concept of quantum Nash equilibria. You'll discover how entanglement can enable cooperation in scenarios where classical game theory predicts defection.",
      type: "reading",
      duration: 25,
      points: 20
    },
    {
      id: "2.2.10.2",
      title: "Quantum Nonlocal Games",
      description: "Explore games that demonstrate the nonlocal nature of quantum entanglement.",
      content: "Quantum nonlocal games are scenarios where separated players can achieve better coordination than would be possible classically by sharing entangled states. These games provide an intuitive demonstration of Bell's theorem and the nonlocal nature of quantum mechanics.\n\nIn this lesson, we'll examine well-known nonlocal games, such as the CHSH game, the Magic Square game, and the Mermin-Peres Magic Square. We'll walk through the optimal quantum strategies for these games and explain how they surpass classical bounds. We'll also discuss the connection between nonlocal games and device-independent quantum cryptography.",
      type: "video",
      duration: 20,
      points: 15,
      videoUrl: "https://www.youtube.com/watch?v=-y9UfpR6-TY"
    },
    {
      id: "2.2.10.3",
      title: "Quantum Heroes Card Game",
      description: "Test your knowledge of quantum pioneers and concepts in this fun card matching game.",
      content: "Take a break from technical details and have some fun while reinforcing your knowledge of key quantum physics concepts and pioneers. In this interactive card game, you'll match quantum heroes with their discoveries while learning interesting facts about the history of quantum mechanics.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Quantum-Heroes-Card-Game.html",
        height: 600,
        width: "100%"
      },
      duration: 15,
      points: 10
    },
    {
      id: "2.2.10.4",
      title: "Quantum Chess",
      description: "Play a version of chess that incorporates quantum superposition and entanglement.",
      content: "In this interactive game, you'll play a version of chess where pieces can exist in superposition of multiple locations and become entangled with each other. You'll need to think quantum mechanically to develop winning strategies in this mind-bending variant of the classic game!",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Quantum-Chess.html",
        height: 600,
        width: "100%"
      },
      duration: 30,
      points: 25
    }
  ]
};
