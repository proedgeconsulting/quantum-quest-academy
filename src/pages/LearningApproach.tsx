
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { 
  Atom, 
  Brain, 
  GraduationCap, 
  Lightbulb, 
  Puzzle, 
  Target, 
  ArrowLeft, 
  MessageSquare
} from "lucide-react";
import { ApproachType } from "@/components/about/LearningApproachDialog";

const LearningApproach = () => {
  const { approach } = useParams<{ approach: string }>();
  
  // Define approach data
  const approachData = {
    interactive: {
      title: "Interactive Learning",
      description: "Hands-on activities and experiments that make abstract quantum concepts tangible and engaging.",
      icon: <Puzzle className="h-16 w-16 text-quantum-500" />,
      color: "from-purple-500 to-blue-500",
      content: (
        <>
          <p className="text-lg mb-6">
            At Quantum Quest, we believe that true understanding comes from active engagement. 
            Our interactive learning approach transforms passive observers into active participants 
            in the quantum learning journey.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Why Interactive Learning Works</h3>
          <p className="mb-6">
            Research in educational psychology consistently shows that interactive learning leads to:
          </p>
          <ul className="list-disc ml-6 mb-8 space-y-2">
            <li>75% higher retention rates compared to passive methods</li>
            <li>Increased student engagement and motivation</li>
            <li>Deeper conceptual understanding</li>
            <li>Better transfer of knowledge to new situations</li>
            <li>Development of practical skills alongside theoretical knowledge</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Our Interactive Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Quantum Simulators</h4>
              <p>
                Virtual laboratories where you can manipulate quantum particles, create superposition 
                states, and witness quantum phenomena firsthand.
              </p>
            </div>
            <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Circuit Builders</h4>
              <p>
                Drag-and-drop interfaces for constructing quantum circuits, with real-time 
                visualization of quantum states and operations.
              </p>
            </div>
            <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Quantum Games</h4>
              <p>
                Educational games that teach quantum concepts through play, making complex 
                ideas accessible and enjoyable.
              </p>
            </div>
            <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Collaborative Experiments</h4>
              <p>
                Multiplayer activities where students can work together to solve quantum 
                challenges, mirroring real scientific collaboration.
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3">Success Stories</h3>
          <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <MessageSquare className="h-8 w-8 text-quantum-500 mr-4 mt-1 flex-shrink-0" />
              <div>
                <p className="italic mb-2">
                  "I never thought I could understand quantum physics until I tried Quantum Quest's 
                  interactive simulations. Being able to actually manipulate qubits and see the results 
                  made everything click for me!"
                </p>
                <p className="font-medium">- Maya S., 14 years old</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-quantum-100 to-energy-100 dark:from-quantum-800 dark:to-energy-800 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold mb-3">Ready to Learn by Doing?</h3>
            <p className="mb-4">
              Explore our interactive tools and discover how engaging with quantum concepts 
              hands-on can transform your understanding.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link to="/tools">Explore Our Tools</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/courses">Browse Courses</Link>
              </Button>
            </div>
          </div>
        </>
      )
    },
    scaffolded: {
      title: "Scaffolded Progression",
      description: "Carefully designed learning paths that build competence and confidence at each stage.",
      icon: <GraduationCap className="h-16 w-16 text-quantum-500" />,
      color: "from-blue-500 to-cyan-500",
      content: (
        <>
          <p className="text-lg mb-6">
            Our scaffolded learning approach ensures that you build solid foundations before tackling complex concepts, 
            creating a smooth and confidence-building journey through quantum science.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">The Science of Scaffolding</h3>
          <p className="mb-6">
            Based on Vygotsky's Zone of Proximal Development theory, our scaffolded approach:
          </p>
          <ul className="list-disc ml-6 mb-8 space-y-2">
            <li>Identifies your current knowledge level</li>
            <li>Introduces concepts just beyond your comfort zone</li>
            <li>Provides support that gradually fades as you master each concept</li>
            <li>Continuously adapts to your growing understanding</li>
            <li>Ensures you're always challenged but never overwhelmed</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Our Learning Paths</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Level 1: Foundations</h4>
              <p>
                Introducing core quantum concepts through accessible analogies, 
                visual learning, and gamified activities.
              </p>
            </div>
            <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Level 2: Development</h4>
              <p>
                Building on fundamentals with more detailed explorations of quantum 
                principles and introductory programming concepts.
              </p>
            </div>
            <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Level 3: Advanced</h4>
              <p>
                Exploring cutting-edge quantum applications with sophisticated simulations 
                and real-world project opportunities.
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3">Progression Support</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Prerequisite Checks</h4>
              <p>
                Brief assessments that ensure you have the necessary background 
                knowledge before advancing to new topics.
              </p>
            </div>
            <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Just-in-Time Learning</h4>
              <p>
                On-demand resources that provide additional explanations exactly 
                when you need them.
              </p>
            </div>
            <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Knowledge Reinforcement</h4>
              <p>
                Spaced repetition activities that strengthen your understanding of 
                previously learned concepts.
              </p>
            </div>
            <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Progress Visualization</h4>
              <p>
                Clear visual feedback that shows how far you've come and what's 
                next in your learning journey.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-quantum-100 to-energy-100 dark:from-quantum-800 dark:to-energy-800 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold mb-3">Find Your Learning Path</h3>
            <p className="mb-4">
              Discover a personalized quantum learning journey that builds on your current knowledge 
              and guides you step by step toward mastery.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link to="/curriculum">Explore Curriculum</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/courses">Browse Courses</Link>
              </Button>
            </div>
          </div>
        </>
      )
    },
    achievement: {
      title: "Achievement-Focused",
      description: "Milestones and rewards that celebrate progress and motivate continued exploration.",
      icon: <Target className="h-16 w-16 text-quantum-500" />,
      color: "from-cyan-500 to-teal-500",
      content: (
        <>
          <p className="text-lg mb-6">
            Our achievement-focused approach uses a carefully designed system of goals, milestones, and rewards 
            to keep you motivated and engaged throughout your quantum learning journey.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">The Psychology of Achievement</h3>
          <p className="mb-6">
            Based on research in motivational psychology, our achievement system is designed to:
          </p>
          <ul className="list-disc ml-6 mb-8 space-y-2">
            <li>Balance intrinsic and extrinsic motivation factors</li>
            <li>Create a sense of progress that fuels continued engagement</li>
            <li>Provide immediate feedback on learning accomplishments</li>
            <li>Recognize effort and persistence alongside knowledge acquisition</li>
            <li>Build a positive association with learning challenges</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Recognition Systems</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Digital Badges</h4>
              <p>
                Collectible digital credentials that showcase your growing expertise in 
                different areas of quantum science.
              </p>
            </div>
            <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Progress Visualization</h4>
              <p>
                Dynamic dashboards that illustrate your learning journey and highlight 
                achievements along the way.
              </p>
            </div>
            <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Milestone Celebrations</h4>
              <p>
                Special recognition when you complete significant learning objectives or 
                demonstrate exceptional understanding.
              </p>
            </div>
            <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Community Recognition</h4>
              <p>
                Opportunities to showcase your work and achievements to the broader 
                Quantum Quest learning community.
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3">Reward Pathways</h3>
          <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg mb-8">
            <ul className="list-disc ml-6 space-y-2">
              <li>Points that accumulate as you complete learning activities</li>
              <li>Levels that unlock new content and learning opportunities</li>
              <li>Exclusive access to advanced simulations and tools</li>
              <li>Special certificates for completing course sequences</li>
              <li>Tangible rewards for exceptional achievements</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-quantum-100 to-energy-100 dark:from-quantum-800 dark:to-energy-800 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold mb-3">Start Your Achievement Journey</h3>
            <p className="mb-4">
              Begin collecting badges, earning points, and tracking your progress as you explore 
              the fascinating world of quantum science.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link to="/progress">Track Progress</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/courses">Browse Courses</Link>
              </Button>
            </div>
          </div>
        </>
      )
    },
    cognitive: {
      title: "Cognitive Development",
      description: "Activities designed to develop critical thinking and problem-solving skills.",
      icon: <Brain className="h-16 w-16 text-quantum-500" />,
      color: "from-teal-500 to-green-500",
      content: (
        <>
          <p className="text-lg mb-6">
            Our cognitive development approach focuses on building the mental tools and thinking skills 
            needed for quantum understanding, not just memorizing facts and formulas.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Beyond Knowledge Acquisition</h3>
          <p className="mb-6">
            Based on Bloom's Taxonomy and other cognitive frameworks, we develop:
          </p>
          <ul className="list-disc ml-6 mb-8 space-y-2">
            <li>Analytical thinking to break down complex quantum problems</li>
            <li>Evaluative skills to assess quantum approaches and solutions</li>
            <li>Creative thinking to imagine new applications of quantum principles</li>
            <li>Metacognitive awareness to monitor your own understanding</li>
            <li>Transfer skills to apply quantum concepts across different contexts</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Cognitive Challenge Activities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Thought Experiments</h4>
              <p>
                Mental exercises that push you to reason through quantum scenarios and develop 
                conceptual understanding.
              </p>
            </div>
            <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Debugging Challenges</h4>
              <p>
                Quantum circuit and code debugging activities that build analytical and 
                troubleshooting skills.
              </p>
            </div>
            <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Comparative Analysis</h4>
              <p>
                Exercises that ask you to compare different quantum approaches and evaluate 
                their strengths and limitations.
              </p>
            </div>
            <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Reflection Prompts</h4>
              <p>
                Guided questions that encourage you to think about your own thinking process 
                and deepen your understanding.
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3">Transferable Skills</h3>
          <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg mb-8">
            <p className="mb-3">
              The cognitive skills developed through Quantum Quest extend far beyond quantum science:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Systematic problem-solving approaches applicable to any discipline</li>
              <li>Comfort with abstraction and complex systems thinking</li>
              <li>Ability to navigate uncertainty and probabilistic reasoning</li>
              <li>Pattern recognition across seemingly different domains</li>
              <li>Critical evaluation of claims and evidence</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-quantum-100 to-energy-100 dark:from-quantum-800 dark:to-energy-800 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold mb-3">Develop Your Quantum Thinking</h3>
            <p className="mb-4">
              Challenge yourself with activities designed to develop the cognitive skills needed for 
              quantum understanding and beyond.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link to="/courses">Explore Courses</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/tools">Try Our Tools</Link>
              </Button>
            </div>
          </div>
        </>
      )
    },
    creative: {
      title: "Creative Exploration",
      description: "Open-ended challenges that encourage innovation and creative applications of quantum principles.",
      icon: <Lightbulb className="h-16 w-16 text-quantum-500" />,
      color: "from-green-500 to-yellow-500",
      content: (
        <>
          <p className="text-lg mb-6">
            Our creative exploration approach encourages you to push boundaries, make novel connections, 
            and imagine new possibilities for quantum science and technology.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Why Creativity Matters in Quantum Science</h3>
          <p className="mb-6">
            Quantum science is a field ripe for creative thinking because:
          </p>
          <ul className="list-disc ml-6 mb-8 space-y-2">
            <li>Many quantum applications are still waiting to be discovered</li>
            <li>Quantum principles often defy classical intuition and require creative leaps</li>
            <li>Interdisciplinary connections yield some of the most promising advancements</li>
            <li>The next generation of quantum breakthroughs will come from today's creative exploration</li>
            <li>Imaginative thinking helps bridge the gap between abstract principles and concrete applications</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Creative Activities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Open-Ended Projects</h4>
              <p>
                Opportunities to design your own quantum experiments, algorithms, or applications 
                with personalized guidance.
              </p>
            </div>
            <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Innovation Challenges</h4>
              <p>
                Time-limited challenges that push you to develop novel solutions to 
                quantum computing problems.
              </p>
            </div>
            <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Speculative Design</h4>
              <p>
                Activities that encourage you to imagine and design future quantum technologies 
                and their societal impacts.
              </p>
            </div>
            <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Interdisciplinary Connections</h4>
              <p>
                Explorations of how quantum concepts can be applied to other fields like 
                medicine, art, finance, and environmental science.
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3">Creative Process Support</h3>
          <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg mb-8">
            <p className="mb-3">
              We provide tools and frameworks to support your creative quantum explorations:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Design thinking methodologies adapted for quantum innovation</li>
              <li>Collaboration platforms to share and build on ideas with peers</li>
              <li>Mentorship from quantum experts who value creative approaches</li>
              <li>Resources for implementing and testing innovative quantum concepts</li>
              <li>Showcase opportunities to present your creative work</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-quantum-100 to-energy-100 dark:from-quantum-800 dark:to-energy-800 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold mb-3">Unleash Your Quantum Creativity</h3>
            <p className="mb-4">
              Join a community that values innovation and explore the uncharted territories of 
              quantum science and computing.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link to="/courses">Explore Courses</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/tools">Try Our Tools</Link>
              </Button>
            </div>
          </div>
        </>
      )
    },
    scientific: {
      title: "Scientific Accuracy",
      description: "Content developed by experts to ensure concepts are simplified without being misleading.",
      icon: <Atom className="h-16 w-16 text-quantum-500" />,
      color: "from-yellow-500 to-orange-500",
      content: (
        <>
          <p className="text-lg mb-6">
            Our commitment to scientific accuracy ensures that you learn quantum science correctly from the start, 
            with simplifications that clarify rather than distort.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">The Challenge of Quantum Education</h3>
          <p className="mb-6">
            Quantum science presents unique educational challenges:
          </p>
          <ul className="list-disc ml-6 mb-8 space-y-2">
            <li>Concepts that have no direct classical analogs</li>
            <li>Mathematical complexity that can be a barrier to understanding</li>
            <li>Counterintuitive principles that challenge everyday experience</li>
            <li>A rapidly evolving field with new discoveries regularly</li>
            <li>Prevalent misconceptions in popular media and discourse</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Our Scientific Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Expert Review Process</h4>
              <p>
                All content undergoes rigorous review by quantum physicists, computer scientists, 
                and education specialists to ensure accuracy.
              </p>
            </div>
            <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Age-Appropriate Simplification</h4>
              <p>
                Concepts simplified based on cognitive development research, creating foundations 
                that can be built upon without requiring "unlearning."
              </p>
            </div>
            <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Distinction of Frontiers</h4>
              <p>
                Clear communication about what is established quantum science versus what remains 
                theoretical or at the research frontier.
              </p>
            </div>
            <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Current Research Connections</h4>
              <p>
                Regular updates to materials reflecting the latest developments in quantum 
                science and computing.
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3">Our Expert Team</h3>
          <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg mb-8">
            <p className="mb-3">
              Quantum Quest content is developed by a multidisciplinary team including:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Quantum physicists from leading research institutions</li>
              <li>Quantum computing engineers with industry experience</li>
              <li>Science education specialists focused on complex concept communication</li>
              <li>Developmental psychologists who understand age-appropriate learning</li>
              <li>Science communicators skilled at making complex ideas accessible</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-quantum-100 to-energy-100 dark:from-quantum-800 dark:to-energy-800 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold mb-3">Learn Quantum Science with Confidence</h3>
            <p className="mb-4">
              Build a solid foundation with learning materials that simplify without sacrificing 
              scientific integrity.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link to="/curriculum">Explore Curriculum</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/about">About Our Team</Link>
              </Button>
            </div>
          </div>
        </>
      )
    }
  };
  
  // Default to 'interactive' if approach is invalid
  const validApproach = (approach as ApproachType) in approachData ? 
    (approach as ApproachType) : 
    'interactive';
  
  const {
    title,
    description,
    icon,
    color,
    content
  } = approachData[validApproach];
  
  return (
    <div className="min-h-screen bg-quantum-50 dark:bg-quantum-950">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/about" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              <span>Back to About</span>
            </Link>
          </Button>
          
          <div className={`bg-gradient-to-r ${color} p-8 rounded-lg text-white mb-8`}>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-white/20 p-6 rounded-full">
                {icon}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
                <p className="text-xl opacity-90">{description}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {content}
        </div>
      </div>
    </div>
  );
};

export default LearningApproach;
