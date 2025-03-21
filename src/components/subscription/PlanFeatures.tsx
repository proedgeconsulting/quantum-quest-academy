
import React from "react";
import { CheckCircle2 } from "lucide-react";
import { SubscriptionPlan } from "@/data/subscriptionPlans";

interface PlanFeaturesProps {
  plan: SubscriptionPlan;
}

const PlanFeatures: React.FC<PlanFeaturesProps> = ({ plan }) => {
  return (
    <div>
      <h3 className="font-medium mb-3">Included Features</h3>
      <ul className="space-y-2">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanFeatures;
