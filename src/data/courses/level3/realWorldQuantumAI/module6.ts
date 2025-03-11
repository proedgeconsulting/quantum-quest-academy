
import { Module } from "@/data/types/courseTypes";

// Module 6: Quantum AI Ethics
export const quantumAIEthicsModule: Module = {
  id: "3.2.6",
  title: "Quantum AI Ethics",
  description: "Explore the ethical considerations of powerful quantum AI technologies.",
  lessons: [
    {
      id: "3.2.6.1",
      title: "The Power and Responsibility of Quantum AI",
      description: "Learn about ethical considerations when using powerful quantum AI technology.",
      content: "With great power comes great responsibility! Quantum AI is incredibly powerful, which means we need to think carefully about how we use it. In this thought-provoking lesson, we'll explore the ethical questions that come with quantum AI technology.\n\nYou'll learn about important issues like privacy, fairness, and transparency. We'll discuss questions like: Who should have access to quantum AI? How do we make sure it's used fairly? What happens when quantum AI makes decisions that affect people's lives? Through interactive scenarios and group discussions, you'll develop your own ethical framework for responsible quantum AI.",
      type: "reading",
      duration: 20,
      points: 50
    },
    {
      id: "3.2.6.2",
      title: "Quantum Ethics Simulator",
      description: "Navigate ethical dilemmas in a simulation game featuring quantum AI scenarios.",
      content: "Put your ethical thinking to the test in the Quantum Ethics Simulator! In this interactive game, you'll face a series of scenarios involving quantum AI technology and have to make difficult decisions.\n\nShould a quantum AI be allowed to make medical decisions? How much privacy should people give up for better quantum AI services? Should quantum AI be used in military applications? There are no perfect answers, but your choices will have consequences in the simulation. See how your decisions affect different stakeholders and compare your choices with other players!",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/quantum-ethics-simulator.html",
        height: 600,
        width: "100%"
      },
      duration: 25,
      points: 100
    },
    {
      id: "3.2.6.3",
      title: "Design Your Quantum AI Guidelines",
      description: "Create a set of ethical guidelines for a quantum AI application of your choice.",
      content: "Now it's your turn to become an ethics expert! In this creative challenge, you'll develop a set of ethical guidelines for a quantum AI application of your choice. Maybe you're creating guidelines for a quantum medical diagnosis system, a quantum criminal justice AI, or a quantum-powered social media platform.\n\nYou'll think about who might be affected by your quantum AI, what risks it might create, and how to make it fair and transparent. Then you'll create a simple 'code of ethics' that explains how your quantum AI should be designed and used. Your guidelines might help shape the future of responsible quantum AI!",
      type: "reading",
      duration: 30,
      points: 120
    }
  ]
};

// For backwards compatibility
export const module6 = quantumAIEthicsModule;
