
import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Card, 
  CardHeader, 
  CardContent, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";
import { UserSubscription } from "@/types/subscription";

interface ContentAccessCardProps {
  userSubscription: UserSubscription | null;
}

const ContentAccessCard: React.FC<ContentAccessCardProps> = ({ userSubscription }) => {
  const navigate = useNavigate();
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Access</CardTitle>
        <CardDescription>
          What your subscription gives you access to
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="bg-quantum-50 dark:bg-quantum-900/20 p-3 rounded-md flex justify-between items-center">
            <div className="flex items-center">
              <Badge variant="outline" className="mr-2">Level 1</Badge>
              <span>Quantum Basics Courses</span>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
              Accessible
            </Badge>
          </div>
          
          <div className="bg-quantum-50 dark:bg-quantum-900/20 p-3 rounded-md flex justify-between items-center">
            <div className="flex items-center">
              <Badge variant="outline" className="mr-2">Level 2</Badge>
              <span>Intermediate Courses</span>
            </div>
            {userSubscription?.tier === "free" ? (
              <Badge variant="secondary" className="bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400">
                Upgrade Required
              </Badge>
            ) : (
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                Accessible
              </Badge>
            )}
          </div>
          
          <div className="bg-quantum-50 dark:bg-quantum-900/20 p-3 rounded-md flex justify-between items-center">
            <div className="flex items-center">
              <Badge variant="outline" className="mr-2">Level 3</Badge>
              <span>Advanced Courses</span>
            </div>
            {userSubscription?.tier !== "pro" && userSubscription?.tier !== "ultimate" ? (
              <Badge variant="secondary" className="bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400">
                Upgrade Required
              </Badge>
            ) : (
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                Accessible
              </Badge>
            )}
          </div>
          
          <div className="bg-quantum-50 dark:bg-quantum-900/20 p-3 rounded-md flex justify-between items-center">
            <div className="flex items-center">
              <Badge variant="outline" className="mr-2">Premium</Badge>
              <span>One-on-One Mentorship</span>
            </div>
            {userSubscription?.tier !== "ultimate" ? (
              <Badge variant="secondary" className="bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400">
                Upgrade Required
              </Badge>
            ) : (
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                Accessible
              </Badge>
            )}
          </div>
        </div>
        
        <Separator />
        
        <div className="text-center">
          <Button 
            variant="link" 
            onClick={() => navigate("/pricing")}
            className="space-x-1"
          >
            <span>View All Plans</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContentAccessCard;
