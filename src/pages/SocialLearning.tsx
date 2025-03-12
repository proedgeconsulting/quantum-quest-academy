
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Book, Share2, Users, Trophy, Globe, Calendar, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const SocialLearning = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-950 dark:to-blue-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-quantum-600 to-energy-600 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Social Learning
              </motion.h1>
              <motion.p 
                className="text-lg text-quantum-700 dark:text-quantum-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Learn quantum physics together with friends and classmates through 
                collaborative challenges, group projects, and friendly competitions.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Button size="lg" className="bg-quantum-600 hover:bg-quantum-700">
                  Join Community
                </Button>
                <Button variant="outline" size="lg">
                  Explore Challenges
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white dark:bg-quantum-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Learn Together?</h2>
              <p className="text-lg text-quantum-700 dark:text-quantum-300 max-w-2xl mx-auto">
                Social learning enhances understanding, builds lasting relationships, and makes 
                complex quantum concepts more accessible and enjoyable.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Peer Learning</h3>
                <p className="text-quantum-700 dark:text-quantum-300">
                  Explaining concepts to peers and hearing their perspectives helps solidify your understanding.
                </p>
              </div>
              
              <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Friendly Competition</h3>
                <p className="text-quantum-700 dark:text-quantum-300">
                  Compete in quantum challenges and games that make learning fun and motivating.
                </p>
              </div>
              
              <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Community</h3>
                <p className="text-quantum-700 dark:text-quantum-300">
                  Connect with quantum enthusiasts from around the world and learn from diverse perspectives.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Community Features */}
        <section className="py-16 bg-quantum-50 dark:bg-quantum-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Community Features</h2>
              <p className="text-lg text-quantum-700 dark:text-quantum-300 max-w-2xl mx-auto">
                Explore the many ways to engage with the Quantum Quest community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-quantum-900 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-energy-100 dark:bg-energy-900 rounded-full flex items-center justify-center mr-3">
                    <MessageSquare className="h-5 w-5 text-energy-600 dark:text-energy-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Discussion Forums</h3>
                </div>
                <p className="text-quantum-700 dark:text-quantum-300 mb-4">
                  Engage in deep discussions about quantum concepts, ask questions, and share insights with peers and experts.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mr-3">
                      ✓
                    </div>
                    <span>Topic-specific channels for focused discussions</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mr-3">
                      ✓
                    </div>
                    <span>Expert moderators to guide conversations</span>
                  </li>
                </ul>
                <Button variant="outline" className="flex items-center gap-2">
                  Browse Forums <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-white dark:bg-quantum-900 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Study Groups</h3>
                </div>
                <p className="text-quantum-700 dark:text-quantum-300 mb-4">
                  Form or join small study groups with peers at your level to work through course materials together.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mr-3">
                      ✓
                    </div>
                    <span>Virtual meeting rooms with collaborative tools</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mr-3">
                      ✓
                    </div>
                    <span>Structured learning paths for groups</span>
                  </li>
                </ul>
                <Button variant="outline" className="flex items-center gap-2">
                  Find a Study Group <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-white dark:bg-quantum-900 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3">
                    <Trophy className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Quantum Challenges</h3>
                </div>
                <p className="text-quantum-700 dark:text-quantum-300 mb-4">
                  Participate in weekly challenges that test your quantum knowledge and problem-solving skills.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mr-3">
                      ✓
                    </div>
                    <span>Leaderboards to track your progress</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mr-3">
                      ✓
                    </div>
                    <span>Prizes and recognition for top performers</span>
                  </li>
                </ul>
                <Button variant="outline" className="flex items-center gap-2">
                  View Challenges <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-white dark:bg-quantum-900 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3">
                    <Calendar className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Community Events</h3>
                </div>
                <p className="text-quantum-700 dark:text-quantum-300 mb-4">
                  Join live webinars, Q&A sessions with quantum experts, and virtual hackathons.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mr-3">
                      ✓
                    </div>
                    <span>Interactive sessions with industry professionals</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mr-3">
                      ✓
                    </div>
                    <span>Networking opportunities with peers</span>
                  </li>
                </ul>
                <Button variant="outline" className="flex items-center gap-2">
                  View Calendar <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-white dark:bg-quantum-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Community Success Stories</h2>
              <p className="text-lg text-quantum-700 dark:text-quantum-300 max-w-2xl mx-auto">
                Hear from students who have benefited from our social learning approach.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-200 dark:bg-purple-700 flex items-center justify-center text-lg font-bold text-purple-700 dark:text-purple-200 mr-3">
                    JS
                  </div>
                  <div>
                    <h4 className="font-semibold">Jamie Smith</h4>
                    <p className="text-sm text-quantum-600 dark:text-quantum-400">High School Student</p>
                  </div>
                </div>
                <p className="italic text-quantum-700 dark:text-quantum-300">
                  "The study group I joined made quantum concepts so much easier to understand. We tackled problems together and explained things to each other in ways that just made sense."
                </p>
              </div>
              
              <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-200 dark:bg-blue-700 flex items-center justify-center text-lg font-bold text-blue-700 dark:text-blue-200 mr-3">
                    AT
                  </div>
                  <div>
                    <h4 className="font-semibold">Alex Thompson</h4>
                    <p className="text-sm text-quantum-600 dark:text-quantum-400">College Student</p>
                  </div>
                </div>
                <p className="italic text-quantum-700 dark:text-quantum-300">
                  "The quantum challenges pushed me to learn more than I would have on my own. The competitive aspect was really motivating, and I made friends from around the world."
                </p>
              </div>
              
              <div className="bg-quantum-50 dark:bg-quantum-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-200 dark:bg-green-700 flex items-center justify-center text-lg font-bold text-green-700 dark:text-green-200 mr-3">
                    MP
                  </div>
                  <div>
                    <h4 className="font-semibold">Maya Patel</h4>
                    <p className="text-sm text-quantum-600 dark:text-quantum-400">Hobbyist</p>
                  </div>
                </div>
                <p className="italic text-quantum-700 dark:text-quantum-300">
                  "As someone learning quantum computing as a hobby, the forums have been invaluable. No matter how basic my questions were, the community was always supportive and helpful."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-quantum-100 to-energy-100 dark:from-quantum-900 dark:to-energy-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Quantum Community Today</h2>
              <p className="text-lg text-quantum-700 dark:text-quantum-300 mb-8">
                Connect with fellow learners, participate in exciting challenges, and enhance your quantum journey through collaborative learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-quantum-600 hover:bg-quantum-700" size="lg" asChild>
                  <Link to="/social">Join Community</Link>
                </Button>
                <Button variant="outline" size="lg" className="flex items-center gap-2" asChild>
                  <Link to="/courses">
                    <Book className="h-5 w-5" />
                    Explore Courses
                  </Link>
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

export default SocialLearning;
