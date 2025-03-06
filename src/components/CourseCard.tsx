import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { 
  Atom, 
  Brain, 
  Code, 
  Play,
  GraduationCap, 
  CircuitBoard, 
  Waves
} from "lucide-react";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  level: 1 | 2 | 3;
  progress: number;
  duration: string;
  icon: "atom" | "brain" | "code" | "graduation" | "circuit" | "wave";
  weeks: number;
}

const CourseCard = ({ 
  id,
  title, 
  description, 
  level, 
  progress, 
  duration,
  icon,
  weeks
}: CourseCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getIcon = () => {
    switch (icon) {
      case "atom":
        return <Atom className="h-6 w-6" />;
      case "brain":
        return <Brain className="h-6 w-6" />;
      case "code":
        return <Code className="h-6 w-6" />;
      case "graduation":
        return <GraduationCap className="h-6 w-6" />;
      case "circuit":
        return <CircuitBoard className="h-6 w-6" />;
      case "wave":
        return <Waves className="h-6 w-6" />;
      default:
        return <Atom className="h-6 w-6" />;
    }
  };
  
  const levelBadge = () => {
    switch (level) {
      case 1:
        return <span className="level-badge-1">Level 1</span>;
      case 2:
        return <span className="level-badge-2">Level 2</span>;
      case 3:
        return <span className="level-badge-3">Level 3</span>;
      default:
        return <span className="level-badge-1">Level 1</span>;
    }
  };
  
  const bgColor = () => {
    switch (level) {
      case 1:
        return "bg-gradient-to-br from-quantum-100 to-quantum-200 dark:from-quantum-800 dark:to-quantum-900";
      case 2:
        return "bg-gradient-to-br from-quantum-200 to-quantum-300 dark:from-quantum-700 dark:to-quantum-800";
      case 3:
        return "bg-gradient-to-br from-quantum-300 to-quantum-400 dark:from-quantum-600 dark:to-quantum-700";
      default:
        return "bg-gradient-to-br from-quantum-100 to-quantum-200 dark:from-quantum-800 dark:to-quantum-900";
    }
  };
  
  const handleContinueClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `/courses/${id}`;
  };
  
  return (
    <Link to={`/courses/${id}`} aria-label={`View details for ${title} course: ${description}`}>
      <motion.div
        className={cn(
          "quantum-card overflow-hidden h-full",
          bgColor(),
          "transform transition-all duration-300",
          isHovered ? "scale-[1.02]" : "scale-100"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-5">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 rounded-lg bg-white/20 dark:bg-black/20">
              {getIcon()}
            </div>
            {levelBadge()}
          </div>
          
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-quantum-700 dark:text-quantum-300 mb-4" title={description}>
            {description.length > 100 ? `${description.substring(0, 100)}...` : description}
          </p>
          
          <div className="flex items-center justify-between text-xs text-quantum-600 dark:text-quantum-400 mb-2">
            <span>{duration}</span>
            <span>{weeks} Weeks</span>
          </div>
          
          <Progress value={progress} className="h-2 bg-white/50 dark:bg-black/20" />
          
          <div className="mt-4 flex justify-end">
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-1 bg-quantum-500 text-white px-3 py-1 rounded-full text-xs font-medium cursor-pointer"
                onClick={handleContinueClick}
                role="button"
                tabIndex={0}
                aria-label={`Continue ${title} course`}
              >
                <Play className="h-3 w-3" /> Continue
              </motion.div>
            )}
            
            {!isHovered && progress > 0 && (
              <span className="text-xs font-medium text-quantum-700 dark:text-quantum-300">
                {progress}% Complete
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default CourseCard;
