
import { Module } from "@/data/types/courseTypes";

// Module 12: Quantum AI Ethics and Future
export const module12: Module = {
  id: "3.1.12",
  title: "Quantum AI Ethics and Future",
  description: "Explore the ethical questions and future possibilities of quantum AI.",
  lessons: [
    {
      id: "3.1.12.1",
      title: "Ethical Considerations in Quantum AI",
      description: "Explore the unique ethical questions raised by quantum artificial intelligence.",
      content: "As quantum AI technologies develop, they raise important ethical questions that we need to consider now, before these powerful systems become widespread. In this lesson, we'll explore the unique ethical considerations that quantum AI raises beyond classical AI ethics.\n\nWe'll examine questions such as:\n- How might quantum AI's superior pattern-finding affect privacy and surveillance?\n- Could quantum AI create greater power imbalances between those with access to it and those without?\n- What unique security risks might quantum machine learning systems introduce?\n- How can we ensure quantum AI development benefits humanity broadly?\n\nThe lesson will also introduce frameworks for thinking about these ethical questions and discuss the importance of diverse perspectives in shaping the future of quantum AI technologies.",
      type: "reading",
      duration: 15,
      points: 10
    },
    {
      id: "3.1.12.2",
      title: "The Future of Quantum AI",
      description: "Explore predictions for how quantum artificial intelligence might develop in coming decades.",
      content: "What might quantum artificial intelligence look like in 10, 20, or 50 years? In this video lesson, we'll explore expert predictions about the future development of quantum AI and its potential impact on society.\n\nWe'll discuss:\n\n- Current research trajectories and their likely outcomes\n- Potential breakthroughs in quantum hardware that could accelerate AI development\n- How quantum AI might transform fields like medicine, materials science, and climate modeling\n- Scenarios for how quantum AI might complement human intelligence\n\nThrough interviews with leading researchers and futurists, you'll gain insight into various perspectives on how quantum AI might evolve, including both optimistic and cautious viewpoints. The lesson emphasizes that the future isn't fixed - the choices we make today about research directions and governance will shape how quantum AI develops.",
      type: "video",
      duration: 20,
      points: 15,
      videoUrl: "https://www.youtube.com/watch?v=LKUYxBUrV4o",
    },
    {
      id: "3.1.12.3",
      title: "Quantum Ethics Simulator",
      description: "Experience ethical dilemmas involving quantum AI through an interactive simulator.",
      content: "It's time to grapple with the ethical implications of quantum AI by experiencing them directly! In this interactive lesson, you'll use our Quantum Ethics Simulator to explore scenarios involving quantum AI technologies.\n\nYou'll be presented with realistic scenarios set in the near future where quantum AI systems are being implemented in various domains, from healthcare to finance to security. For each scenario, you'll need to make decisions about how these systems should be designed, regulated, or deployed.\n\nThe simulator will show the consequences of your choices, illustrating the complex tradeoffs involved in quantum AI ethics. As you work through different scenarios, you'll develop a deeper understanding of the ethical principles at stake and the importance of thoughtful governance for these powerful technologies.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/quantum-ethics-simulator.html",
        height: 600,
        width: "100%"
      },
      duration: 25,
      points: 20
    },
    {
      id: "3.1.12.4",
      title: "Your Role in Quantum AI",
      description: "Discover how you can contribute to the responsible development of quantum AI.",
      content: "What role can you play in shaping the future of quantum AI? In this final lesson of the course, we'll explore how students like you might contribute to ensuring that quantum AI technologies develop in beneficial ways.\n\nWe'll discuss various pathways including:\n- Educational and career paths in quantum computing and AI ethics\n- The importance of bringing diverse perspectives to quantum AI research\n- How public engagement influences technology development\n- Ways to stay informed about quantum AI advancements\n\nThe lesson emphasizes that quantum AI isn't just a technical field - it needs input from people with backgrounds in ethics, policy, social sciences, and many other areas. Everyone has a stake in how these technologies develop, and there are many ways to contribute regardless of your technical background or career goals.",
      type: "video",
      duration: 20,
      points: 15,
      videoUrl: "https://www.youtube.com/watch?v=P7_SfxRrXTE&t=554s",
    }
  ]
};
