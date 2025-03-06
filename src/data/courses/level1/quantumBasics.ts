import { Course } from "@/data/types/courseTypes";

// Level 1 Course: Quantum Basics
export const quantumBasicsCourse: Course = {
  id: "1.1",
  title: "Quantum Basics",
  description: "Discover the fascinating world of atoms, light, and energy.",
  level: 1,
  duration: "4 weeks",
  icon: "atom",
  weeks: 8,
  modules: [
    {
      id: "1.1.1",
      title: "Introduction to Quantum World",
      description: "Learn about the strange and fascinating quantum world around us.",
      lessons: [
        {
          id: "1.1.1.1",
          title: "What is Quantum Physics?",
          description: "An introduction to the fundamental concepts of quantum physics.",
          content: "Quantum physics is the study of matter and energy at its most fundamental level. Unlike classical physics that we experience in our everyday lives, quantum physics deals with the behavior of particles at the atomic and subatomic levels, where strange and counterintuitive phenomena occur.\n\nIn this course, we'll explore the weird and wonderful world of quantum physics, where particles can exist in multiple places at once, teleport across space, and even communicate instantaneously across vast distances.",
          type: "reading",
          duration: 10,
          points: 5
        },
        {
          id: "1.1.1.2",
          title: "The Building Blocks of Reality",
          description: "Explore atoms, electrons, and the fundamental particles.",
          content: "Everything in our universe is made up of tiny building blocks called atoms. But what are atoms made of? In this lesson, we'll dive into the subatomic world to discover protons, neutrons, and electrons.\n\nWe'll learn how these particles come together to form atoms, and how atoms combine to create everything from the air we breathe to the stars in the sky.",
          type: "reading",
          duration: 15,
          points: 10,
          videoUrl: "https://www.youtube.com/embed/HpNMT6x-Hls"
        },
        {
          id: "1.1.1.3",
          title: "Build Your Own Atom",
          description: "Interactive activity to build different atoms by adding protons, neutrons, and electrons.",
          content: "Now it's time to put your knowledge into practice! In this interactive activity, you'll build your own atoms by adding the correct number of protons, neutrons, and electrons.\n\nSee how changing the number of particles affects the element you create, and learn about the periodic table of elements.",
          type: "interactive",
          interactiveComponent: "BuildAtomActivity",
          duration: 20,
          points: 15
        },
        {
          id: "1.1.1.4",
          title: "Introduction Quiz",
          description: "Test your understanding of quantum basics.",
          content: "Let's check what you've learned so far about the quantum world.",
          type: "quiz",
          duration: 10,
          points: 20
        }
      ]
    },
    {
      id: "1.1.2",
      title: "Light and Energy",
      description: "Discover the dual nature of light as both a wave and a particle.",
      lessons: [
        {
          id: "1.1.2.1",
          title: "The Mystery of Light",
          description: "Understand the wave-particle duality of light.",
          content: "Light is one of the most fascinating phenomena in the universe. For centuries, scientists debated whether light was a wave or a particle. The surprising answer? It's both!\n\nIn this lesson, we'll explore how light can behave as both a wave and a particle, a concept known as wave-particle duality. This strange property is a fundamental aspect of quantum physics.",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "1.1.2.2",
          title: "Light in Action",
          description: "See how light interacts with different materials.",
          content: "Light interacts with matter in fascinating ways. In this lesson, we'll explore phenomena like reflection, refraction, and absorption.\n\nWe'll also learn about the electromagnetic spectrum, from radio waves to gamma rays, and discover how different types of light affect our world.",
          type: "video",
          duration: 10,
          points: 10,
          videoUrl: "https://www.youtube.com/embed/FjHJ7FjgL34"
        },
        {
          id: "1.1.2.3",
          title: "Photon Explorer",
          description: "Interactive simulation to explore the properties of photons.",
          content: "In this interactive activity, you'll explore the behavior of photons - the particles of light. See how they travel through space, interact with objects, and demonstrate both wave-like and particle-like properties.\n\nYou'll also learn about the photoelectric effect, a phenomenon that helped establish the quantum nature of light.",
          type: "interactive",
          interactiveComponent: "AtomSimulation",
          duration: 20,
          points: 15
        },
        {
          id: "1.1.2.4",
          title: "Light and Energy Quiz",
          description: "Test your understanding of light and energy concepts.",
          content: "Let's check what you've learned about light, photons, and energy.",
          type: "quiz",
          duration: 10,
          points: 20
        }
      ]
    },
    {
      id: "1.1.3",
      title: "Quantum Uncertainty",
      description: "Explore the Heisenberg Uncertainty Principle and its implications.",
      lessons: [
        {
          id: "1.1.3.1",
          title: "The Heisenberg Uncertainty Principle",
          description: "Understand why we can't know everything about a quantum particle at once.",
          content: "The Heisenberg Uncertainty Principle is one of the most famous ideas in quantum physics. Discovered by Werner Heisenberg in 1927, it tells us that there's a fundamental limit to how precisely we can know certain pairs of properties of a quantum particle at the same time.\n\nFor example, the more precisely we know a particle's position, the less precisely we can know its momentum (which is related to its speed and direction). This isn't due to any limitation in our measuring equipment - it's a fundamental property of nature at the quantum level.",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "1.1.3.2",
          title: "Uncertainty in Everyday Life",
          description: "See how uncertainty affects the quantum world versus our daily experience.",
          content: "You might wonder why we don't notice the uncertainty principle in our everyday lives. The answer lies in scale: the uncertainty becomes significant only at the quantum level.\n\nImagine trying to measure both the position and speed of a car. You can do this quite accurately because the car is large compared to the minimum uncertainty that quantum physics imposes. But for an electron, the uncertainty is huge compared to its size, making it impossible to precisely track both its position and momentum simultaneously.",
          type: "video",
          duration: 12,
          points: 10,
          videoUrl: "https://www.youtube.com/embed/TQKELOE9eY4"
        },
        {
          id: "1.1.3.3",
          title: "Uncertainty Explorer",
          description: "Interactive simulation demonstrating the uncertainty principle.",
          content: "In this interactive activity, you'll explore the uncertainty principle firsthand. You'll try to measure the position and momentum of a quantum particle and see how measuring one property affects your ability to measure the other.\n\nThis simulation will help you visualize this abstract concept and understand why uncertainty is a fundamental part of quantum reality.",
          type: "interactive",
          interactiveComponent: "AtomSimulation",
          duration: 20,
          points: 15
        },
        {
          id: "1.1.3.4",
          title: "Uncertainty Quiz",
          description: "Test your understanding of the Heisenberg Uncertainty Principle.",
          content: "Let's check your understanding of quantum uncertainty.",
          type: "quiz",
          duration: 10,
          points: 20
        }
      ]
    },
    {
      id: "1.1.4",
      title: "Quantum Superposition",
      description: "Discover how quantum objects can exist in multiple states simultaneously.",
      lessons: [
        {
          id: "1.1.4.1",
          title: "What is Superposition?",
          description: "Learn how quantum particles can be in multiple states at once.",
          content: "Superposition is perhaps the most mind-bending aspect of quantum physics. In our everyday world, objects are in definite states - a light is either on or off, a door is either open or closed. But in the quantum world, particles can exist in multiple states simultaneously until they're observed.\n\nThis means a quantum particle, like an electron, can be in two (or more) places at once, or spinning in opposite directions at the same time. It's only when we measure the particle that it 'collapses' into one definite state.",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "1.1.4.2",
          title: "Schrödinger's Cat",
          description: "Explore the famous thought experiment that illustrates quantum superposition.",
          content: "Erwin Schrödinger created his famous cat thought experiment to highlight how strange quantum superposition becomes when applied to everyday objects.\n\nIn this thought experiment, a cat is placed in a sealed box with a device that has a 50% chance of releasing poison based on a quantum event (like a radioactive atom decaying). According to quantum mechanics, until the box is opened, the quantum system is in a superposition of states - and by extension, the cat would be both alive and dead simultaneously!\n\nThis paradox helps us think about the boundary between the quantum world and our everyday experience.",
          type: "video",
          duration: 15,
          points: 10,
          videoUrl: "https://www.youtube.com/embed/UjaAxUO6-Uw"
        },
        {
          id: "1.1.4.3",
          title: "Superposition Simulator",
          description: "Interactive demonstration of quantum superposition principles.",
          content: "In this interactive activity, you'll explore how quantum superposition works. You'll see how quantum particles can exist in multiple states at once, and how measurement affects these superpositions.\n\nYou'll also learn how superposition is the key to quantum computing's potential power, allowing quantum computers to explore multiple possibilities simultaneously.",
          type: "interactive",
          interactiveComponent: "BuildAtomActivity",
          duration: 20,
          points: 15
        },
        {
          id: "1.1.4.4",
          title: "Superposition Quiz",
          description: "Test your understanding of quantum superposition concepts.",
          content: "Let's test what you've learned about quantum superposition.",
          type: "quiz",
          duration: 10,
          points: 20
        }
      ]
    },
    {
      id: "1.1.5",
      title: "Quantum Tunneling",
      description: "Explore how particles can pass through seemingly impenetrable barriers.",
      lessons: [
        {
          id: "1.1.5.1",
          title: "The Tunneling Phenomenon",
          description: "Discover how quantum particles can pass through energy barriers.",
          content: "Quantum tunneling is a phenomenon where particles can pass through barriers that classical physics says they shouldn't have enough energy to overcome. It's as if you threw a ball at a wall, and instead of bouncing back, there was a small chance it would appear on the other side!\n\nThis happens because quantum particles don't have definite positions - they're described by probability waves. When a wave encounters a barrier, most of it reflects back, but a small portion of the wave can leak through to the other side. This means there's a small probability the particle will be found past the barrier, even if it doesn't have enough energy to climb over it.",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "1.1.5.2",
          title: "Tunneling in the Real World",
          description: "Learn about real-world applications of quantum tunneling.",
          content: "Quantum tunneling isn't just a theoretical curiosity - it has practical applications and occurs naturally all around us. Tunneling makes nuclear fusion possible in stars, enables some types of radioactive decay, and is essential for scanning tunneling microscopes that can image individual atoms.\n\nIn technology, tunneling is crucial for certain electronic components like tunnel diodes and flash memory used in computers and smartphones. Without quantum tunneling, many modern technologies wouldn't work!",
          type: "video",
          duration: 12,
          points: 10,
          videoUrl: "https://www.youtube.com/embed/cTodS8hkSDg"
        },
        {
          id: "1.1.5.3",
          title: "Barrier Penetration Simulator",
          description: "Interactive simulation of particles tunneling through barriers.",
          content: "In this interactive activity, you'll experiment with quantum tunneling. You'll be able to adjust the height and width of energy barriers and see how these changes affect the probability of particles tunneling through.\n\nYou'll discover that thinner barriers are easier to tunnel through, and that lighter particles tunnel more readily than heavier ones. This hands-on experience will help you build intuition about this counterintuitive quantum phenomenon.",
          type: "interactive",
          interactiveComponent: "AtomSimulation",
          duration: 20,
          points: 15
        },
        {
          id: "1.1.5.4",
          title: "Tunneling Quiz",
          description: "Test your understanding of quantum tunneling.",
          content: "Let's check what you've learned about quantum tunneling.",
          type: "quiz",
          duration: 10,
          points: 20
        }
      ]
    },
    {
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
          videoUrl: "https://www.youtube.com/embed/7SEmv2f8w5I"
        },
        {
          id: "1.1.6.3",
          title: "Quantum Technology Explorer",
          description: "Interactive exploration of quantum technologies.",
          content: "In this interactive activity, you'll explore different technologies that rely on quantum physics. You'll see how lasers work using stimulated emission, how solar panels generate electricity through the photoelectric effect, and how quantum tunneling enables scanning tunneling microscopes to image individual atoms.\n\nThis hands-on exploration will help you appreciate how quantum mechanics, despite its abstract nature, has led to practical technologies that benefit humanity.",
          type: "interactive",
          interactiveComponent: "BuildAtomActivity",
          duration: 20,
          points: 15
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
    }
  ]
};
