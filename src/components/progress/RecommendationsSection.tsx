import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, RefreshCw, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { AnimatePresence, motion } from "framer-motion";
import { Recommendation } from "@/hooks/useRecommendations";
import { Achievement } from "@/components/progress/AchievementsSection";

export interface Recommendation {
  id: string;
  course_id: string;
  relevance_score: number;
  reason: string;
  created_at: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  points: number;
  earned_at: string;
}

interface RecommendationsSectionProps {
  recommendations: Recommendation[];
  courseNames: Record<string, string>;
  onRefresh: () => Promise<void>;
  isRefreshing?: boolean;
  newAchievements?: Achievement[];
}

const RecommendationsSection: React.FC<RecommendationsSectionProps> = ({ 
  recommendations, 
  courseNames,
  onRefresh,
  isRefreshing = false,
  newAchievements = []
}) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showAchievement, setShowAchievement] = useState<Achievement | null>(null);
  const [achievementQueue, setAchievementQueue] = useState<Achievement[]>([]);

  useEffect(() => {
    if (newAchievements && newAchievements.length > 0) {
      setAchievementQueue(prev => [...prev, ...newAchievements]);
    }
  }, [newAchievements]);

  useEffect(() => {
    if (achievementQueue.length > 0 && !showAchievement) {
      setShowAchievement(achievementQueue[0]);
      setAchievementQueue(prev => prev.slice(1));
    }
  }, [achievementQueue, showAchievement]);

  const handleGoToCourse = (courseId: string) => {
    navigate(`/courses/${courseId}`);
  };

  const dismissAchievement = () => {
    setShowAchievement(null);
  };

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="text-quantum-500" />
              Recommended for You
            </CardTitle>
            <CardDescription>Personalized course recommendations based on your progress</CardDescription>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => onRefresh()} 
            disabled={isRefreshing}
            className="h-8 w-8"
            title="Refresh recommendations"
          >
            <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          </Button>
        </CardHeader>
        <CardContent>
          {recommendations.length > 0 ? (
            <div className="space-y-4">
              {recommendations.map((recommendation) => (
                <div key={recommendation.id} className="border rounded-lg p-4 hover:bg-quantum-50 dark:hover:bg-quantum-900 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-quantum-900 dark:text-quantum-100">
                        {courseNames[recommendation.course_id] || 'Unknown Course'}
                      </h3>
                      <p className="text-sm text-quantum-600 dark:text-quantum-400 mt-1">
                        {recommendation.reason}
                      </p>
                    </div>
                    <Badge>
                      Course {recommendation.course_id}
                    </Badge>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleGoToCourse(recommendation.course_id)}
                    >
                      Start Learning
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6 text-quantum-500 dark:text-quantum-400">
              <Sparkles className="h-12 w-12 mx-auto mb-2 opacity-40" />
              <p>No recommendations available yet.</p>
              <p className="text-sm mt-1">Complete more courses to get personalized suggestions.</p>
            </div>
          )}
        </CardContent>
      </Card>

      <AnimatePresence>
        {showAchievement && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 z-50"
          >
            <Card className="w-80 border-energy-500 shadow-lg">
              <CardHeader className="bg-energy-50 dark:bg-energy-900/30 pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Award className="text-energy-500 h-5 w-5" />
                  Achievement Unlocked!
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-quantum-100 dark:bg-quantum-800 flex items-center justify-center">
                    <Award className="h-6 w-6 text-energy-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-quantum-900 dark:text-quantum-100">{showAchievement.name}</h3>
                    <p className="text-sm text-quantum-600 dark:text-quantum-400">{showAchievement.description}</p>
                    <div className="flex items-center mt-1">
                      <Sparkles className="h-3 w-3 text-energy-500 mr-1" />
                      <span className="text-xs font-medium text-energy-500">+{showAchievement.points} points</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex justify-end">
                  <Button size="sm" variant="ghost" onClick={dismissAchievement}>
                    Dismiss
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RecommendationsSection;
