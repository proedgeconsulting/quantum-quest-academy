
import { Course } from "@/data/types/courseTypes";

// Level 3 Course: Quantum Future
export const quantumFutureCourse: Course = {
  id: "3.3",
  title: "Quantum Future",
  description: "Explore careers and the future of quantum technology.",
  level: 3,
  duration: "4 weeks",
  icon: "graduation",
  weeks: 4,
  modules: [
    {
      id: "3.3.1",
      title: "Quantum Computing Careers",
      description: "Discover career opportunities in the quantum computing industry.",
      lessons: [
        {
          id: "3.3.1.1",
          title: "Emerging Quantum Roles",
          description: "New job positions created by the quantum computing revolution.",
          content: "The quantum computing revolution is creating a range of new career opportunities across different sectors. As quantum technologies mature, organizations are increasingly seeking professionals with specialized skills in this emerging field.\n\nKey quantum computing roles include:\n\n1. Quantum Algorithm Researchers: Developing new algorithms that leverage quantum properties to solve complex problems\n2. Quantum Software Engineers: Creating software infrastructure and tools for quantum computers\n3. Quantum Hardware Engineers: Designing and improving physical quantum computing systems\n4. Quantum Application Specialists: Identifying and implementing practical applications of quantum computing in specific industries\n5. Quantum Machine Learning Engineers: Developing and optimizing quantum approaches to machine learning problems",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "3.3.1.2",
          title: "Industry Demand Analysis",
          description: "Explore which industries are hiring quantum computing specialists.",
          content: "As quantum computing transitions from research labs to commercial applications, various industries are beginning to invest in quantum talent. This lesson examines where the greatest demand for quantum computing professionals exists today and projected growth areas.\n\nIndustries with high demand for quantum expertise include:\n\n1. Pharmaceuticals and Biotechnology: Companies seeking breakthroughs in drug discovery and protein folding simulations\n\n2. Financial Services: Investment firms and banks exploring quantum algorithms for portfolio optimization, risk analysis, and fraud detection\n\n3. Cybersecurity: Organizations developing quantum-resistant encryption and quantum cryptography solutions\n\n4. Advanced Materials: Companies researching new materials with quantum simulation techniques\n\n5. Energy: Firms optimizing energy distribution, battery chemistry, and carbon capture technologies\n\nThe lesson includes current job market data, salary ranges for various quantum roles, and interviews with industry leaders about their quantum workforce needs.",
          type: "reading",
          duration: 20,
          points: 15
        }
      ]
    },
    {
      id: "3.3.2",
      title: "Quantum Ethics and Society",
      description: "Examining the societal implications of widespread quantum technology.",
      lessons: [
        {
          id: "3.3.2.1",
          title: "Quantum Computing Ethics",
          description: "Ethical considerations surrounding quantum technology development.",
          content: "As quantum computing advances, it brings unique ethical challenges that researchers, companies, and policymakers must address. This lesson explores the ethical dimensions of quantum technology development and deployment.\n\nKey ethical considerations include:\n\n1. Encryption and Privacy: Quantum computers could eventually break widely-used encryption methods, threatening digital privacy and security. How should we manage this transition?\n\n2. Computational Equality: Will quantum computing widen the digital divide between wealthy and developing nations? What measures can ensure equitable access?\n\n3. AI Enhancement: Quantum-powered AI could accelerate decision-making capabilities beyond human oversight. What governance structures are needed?\n\n4. Dual-Use Concerns: Quantum technologies have both civilian and military applications. How should we regulate potentially dangerous applications?\n\nThe lesson examines emerging ethical frameworks, proposed regulations, and the role of international cooperation in responsible quantum technology development.",
          type: "reading",
          duration: 20,
          points: 15
        },
        {
          id: "3.3.2.2",
          title: "Quantum Policy and Governance",
          description: "How governments and organizations are preparing for the quantum era.",
          content: "The global race for quantum advantage has significant geopolitical implications. This lesson examines how different countries and international bodies are approaching quantum technology governance.\n\nWe'll explore:\n\n1. National Quantum Initiatives: Comparing investment strategies and policy frameworks across the US, China, EU, UK, Canada, Australia, and other countries\n\n2. International Collaboration vs. Competition: The tension between open scientific exchange and national security concerns\n\n3. Standards Development: Efforts to create technical standards for quantum technologies and their implications\n\n4. Regulatory Approaches: Emerging regulations around quantum encryption, quantum communications, and quantum sensing\n\nThe lesson includes case studies of specific policy interventions, interviews with policymakers, and discussion of potential frameworks for international governance of quantum technologies as they mature.",
          type: "video",
          duration: 25,
          points: 20
        }
      ]
    }
  ],
  progress: 0
};
