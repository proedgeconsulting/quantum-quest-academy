
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SubscriptionPlan } from "@/data/subscriptionPlans";

interface OrderSummaryProps {
  plan: SubscriptionPlan;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ plan }) => {
  const getNextBillingDate = () => {
    const now = new Date();
    const nextDate = new Date();
    if (plan.interval === "monthly") {
      nextDate.setMonth(now.getMonth() + 1);
    } else {
      nextDate.setFullYear(now.getFullYear() + 1);
    }
    return nextDate.toLocaleDateString();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium">{plan.name}</span>
            <span>{plan.formattedPrice}</span>
          </div>
          
          <div className="text-sm text-quantum-600 dark:text-quantum-400">
            <p>Billing cycle: {plan.interval}</p>
            <p>Next billing date: {getNextBillingDate()}</p>
          </div>
          
          <Separator />
          
          <div className="font-bold flex justify-between text-lg">
            <span>Total</span>
            <span>{plan.formattedPrice}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-quantum-50 dark:bg-quantum-900/20 flex flex-col items-start text-sm text-quantum-600 dark:text-quantum-400 space-y-2">
        <p>✓ Secure payment processing</p>
        <p>✓ Cancel anytime</p>
        <p>✓ 14-day money-back guarantee</p>
      </CardFooter>
    </Card>
  );
};

export default OrderSummary;
