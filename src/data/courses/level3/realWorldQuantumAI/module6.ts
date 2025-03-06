
import { Module } from "@/data/types/courseTypes";

// Module 6: Quantum AI Ethics and Future Directions
export const quantumAIEthicsModule: Module = {
  id: "3.2.6",
  title: "Quantum AI Ethics and Future Directions",
  description: "Exploring ethical considerations and future possibilities in quantum AI.",
  lessons: [
    {
      id: "3.2.6.1",
      title: "Ethical Considerations in Quantum AI",
      description: "Understanding the unique ethical challenges of quantum machine learning.",
      content: "As quantum AI develops, it brings unique ethical considerations beyond those of classical AI. This lesson examines the ethical dimensions specific to quantum machine learning.\n\nWe'll explore:\n\n1. Quantum Privacy Concerns: How quantum algorithms might impact data privacy and encryption\n\n2. Access and Inequality: Addressing the potential 'quantum divide' in AI capabilities\n\n3. Transparency and Explainability: The unique challenges of interpreting quantum models\n\n4. Dual-Use Concerns: Potential misuse of advanced quantum AI capabilities\n\n5. Governance Frameworks: Emerging approaches to responsible quantum AI development\n\nThe lesson presents perspectives from ethicists, policymakers, and quantum computing researchers on creating responsible governance frameworks for quantum AI technologies as they mature.",
      type: "reading",
      duration: 25,
      points: 20
    },
    {
      id: "3.2.6.2",
      title: "Quantum AI Roadmap: The Next Decade",
      description: "Projecting the evolution of quantum AI in the coming years.",
      content: "This lesson provides a roadmap of quantum AI development, from near-term applications to long-range possibilities. We'll examine expert projections on how quantum machine learning will evolve as quantum hardware improves.\n\nTopics include:\n\n1. Near-term Applications (1-3 years): What's realistic on current and imminent hardware\n\n2. Mid-term Developments (3-7 years): Emerging capabilities as error correction improves\n\n3. Long-term Possibilities (7+ years): Potential paradigm shifts with fault-tolerant quantum computing\n\n4. Key Research Challenges: Critical problems that must be solved to advance the field\n\n5. Industry Adaptation Timeline: How different sectors will likely adopt quantum AI\n\nThe lesson integrates perspectives from leading quantum computing companies, academic researchers, and industry analysts to provide a balanced view of realistic timelines and expectations.",
      type: "video",
      duration: 30,
      points: 25
    },
    {
      id: "3.2.6.3",
      title: "Quantum AI Impact Simulator",
      description: "Simulating the potential impacts of quantum AI technologies.",
      content: "This interactive simulation lets you explore the potential societal and economic impacts of quantum AI technologies under different development scenarios.\n\nThe simulator allows you to:\n\n1. Adjust variables related to quantum hardware development timelines\n\n2. Set parameters for adoption rates across different industries\n\n3. Explore various regulatory frameworks and their effects\n\n4. Visualize projected impacts on employment, economic growth, and scientific advancement\n\n5. Compare different strategic approaches to quantum AI development\n\nThrough this simulation, you'll gain insights into the complex interplay of technological, economic, and policy factors that will shape how quantum AI affects society over the coming decades.",
      type: "interactive",
      interactiveComponent: "QuantumSimulator",
      duration: 35,
      points: 30,
      interactiveOptions: {
        simulatorType: "impactSimulator",
        timelineRange: [5, 10, 20],
        impactCategories: ["economic", "scientific", "social"],
        policyOptions: ["minimal", "balanced", "restrictive"]
      }
    }
  ]
};
