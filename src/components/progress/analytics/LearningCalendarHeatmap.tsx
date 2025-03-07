
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity } from "lucide-react";

interface CalendarDay {
  date: string;
  intensity: number; // 0-4 representing intensity levels
}

interface LearningCalendarHeatmapProps {
  calendarData: CalendarDay[];
  startDate: Date;
  endDate: Date;
}

const LearningCalendarHeatmap: React.FC<LearningCalendarHeatmapProps> = ({ 
  calendarData, 
  startDate, 
  endDate 
}) => {
  // Helper function to format date as YYYY-MM-DD
  const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
  };

  // Helper function to get intensity color
  const getIntensityColor = (intensity: number): string => {
    switch (intensity) {
      case 0: return "bg-gray-100 dark:bg-gray-800";
      case 1: return "bg-indigo-100 dark:bg-indigo-900";
      case 2: return "bg-indigo-300 dark:bg-indigo-700";
      case 3: return "bg-indigo-500 dark:bg-indigo-500";
      case 4: return "bg-indigo-700 dark:bg-indigo-300";
      default: return "bg-gray-100 dark:bg-gray-800";
    }
  };

  // Create a map for quick lookup of intensity by date
  const intensityMap = new Map(
    calendarData.map(day => [day.date, day.intensity])
  );

  // Generate dates between start and end
  const getDaysBetween = (start: Date, end: Date): Date[] => {
    const days = [];
    const current = new Date(start);
    while (current <= end) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    return days;
  };

  const days = getDaysBetween(startDate, endDate);
  
  // Group days by week
  const weeks: Date[][] = [];
  let currentWeek: Date[] = [];
  
  days.forEach(day => {
    if (day.getDay() === 0 && currentWeek.length > 0) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentWeek.push(day);
    if (day.getTime() === days[days.length - 1].getTime()) {
      weeks.push(currentWeek);
    }
  });

  // Get day names
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="text-energy-500" />
          Learning Calendar
        </CardTitle>
        <CardDescription>Your learning activity over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-start">
          <div className="flex flex-col mt-8 mr-2">
            {dayNames.map(day => (
              <div key={day} className="h-6 text-xs text-gray-500 py-1">{day}</div>
            ))}
          </div>
          <div className="grid grid-flow-col gap-2 auto-cols-min">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-2">
                {week.map(day => {
                  const dateStr = formatDate(day);
                  const intensity = intensityMap.get(dateStr) || 0;
                  return (
                    <div 
                      key={dateStr}
                      className={`w-6 h-6 rounded-sm ${getIntensityColor(intensity)} tooltip`}
                      title={`${dateStr}: ${intensity > 0 ? `${intensity} sessions` : 'No activity'}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-6 gap-2">
          <div className="flex items-center">
            <div className={`w-4 h-4 rounded-sm bg-gray-100 dark:bg-gray-800 mr-1`}></div>
            <span className="text-xs">None</span>
          </div>
          <div className="flex items-center">
            <div className={`w-4 h-4 rounded-sm bg-indigo-100 dark:bg-indigo-900 mr-1`}></div>
            <span className="text-xs">Low</span>
          </div>
          <div className="flex items-center">
            <div className={`w-4 h-4 rounded-sm bg-indigo-300 dark:bg-indigo-700 mr-1`}></div>
            <span className="text-xs">Medium</span>
          </div>
          <div className="flex items-center">
            <div className={`w-4 h-4 rounded-sm bg-indigo-500 dark:bg-indigo-500 mr-1`}></div>
            <span className="text-xs">High</span>
          </div>
          <div className="flex items-center">
            <div className={`w-4 h-4 rounded-sm bg-indigo-700 dark:bg-indigo-300 mr-1`}></div>
            <span className="text-xs">Very High</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LearningCalendarHeatmap;
