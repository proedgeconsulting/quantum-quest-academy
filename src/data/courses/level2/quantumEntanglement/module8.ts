
import { Module } from "@/data/types/courseTypes";

// Module 8: Quantum Spooky Action
export const module8: Module = {
  id: "2.2.8",
  title: "Quantum Spooky Action",
  description: "Explore why Einstein called entanglement 'spooky action at a distance'.",
  lessons: [
    {
      id: "2.2.8.1",
      title: "Einstein's Spooky Mystery",
      description: "Learn why Einstein was puzzled by quantum entanglement.",
      content: "Did you know that even the brilliant Albert Einstein was puzzled by quantum entanglement? He called it 'spooky action at a distance' because he couldn't explain how entangled particles seem to communicate instantly, no matter how far apart they are!\n\nIn this lesson, we'll travel back in time to the 1930s when Einstein and his friends were debating about quantum physics. Einstein thought there must be some hidden explanation for entanglement because he believed nothing could travel faster than light. But quantum physics seemed to say that entangled particles could affect each other instantly across any distance!\n\nThis mystery puzzled Einstein for the rest of his life, and it's one of the most fascinating parts of quantum physics that scientists are still exploring today!",
      type: "reading",
      duration: 12,
      points: 10
    },
    {
      id: "2.2.8.2",
      title: "Spooky Experiments",
      description: "Watch scientists prove that entanglement really is 'spooky'!",
      content: "How do we know that quantum entanglement really is as 'spooky' as Einstein thought? In this video, we'll see the amazing experiments that scientists have done to prove that entanglement is real!\n\nWe'll watch as scientists create pairs of entangled particles and separate them by long distances. Then, when they measure one particle, the other particle instantly shows matching properties, as if by magic! These experiments have been done across rooms, across cities, and even with particles separated by many kilometers!\n\nThese amazing experiments show that Einstein's 'spooky action at a distance' is really happening in our universe, and it's one of the strangest and most exciting discoveries in all of science!",
      type: "video",
      duration: 15,
      points: 10,
      videoUrl: "https://www.youtube.com/embed/ZuvK-od647c"
    },
    {
      id: "2.2.8.3",
      title: "Spooky Action Game",
      description: "Play a game to experience the 'spooky' nature of quantum entanglement.",
      content: "Ready to experience some 'spooky action' for yourself? In this interactive game, you'll control two entangled quantum particles that are separated by a great distance.\n\nYou'll discover that when you measure one particle to have a certain property (like spinning up), the other particle instantly shows the opposite property (spinning down), no matter how far apart they are! It's as if they're communicating faster than light - which is why Einstein found it so spooky!\n\nCan you complete all the challenges and master this strange quantum behavior? Let's find out how 'spooky' quantum entanglement really is!",
      type: "interactive",
      interactiveComponent: "QuantumSimulator",
      duration: 20,
      points: 20
    },
    {
      id: "2.2.8.4",
      title: "Spooky Action Quiz",
      description: "Test your understanding of the 'spooky' nature of quantum entanglement.",
      content: "Let's test what you've learned about Einstein's 'spooky action at a distance'!",
      type: "quiz",
      duration: 10,
      points: 15
    }
  ]
};
