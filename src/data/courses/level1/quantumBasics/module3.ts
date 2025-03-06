
import { Module } from "@/data/types/courseTypes";

// Module 3: Quantum Uncertainty
export const module3: Module = {
  id: "1.1.3",
  title: "Quantum Uncertainty",
  description: "Explore the Heisenberg Uncertainty Principle and its implications.",
  lessons: [
    {
      id: "1.1.3.1",
      title: "The Heisenberg Uncertainty Principle",
      description: "Understand why we can't know everything about a quantum particle at once.",
      content: "The Heisenberg Uncertainty Principle is one of the most famous ideas in quantum physics. Discovered by Werner Heisenberg in 1927, it tells us that there's a fundamental limit to how precisely we can know certain pairs of properties of a quantum particle at the same time.\n\nFor example, the more precisely we know a particle's position, the less precisely we can know its momentum (which is related to its speed and direction). This isn't due to any limitation in our measuring equipment - it's a fundamental property of nature at the quantum level.",
      type: "reading",
      duration: 15,
      points: 10
    },
    {
      id: "1.1.3.2",
      title: "Uncertainty in Everyday Life",
      description: "See how uncertainty affects the quantum world versus our daily experience.",
      content: "You might wonder why we don't notice the uncertainty principle in our everyday lives. The answer lies in scale: the uncertainty becomes significant only at the quantum level.\n\nImagine trying to measure both the position and speed of a car. You can do this quite accurately because the car is large compared to the minimum uncertainty that quantum physics imposes. But for an electron, the uncertainty is huge compared to its size, making it impossible to precisely track both its position and momentum simultaneously.",
      type: "video",
      duration: 12,
      points: 10,
      videoUrl: "https://www.youtube.com/embed/TQKELOE9eY4"
    },
    {
      id: "1.1.3.3",
      title: "Uncertainty Explorer",
      description: "Interactive simulation demonstrating the uncertainty principle.",
      content: "In this interactive activity, you'll explore the uncertainty principle firsthand. You'll try to measure the position and momentum of a quantum particle and see how measuring one property affects your ability to measure the other.\n\nThis simulation will help you visualize this abstract concept and understand why uncertainty is a fundamental part of quantum reality.",
      type: "interactive",
      interactiveComponent: "AtomSimulation",
      duration: 20,
      points: 15
    },
    {
      id: "1.1.3.4",
      title: "Uncertainty Quiz",
      description: "Test your understanding of the Heisenberg Uncertainty Principle.",
      content: "Let's check your understanding of quantum uncertainty.",
      type: "quiz",
      duration: 10,
      points: 20
    }
  ]
};
