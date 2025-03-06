
import { Module } from "@/data/types/courseTypes";

// Module 5: Quantum Tunneling
export const module5: Module = {
  id: "1.1.5",
  title: "Quantum Tunneling",
  description: "Explore how particles can pass through seemingly impenetrable barriers.",
  lessons: [
    {
      id: "1.1.5.1",
      title: "The Tunneling Phenomenon",
      description: "Discover how quantum particles can pass through energy barriers.",
      content: "Quantum tunneling is a phenomenon where particles can pass through barriers that classical physics says they shouldn't have enough energy to overcome. It's as if you threw a ball at a wall, and instead of bouncing back, there was a small chance it would appear on the other side!\n\nThis happens because quantum particles don't have definite positions - they're described by probability waves. When a wave encounters a barrier, most of it reflects back, but a small portion of the wave can leak through to the other side. This means there's a small probability the particle will be found past the barrier, even if it doesn't have enough energy to climb over it.",
      type: "reading",
      duration: 15,
      points: 10
    },
    {
      id: "1.1.5.2",
      title: "Tunneling in the Real World",
      description: "Learn about real-world applications of quantum tunneling.",
      content: "Quantum tunneling isn't just a theoretical curiosity - it has practical applications and occurs naturally all around us. Tunneling makes nuclear fusion possible in stars, enables some types of radioactive decay, and is essential for scanning tunneling microscopes that can image individual atoms.\n\nIn technology, tunneling is crucial for certain electronic components like tunnel diodes and flash memory used in computers and smartphones. Without quantum tunneling, many modern technologies wouldn't work!",
      type: "video",
      duration: 12,
      points: 10,
      videoUrl: "https://www.youtube.com/embed/cTodS8hkSDg"
    },
    {
      id: "1.1.5.3",
      title: "Barrier Penetration Simulator",
      description: "Interactive simulation of particles tunneling through barriers.",
      content: "In this interactive activity, you'll experiment with quantum tunneling. You'll be able to adjust the height and width of energy barriers and see how these changes affect the probability of particles tunneling through.\n\nYou'll discover that thinner barriers are easier to tunnel through, and that lighter particles tunnel more readily than heavier ones. This hands-on experience will help you build intuition about this counterintuitive quantum phenomenon.",
      type: "interactive",
      interactiveComponent: "AtomSimulation",
      duration: 20,
      points: 15
    },
    {
      id: "1.1.5.4",
      title: "Tunneling Quiz",
      description: "Test your understanding of quantum tunneling.",
      content: "Let's check what you've learned about quantum tunneling.",
      type: "quiz",
      duration: 10,
      points: 20
    }
  ]
};
