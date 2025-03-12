
import { Module } from "@/data/types/courseTypes";

// Module 11: Quantum Error Correction Time Travelers
export const module11: Module = {
  id: "2.3.11",
  title: "Quantum Error Correction Time Travelers",
  description: "Explore how quantum error correction techniques will evolve in the future.",
  lessons: [
    {
      id: "2.3.11.1",
      title: "Quantum Error Correction: Past to Present",
      description: "Trace the history and evolution of quantum error correction techniques.",
      content: "Before we can look to the future, we need to understand where we've been. In this lesson, we'll explore the fascinating history of quantum error correction, from its theoretical beginnings to the current state of the art.\n\nYou'll learn about:\n\n- The early theoretical work that showed quantum error correction was possible\n- The development of the first quantum error-correcting codes\n- Major milestones in experimental demonstrations of quantum error correction\n- How approaches have evolved as quantum hardware has improved\n\nThrough historical anecdotes and expert interviews, you'll gain appreciation for the brilliant insights and persistent efforts that have brought quantum error correction to where it is today.",
      type: "reading",
      duration: 25,
      points: 20
    },
    {
      id: "2.3.11.2",
      title: "Near-Future Error Correction",
      description: "Preview the quantum error correction techniques that are just around the corner.",
      content: "What will quantum error correction look like in the next 5-10 years? In this video lesson, we'll explore the most promising near-term advances that researchers are currently developing.\n\nYou'll learn about:\n\n- How small surface codes will be implemented in NISQ-era devices\n- Tailored error correction approaches for specific hardware platforms\n- The role of machine learning in optimizing error correction strategies\n- The path to the first fault-tolerant logical qubit demonstrations\n\nThrough interviews with leading researchers and footage from cutting-edge labs, you'll get an insider's view of the quantum error correction advances that will power the next generation of quantum computers.",
      type: "video",
      duration: 25,
      points: 20
    },
    {
      id: "2.3.11.3",
      title: "The Quantum Future: Long-Term Predictions",
      description: "Explore speculative but scientifically-grounded visions of future quantum error correction.",
      content: "Let's journey decades into the future! In this reading lesson (previously interactive), we'll explore how quantum error correction might evolve over the long term as quantum computing matures.\n\nWe'll examine far-future scenarios such as:\n\n- Self-healing quantum systems that automatically detect and adapt to changing error patterns\n- Biological inspiration in quantum error correction, with systems that mimic cellular repair mechanisms\n- Hybrid approaches that combine traditional codes with new physical techniques like topological protection\n- Quantum error correction for distributed quantum computing across global networks\n\nThrough detailed explanations and scientific speculation grounded in current research trajectories, you'll gain perspective on the long-term evolution of quantum error correction. You'll understand how current limitations might be overcome through radical new approaches and how quantum error correction might eventually become so seamless that it disappears into the background of quantum computing.\n\nThe lesson discusses cutting-edge research directions like error correction for non-standard quantum computing models, adaptive codes that evolve through quantum machine learning, and the theoretical limits of how efficient quantum error correction can ultimately become.\n\nBy the end of this lesson, you'll have a broader vision of quantum error correction's future and the exciting possibilities that lie ahead as the field continues to develop.",
      type: "reading",
      duration: 30,
      points: 25
    },
    {
      id: "2.3.11.4",
      title: "Decoherence Destroyers",
      description: "Join the Decoherence Destroyers team and battle quantum errors across time and space!",
      content: "The year is 2150, and quantum computers run everything from transportation systems to food production. But a mysterious new form of quantum noise is appearing across the global quantum network, threatening to disrupt society. You're a member of the elite Decoherence Destroyers team, and it's your job to find the source of this noise and stop it!\n\nIn this interactive adventure, you'll travel through time and space, using advanced quantum error correction techniques to battle increasingly sophisticated forms of quantum noise. You'll need to adapt your strategies as you encounter new error types and limited resources in different scenarios.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Decoherence-Destroyers.html",
        height: 600,
        width: "100%"
      },
      duration: 40,
      points: 35
    }
  ]
};
