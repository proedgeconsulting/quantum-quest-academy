
import { Module } from "@/data/types/courseTypes";

// Module 9: Quantum Communication
export const module9: Module = {
  id: "2.2.9",
  title: "Quantum Communication",
  description: "Discover how quantum entanglement enables super-secure messaging.",
  lessons: [
    {
      id: "2.2.9.1",
      title: "Secret Quantum Messages",
      description: "Learn how quantum entanglement can create unbreakable secret codes.",
      content: "Did you know that quantum entanglement can help us send super-secret messages that no one can spy on? It's true! In this lesson, we'll discover how quantum physics creates the most secure communication method ever invented!\n\nImagine you want to send a secret message to your friend without anyone else being able to read it. With quantum communication, you can use entangled particles to create a special secret key that only you and your friend know. The amazing thing is that if anyone tries to spy on your quantum message, the entanglement breaks and you know immediately that someone is eavesdropping!\n\nScientists and governments are already building quantum communication networks because they're so secure. In the future, your personal messages might be protected by quantum entanglement!",
      type: "reading",
      duration: 15,
      points: 10
    },
    {
      id: "2.2.9.2",
      title: "Quantum Messaging in Action",
      description: "See how scientists use quantum entanglement to send secure messages.",
      content: "Let's see quantum communication in action! In this video, we'll watch scientists use entangled particles to send secure messages that can't be hacked.\n\nFirst, we'll see how they create pairs of entangled photons (particles of light) using special crystals. Then, they'll separate these photons and send them to different locations. When they measure these entangled photons, they get random results that match each other - and these matching random results become their secret key!\n\nThe coolest part? If anyone tries to intercept the photons, the quantum properties change and the sender and receiver can immediately tell that someone is trying to spy on them! This makes quantum communication the most secure way to send messages ever invented!",
      type: "video",
      duration: 12,
      points: 10,
      videoUrl: "https://www.youtube.com/embed/JvgpDTDyvdk"
    },
    {
      id: "2.2.9.3",
      title: "Quantum Spy Catcher",
      description: "Play a game to detect quantum spies using entanglement.",
      content: "It's time to become a quantum security expert! In this interactive game, you'll use quantum entanglement to send secret messages and catch spies who try to intercept them.\n\nYou'll create pairs of entangled particles and use them to establish a secret key with your friend. Then, a spy will try to intercept your quantum message without being detected. Your job is to use the properties of quantum entanglement to figure out when the spy is listening in!\n\nAs you play, you'll learn why quantum communication is considered 'unhackable' and how it could revolutionize cybersecurity in the future. Are you ready to become a quantum spy catcher?",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/quantum-spy-catcher.html",
        height: 600,
        width: "100%"
      },
      duration: 20,
      points: 20
    },
    {
      id: "2.2.9.4",
      title: "Quantum Communication Quiz",
      description: "Test your knowledge about quantum communication and security.",
      content: "Let's check what you've learned about quantum communication and how it can create super-secure messages!",
      type: "quiz",
      duration: 10,
      points: 15
    }
  ]
};
