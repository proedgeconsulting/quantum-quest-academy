
import { Module } from "@/data/types/courseTypes";

// Module 1: Introduction to Quantum World
export const module1: Module = {
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
      points: 10,
      videoUrl: "https://www.youtube.com/embed/HpNMT6x-Hls"
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
};
