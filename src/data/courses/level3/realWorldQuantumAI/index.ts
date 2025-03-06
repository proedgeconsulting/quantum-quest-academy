
import { Course } from "@/data/types/courseTypes";
import { quantumAIApplicationsModule } from "./module1";
import { quantumAIImplementationModule } from "./module2";
import { quantumNeuralNetworksModule } from "./module3";
import { quantumReinforcementLearningModule } from "./module4";
import { quantumGenerativeModelsModule } from "./module5";
import { quantumAIEthicsModule } from "./module6";

// Level 3 Course: Real-World Quantum AI
export const realWorldQuantumAICourse: Course = {
  id: "3.2",
  title: "Real-World Quantum AI",
  description: "Apply quantum machine learning to solve real problems.",
  level: 3,
  duration: "4 weeks",
  icon: "brain",
  weeks: 4,
  modules: [
    quantumAIApplicationsModule,
    quantumAIImplementationModule,
    quantumNeuralNetworksModule,
    quantumReinforcementLearningModule,
    quantumGenerativeModelsModule,
    quantumAIEthicsModule
  ],
  progress: 0
};

export default realWorldQuantumAICourse;
