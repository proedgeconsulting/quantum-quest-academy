
import { Module } from "@/data/types/courseTypes";

// Module 7: Quantum Error Detectives
export const module7: Module = {
  id: "2.3.7",
  title: "Quantum Error Detectives",
  description: "Become a quantum detective and learn to spot errors in quantum systems!",
  lessons: [
    {
      id: "2.3.7.1",
      title: "The Case of the Flipped Qubit",
      description: "Solve a mystery where qubits are mysteriously flipping their values.",
      content: "Welcome, Quantum Detectives! A mysterious villain named 'Noise Monster' has been tampering with our quantum computer by flipping qubits when we're not looking. Your mission is to catch this troublemaker in action!\n\nIn this lesson, you'll learn how to spot signs of bit flip errors by examining the behavior of qubits. We'll use special detective tools called 'parity checks' that can tell us when something strange has happened without disturbing the quantum information.\n\nYou'll collect clues, analyze evidence, and build a case to identify exactly which qubits have been flipped. By the end of this lesson, you'll have the basic skills needed to detect quantum errors in their tracks!",
      type: "interactive",
      interactiveComponent: "BuildAtomActivity",
      duration: 20,
      points: 15
    },
    {
      id: "2.3.7.2",
      title: "The Phase Shift Mystery",
      description: "Learn to detect mysterious phase errors that can hide in quantum systems.",
      content: "Our quantum computer is acting strangely again! This time, the Noise Monster isn't flipping qubits completely, but instead changing their phases – making them rotate in weird ways. These sneaky phase errors are harder to spot, but you're now a more experienced Quantum Detective!\n\nIn this video lesson, we'll use special techniques to transform phase errors into bit flip errors (which we already know how to detect). You'll learn about the Hadamard gate, which acts like special detective glasses that let you see phase errors more clearly.\n\nWe'll also explore how the most dangerous quantum errors can be a combination of bit flips AND phase shifts. By the end of this lesson, you'll be able to identify the telltale signs of phase errors in quantum systems!",
      type: "video",
      duration: 15,
      points: 10
    },
    {
      id: "2.3.7.3",
      title: "Quantum Error Detective Game",
      description: "Practice your detection skills in an exciting game of finding quantum errors.",
      content: "It's time to put your quantum error detection skills to the test! In this interactive game, you'll run a quantum detective agency that specializes in finding errors in quantum computers.\n\nCustomers will come to you with quantum circuits that aren't working properly. Your job is to figure out where the errors are happening by running tests and analyzing the results. You'll have a limited budget for your investigation, so you'll need to choose your tests wisely!\n\nAs you solve more cases, you'll earn reputation points and upgrade your detective equipment. More challenging cases with multiple types of errors will test your growing skills. Can you become the city's top Quantum Error Detective?",
      type: "interactive",
      interactiveComponent: "QuantumCoinSimulator",
      duration: 30,
      points: 25
    },
    {
      id: "2.3.7.4",
      title: "The Error Detection Challenge",
      description: "Compete against the clock to detect as many errors as possible.",
      content: "Welcome to the Error Detection Challenge! In this lesson, you'll race against time to detect as many quantum errors as possible in a series of increasingly complex quantum circuits.\n\nYou'll start with simple circuits where you need to find a single error, and progress to more challenging scenarios with multiple errors of different types. Each round gets a bit harder, with less time and more qubits to check.\n\nYou'll earn points for correctly identifying errors and lose points for false alarms. The game will track your high score, and you can compare your performance with friends. This fast-paced challenge will help you develop quick instincts for recognizing patterns of quantum errors!",
      type: "interactive",
      interactiveComponent: "RandomNumberSimulator",
      duration: 25,
      points: 20
    }
  ]
};
