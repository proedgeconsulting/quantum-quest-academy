
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Download, FileText, ArrowRight, BookOpen, Users, PenTool, Lightbulb, CheckCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const TeachersResources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-950 dark:to-green-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-quantum-600 to-energy-600 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                For Teachers
              </motion.h1>
              <motion.p 
                className="text-lg text-quantum-700 dark:text-quantum-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Comprehensive resources and support to help you bring quantum physics and computing 
                into your classroom with confidence and creativity.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Button size="lg" className="bg-quantum-600 hover:bg-quantum-700">
                  Download Lesson Plans
                </Button>
                <Button variant="outline" size="lg">
                  Join Teacher Community
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Key Features */}
        <section className="py-16 bg-white dark:bg-quantum-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Teach Quantum with Us?</h2>
              <p className="text-lg text-quantum-700 dark:text-quantum-300 max-w-2xl mx-auto">
                Our platform is designed to make quantum physics accessible, engaging, and easy to teach, 
                regardless of your background in the subject.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ready-to-Use Curriculum</h3>
                <p className="text-quantum-700 dark:text-quantum-300">
                  Access comprehensive, grade-appropriate lesson plans aligned with educational standards.
                </p>
              </div>
              
              <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                  <PenTool className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Adaptable Materials</h3>
                <p className="text-quantum-700 dark:text-quantum-300">
                  Customize activities to fit your classroom needs, teaching style, and available resources.
                </p>
              </div>
              
              <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Professional Community</h3>
                <p className="text-quantum-700 dark:text-quantum-300">
                  Connect with fellow educators to share experiences, strategies, and best practices.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Teaching Resources Tabs */}
        <section className="py-16 bg-quantum-50 dark:bg-quantum-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Teaching Resources</h2>
              <p className="text-lg text-quantum-700 dark:text-quantum-300 max-w-2xl mx-auto">
                Everything you need to bring quantum concepts to life in your classroom.
              </p>
            </div>
            
            <Tabs defaultValue="lesson-plans" className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-3 w-full max-w-md">
                  <TabsTrigger value="lesson-plans" className="py-3">Lesson Plans</TabsTrigger>
                  <TabsTrigger value="activities" className="py-3">Activities</TabsTrigger>
                  <TabsTrigger value="assessments" className="py-3">Assessments</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="lesson-plans" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full mr-3">
                          <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-xl font-semibold">Introduction to Quantum Concepts</h3>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-quantum-600 dark:text-quantum-400">
                          <Clock className="h-4 w-4 mr-1" /> 45-60 minutes
                        </div>
                        <div className="flex items-center text-sm text-quantum-600 dark:text-quantum-400">
                          <Users className="h-4 w-4 mr-1" /> Grades 7-9
                        </div>
                      </div>
                      <p className="text-quantum-700 dark:text-quantum-300 mb-4">
                        A gentle introduction to key quantum physics concepts through analogies and simple activities.
                      </p>
                      <Button variant="outline" className="flex items-center gap-2">
                        <Download className="h-4 w-4" /> Download Plan
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-full mr-3">
                          <BookOpen className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h3 className="text-xl font-semibold">Quantum Superposition</h3>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-quantum-600 dark:text-quantum-400">
                          <Clock className="h-4 w-4 mr-1" /> 60-75 minutes
                        </div>
                        <div className="flex items-center text-sm text-quantum-600 dark:text-quantum-400">
                          <Users className="h-4 w-4 mr-1" /> Grades 9-12
                        </div>
                      </div>
                      <p className="text-quantum-700 dark:text-quantum-300 mb-4">
                        Explore the fascinating concept of quantum superposition with interactive demonstrations.
                      </p>
                      <Button variant="outline" className="flex items-center gap-2">
                        <Download className="h-4 w-4" /> Download Plan
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="text-center mt-6">
                  <Button variant="link" className="text-quantum-600 dark:text-quantum-400 flex items-center gap-2 mx-auto">
                    Browse All Lesson Plans <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="activities" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-green-100 dark:bg-green-900 rounded-full mr-3">
                          <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="text-xl font-semibold">Quantum Card Game</h3>
                      </div>
                      <p className="text-quantum-700 dark:text-quantum-300 mb-4">
                        A printable card game that demonstrates quantum entanglement in an engaging way.
                      </p>
                      <Button variant="outline" className="flex items-center gap-2">
                        <Download className="h-4 w-4" /> Download Materials
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-energy-100 dark:bg-energy-900 rounded-full mr-3">
                          <Lightbulb className="h-5 w-5 text-energy-600 dark:text-energy-400" />
                        </div>
                        <h3 className="text-xl font-semibold">Build a Quantum Circuit</h3>
                      </div>
                      <p className="text-quantum-700 dark:text-quantum-300 mb-4">
                        Hands-on activity to build simple quantum circuit models using everyday materials.
                      </p>
                      <Button variant="outline" className="flex items-center gap-2">
                        <Download className="h-4 w-4" /> Download Instructions
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="text-center mt-6">
                  <Button variant="link" className="text-quantum-600 dark:text-quantum-400 flex items-center gap-2 mx-auto">
                    Browse All Activities <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="assessments" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-quantum-100 dark:bg-quantum-700 rounded-full mr-3">
                          <CheckCircle className="h-5 w-5 text-quantum-600 dark:text-quantum-400" />
                        </div>
                        <h3 className="text-xl font-semibold">Quantum Concepts Quiz</h3>
                      </div>
                      <p className="text-quantum-700 dark:text-quantum-300 mb-4">
                        Multiple-choice and short-answer assessments testing basic quantum understanding.
                      </p>
                      <Button variant="outline" className="flex items-center gap-2">
                        <Download className="h-4 w-4" /> Download Quiz
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full mr-3">
                          <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-xl font-semibold">Project Rubrics</h3>
                      </div>
                      <p className="text-quantum-700 dark:text-quantum-300 mb-4">
                        Detailed assessment rubrics for evaluating quantum-themed projects and presentations.
                      </p>
                      <Button variant="outline" className="flex items-center gap-2">
                        <Download className="h-4 w-4" /> Download Rubrics
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="text-center mt-6">
                  <Button variant="link" className="text-quantum-600 dark:text-quantum-400 flex items-center gap-2 mx-auto">
                    Browse All Assessments <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Professional Development */}
        <section className="py-16 bg-white dark:bg-quantum-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Professional Development</h2>
              <p className="text-lg text-quantum-700 dark:text-quantum-300 max-w-2xl mx-auto">
                Enhance your quantum teaching skills and confidence with our educator-focused resources.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Online Workshops</h3>
                <p className="text-quantum-700 dark:text-quantum-300 mb-4">
                  Participate in live virtual workshops led by quantum education experts. Learn practical teaching 
                  strategies and get answers to your questions in real-time.
                </p>
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Upcoming Workshops:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-quantum-100 dark:bg-quantum-700 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                        ➤
                      </div>
                      <div>
                        <span className="font-medium">Teaching Quantum to Middle Schoolers</span>
                        <p className="text-sm text-quantum-600 dark:text-quantum-400">June 15, 2023 • 4:00 PM EDT</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-quantum-100 dark:bg-quantum-700 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                        ➤
                      </div>
                      <div>
                        <span className="font-medium">Hands-on Quantum Activities</span>
                        <p className="text-sm text-quantum-600 dark:text-quantum-400">June 22, 2023 • 4:00 PM EDT</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <Button className="w-full">Register for Workshops</Button>
              </div>
              
              <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Self-Paced Courses</h3>
                <p className="text-quantum-700 dark:text-quantum-300 mb-4">
                  Access our teacher-specific courses designed to build your quantum knowledge and classroom skills 
                  at your own pace.
                </p>
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Featured Courses:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-quantum-100 dark:bg-quantum-700 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                        ➤
                      </div>
                      <div>
                        <span className="font-medium">Quantum Fundamentals for Educators</span>
                        <p className="text-sm text-quantum-600 dark:text-quantum-400">3-hour course • Certificate available</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-quantum-100 dark:bg-quantum-700 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                        ➤
                      </div>
                      <div>
                        <span className="font-medium">Integrating Quantum Computing into STEM Curriculum</span>
                        <p className="text-sm text-quantum-600 dark:text-quantum-400">5-hour course • Certificate available</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <Button className="w-full">Browse Courses</Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Teacher Testimonials */}
        <section className="py-16 bg-quantum-50 dark:bg-quantum-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Teacher Success Stories</h2>
              <p className="text-lg text-quantum-700 dark:text-quantum-300 max-w-2xl mx-auto">
                Hear from educators who have successfully introduced quantum concepts in their classrooms.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-quantum-900 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-200 dark:bg-blue-700 flex items-center justify-center text-lg font-bold text-blue-700 dark:text-blue-200 mr-3">
                    MR
                  </div>
                  <div>
                    <h4 className="font-semibold">Ms. Rebecca Johnson</h4>
                    <p className="text-sm text-quantum-600 dark:text-quantum-400">Middle School Science Teacher</p>
                  </div>
                </div>
                <p className="italic text-quantum-700 dark:text-quantum-300">
                  "My students were absolutely fascinated by the quantum games. They went from thinking physics was boring to begging for more quantum lessons!"
                </p>
              </div>
              
              <div className="bg-white dark:bg-quantum-900 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-200 dark:bg-green-700 flex items-center justify-center text-lg font-bold text-green-700 dark:text-green-200 mr-3">
                    DW
                  </div>
                  <div>
                    <h4 className="font-semibold">Dr. David Wong</h4>
                    <p className="text-sm text-quantum-600 dark:text-quantum-400">High School Physics Teacher</p>
                  </div>
                </div>
                <p className="italic text-quantum-700 dark:text-quantum-300">
                  "The curriculum resources saved me countless hours of preparation time. The simulations and activities were perfectly pitched for my AP Physics students."
                </p>
              </div>
              
              <div className="bg-white dark:bg-quantum-900 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-200 dark:bg-purple-700 flex items-center justify-center text-lg font-bold text-purple-700 dark:text-purple-200 mr-3">
                    SG
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Garcia</h4>
                    <p className="text-sm text-quantum-600 dark:text-quantum-400">Elementary STEM Coordinator</p>
                  </div>
                </div>
                <p className="italic text-quantum-700 dark:text-quantum-300">
                  "Even my youngest students grasped basic quantum concepts through the storytelling approach. The Qubit character and adventures made complex ideas accessible and fun."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-quantum-100 to-energy-100 dark:from-quantum-900 dark:to-energy-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Bring Quantum Physics to Your Classroom?</h2>
              <p className="text-lg text-quantum-700 dark:text-quantum-300 mb-8">
                Join thousands of educators already using our resources to inspire the next generation of quantum scientists and engineers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-quantum-600 hover:bg-quantum-700" size="lg">
                  Sign Up for Free
                </Button>
                <Button variant="outline" size="lg" className="flex items-center gap-2" asChild>
                  <a href="/curriculum.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="h-5 w-5" />
                    Download Curriculum Guide
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TeachersResources;
