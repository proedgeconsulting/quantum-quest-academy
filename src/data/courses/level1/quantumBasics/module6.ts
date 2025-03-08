
import { Module } from "@/data/types/courseTypes";

// Module 6: Quantum Applications
export const module6: Module = {
  id: "1.1.6",
  title: "Quantum Applications",
  description: "See how quantum physics principles are used in modern technology.",
  lessons: [
    {
      id: "1.1.6.1",
      title: "Quantum in Your Pocket",
      description: "Discover how quantum physics enables everyday technologies.",
      content: "Quantum physics isn't just abstract theory - it's the foundation of many technologies you use every day. Your smartphone contains transistors that rely on quantum mechanics to function. LED lights, laser pointers, and barcode scanners all work because of quantum physics principles.\n\nEven the GPS in your phone depends on extremely precise atomic clocks that account for relativistic effects predicted by quantum theory. Without our understanding of quantum physics, many modern conveniences simply wouldn't exist!",
      type: "reading",
      duration: 15,
      points: 10
    },
    {
      id: "1.1.6.2",
      title: "Medical Quantum Technologies",
      description: "Learn how quantum physics saves lives through medical imaging.",
      content: "Quantum physics has revolutionized medicine through technologies like Magnetic Resonance Imaging (MRI) and Positron Emission Tomography (PET) scans. MRI machines use quantum properties of hydrogen atoms to create detailed images of soft tissues in the body. PET scans rely on antimatter (positrons) to detect areas of high metabolic activity, helping to identify cancers and monitor brain activity.\n\nThese technologies save countless lives by enabling early detection and precise diagnosis of medical conditions, all thanks to our understanding of quantum physics.",
      type: "video",
      duration: 15,
      points: 10,
      videoUrl: "https://www.youtube.com/shorts/Wr-2kBA6nDU"
    },
    {
      id: "1.1.6.3",
      title: "Quantum Technology Explorer",
      description: "Interactive exploration of quantum technologies.",
      content: "In this interactive activity, you'll explore different technologies that rely on quantum physics. You'll see how lasers work using stimulated emission, how solar panels generate electricity through the photoelectric effect, and how quantum tunneling enables scanning tunneling microscopes to image individual atoms.\n\nThis hands-on exploration will help you appreciate how quantum mechanics, despite its abstract nature, has led to practical technologies that benefit humanity.",
      type: "interactive",
      interactiveComponent: "QuantumSimulator",
      duration: 20,
      points: 15,
      interactiveOptions: {
        simulatorType: "technologies",
        showControls: true
      }
    },
    {
      id: "1.1.6.4",
      title: "Applications Quiz",
      description: "Test your knowledge of practical quantum applications.",
      content: "Let's check what you've learned about real-world quantum applications.",
      type: "quiz",
      duration: 10,
      points: 20
    }
  ]
};
