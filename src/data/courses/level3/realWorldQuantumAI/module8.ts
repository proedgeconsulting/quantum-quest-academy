
import { Module } from "@/data/types/courseTypes";

// Module 8: Quantum Healthcare Heroes
export const module8: Module = {
  id: "3.2.8",
  title: "Quantum Healthcare Heroes",
  description: "Discover how quantum AI is revolutionizing medicine through an interactive hospital simulation.",
  lessons: [
    {
      id: "3.2.8.1",
      title: "The Quantum Hospital Adventure",
      description: "Explore a virtual hospital where quantum AI helps doctors diagnose and treat patients.",
      content: "Welcome to Quantum General Hospital! In this adventure, you'll explore different hospital departments to see how quantum AI is helping doctors save lives. From the emergency room to the research lab, quantum computers are making healthcare better in many ways.\n\nYou'll play the role of a doctor's assistant, using quantum AI tools to analyze patient data, identify patterns in medical images, and even help design new medicines. Get ready to discover how quantum computing is changing medicine forever!",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/quantum-hospital-adventure.html",
        height: 600,
        width: "100%"
      },
      duration: 25,
      points: 100
    },
    {
      id: "3.2.8.2",
      title: "Quantum Medical Detective",
      description: "Solve medical mysteries by using quantum pattern recognition to identify unusual symptoms.",
      content: "Put on your detective hat and help solve medical mysteries! In this lesson, you'll use quantum AI to find patterns in patient symptoms that might be missed by regular computers.\n\nYou'll investigate several mysterious cases where patients have unusual combinations of symptoms. By using a quantum algorithm that can check many possibilities at once, you'll identify rare conditions faster than traditional methods. Can you diagnose all the patients correctly and become the hospital's top medical detective?",
      type: "reading",
      duration: 30,
      points: 120
    },
    {
      id: "3.2.8.3",
      title: "Design a Quantum Medicine",
      description: "Use quantum simulation to design a new medicine molecule that can fight disease.",
      content: "Scientists use quantum computers to design new medicines by simulating how molecules interact. Now it's your turn to be a quantum chemist! In this exciting activity, you'll use a quantum simulator to design a new medicine molecule.\n\nYour challenge is to create a molecule that can attach to a specific virus protein to stop it from making people sick. The quantum computer will help you test thousands of possible molecules at once to find the perfect match. Can you design an effective medicine and save the day?",
      type: "reading",
      duration: 25,
      points: 110
    }
  ]
};
