
import React from "react";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Atom, Brain, GraduationCap, Lightbulb, Puzzle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

// Type definitions
export type ApproachType = 
  | "interactive" 
  | "scaffolded" 
  | "achievement" 
  | "cognitive" 
  | "creative" 
  | "scientific";

interface ApproachData {
  title: string;
  description: string;
  content: React.ReactNode;
  icon: React.ReactNode;
}

// Data for each approach
const approachData: Record<ApproachType, ApproachData> = {
  interactive: {
    title: "Interactive Learning",
    description: "Hands-on activities and experiments that make abstract quantum concepts tangible and engaging.",
    icon: <Puzzle className="h-10 w-10 text-quantum-500 mb-2" />,
    content: (
      <div className="space-y-4">
        <p>Our interactive learning approach puts quantum physics and computing directly into your hands through:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Virtual quantum labs where you can manipulate quantum particles</li>
          <li>Quantum circuit builders that visualize quantum operations</li>
          <li>Gamified challenges that reinforce quantum concepts through play</li>
          <li>Collaborative experiments where you can work with other learners</li>
          <li>Real-time simulations that demonstrate quantum principles in action</li>
        </ul>
        <p>Research shows that hands-on, interactive learning leads to 75% higher retention rates compared to passive learning methods. Our interactive tools are designed based on educational research to maximize understanding and retention.</p>
      </div>
    )
  },
  scaffolded: {
    title: "Scaffolded Progression",
    description: "Carefully designed learning paths that build competence and confidence at each stage.",
    icon: <GraduationCap className="h-10 w-10 text-quantum-500 mb-2" />,
    content: (
      <div className="space-y-4">
        <p>Our scaffolded learning approach ensures you build solid foundations before tackling complex concepts:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Personalized learning paths based on your existing knowledge</li>
          <li>Bite-sized lessons that gradually increase in complexity</li>
          <li>Prerequisite checks that ensure you're ready for advanced concepts</li>
          <li>Knowledge reinforcement through spaced repetition</li>
          <li>Just-in-time learning support when you encounter difficulties</li>
        </ul>
        <p>We've mapped our curriculum to cognitive development research, ensuring that each concept is introduced at the appropriate time and with the right level of support. This scaffolded approach means you'll never feel overwhelmed or lost in your quantum journey.</p>
      </div>
    )
  },
  achievement: {
    title: "Achievement-Focused",
    description: "Milestones and rewards that celebrate progress and motivate continued exploration.",
    icon: <Target className="h-10 w-10 text-quantum-500 mb-2" />,
    content: (
      <div className="space-y-4">
        <p>Our achievement-focused system keeps you motivated throughout your learning journey:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Digital badges that showcase your growing quantum expertise</li>
          <li>Progress visualization that helps you see how far you've come</li>
          <li>Milestone celebrations that mark significant learning achievements</li>
          <li>Community recognition for notable accomplishments</li>
          <li>Tangible rewards like exclusive content and advanced simulations</li>
        </ul>
        <p>Based on motivational psychology, our achievement system taps into both intrinsic and extrinsic motivation factors, creating a balanced approach that works for different learning styles and preferences. You'll always have something to strive for and celebrate along the way.</p>
      </div>
    )
  },
  cognitive: {
    title: "Cognitive Development",
    description: "Activities designed to develop critical thinking and problem-solving skills.",
    icon: <Brain className="h-10 w-10 text-quantum-500 mb-2" />,
    content: (
      <div className="space-y-4">
        <p>Our cognitive development approach builds crucial thinking skills alongside quantum knowledge:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Challenge problems that promote analytical thinking</li>
          <li>Thought experiments that develop conceptual understanding</li>
          <li>Debugging exercises that build troubleshooting skills</li>
          <li>Comparative analysis activities that enhance critical evaluation</li>
          <li>Reflection prompts that encourage metacognition</li>
        </ul>
        <p>We've incorporated elements from Bloom's Taxonomy and other cognitive development frameworks to ensure you're not just memorizing facts, but developing higher-order thinking skills essential for quantum science. These skills will serve you well beyond your quantum studies, transferring to other academic and career pursuits.</p>
      </div>
    )
  },
  creative: {
    title: "Creative Exploration",
    description: "Open-ended challenges that encourage innovation and creative applications of quantum principles.",
    icon: <Lightbulb className="h-10 w-10 text-quantum-500 mb-2" />,
    content: (
      <div className="space-y-4">
        <p>Our creative exploration approach encourages you to push boundaries and innovate:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Open-ended projects that allow you to apply quantum concepts in novel ways</li>
          <li>Innovation challenges that encourage thinking outside conventional paradigms</li>
          <li>Speculative design exercises imagining future quantum technologies</li>
          <li>Interdisciplinary connections that bridge quantum concepts with other fields</li>
          <li>Collaborative ideation sessions with peers and mentors</li>
        </ul>
        <p>Creativity is essential in quantum science, a field still in its early stages with vast unexplored potential. Our creative exploration activities are designed to nurture the innovative thinking that will drive the next generation of quantum breakthroughs. We believe that today's creative explorations become tomorrow's scientific advancements.</p>
      </div>
    )
  },
  scientific: {
    title: "Scientific Accuracy",
    description: "Content developed by experts to ensure concepts are simplified without being misleading.",
    icon: <Atom className="h-10 w-10 text-quantum-500 mb-2" />,
    content: (
      <div className="space-y-4">
        <p>Our commitment to scientific accuracy ensures you learn quantum science correctly from the start:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Expert-reviewed content that balances accessibility with accuracy</li>
          <li>Clear distinction between established science and theoretical frontiers</li>
          <li>Age-appropriate simplifications that can be built upon later</li>
          <li>Updated materials that reflect the latest quantum research</li>
          <li>Connections to primary scientific literature for advanced learners</li>
        </ul>
        <p>Our content development team includes quantum physicists, computer scientists, and education specialists who work together to ensure that complex quantum concepts are made accessible without misrepresentation. We believe that simplification shouldn't mean distortion, and we're committed to building a solid foundation of accurate quantum knowledge.</p>
      </div>
    )
  }
};

interface LearningApproachDialogProps {
  approach: ApproachType;
}

const LearningApproachDialog = ({ approach }: LearningApproachDialogProps) => {
  const { title, description, content, icon } = approachData[approach];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer transition-all hover:shadow-md hover:border-quantum-400 hover:-translate-y-1">
          <CardHeader className="pb-2">
            {icon}
            <DialogTitle>{title}</DialogTitle>
          </CardHeader>
          <CardContent>
            <p className="text-quantum-700 dark:text-quantum-300">
              {description}
            </p>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2">
            {icon}
            <DialogTitle className="text-xl">{title}</DialogTitle>
          </div>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          {content}
          <div className="mt-6 flex justify-end">
            <Button asChild>
              <a href={`/learning-approach/${approach}`}>Learn More</a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LearningApproachDialog;
