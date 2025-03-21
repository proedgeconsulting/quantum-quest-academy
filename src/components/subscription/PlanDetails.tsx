
import React from "react";
import { 
  ShieldCheck, 
  CreditCard, 
  CalendarDays, 
  CheckCircle2,
} from "lucide-react";
import { formatPrice } from "@/data/subscriptionPlans";
import { SubscriptionPlan } from "@/data/subscriptionPlans";
import { UserSubscription } from "@/types/subscription";

interface PlanDetailsProps {
  plan: SubscriptionPlan;
  userSubscription: UserSubscription | null;
}

const PlanDetails: React.FC<PlanDetailsProps> = ({ plan, userSubscription }) => {
  return (
    <div className="bg-quantum-50 dark:bg-quantum-900/20 rounded-lg p-4 space-y-4">
      <div className="flex items-center">
        <ShieldCheck className="h-5 w-5 text-quantum-500 mr-2" />
        <div>
          <h3 className="font-medium">Access Level</h3>
          <p className="text-sm text-quantum-600 dark:text-quantum-400">
            {userSubscription?.tier === "free" ? "Free tier (limited access)" : `${plan.tier.charAt(0).toUpperCase() + plan.tier.slice(1)} tier access`}
          </p>
        </div>
      </div>
      
      {userSubscription?.payment_method && (
        <div className="flex items-center">
          <CreditCard className="h-5 w-5 text-quantum-500 mr-2" />
          <div>
            <h3 className="font-medium">Payment Method</h3>
            <p className="text-sm text-quantum-600 dark:text-quantum-400">
              {userSubscription.payment_method}
            </p>
          </div>
        </div>
      )}
      
      <div className="flex items-center">
        <CalendarDays className="h-5 w-5 text-quantum-500 mr-2" />
        <div>
          <h3 className="font-medium">Billing Cycle</h3>
          <p className="text-sm text-quantum-600 dark:text-quantum-400">
            {plan.interval === "monthly" ? "Monthly" : "Annual"} • {formatPrice(plan.price)}/{plan.interval}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
