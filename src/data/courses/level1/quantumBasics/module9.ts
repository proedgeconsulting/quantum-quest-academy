
import { Module } from "@/data/types/courseTypes";

// Module 9: Quantum Art
export const module9: Module = {
  id: "1.1.9",
  title: "Quantum Art",
  description: "Explore the beautiful patterns and visualization of quantum physics.",
  lessons: [
    {
      id: "1.1.9.1",
      title: "Quantum Patterns in Nature",
      description: "Discover quantum patterns all around us in the natural world.",
      content: "Did you know that quantum physics creates beautiful patterns that we can see in nature? In this lesson, we'll explore how quantum effects create amazing designs all around us!\n\nFrom the spiral patterns in sunflowers and pinecones (which follow the Fibonacci sequence related to quantum probability) to the beautiful symmetry of snowflakes (created by quantum interactions between water molecules), quantum physics makes our world beautiful.\n\nWe'll even look at how butterfly wings get their vibrant colors not from pigments, but from tiny structures that create quantum light effects!",
      type: "reading",
      duration: 12,
      points: 10
    },
    {
      id: "1.1.9.2",
      title: "Visualizing Quantum Waves",
      description: "See the beautiful patterns created by quantum wave functions.",
      content: "Quantum waves create some of the most beautiful patterns in science! In this lesson, we'll explore how scientists visualize quantum waves.\n\nYou'll see colorful probability waves that show where particles might be found, interference patterns created when quantum waves overlap (just like ripples in a pond), and strange fractal-like patterns from quantum systems.\n\nThese patterns aren't just beautiful - they help scientists understand how quantum particles behave. Artists also use these patterns as inspiration for amazing artwork!",
      type: "video",
      duration: 10,
      points: 10,
      videoUrl: "https://www.youtube.com/watch?v=KKr91v7yLcM"
    },
    {
      id: "1.1.9.3",
      title: "Create Your Quantum Artwork",
      description: "Make your own art based on quantum principles.",
      content: "Time to become a quantum artist! In this activity, you'll create your own beautiful artwork based on quantum principles.\n\nYou'll use our special drawing tool that simulates quantum wave functions. Watch how your drawing creates interference patterns as waves overlap. You can adjust the wavelength, amplitude, and phase to create different effects.\n\nWhen you're done, you can save your quantum artwork and share it with friends! Who knew quantum physics could be so beautiful?",
      type: "interactive",
      interactiveComponent: "AtomSimulation",
      duration: 20,
      points: 20
    },
    {
      id: "1.1.9.4",
      title: "Quantum Art Quiz",
      description: "Test your knowledge of quantum patterns and visualization.",
      content: "Let's see what you've learned about the beautiful world of quantum art and patterns!",
      type: "quiz",
      duration: 10,
      points: 15
    }
  ]
};
