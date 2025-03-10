
import { Module } from "@/data/types/courseTypes";

// Module 7: Entanglement Adventures
export const module7: Module = {
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
      videoUrl: "https://www.youtube.com/watch?v=rudNpwVrCd4"
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
};
