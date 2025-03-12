
import { Module } from "@/data/types/courseTypes";

// Module 3: Quantum Photon Entanglement
export const module3: Module = {
  id: "2.2.3",
  title: "Quantum Photon Entanglement",
  description: "Explore entanglement using photons.",
  lessons: [
    {
      id: "2.2.3.1",
      title: "Creating Entangled Photons",
      description: "Discover the experimental techniques used to generate entangled photon pairs.",
      content: "Entangled photon pairs are among the most common and well-established forms of quantum entanglement created in laboratories around the world. These pairs are typically generated through a process called Spontaneous Parametric Down-Conversion (SPDC).\n\nIn SPDC, a high-energy photon from a laser passes through a nonlinear crystal, which splits it into two lower-energy photons that are entangled. These photon pairs share correlated properties like polarization - if one photon is measured to have horizontal polarization, the other will have vertical polarization, regardless of distance between them.\n\nScientists can verify this entanglement through Bell tests, which demonstrate behavior that cannot be explained by classical physics. In this lesson, we'll explore the apparatus used to generate entangled photons, the methods for measuring their quantum states, and how researchers use these systems to study fundamental properties of quantum mechanics.\n\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/ZuvK-od647c\" title=\"Quantum Entanglement Experiment\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
      type: "video",
      duration: 25,
      points: 20
    },
    {
      id: "2.2.3.2",
      title: "Entanglement with Trapped Ions",
      description: "Explore how scientists use trapped ions to create highly-controlled entangled states.",
      content: "Trapped ion quantum computers represent one of the most promising platforms for quantum computing and precise studies of quantum entanglement. In these systems, individual ions (charged atoms) are trapped using electromagnetic fields and cooled to near absolute zero temperatures.\n\nResearchers can manipulate these ions with precise laser pulses to control their quantum states and create entanglement between them. The ions' repulsive electrical interaction causes them to form an ordered structure, making it possible to address and entangle specific pairs or groups.\n\nUnlike photonic systems, trapped ions can maintain their quantum states for relatively long periods, making them ideal for studying entanglement dynamics over time. This has allowed scientists to create entangled states with record-breaking fidelity and to observe quantum effects that would be difficult to see in other systems.\n\nIn this lesson, we'll examine the apparatus and techniques used in trapped ion experiments, how entanglement is generated and measured, and recent breakthroughs in trapped ion quantum computing that rely on entanglement as a resource.",
      type: "reading",
      duration: 20,
      points: 15,
      videoUrl:"https://www.youtube.com/watch?v=JjB3co7ZRdU"
    },
    {
      id: "2.2.3.3",
      title: "Photon Explorer",
      description: "Use an interactive simulator to explore entangled photon states.",
      content: "In this interactive session, you'll use our Photon Explorer to investigate entangled photon states. You'll be able to create entangled photon pairs, manipulate their polarization states, and observe how measurements on one photon affect its entangled partner.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Photon-Explorer.html",
        height: 600,
        width: "100%"
      },
      duration: 30,
      points: 25
    }
  ]
};
