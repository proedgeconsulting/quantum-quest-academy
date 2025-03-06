
import { Card, CardContent } from "@/components/ui/card";
import { Atom, GraduationCap, Lightbulb, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Atom className="h-8 w-8 text-quantum-500" />,
    title: "Interactive Learning",
    description: "Hands-on activities and simulations make complex quantum concepts accessible and engaging."
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-quantum-500" />,
    title: "Age-Appropriate Content",
    description: "Carefully designed for young minds with progressive complexity as you advance through levels."
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-quantum-500" />,
    title: "Expert-Designed Curriculum",
    description: "Created by quantum physicists and educators to ensure accuracy and educational quality."
  },
  {
    icon: <Zap className="h-8 w-8 text-quantum-500" />,
    title: "Future-Ready Skills",
    description: "Prepare for the quantum revolution with skills that will be in high demand in the coming decades."
  }
];

const WhyQuantumQuestSection = () => {
  return (
    <section className="py-16 bg-quantum-100 dark:bg-quantum-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Why Quantum Quest?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our unique approach makes quantum physics and computing accessible to learners of all ages
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 mx-auto w-16 h-16 flex items-center justify-center bg-white dark:bg-quantum-800 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyQuantumQuestSection;
