
import { Module } from "@/data/types/courseTypes";

// Module 11: Entanglement in Biology and Chemistry
export const module11: Module = {
  id: "2.2.11",
  title: "Entanglement in Biology and Chemistry",
  description: "Explore the emerging field of quantum biology and the role of entanglement in molecular processes.",
  lessons: [
    {
      id: "2.2.11.1",
      title: "Introduction to Quantum Biology",
      description: "Learn about evidence for quantum effects in biological systems.",
      content: "Quantum biology is an emerging field that explores quantum mechanical phenomena in biological systems. While quantum mechanics typically dominates at the atomic and subatomic scales, increasing evidence suggests that certain biological processes may harness quantum effects, including entanglement, to achieve greater efficiency.\n\nIn this lesson, we'll survey the growing experimental evidence for quantum effects in photosynthesis, enzyme catalysis, avian magnetoreception, and olfaction. We'll discuss the challenges of maintaining quantum coherence in warm, wet biological environments and the mechanisms that biological systems may have evolved to protect quantum states from decoherence. You'll gain insight into this fascinating frontier that bridges quantum physics and biology.",
      type: "reading",
      duration: 25,
      points: 20
    },
    {
      id: "2.2.11.2",
      title: "Quantum Effects in Photosynthesis",
      description: "Explore how photosynthetic organisms may use quantum coherence and entanglement.",
      content: "Photosynthesis achieves near-perfect efficiency in converting sunlight into chemical energy. Recent studies suggest that quantum coherence and possibly entanglement may play a role in the remarkable efficiency of photosynthetic light harvesting complexes.\n\nIn this lesson, we'll examine the evidence for quantum coherent energy transfer in photosynthetic antenna complexes from experiments such as 2D electronic spectroscopy. We'll discuss the concept of environment-assisted quantum transport and how it might enhance the efficiency of energy transfer. We'll also explore theoretical models that attempt to explain these observations and the potential role of entanglement in these processes.",
      type: "video",
      duration: 20,
      points: 15
    },
    {
      id: "2.2.11.3",
      title: "Quantum Biology Explorer",
      description: "Interactively explore quantum effects in biological systems.",
      content: "In this interactive simulation, you'll explore the role of quantum effects in various biological processes. You can adjust parameters to see how quantum coherence and entanglement might influence photosynthesis, enzyme catalysis, and other biological phenomena.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Quantum-Biology-Explorer.html",
        height: 600,
        width: "100%"
      },
      duration: 30,
      points: 25
    }
  ]
};
