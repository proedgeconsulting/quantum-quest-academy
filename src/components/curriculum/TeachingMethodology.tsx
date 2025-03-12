
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Gamepad2, Code, Brain, GraduationCap, Users } from "lucide-react";

const TeachingMethodology = () => {
  const [activeTab, setActiveTab] = useState("kids");
  
  return (
    <section className="py-16 bg-white dark:bg-quantum-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-quantum-600 to-energy-600 text-transparent bg-clip-text">
            Teaching Methodology
          </h2>
          <p className="text-lg text-quantum-700 dark:text-quantum-300 max-w-2xl mx-auto">
            Our curriculum adapts to different learning styles and age groups, ensuring 
            everyone gets the most out of their quantum journey.
          </p>
        </motion.div>
        
        <Tabs defaultValue="kids" className="max-w-4xl mx-auto" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 w-full max-w-md">
              <TabsTrigger value="kids" className="flex items-center gap-2 py-3">
                <Gamepad2 className="h-4 w-4" />
                <span>Kids (10–14)</span>
              </TabsTrigger>
              <TabsTrigger value="teens" className="flex items-center gap-2 py-3">
                <Code className="h-4 w-4" />
                <span>Teens & Adults</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="kids" className="space-y-6">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-quantum-100 dark:bg-quantum-800 rounded-full">
                        <Gamepad2 className="h-6 w-6 text-quantum-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Gamified Learning</h3>
                    </div>
                    <p className="text-quantum-700 dark:text-quantum-300 mb-4">
                      Turn quantum physics into an adventure! Our game-based learning approach makes abstract concepts tangible and fun.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          ✓
                        </div>
                        <span>Interactive quantum simulations that feel like games</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          ✓
                        </div>
                        <span>Achievement badges and rewards for progress</span>
                      </li>
                    </ul>
                    <Button asChild variant="link" className="flex items-center gap-1 pl-0">
                      <Link to="/tools">
                        Try Quantum Games <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-quantum-100 dark:bg-quantum-800 rounded-full">
                        <BookOpen className="h-6 w-6 text-quantum-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Story-Based Learning</h3>
                    </div>
                    <p className="text-quantum-700 dark:text-quantum-300 mb-4">
                      Follow the adventures of Qubit the cat and friends as they explore the quantum realm through exciting stories.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          ✓
                        </div>
                        <span>Animated stories explaining quantum concepts</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          ✓
                        </div>
                        <span>Character-based learning that builds relationships</span>
                      </li>
                    </ul>
                    <Button asChild variant="link" className="flex items-center gap-1 pl-0">
                      <Link to="/courses?filter=stories">
                        Explore Story Courses <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-quantum-100 dark:bg-quantum-800 rounded-full">
                        <Brain className="h-6 w-6 text-quantum-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Hands-On Learning</h3>
                    </div>
                    <p className="text-quantum-700 dark:text-quantum-300 mb-4">
                      Build, experiment, and discover through interactive activities that bring quantum concepts to life.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          ✓
                        </div>
                        <span>Virtual labs with guided experiments</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          ✓
                        </div>
                        <span>DIY projects with household materials</span>
                      </li>
                    </ul>
                    <Button asChild variant="link" className="flex items-center gap-1 pl-0">
                      <Link to="/tools?type=experiments">
                        Try Experiments <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-quantum-100 dark:bg-quantum-800 rounded-full">
                        <Users className="h-6 w-6 text-quantum-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Social Learning</h3>
                    </div>
                    <p className="text-quantum-700 dark:text-quantum-300 mb-4">
                      Learn together with friends and classmates through collaborative challenges and friendly competitions.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          ✓
                        </div>
                        <span>Team projects that develop collaboration skills</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          ✓
                        </div>
                        <span>Quantum challenges with leaderboards</span>
                      </li>
                    </ul>
                    <Button asChild variant="link" className="flex items-center gap-1 pl-0">
                      <Link to="/community">
                        Join Community <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="teens" className="space-y-6">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-quantum-100 dark:bg-quantum-800 rounded-full">
                        <Code className="h-6 w-6 text-quantum-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Python Programming</h3>
                    </div>
                    <p className="text-quantum-700 dark:text-quantum-300 mb-4">
                      Develop practical quantum computing skills through Python coding exercises and projects.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          ✓
                        </div>
                        <span>Interactive coding notebooks with guided exercises</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          ✓
                        </div>
                        <span>Real quantum algorithms implemented in Python</span>
                      </li>
                    </ul>
                    <Button asChild variant="link" className="flex items-center gap-1 pl-0">
                      <Link to="/tools?type=code">
                        Try Coding Tools <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-quantum-100 dark:bg-quantum-800 rounded-full">
                        <GraduationCap className="h-6 w-6 text-quantum-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Academic Approach</h3>
                    </div>
                    <p className="text-quantum-700 dark:text-quantum-300 mb-4">
                      Dive deeper into the mathematics and theory behind quantum computing with optional advanced materials.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          ✓
                        </div>
                        <span>Mathematical deep dives for those who want more detail</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          ✓
                        </div>
                        <span>Research paper discussions and analysis</span>
                      </li>
                    </ul>
                    <Button asChild variant="link" className="flex items-center gap-1 pl-0">
                      <Link to="/resources?filter=academic">
                        Browse Academic Resources <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-quantum-100 dark:bg-quantum-800 rounded-full">
                        <Brain className="h-6 w-6 text-quantum-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Project-Based Learning</h3>
                    </div>
                    <p className="text-quantum-700 dark:text-quantum-300 mb-4">
                      Apply your knowledge to real-world challenges through comprehensive projects and case studies.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          ✓
                        </div>
                        <span>Portfolio development with GitHub integration</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          ✓
                        </div>
                        <span>Industry-inspired challenges and case studies</span>
                      </li>
                    </ul>
                    <Button asChild variant="link" className="flex items-center gap-1 pl-0">
                      <Link to="/projects">
                        Explore Projects <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-quantum-100 dark:bg-quantum-800 rounded-full">
                        <Users className="h-6 w-6 text-quantum-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Career Development</h3>
                    </div>
                    <p className="text-quantum-700 dark:text-quantum-300 mb-4">
                      Prepare for a future in quantum technology with industry insights and career-focused resources.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          ✓
                        </div>
                        <span>Industry expert interviews and insights</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          ✓
                        </div>
                        <span>Quantum computing career path guidance</span>
                      </li>
                    </ul>
                    <Button asChild variant="link" className="flex items-center gap-1 pl-0">
                      <Link to="/careers">
                        Explore Careers <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TeachingMethodology;
