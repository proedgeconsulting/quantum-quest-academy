
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Trophy } from "lucide-react";

interface PointsSummarySectionProps {
  totalPoints: number;
  achievementsEarned: number;
  totalAchievements: number;
}

const PointsSummarySection: React.FC<PointsSummarySectionProps> = ({ 
  totalPoints,
  achievementsEarned,
  totalAchievements
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="text-energy-500" />
          Quantum Points
        </CardTitle>
        <CardDescription>Points earned from achievements</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center py-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-energy-500">{totalPoints}</div>
            <div className="text-sm text-quantum-600 dark:text-quantum-400 mt-2">
              Total Points
            </div>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="text-sm text-quantum-600 dark:text-quantum-400">
          <div className="flex justify-between">
            <span>Achievements Earned:</span>
            <span className="font-medium">
              {achievementsEarned}/{totalAchievements}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PointsSummarySection;
