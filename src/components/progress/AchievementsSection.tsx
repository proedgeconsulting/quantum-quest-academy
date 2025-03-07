
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Star, CheckCircle2, Book, GraduationCap, Clock } from "lucide-react";

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  points: number;
  earned_at?: string; // Make sure this is optional with a question mark
}

interface AchievementsSectionProps {
  achievements: Achievement[];
}

const IconMap: Record<string, React.ReactNode> = {
  "LogIn": <CheckCircle2 className="h-6 w-6 text-energy-500" />,
  "Search": <Book className="h-6 w-6 text-energy-500" />,
  "GraduationCap": <GraduationCap className="h-6 w-6 text-energy-500" />,
  "Atom": <Star className="h-6 w-6 text-energy-500" />,
  "Award": <Award className="h-6 w-6 text-energy-500" />,
  "Clock": <Clock className="h-6 w-6 text-energy-500" />,
};

const AchievementsSection: React.FC<AchievementsSectionProps> = ({ 
  achievements 
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="text-energy-500" />
          Achievements
        </CardTitle>
        <CardDescription>Badges and honors you've earned on your quantum journey</CardDescription>
      </CardHeader>
      <CardContent>
        {achievements.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className={`overflow-hidden transition-all ${achievement.earned_at ? "border-energy-500" : "opacity-60"}`}>
                <CardContent className="p-4 flex gap-3">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-quantum-100 dark:bg-quantum-800 flex items-center justify-center">
                    {IconMap[achievement.icon] || <Star className="h-6 w-6 text-energy-500" />}
                  </div>
                  <div>
                    <h3 className="font-medium text-quantum-900 dark:text-quantum-100">{achievement.name}</h3>
                    <p className="text-sm text-quantum-600 dark:text-quantum-400">{achievement.description}</p>
                    <div className="flex items-center mt-2 gap-1">
                      <Star className="h-3 w-3 text-energy-500" />
                      <span className="text-xs font-medium text-quantum-600 dark:text-quantum-400">{achievement.points} points</span>
                      {achievement.earned_at && (
                        <Badge variant="outline" className="ml-2 text-xs">
                          Earned
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-quantum-500 dark:text-quantum-400">
            <Award className="h-12 w-12 mx-auto mb-2 opacity-40" />
            <p>Complete courses and quizzes to earn achievements!</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AchievementsSection;
