
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Award } from "lucide-react";

interface StreakWidgetProps {
  currentStreak: number;
  longestStreak: number;
}

const StreakWidget: React.FC<StreakWidgetProps> = ({ currentStreak, longestStreak }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Flame className="text-energy-500" />
          Learning Streak
        </CardTitle>
        <CardDescription>Your daily learning consistency</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
            <Flame className="h-8 w-8 text-orange-500 mb-2" />
            <div className="text-2xl font-bold">{currentStreak}</div>
            <div className="text-sm text-muted-foreground">Current Streak</div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
            <Award className="h-8 w-8 text-purple-500 mb-2" />
            <div className="text-2xl font-bold">{longestStreak}</div>
            <div className="text-sm text-muted-foreground">Longest Streak</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StreakWidget;
