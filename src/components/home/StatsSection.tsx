
import { motion } from "framer-motion";

const stats = [
  { number: "9", label: "Months of Learning" },
  { number: "9", label: "Comprehensive Courses" },
  { number: "36", label: "Engaging Weeks" },
  { number: "100+", label: "Interactive Activities" }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-quantum-100 dark:bg-quantum-900/70">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="quantum-card p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-quantum-600 dark:text-quantum-400 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
