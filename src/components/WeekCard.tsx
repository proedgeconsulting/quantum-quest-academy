
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Code, LockIcon, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

export interface WeekCardProps {
  id: string;
  courseId: string;
  title: string;
  description: string;
  isCompleted: boolean;
  isLocked: boolean;
  duration: string;
  activityType: string;
}

const WeekCard = ({ id, courseId, title, description, isCompleted, isLocked, duration, activityType }: WeekCardProps) => {
  const getActivityBadge = () => {
    switch (activityType.toLowerCase()) {
      case "game":
        return <Badge variant="outline" className="bg-energy-100 text-energy-900 border-energy-300">Game</Badge>;
      case "activity":
        return <Badge variant="outline" className="bg-quantum-100 text-quantum-900 border-quantum-300">Activity</Badge>;
      case "project":
        return <Badge variant="outline" className="bg-success-100 text-success-900 border-success-500">Project</Badge>;
      default:
        return <Badge variant="outline" className="bg-muted text-muted-foreground">Lesson</Badge>;
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={isLocked ? "#" : `/courses/${courseId}/week/${id}`}>
        <Card className={`relative overflow-hidden p-5 hover:shadow-md transition-all duration-300 ${
          isLocked ? "bg-muted/50 cursor-not-allowed" : "hover:-translate-y-1"
        } ${isCompleted ? "border-l-4 border-l-success-500" : ""}`}>
          
          {isLocked && (
            <div className="absolute top-0 right-0 bg-muted/90 p-2 rounded-bl-lg">
              <LockIcon className="h-4 w-4 text-muted-foreground" />
            </div>
          )}
          
          {isCompleted && (
            <div className="absolute top-0 right-0 bg-success-100 p-2 rounded-bl-lg">
              <CheckCircle className="h-4 w-4 text-success-500" />
            </div>
          )}
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              {getActivityBadge()}
              <div className="flex items-center text-xs text-muted-foreground gap-1">
                <Clock className="h-3 w-3" />
                <span>{duration}</span>
              </div>
            </div>
            
            <h3 className={`font-medium mb-1 ${isLocked ? "text-muted-foreground" : ""}`}>{title}</h3>
            <p className={`text-sm ${isLocked ? "text-muted-foreground/70" : "text-muted-foreground"}`}>
              {description}
            </p>
            
            {!isLocked && !isCompleted && (
              <div className="mt-3 flex justify-end">
                <motion.div 
                  className="flex items-center gap-1 text-xs font-medium text-quantum-500"
                  whileHover={{ scale: 1.05 }}
                >
                  <PlayCircle className="h-4 w-4" /> 
                  Start Now
                </motion.div>
              </div>
            )}
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};

export default WeekCard;
