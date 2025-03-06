
import { motion } from "framer-motion";

const TeachingMethodology = () => {
  return (
    <section className="py-16 bg-white dark:bg-quantum-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Teaching Methodology</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our curriculum adapts to different learning styles and age groups, ensuring 
            everyone gets the most out of their quantum journey.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="quantum-card p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">For Kids (10–14)</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  1
                </div>
                <p>Gamified learning experiences that make complex concepts fun</p>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  2
                </div>
                <p>Animated stories and visual explanations for better engagement</p>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  3
                </div>
                <p>No-code tools and simulations for hands-on learning</p>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  4
                </div>
                <p>Badge and point system that rewards progress and exploration</p>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            className="quantum-card p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">Teens & Adults</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  1
                </div>
                <p>Python coding exercises for practical quantum computing skills</p>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  2
                </div>
                <p>Optional mathematical deep dives for those who want more detail</p>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  3
                </div>
                <p>Research paper discussions and real-world application studies</p>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  4
                </div>
                <p>GitHub portfolio development and peer-reviewed projects</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeachingMethodology;
