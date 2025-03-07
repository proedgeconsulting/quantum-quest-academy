
import { Module } from "@/data/types/courseTypes";

// Module 9: Quantum Error Correction Adventures
export const module9: Module = {
  id: "2.3.9",
  title: "Quantum Error Correction Adventures",
  description: "Join exciting adventures where error correction saves the day!",
  lessons: [
    {
      id: "2.3.9.1",
      title: "Mission: Quantum Message Rescue",
      description: "Save an important quantum message from being corrupted during transmission.",
      content: "An important quantum message is being sent across the galaxy, but it must pass through a dangerous region of space filled with cosmic radiation that can corrupt quantum information! Your mission is to ensure the message arrives safely by implementing quantum error correction.\n\nIn this adventure, you'll play the role of a Quantum Communications Officer who must encode the message before transmission and decode it upon arrival. You'll need to choose the right error correction code based on the types of errors you expect to encounter in different regions of space.\n\nAs you progress through the mission, you'll face unexpected challenges like solar flares that cause burst errors or gravitational anomalies that twist your qubits in strange ways. Your quick thinking and knowledge of quantum error correction will be the difference between mission success and failure!",
      type: "interactive",
      interactiveComponent: "BuildAtomActivity",
      duration: 25,
      points: 20
    },
    {
      id: "2.3.9.2",
      title: "The Quantum Computer Rescue Squad",
      description: "Join a team that helps fix broken quantum computers using error correction.",
      content: "The Quantum Computer Rescue Squad needs your help! You're part of an elite team that responds to quantum computing emergencies across the city. When quantum computers start behaving strangely, your team rushes in to diagnose and fix the problems using error correction techniques.\n\nIn this video lesson, you'll follow the squad on several exciting rescue missions. You'll learn how to identify different error patterns by their symptoms, how to apply the right error correction techniques, and how to verify that the quantum computer is functioning properly again.\n\nYou'll see how different error correction codes are suited to different situations, and how the rescue squad chooses the right approach for each emergency. By the end of this lesson, you'll understand how quantum error correction is applied in real-world scenarios!",
      type: "video",
      duration: 20,
      points: 15
    },
    {
      id: "2.3.9.3",
      title: "Quantum Error Correction: The Board Game",
      description: "Play a fun board game that teaches quantum error correction strategies.",
      content: "In this interactive lesson, you'll play a digital version of \"Quantum Guardians,\" a board game where players work together to protect quantum information from errors.\n\nEach player takes on a different role in the quantum error correction team: the Encoder, the Syndrome Extractor, the Error Corrector, and the Decoder. You'll need to coordinate your actions to successfully process quantum information while the game introduces random errors and challenges.\n\nThe game board represents a quantum circuit with qubits moving through different gates. Players must place error detection components, perform syndrome measurements, and apply correction operations at the right times. With each successfully processed qubit, you'll earn points and unlock new error correction tools for your team. Can you achieve a perfect score?",
      type: "interactive",
      interactiveComponent: "QuantumCoinSimulator",
      duration: 30,
      points: 25
    },
    {
      id: "2.3.9.4",
      title: "The Quantum Error Correction Olympics",
      description: "Compete in fun challenges that test your quantum error correction skills.",
      content: "Welcome to the Quantum Error Correction Olympics! In this lesson, you'll participate in a series of fun challenges that test different aspects of your quantum error correction knowledge.\n\nEvents include:\n\n- The Error Detection Sprint: Identify errors as quickly as possible\n\n- The Syndrome Decoding Relay: Work with teammates to interpret syndrome measurements and apply corrections\n\n- The Quantum Code Construction Challenge: Build an error correction code that satisfies specific requirements\n\n- The Fault-Tolerance Marathon: Maintain a quantum computation for as long as possible while errors accumulate\n\nYou'll earn medals based on your performance in each event, and your combined score will determine your overall ranking. This olympic-style competition makes learning quantum error correction fun while reinforcing key concepts through friendly competition!",
      type: "interactive",
      interactiveComponent: "AtomSimulation",
      duration: 35,
      points: 30
    }
  ]
};
