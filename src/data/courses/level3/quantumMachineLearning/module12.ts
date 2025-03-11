
import { Module } from "@/data/types/courseTypes";

// Module 12: Quantum Future Explorer
export const module12: Module = {
  id: "3.1.12",
  title: "Quantum Future Explorer",
  description: "Discover how quantum AI might change the world!",
  lessons: [
    {
      id: "3.1.12.1",
      title: "Quantum Cities of Tomorrow",
      description: "Explore how quantum AI could help design and manage future smart cities.",
      content: "Imagine cities where traffic flows smoothly, energy is used efficiently, and resources are distributed fairly to everyone. Quantum AI might help make these smart cities of tomorrow possible!\n\nIn this lesson, we'll explore how quantum machine learning could transform cities by:\n- Optimizing traffic patterns to reduce congestion and pollution\n- Managing electricity grids that use renewable energy sources\n- Coordinating emergency responses during natural disasters\n- Planning city growth to maximize quality of life for residents\n\nYou'll see examples of how quantum computing could tackle these complex city problems that involve many interconnected systems and huge amounts of data. Some of these applications are being researched today, while others might become possible as quantum computers become more powerful.\n\nBy the end of this lesson, you'll have a vision of how quantum AI might help create more livable, sustainable, and efficient cities in the future!",
      type: "reading",
      duration: 15,
      points: 10
    },
    {
      id: "3.1.12.2",
      title: "Design Your Quantum Future",
      description: "Create an interactive simulation of how quantum AI might impact daily life in the future.",
      content: "What will daily life be like when quantum AI technology is all around us? In this interactive lesson, you'll design and explore your vision of a quantum-powered future!\n\nUsing a future scenario builder, you'll learn about creating an interactive simulation of life with advanced quantum AI. You can focus on areas like:\n1. Home life (smart homes, entertainment, education)\n2. Transportation (autonomous vehicles, flying taxis, space travel)\n3. Healthcare (personalized medicine, diagnostic tools)\n4. Environmental management (climate mitigation, conservation)\n\nFor each area, the lesson discusses quantum AI technologies that might be included and how they could interact in your simulation. Your choices would affect outcomes like quality of life, environmental impact, and social connection.\n\nThe lesson emphasizes that there's no single 'correct' quantum future - your design would reflect your values and priorities. You'll learn about comparing different possible quantum futures and considering the ethical implications of each. What kind of quantum future would you want to live in?",
      type: "reading",
      duration: 25,
      points: 20
    },
    {
      id: "3.1.12.3",
      title: "Quantum Jobs of the Future",
      description: "Discover exciting careers that might exist in the quantum computing era.",
      content: "What will you be when you grow up? In a world with powerful quantum computers, there might be amazing new jobs that don't even exist today!\n\nIn this video lesson, we'll explore potential careers in the quantum computing field, including:\n- Quantum Algorithm Designer: Creating new quantum software solutions\n- Quantum Machine Learning Engineer: Building AI systems that use quantum advantages\n- Quantum Game Developer: Creating entertainment that uses quantum principles\n- Quantum Healthcare Analyst: Using quantum computing to personalize medical treatments\n- Quantum Network Architect: Designing secure quantum communication systems\n\nFor each potential career, we'll discuss what these professionals might do day-to-day, what skills they would need, and how their work might impact society. Some of these jobs are beginning to emerge now, while others might appear as quantum technology advances.\n\nBy the end of this lesson, you'll have a glimpse of how quantum computing might create new and exciting career opportunities in your future!",
      type: "video",
      duration: 20,
      points: 15
    },
    {
      id: "3.1.12.4",
      title: "Quantum Ethics Challenge",
      description: "Navigate tricky ethical dilemmas related to powerful quantum AI technology.",
      content: "With great quantum power comes great responsibility! As quantum AI becomes more powerful, we'll face important questions about how to use it wisely and fairly.\n\nIn this interactive lesson, you'll learn about navigating through a series of ethical dilemmas related to quantum AI, such as:\n\n- Privacy: If quantum AI can process and analyze huge amounts of data, how do we protect people's privacy?\n- Access: Who should have access to powerful quantum AI tools? Should they be available to everyone?\n- Decision-making: When should we let quantum AI make important decisions, and when should humans stay in charge?\n- Unexpected consequences: How do we prepare for unexpected effects of quantum AI on society?\n\nFor each scenario, the lesson presents choices and explores how they might affect individuals and society. There are no perfect answers - you'll need to balance different values like innovation, safety, fairness, and freedom.\n\nThe lesson emphasizes the importance of thinking about these issues now, as we develop quantum AI technologies, so we can help shape how they're used in the future. What kind of quantum world do you want to help create?",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/quantum-ethics-challenge.html",
        height: 600,
        width: "100%"
      },
      duration: 30,
      points: 25
    }
  ]
};
