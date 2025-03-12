
import { Module } from "@/data/types/courseTypes";

// Module 5: Experimental Techniques
export const module5: Module = {
  id: "2.2.5",
  title: "Experimental Techniques",
  description: "Learn how entanglement is created and measured in the lab.",
  lessons: [
    {
      id: "2.2.5.1",
      title: "Creating Entangled Photons",
      description: "Learn about parametric down-conversion and other methods to create entangled particles.",
      content: "Quantum entanglement is a powerful resource, but how do scientists actually create entangled particles in the laboratory? In this lesson, we'll explore the leading methods for creating entanglement, with a focus on photonic systems.\n\nYou'll learn about spontaneous parametric down-conversion (SPDC), a process where a high-energy photon is split into two lower-energy photons that are entangled. We'll also cover other techniques, such as using quantum dots and trapped ions to generate entangled states.\n\nUnderstanding these experimental techniques is crucial for anyone interested in the practical applications of quantum entanglement in computing, communication, and sensing technologies.",
      type: "reading",
      duration: 25,
      points: 20
    },
    {
      id: "2.2.5.2",
      title: "Photon Entanglement",
      description: "Explore how entangled photons are created and manipulated.",
      content: "Photons - particles of light - are one of the most common systems used to study and utilize quantum entanglement. In this interactive lesson, you'll learn how scientists create, manipulate, and measure entangled photons. Try adjusting different experimental parameters to see how they affect the entangled state!",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Photon-Explorer.html",
        height: 600,
        width: "100%"
      },
      duration: 25,
      points: 20
    },
    {
      id: "2.2.5.3",
      title: "Measuring Entanglement",
      description: "Learn about Bell state measurements and entanglement witnesses.",
      content: "How do we know when particles are truly entangled? In this lesson, we'll explore the experimental techniques used to verify and measure quantum entanglement.\n\nWe'll cover Bell state measurements, which are crucial for protocols like quantum teleportation and dense coding. You'll learn about entanglement witnesses, mathematical operators that can detect the presence of entanglement without full state tomography.\n\nWe'll also discuss quantum state tomography, a process that allows experimentalists to fully reconstruct a quantum state, and concurrence, a measure of how entangled a two-qubit state is.",
      type: "video",
      duration: 20,
      points: 15,
      videoUrl: "https://www.youtube.com/watch?v=fkAAbXPEAtU&t=314s",
    }
  ]
};
