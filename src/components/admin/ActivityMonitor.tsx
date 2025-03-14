
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  UserRound, 
  LogIn, 
  Award, 
  BookOpen, 
  MessageSquare,
  Clock
} from "lucide-react";

export const ActivityMonitor = () => {
  const [activities, setActivities] = useState<Array<{
    id: number;
    type: string;
    user: string;
    action: string;
    time: string;
    details?: string;
  }>>([]);
  
  // Simulate real-time updates
  useEffect(() => {
    // Initial activities
    const initialActivities = [
      { id: 1, type: "login", user: "Carol Williams", action: "signed in", time: "2 minutes ago" },
      { id: 2, type: "achievement", user: "Bob Smith", action: "earned Quantum Explorer badge", time: "7 minutes ago" },
      { id: 3, type: "course", user: "Alice Johnson", action: "completed Quantum Basics Module 3", time: "15 minutes ago" },
      { id: 4, type: "chat", user: "David Brown", action: "asked a question", time: "32 minutes ago", details: "How do quantum gates work?" },
      { id: 5, type: "login", user: "Eve Davis", action: "signed in", time: "45 minutes ago" },
    ];
    
    setActivities(initialActivities);
    
    // Simulate new activities coming in
    const interval = setInterval(() => {
      const newActivity = generateRandomActivity(activities.length + 1);
      setActivities(prevActivities => [newActivity, ...prevActivities.slice(0, 19)]);
    }, 20000); // Add new activity every 20 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  // Helper function to generate random activities
  const generateRandomActivity = (id: number) => {
    const users = ["Alice Johnson", "Bob Smith", "Carol Williams", "David Brown", "Eve Davis"];
    const types = ["login", "achievement", "course", "chat"];
    const user = users[Math.floor(Math.random() * users.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    
    let action = "";
    let details;
    
    switch (type) {
      case "login":
        action = "signed in";
        break;
      case "achievement":
        action = "earned " + ["Quantum Explorer", "Circuit Master", "Entanglement Expert"][Math.floor(Math.random() * 3)] + " badge";
        break;
      case "course":
        action = "completed " + ["Quantum Basics", "Quantum Circuits", "Quantum Entanglement"][Math.floor(Math.random() * 3)] + " Module " + (Math.floor(Math.random() * 12) + 1);
        break;
      case "chat":
        action = "asked a question";
        details = ["How do quantum gates work?", "What is quantum superposition?", "Can you explain quantum teleportation?"][Math.floor(Math.random() * 3)];
        break;
    }
    
    return {
      id,
      type,
      user,
      action,
      time: "just now",
      details
    };
  };
  
  const getActivityIcon = (type: string) => {
    switch (type) {
      case "login":
        return <LogIn className="h-4 w-4" />;
      case "achievement":
        return <Award className="h-4 w-4" />;
      case "course":
        return <BookOpen className="h-4 w-4" />;
      case "chat":
        return <MessageSquare className="h-4 w-4" />;
      default:
        return <UserRound className="h-4 w-4" />;
    }
  };
  
  const getActivityColor = (type: string) => {
    switch (type) {
      case "login":
        return "bg-blue-500";
      case "achievement":
        return "bg-yellow-500";
      case "course":
        return "bg-green-500";
      case "chat":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card>
      <CardContent className="p-0">
        <div className="p-4 border-b flex items-center justify-between">
          <h3 className="font-medium">Real-time Activity</h3>
          <Badge variant="outline" className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            Live
          </Badge>
        </div>
        <ScrollArea className="h-[400px]">
          <div className="p-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4 mb-4 pb-4 border-b last:border-0">
                <div className={`rounded-full p-2 ${getActivityColor(activity.type)} text-white mt-1`}>
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{activity.user}</p>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{activity.action}</p>
                  {activity.details && (
                    <p className="text-xs mt-1 bg-muted p-2 rounded-md">{activity.details}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
