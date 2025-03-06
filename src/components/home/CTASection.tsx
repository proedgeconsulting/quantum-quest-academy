
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-quantum-500 to-energy-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Quantum Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of young quantum explorers from around the world and discover
            the fascinating universe of quantum physics and computing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-quantum-600 hover:bg-quantum-100 hover:text-quantum-700 text-lg py-6 px-8" asChild>
              <Link to="/curriculum">
                Explore the Curriculum
              </Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20 text-lg py-6 px-8" asChild>
              <Link to="/courses">
                View All Courses
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
