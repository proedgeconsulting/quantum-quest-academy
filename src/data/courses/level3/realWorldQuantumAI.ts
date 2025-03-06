
import { Course } from "@/data/types/courseTypes";

// Level 3 Course: Real-World Quantum AI
export const realWorldQuantumAICourse: Course = {
  id: "3.2",
  title: "Real-World Quantum AI",
  description: "Apply quantum machine learning to solve real problems.",
  level: 3,
  duration: "4 weeks",
  icon: "brain",
  weeks: 4,
  modules: [
    {
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
        }
      ]
    }
  ],
  progress: 0
};
