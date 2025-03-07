
import { Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface SimulatorHeaderProps {
  title: string;
  mode: "state" | "coin" | "circuit" | "creative";
  isCollapsed?: boolean;
}

const SimulatorHeader = ({ title, mode, isCollapsed }: SimulatorHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-medium">{title}</h3>
      <div className="flex gap-2">
        <Badge variant="outline" className="bg-quantum-100 dark:bg-quantum-800">
          {mode === "state" && (isCollapsed ? "Measured" : "Superposition")}
          {mode === "coin" && "Quantum Coin"}
          {mode === "circuit" && "Quantum Circuit"}
          {mode === "creative" && "Quantum Creative"}
        </Badge>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Info className="h-5 w-5 text-quantum-500 cursor-pointer" />
        </motion.div>
      </div>
    </div>
  );
};

export default SimulatorHeader;
