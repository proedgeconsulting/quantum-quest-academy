
import { Module } from "@/data/types/courseTypes";

// Module 1: Quantum AI Applications
export const quantumAIApplicationsModule: Module = {
  id: "3.2.1",
  title: "Quantum AI Applications",
  description: "Explore real-world applications of quantum AI.",
  lessons: [
    {
      id: "3.2.1.1",
      title: "Quantum AI in Drug Discovery",
      description: "How quantum computing is accelerating pharmaceutical research.",
      content: "Quantum computing offers revolutionary potential in drug discovery and pharmaceutical research. Traditional drug discovery involves screening millions of compounds for potential therapeutic effects, a process that can take years and cost billions of dollars.\n\nQuantum computers can significantly accelerate this process by efficiently simulating molecular interactions and predicting how potential drug candidates might bind to target proteins. This is particularly valuable because classical computers struggle to accurately model complex quantum mechanical behavior of molecules, which is essential for understanding drug interactions.\n\nQuantum machine learning algorithms can identify patterns in vast chemical spaces, predicting which molecules have desired properties without needing to synthesize and test each one physically. This capability could potentially reduce the drug discovery timeline from years to months.",
      type: "reading",
      duration: 20,
      points: 15
    },
    {
      id: "3.2.1.2",
      title: "Quantum AI for Climate Modeling",
      description: "Using quantum machine learning to improve climate predictions.",
      content: "Climate modeling represents one of the most computationally intensive scientific challenges of our time. The complex, nonlinear systems involved in climate science create enormous computational demands that classical computers struggle to meet.\n\nIn this lesson, we explore how quantum machine learning algorithms can potentially revolutionize climate science by:\n\n1. Processing and analyzing massive climate datasets more efficiently\n\n2. Modeling complex atmospheric and oceanic interactions with higher precision\n\n3. Simulating quantum many-body systems that are relevant for understanding certain climate phenomena\n\n4. Optimizing resource allocation for climate mitigation strategies\n\nWe'll examine current research collaborations between climate scientists and quantum computing experts, early proof-of-concept applications, and the challenges that need to be overcome before quantum advantage can be achieved in this domain.",
      type: "video",
      duration: 25,
      points: 20
    }
  ]
};
