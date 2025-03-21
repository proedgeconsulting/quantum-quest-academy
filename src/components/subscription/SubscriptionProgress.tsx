
import React from "react";
import { Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { UserSubscription } from "@/types/subscription";

interface SubscriptionProgressProps {
  userSubscription: UserSubscription | null;
  daysRemaining: number;
  percentRemaining: number;
}

const SubscriptionProgress: React.FC<SubscriptionProgressProps> = ({ 
  userSubscription, 
  daysRemaining, 
  percentRemaining 
}) => {
  const currentPeriodEnd = userSubscription 
    ? new Date(userSubscription.current_period_end)
    : new Date();

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-quantum-600 dark:text-quantum-400 flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          Current period
        </span>
        <span className="font-medium">
          {daysRemaining} days remaining
        </span>
      </div>
      <Progress value={percentRemaining} className="h-2" />
      <div className="flex justify-between text-xs text-quantum-500">
        <span>
          Started: {userSubscription ? new Date(userSubscription.current_period_start).toLocaleDateString() : "N/A"}
        </span>
        <span>
          Ends: {currentPeriodEnd.toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default SubscriptionProgress;
