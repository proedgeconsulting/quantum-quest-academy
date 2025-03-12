
import { Module } from "@/data/types/courseTypes";

// Module 8: Entanglement in Quantum Algorithms
export const module8: Module = {
  id: "2.2.8",
  title: "Entanglement in Quantum Algorithms",
  description: "Explore how entanglement powers quantum algorithms.",
  lessons: [
    {
      id: "2.2.8.1",
      title: "Entanglement as a Resource",
      description: "Understand why entanglement is the key resource that powers quantum computation.",
      content: "Quantum entanglement is widely regarded as the key resource that gives quantum computers their computational advantage. But why exactly is entanglement so important for quantum algorithms? In this lesson, we'll explore the role of entanglement in quantum computation.\n\nWe'll discuss how entanglement enables quantum parallelism and interference, allowing quantum algorithms to explore multiple computational paths simultaneously. We'll examine research that quantifies the entanglement content of various quantum algorithms and its correlation with quantum speedup. You'll gain a deeper understanding of why entanglement is considered the \"magic ingredient\" in quantum computation.",
      type: "reading",
      duration: 25,
      points: 20
    },
    {
      id: "2.2.8.2",
      title: "Entanglement in Shor's Algorithm",
      description: "Learn how entanglement enables Shor's algorithm to factor large numbers efficiently.",
      content: "Shor's algorithm is one of the most famous quantum algorithms, capable of factoring large numbers exponentially faster than the best known classical algorithms. This has significant implications for modern cryptography, which often relies on the difficulty of factoring large numbers. Entanglement plays a crucial role in giving Shor's algorithm its computational advantage.\n\nIn this lesson, we'll walk through Shor's algorithm, highlighting where and how entanglement is created and utilized. We'll examine the quantum Fourier transform, a key component of the algorithm, and explain how entanglement enables this transform to be performed efficiently. You'll gain insight into how entanglement contributes to the algorithm's exponential speedup.",
      type: "video",
      duration: 30,
      points: 25,
      videoUrl: "https://www.youtube.com/watch?v=cCx0sw2LDto",
    },
    {
      id: "2.2.8.3",
      title: "Grover's Search Algorithm",
      description: "Examine how entanglement contributes to the quadratic speedup in Grover's algorithm.",
      content: "Grover's algorithm provides a quadratic speedup for unstructured search problems, a more modest improvement than Shor's algorithm but applicable to a wide range of problems. In this interactive lesson, you'll explore how entanglement enables this speedup and see the algorithm in action.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Grover's-Search-Algorithm.html",
        height: 600,
        width: "100%"
      },
      duration: 30,
      points: 25
    }
  ]
};
