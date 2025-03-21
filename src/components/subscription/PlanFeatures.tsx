
import React from "react";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { SubscriptionPlan } from "@/data/subscriptionPlans";
import { cn } from "@/lib/utils";

interface PlanFeaturesProps {
  plan: SubscriptionPlan;
  truncate?: boolean;
  maxFeatures?: number;
  className?: string;
}

const PlanFeatures: React.FC<PlanFeaturesProps> = ({ 
  plan, 
  truncate = false,
  maxFeatures = 3,
  className 
}) => {
  const [showAll, setShowAll] = React.useState(!truncate);
  
  const displayFeatures = showAll ? plan.features : plan.features.slice(0, maxFeatures);
  const hasMoreFeatures = truncate && plan.features.length > maxFeatures;
  
  return (
    <div className={cn("space-y-2", className)}>
      <h3 className="font-medium mb-3">Included Features</h3>
      <ul className="space-y-2">
        {displayFeatures.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      {hasMoreFeatures && (
        <button 
          onClick={() => setShowAll(!showAll)}
          className="flex items-center text-sm text-quantum-600 hover:text-quantum-800 dark:text-quantum-400 dark:hover:text-quantum-300 mt-1"
        >
          {showAll ? (
            <>
              <ChevronUp className="h-4 w-4 mr-1" />
              Show less
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 mr-1" />
              Show {plan.features.length - maxFeatures} more
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default PlanFeatures;
