
import React from "react";
import { motion } from "framer-motion";
import { Book } from "lucide-react";
import { Button } from "@/components/ui/button";

const NoProgressContent: React.FC = () => {
  return (
    <motion.div
      className="text-center py-12 my-12 bg-quantum-100 dark:bg-quantum-900 rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Book className="h-16 w-16 mx-auto mb-4 text-quantum-400 dark:text-quantum-600" />
      <h2 className="text-xl font-bold mb-2 text-quantum-800 dark:text-quantum-200">
        Your progress will appear here
      </h2>
      <p className="text-quantum-600 dark:text-quantum-400 max-w-md mx-auto mb-6">
        Start learning quantum computing concepts to track your progress and earn achievements.
      </p>
      <Button asChild>
        <a href="/curriculum">Start Learning</a>
      </Button>
    </motion.div>
  );
};

export default NoProgressContent;
