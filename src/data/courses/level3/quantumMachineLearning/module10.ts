
import { Module } from "@/data/types/courseTypes";

// Module 10: Quantum Robot Academy
export const module10: Module = {
  id: "3.1.10",
  title: "Quantum Robot Academy",
  description: "Program robots that use quantum AI to solve problems!",
  lessons: [
    {
      id: "3.1.10.1",
      title: "Meet Your Quantum Robot",
      description: "Learn about robots that use quantum machine learning to make decisions.",
      content: "Welcome to Quantum Robot Academy! Today you'll meet QUBIT-9000, a friendly robot that uses quantum machine learning to make decisions and solve problems.\n\nIn this lesson, you'll learn:\n- How robots can use quantum computing to process information differently than classical robots\n- Why quantum machine learning might help robots make better or faster decisions\n- The basic parts of a quantum robot's 'brain' (quantum processor, sensors, and actuators)\n- How quantum robots might be used in the future for exploration, rescue missions, and scientific research\n\nYou'll see demonstrations of how QUBIT-9000 can analyze its environment using quantum algorithms that allow it to consider many possibilities at once. By the end of this lesson, you'll understand the basic idea of how quantum computing could create smarter robots!",
      type: "reading",
      duration: 15,
      points: 10
    },
    {
      id: "3.1.10.2",
      title: "Quantum Maze Navigator",
      description: "Program a quantum robot to find the fastest path through complex mazes.",
      content: "Your quantum robot needs your help! It needs to navigate through a complicated maze, and you're going to program its quantum AI brain to find the best path.\n\nIn this interactive lesson, you'll:\n1. Set up a quantum search algorithm (a simplified version of Grover's algorithm)\n2. Help your robot analyze multiple paths simultaneously using quantum superposition\n3. Use quantum interference to amplify the probability of finding the optimal path\n4. Test your quantum navigation algorithm against a classical algorithm\n\nYou'll see how a quantum robot can potentially find solutions faster than a classical robot for certain types of problems. The maze will get more complex as you progress, challenging your quantum programming skills!\n\nCan your quantum robot find the fastest way through the Super Mega Maze Challenge at the end?",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/quantum-maze-navigator.html",
        height: 600,
        width: "100%"
      },
      duration: 25,
      points: 20
    },
    {
      id: "3.1.10.3",
      title: "Quantum Learning Robots",
      description: "Teach your robot new skills using quantum reinforcement learning.",
      content: "Robots that can learn are super cool, but quantum learning robots might be even cooler! In this video lesson, you'll discover how quantum reinforcement learning helps robots master new skills.\n\nWe'll explore:\n- How robots learn through trial and error (reinforcement learning)\n- Why quantum computing might help robots learn certain tasks faster\n- How quantum superposition lets robots explore multiple strategies at once\n- The concept of 'quantum reward amplification' for robot learning\n\nYou'll see examples of simulated robots learning tasks like balancing objects, navigating obstacle courses, and playing simple games. We'll compare how classical learning robots and quantum learning robots approach these challenges differently.\n\nBy the end of this lesson, you'll understand the basic principles of quantum reinforcement learning and how it might create smarter, more adaptive robots in the future!",
      type: "video",
      duration: 20,
      points: 15
    },
    {
      id: "3.1.10.4",
      title: "Quantum Robot Olympics",
      description: "Put your quantum robot's skills to the test in the Robot Olympics!",
      content: "It's time for the Quantum Robot Olympics! In this exciting reading lesson, you'll learn about programming your quantum robot to compete in a series of Olympic events designed to test its quantum AI capabilities.\n\nThe Olympic events include:\n1. **Quantum Sprint**: Programming your robot to find the fastest route through a changing obstacle course\n2. **Pattern Recognition Challenge**: Training your robot to quickly identify patterns in quantum noise\n3. **Resource Optimization**: Helping your robot distribute limited resources to maximize points\n4. **Quantum Strategy Game**: Playing a strategy game where quantum moves give special advantages\n\nFor each event, you'll learn about the different quantum algorithms and techniques that would be used. You'll understand how your robot would earn medals based on its performance compared to classical AI robots.\n\nThe lesson includes detailed explanations of the quantum algorithms that would power each Olympic event, and how they differ from classical approaches. By the end, you'll have a comprehensive understanding of various quantum AI applications in robotics and how they might outperform classical methods in specific scenarios.",
      type: "reading",
      duration: 30,
      points: 25
    }
  ]
};
