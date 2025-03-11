
import { Module } from "@/data/types/courseTypes";

// Module 7: Quantum AI Weather Explorers
export const module7: Module = {
  id: "3.2.7",
  title: "Quantum AI Weather Explorers",
  description: "Use quantum AI to predict and understand weather patterns in a fun simulation game.",
  lessons: [
    {
      id: "3.2.7.1",
      title: "Weather Pattern Heroes",
      description: "Become a weather hero and learn how quantum AI can recognize weather patterns faster than classical computers.",
      content: "In this lesson, you'll play as a 'Weather Pattern Hero' who uses quantum AI to spot weather patterns that normal computers might miss. Through a series of fun challenges, you'll learn how quantum computers can process multiple weather scenarios at the same time.\n\nYou'll also discover how scientists are already using these quantum techniques to better predict extreme weather events like hurricanes and floods, potentially saving lives in the real world!",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/weather-pattern-heroes.html",
        height: 600,
        width: "100%"
      },
      duration: 25,
      points: 100
    },
    {
      id: "3.2.7.2",
      title: "Build Your Weather Prediction Machine",
      description: "Create a virtual quantum weather prediction machine and test it against different scenarios.",
      content: "Time to build your own quantum weather prediction machine! In this hands-on activity, you'll assemble virtual quantum bits (qubits) that can process weather data super fast.\n\nYour mission is to program your machine to predict tomorrow's weather by analyzing cloud patterns, temperature readings, and wind directions all at once. Will your quantum AI outperform the traditional weather forecast? Test your creation against historical weather data and see how accurate your predictions can be!",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/weather-prediction-machine.html",
        height: 600,
        width: "100%"
      },
      duration: 30,
      points: 120
    },
    {
      id: "3.2.7.3",
      title: "Weather Alert: Quantum Response",
      description: "Play a game where you must respond to weather emergencies using quantum AI tools.",
      content: "Emergency! A big storm is approaching the city and you need to help coordinate the response. In this exciting game, you'll use quantum AI tools to analyze the storm's path, predict its intensity, and help emergency services prepare.\n\nYou'll need to make quick decisions: Where should you send rescue teams? Which areas should evacuate first? Your quantum computer can simulate thousands of possible storm scenarios at once, giving you better information than ever before. Save the day with the power of quantum AI!",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/weather-alert-response.html",
        height: 600,
        width: "100%"
      },
      duration: 25,
      points: 110
    }
  ]
};
