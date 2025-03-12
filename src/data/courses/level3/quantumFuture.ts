
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
          videoUrl: "https://www.youtube.com/watch?v=J3lsmO9Z00w"
        }
      ]
    },
    {
      id: "3.3.3",
      title: "Quantum Entrepreneurship",
      description: "Building innovative businesses in the quantum computing space.",
      lessons: [
        {
          id: "3.3.3.1",
          title: "Quantum Startups Landscape",
          description: "Analyzing successful quantum computing startups and their business models.",
          content: "The quantum computing startup ecosystem has grown dramatically in recent years, with ventures focusing on hardware, software, applications, and consulting services. This lesson maps the current quantum startup landscape and identifies key success factors.\n\nWe'll examine:\n\n1. Hardware Innovators: Companies developing new qubit architectures, control systems, and supporting technologies\n\n2. Algorithm Developers: Startups creating quantum software libraries, development platforms, and specific algorithms\n\n3. Application Specialists: Companies focusing on industry-specific quantum applications in finance, materials science, logistics, and healthcare\n\n4. Quantum Consultancies: Businesses helping organizations prepare for quantum advantage\n\nThe lesson includes case studies of notable quantum startups like QC Ware, Zapata Computing, Q-CTRL, IonQ, and Rigetti, analyzing their business models, funding histories, and market positioning strategies.",
          type: "reading",
          duration: 25,
          points: 20
        },
        {
          id: "3.3.3.2",
          title: "Quantum Venture Simulation",
          description: "Interactive simulation of launching and growing a quantum computing venture.",
          content: "In this interactive lesson, you'll step into the role of a quantum entrepreneur making strategic decisions to launch and grow a successful quantum computing startup. The simulator presents you with realistic scenarios and choices that impact your company's trajectory.\n\nThe simulation covers:\n\n1. Market Positioning: Deciding between hardware, software, or application focus\n\n2. Funding Strategy: Choosing between venture capital, grants, strategic partnerships, or bootstrapping\n\n3. Talent Acquisition: Building your technical and business teams\n\n4. Technology Roadmap: Setting realistic development milestones\n\n5. Go-to-Market Strategy: Selecting target industries and clients\n\nAs you navigate through the simulation, you'll receive feedback on your decisions and see how they affect your company's development, funding status, and market position over a simulated five-year period.",
          type: "interactive",
          externalSimulator: {
            type: "iframe",
            url: "/simulators/quantum-music-composer.html",
            height: 600,
            width: "100%"
          },
          duration: 35,
          points: 30
        },
        {
          id: "3.3.3.3",
          title: "Quantum IP Strategy",
          description: "Navigating patents and intellectual property in quantum technology.",
          content: "Intellectual property strategy is particularly complex in quantum computing, where fundamental research, hardware innovations, and algorithm developments all present different IP challenges. This lesson explores effective IP strategies for quantum ventures.\n\nWe'll cover:\n\n1. Patent Landscape: Current trends in quantum computing patents across hardware, software, and applications\n\n2. Patent vs. Trade Secret: Strategic considerations for protecting quantum innovations\n\n3. Open Source Approaches: The growing role of open-source in quantum software and their business implications\n\n4. Licensing Models: Creating sustainable revenue from quantum IP\n\n5. Defensive Patenting: Protecting your freedom to operate in the quantum space\n\nThe lesson incorporates expert perspectives from patent attorneys specializing in quantum technology, with practical guidance on building an IP portfolio that supports business goals while navigating the rapidly evolving quantum technology landscape.",
          type: "video",
          duration: 30,
          points: 25
          videoUrl: "https://www.youtube.com/watch?v=g_wgYtGvZTo"
        }
      ]
    },
    {
      id: "3.3.4",
      title: "Quantum Global Impact",
      description: "Exploring how quantum technologies will reshape societies and economies worldwide.",
      lessons: [
        {
          id: "3.3.4.1",
          title: "Quantum Economic Transformation",
          description: "Analyzing how quantum technologies will reshape global economies.",
          content: "Quantum computing, sensing, and communications technologies will likely trigger significant economic transformations across multiple sectors. This lesson examines the potential macroeconomic impacts of widespread quantum technology adoption.\n\nWe'll explore:\n\n1. Industry Disruption Timeline: Which sectors will be transformed first and how\n\n2. Productivity Impact Analysis: Quantifying potential economic gains from quantum computing\n\n3. Job Creation and Displacement: How quantum technologies will reshape labor markets\n\n4. Global Competitiveness Factors: How nations are positioning for quantum advantage\n\n5. Investment Patterns: Current and projected capital flows in quantum technologies\n\nThe lesson integrates economic modeling, expert forecasts, and historical parallels from previous technological revolutions to provide a comprehensive view of how quantum technologies may reshape the global economy over the next 10-30 years.",
          type: "reading",
          duration: 25,
          points: 20
        },
        {
          id: "3.3.4.2",
          title: "Quantum Development Index",
          description: "Interactive exploration of quantum readiness across different countries.",
          content: "Nations around the world are investing in quantum technologies at different rates and with varying strategies. This interactive tool allows you to explore and compare quantum development indicators across countries and regions.\n\nThe Quantum Development Index incorporates metrics including:\n\n1. Research Output: Published papers and citations in quantum science\n\n2. Patent Activity: Quantum technology patent filings by country\n\n3. Investment Levels: Government and private funding for quantum research and development\n\n4. Talent Pipeline: Education programs and workforce development in quantum technologies\n\n5. Infrastructure Development: Quantum computing centers and facilities\n\n6. Commercial Activity: Quantum startups and corporate initiatives\n\nExplore current standings, historical trends, and use the simulation features to model how policy changes might affect a country's quantum technology position in the future.",
          type: "interactive",
          externalSimulator: {
            type: "iframe",
            url: "/simulators/quantum-pattern-detector.html",
            height: 600,
            width: "100%"
          },
          duration: 30,
          points: 25
        },
        {
          id: "3.3.4.3",
          title: "Quantum Futures Scenario Planning",
          description: "Exploring alternative futures for quantum technology development and impact.",
          content: "The future of quantum technology is not predetermined—it will be shaped by technical breakthroughs, policy decisions, market forces, and social responses. This interactive lesson applies scenario planning techniques to explore alternative quantum futures.\n\nYou'll engage with four detailed scenarios for how quantum technologies might develop and impact society over the next 20 years:\n\n1. Quantum Revolution: Rapid breakthroughs lead to widespread disruption across industries\n\n2. Quantum Evolution: Steady, incremental progress with focused applications in specific domains\n\n3. Quantum Divide: Asymmetric access to quantum capabilities creates new forms of inequality\n\n4. Quantum Delay: Technical obstacles prove more challenging than anticipated, delaying widespread impact\n\nFor each scenario, you'll explore the implications for different stakeholders—governments, businesses, research institutions, and individuals—and discuss potential preparation strategies. The lesson emphasizes developing robust approaches that can succeed across multiple possible futures.",
          type: "interactive",
          externalSimulator: {
            type: "iframe",
            url: "/simulators/quantum-neural-network-trainer.html",
            height: 600,
            width: "100%"
          },
          duration: 35,
          points: 30
        }
      ]
    }
  ],
  progress: 0
};
