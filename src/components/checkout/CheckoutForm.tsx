
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { SubscriptionPlan } from "@/data/subscriptionPlans";

interface CheckoutFormProps {
  plan: SubscriptionPlan;
  isProcessing: boolean;
  onCheckout: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ 
  plan, 
  isProcessing, 
  onCheckout 
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Complete your purchase</CardTitle>
        <CardDescription>
          Subscribe to the {plan.name} plan
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p>You're about to subscribe to the {plan.name} plan at {plan.formattedPrice}/{plan.interval}.</p>
          
          <div className="space-y-2">
            <h3 className="font-medium">What's included:</h3>
            <ul className="space-y-2 pl-5 list-disc text-quantum-600 dark:text-quantum-400">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <Button 
            onClick={onCheckout}
            className="w-full mt-6" 
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              plan.price === 0 
                ? "Activate Free Plan" 
                : `Subscribe for ${plan.formattedPrice}/${plan.interval}`
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CheckoutForm;
