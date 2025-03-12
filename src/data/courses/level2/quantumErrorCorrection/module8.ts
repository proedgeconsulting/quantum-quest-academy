
import { Module } from "@/data/types/courseTypes";

// Module 8: Quantum Code Breakers
export const module8: Module = {
  id: "2.3.8",
  title: "Quantum Code Breakers",
  description: "Learn to create and break quantum error correction codes.",
  lessons: [
    {
      id: "2.3.8.1",
      title: "Secret Quantum Codes",
      description: "Discover how to hide quantum information using special codes.",
      content: "Welcome, Quantum Code Breakers! In this lesson, you'll learn how quantum error correction codes are like secret codes that protect quantum information from being corrupted.\n\nWe'll start with a simple encoding mission: hiding one qubit of information across three physical qubits. You'll learn how this special pattern makes it possible to detect and correct errors without ever looking at the secret information directly (which would destroy it).\n\nYou'll create your own simple quantum code and test it against different types of errors. By the end of this lesson, you'll understand the basic principles behind quantum error correction codes and how they differ from classical secret codes.",
      type: "reading",
      duration: 15,
      points: 10
    },
    {
      id: "2.3.8.2",
      title: "Code Breaking Challenge",
      description: "Try to crack different quantum codes by introducing errors.",
      content: "Now that you know how to create quantum error correction codes, it's time to test their limits! In this interactive challenge, you'll play both roles - the protector creating codes and the mischievous Noise Monster trying to break them.\n\nYou'll be presented with different quantum codes of increasing complexity. Your mission is to find their weaknesses by introducing specific error patterns that can fool the code. Can you find error patterns that the code can't detect or correct?\n\nAs you progress, you'll unlock more powerful error types to use against the codes, and learn about the theoretical limits of different quantum error correction strategies. This friendly competition will deepen your understanding of how quantum codes work and why some are stronger than others.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Code-Breaking-Challenge.html",
        height: 600,
        width: "100%"
      },
      duration: 25,
      points: 20
    },
    {
      id: "2.3.8.3",
      title: "Building the Perfect Code",
      description: "Design your own quantum error correction code with special properties.",
      content: "In this reading lesson (previously interactive), you'll learn how quantum scientists design custom error correction codes for specific applications.\n\nWe'll explore the process of creating quantum error correction codes with special properties, including:\n\n- Identifying the most common error types in your quantum system\n- Choosing an appropriate code structure based on these error patterns\n- Optimizing the code for efficiency (using the minimum number of physical qubits)\n- Testing the code's performance against realistic noise models\n\nThrough detailed explanations and illustrated examples, you'll understand the principles behind code design and the tradeoffs involved. You'll learn about different code families (CSS codes, topological codes, etc.) and when each is most appropriate.\n\nWe'll walk through case studies of specialized codes designed for specific quantum hardware platforms, showing how the unique error characteristics of each platform influence code design decisions. You'll see examples of codes optimized for superconducting qubits, trapped ions, and other quantum technologies.\n\nBy the end of this lesson, you'll understand the methodology of quantum code design and the creative process behind developing new quantum error correction techniques.",
      type: "reading",
      duration: 30,
      points: 25
    },
    {
      id: "2.3.8.4",
      title: "Quantum Code Tournament",
      description: "Pit your error correction code against others in a friendly competition.",
      content: "It's tournament time! In this exciting lesson, your quantum error correction code will compete against codes created by other students in a series of challenges.\n\nEach round of the tournament tests different aspects of error correction: efficiency (using the fewest qubits), power (correcting the most errors), speed (requiring the least time to decode), and adaptability (handling unexpected error types).\n\nYou'll get feedback after each round about your code's performance and have chances to improve it based on what you learn. The tournament culminates in a final challenge where your code faces the ultimate test: a realistic noise environment modeled after actual quantum hardware. May the best code win!",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Quantum-Code-Tournament.html",
        height: 600,
        width: "100%"
      },
      duration: 35,
      points: 30
    }
  ]
};
