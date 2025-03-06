
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="py-14 bg-quantum-100 dark:bg-quantum-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">Course Curriculum</h1>
          <p className="text-lg text-muted-foreground mb-6">
            A comprehensive 9-month journey from quantum fundamentals to cutting-edge applications, 
            designed for curious minds aged 10 and up.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
