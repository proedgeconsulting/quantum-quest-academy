
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { SubscriptionPlan } from "@/data/subscriptionPlans";

interface CheckoutSuccessProps {
  plan: SubscriptionPlan;
}

const CheckoutSuccess: React.FC<CheckoutSuccessProps> = ({ plan }) => {
  const navigate = useNavigate();

  return (
    <Card className="border-green-200 dark:border-green-900">
      <CardHeader className="bg-green-50 dark:bg-green-900/20 border-b border-green-100 dark:border-green-800">
        <div className="flex flex-col items-center justify-center text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
          <CardTitle className="text-2xl">Subscription Activated!</CardTitle>
          <CardDescription>
            Thank you for subscribing to the {plan.name} plan
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pt-6 text-center">
        <p className="mb-4">Your subscription has been successfully activated. You now have access to all the content and features included in the {plan.name} plan.</p>
        <p className="text-quantum-600 dark:text-quantum-400">You will be redirected to your subscription management page in a few seconds...</p>
      </CardContent>
      <CardFooter className="flex justify-center pb-6">
        <Button onClick={() => navigate("/subscription")}>
          Manage Subscription
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CheckoutSuccess;
