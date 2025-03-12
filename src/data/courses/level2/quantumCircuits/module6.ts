import { Module } from "@/data/types/courseTypes";

// Module 6: Quantum Circuit Optimization
export const module6: Module = {
  id: "2.1.6",
  title: "Quantum Circuit Optimization",
  description: "Learn to design efficient quantum circuits that maximize performance.",
  lessons: [
    {
      id: "2.1.6.1",
      title: "Circuit Depth and Width",
      description: "Understand the critical metrics for quantum circuit performance.",
      content: "Quantum circuit complexity is measured primarily through two metrics: depth (the longest path from input to output) and width (the number of qubits required). Optimizing these metrics is crucial for running algorithms on near-term quantum hardware with limited coherence times and qubit counts.\n\nIn this lesson, you'll learn:\n\n- How circuit depth relates to execution time and error rates\n\n- The trade-offs between depth and width in circuit design\n\n- Techniques to estimate circuit complexity\n\n- How different quantum hardware architectures impose constraints on circuit design\n\n- The relationship between algorithmic complexity and circuit metrics\n\nUnderstanding these fundamental concepts will help you design quantum algorithms that can run effectively on real quantum hardware with its inherent limitations.",
      type: "reading",
      duration: 20,
      points: 15
    },
    {
      id: "2.1.6.2",
      title: "Circuit Transformation Techniques",
      description: "Learn methods to transform circuits into equivalent but more efficient forms.",
      content: "Quantum circuits can often be transformed into equivalent circuits that perform the same computation but with lower depth, fewer gates, or reduced error sensitivity. In this video, we'll explore various transformation techniques used by quantum compiler engineers.",
      type: "video",
      duration: 25,
      points: 20,
      videoUrl: "https://www.youtube.com/watch?v=G5V0lMos_vM",
    },
    {
      id: "2.1.6.3",
      title: "Quantum Circuit Optimizer",
      description: "Use optimization tools to improve the efficiency of quantum circuits.",
      content: "In this interactive session, you'll work with quantum circuit optimization tools to transform inefficient circuits into more streamlined versions.\n\nYou'll have the opportunity to:\n\n- Analyze circuits to identify optimization opportunities\n\n- Apply various transformation rules to reduce gate count and depth\n\n- Optimize circuits for specific hardware architectures\n\n- Compare the performance of original and optimized circuits\n\n- Create a multi-stage optimization pipeline\n\nThrough this hands-on experience, you'll develop practical skills in quantum circuit optimization that are directly applicable to real-world quantum programming.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/quantum-circuit-optimizer.html",
        height: 600,
        width: "100%"
      },
      duration: 30,
      points: 25
    },
    {
      id: "2.1.6.4",
      title: "Circuit Optimization Quiz",
      description: "Test your understanding of quantum circuit optimization techniques.",
      content: "Let's check your knowledge of quantum circuit optimization with this comprehensive quiz. You'll be tested on:\n\n- Identifying optimization opportunities in quantum circuits\n\n- Applying appropriate transformation rules for specific situations\n\n- Calculating changes in circuit metrics after optimization\n\n- Understanding the trade-offs involved in different optimization strategies\n\n- Optimizing circuits for specific hardware constraints",
      type: "quiz",
      duration: 15,
      points: 25
    }
  ]
};
