
import { Course } from "@/data/types/courseTypes";

// Level 1 Course: Quantum Basics
export const quantumBasicsCourse: Course = {
  id: "1.1",
  title: "Quantum Basics",
  description: "Discover the fascinating world of atoms, light, and energy.",
  level: 1,
  duration: "4 weeks",
  icon: "atom",
  weeks: 4,
  modules: [
    {
      id: "1.1.1",
      title: "Introduction to Quantum World",
      description: "Learn about the strange and fascinating quantum world around us.",
      lessons: [
        {
          id: "1.1.1.1",
          title: "What is Quantum Physics?",
          description: "An introduction to the fundamental concepts of quantum physics.",
          content: "Quantum physics is the study of matter and energy at its most fundamental level. Unlike classical physics that we experience in our everyday lives, quantum physics deals with the behavior of particles at the atomic and subatomic levels, where strange and counterintuitive phenomena occur.\n\nIn this course, we'll explore the weird and wonderful world of quantum physics, where particles can exist in multiple places at once, teleport across space, and even communicate instantaneously across vast distances.",
          type: "reading",
          duration: 10,
          points: 5
        },
        {
          id: "1.1.1.2",
          title: "The Building Blocks of Reality",
          description: "Explore atoms, electrons, and the fundamental particles.",
          content: "Everything in our universe is made up of tiny building blocks called atoms. But what are atoms made of? In this lesson, we'll dive into the subatomic world to discover protons, neutrons, and electrons.\n\nWe'll learn how these particles come together to form atoms, and how atoms combine to create everything from the air we breathe to the stars in the sky.",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "1.1.1.3",
          title: "Build Your Own Atom",
          description: "Interactive activity to build different atoms by adding protons, neutrons, and electrons.",
          content: "Now it's time to put your knowledge into practice! In this interactive activity, you'll build your own atoms by adding the correct number of protons, neutrons, and electrons.\n\nSee how changing the number of particles affects the element you create, and learn about the periodic table of elements.",
          type: "interactive",
          interactiveComponent: "BuildAtomActivity",
          duration: 20,
          points: 15
        },
        {
          id: "1.1.1.4",
          title: "Introduction Quiz",
          description: "Test your understanding of quantum basics.",
          content: "Let's check what you've learned so far about the quantum world.",
          type: "quiz",
          duration: 10,
          points: 20
        }
      ]
    },
    {
      id: "1.1.2",
      title: "Light and Energy",
      description: "Discover the dual nature of light as both a wave and a particle.",
      lessons: [
        {
          id: "1.1.2.1",
          title: "The Mystery of Light",
          description: "Understand the wave-particle duality of light.",
          content: "Light is one of the most fascinating phenomena in the universe. For centuries, scientists debated whether light was a wave or a particle. The surprising answer? It's both!\n\nIn this lesson, we'll explore how light can behave as both a wave and a particle, a concept known as wave-particle duality. This strange property is a fundamental aspect of quantum physics.",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "1.1.2.2",
          title: "Light in Action",
          description: "See how light interacts with different materials.",
          content: "Light interacts with matter in fascinating ways. In this lesson, we'll explore phenomena like reflection, refraction, and absorption.\n\nWe'll also learn about the electromagnetic spectrum, from radio waves to gamma rays, and discover how different types of light affect our world.",
          type: "video",
          duration: 10,
          points: 10
        },
        {
          id: "1.1.2.3",
          title: "Photon Explorer",
          description: "Interactive simulation to explore the properties of photons.",
          content: "In this interactive activity, you'll explore the behavior of photons - the particles of light. See how they travel through space, interact with objects, and demonstrate both wave-like and particle-like properties.\n\nYou'll also learn about the photoelectric effect, a phenomenon that helped establish the quantum nature of light.",
          type: "interactive",
          interactiveComponent: "AtomSimulation",
          duration: 20,
          points: 15
        },
        {
          id: "1.1.2.4",
          title: "Light and Energy Quiz",
          description: "Test your understanding of light and energy concepts.",
          content: "Let's check what you've learned about light, photons, and energy.",
          type: "quiz",
          duration: 10,
          points: 20
        }
      ]
    }
  ]
};

// All Level 1 courses
export const level1Courses: Course[] = [
  quantumBasicsCourse,
  {
    id: "1.2",
    title: "Quantum Playground",
    description: "Explore quantum concepts through fun games and activities.",
    level: 1,
    duration: "4 weeks",
    icon: "wave",
    weeks: 4,
    modules: [] // To be filled in later
  },
  {
    id: "1.3",
    title: "Quantum Coding Lite",
    description: "Write your first programs to control quantum systems.",
    level: 1,
    duration: "4 weeks",
    icon: "code",
    weeks: 4,
    modules: [] // To be filled in later
  }
];
