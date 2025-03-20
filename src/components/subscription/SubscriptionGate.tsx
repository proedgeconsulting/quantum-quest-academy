
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SubscriptionTier } from "@/types/subscription";
import { useSubscription } from "@/context/SubscriptionContext";
import { Lock, Sparkles } from "lucide-react";

interface SubscriptionGateProps {
  children: React.ReactNode;
  requiredTier: SubscriptionTier;
  title?: string;
  description?: string;
}

const SubscriptionGate = ({ 
  children, 
  requiredTier, 
  title = "Premium Content", 
  description = "This content requires a higher subscription tier"
}: SubscriptionGateProps) => {
  const { hasAccess, isLoading } = useSubscription();
  const navigate = useNavigate();
  
  if (isLoading) {
    // Show skeleton loader while checking access
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-quantum-100 dark:bg-quantum-800 w-1/3 mb-4 rounded"></div>
        <div className="h-4 bg-quantum-100 dark:bg-quantum-800 w-1/2 mb-2 rounded"></div>
        <div className="h-4 bg-quantum-100 dark:bg-quantum-800 w-2/3 mb-2 rounded"></div>
        <div className="h-4 bg-quantum-100 dark:bg-quantum-800 w-1/2 mb-6 rounded"></div>
        <div className="h-10 bg-quantum-100 dark:bg-quantum-800 w-1/4 rounded"></div>
      </div>
    );
  }
  
  // Check if user has required access
  if (hasAccess(requiredTier)) {
    return <>{children}</>;
  }
  
  // Display upgrade prompt if user doesn't have access
  return (
    <Card className="border-dashed border-2 border-quantum-300 dark:border-quantum-700">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Lock className="h-5 w-5 text-quantum-500" />
        </div>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center py-8">
        <Sparkles className="h-16 w-16 text-quantum-400 mb-4" />
        <p className="text-center max-w-sm text-quantum-600 dark:text-quantum-400 mb-6">
          Upgrade your subscription to {requiredTier === 'basic' ? 'Basic' : requiredTier === 'pro' ? 'Professional' : 'Ultimate'} tier or higher to access this content.
        </p>
      </CardContent>
      <CardFooter className="flex justify-center bg-quantum-50 dark:bg-quantum-900/20 pt-4">
        <Button onClick={() => navigate("/pricing")}>
          View Subscription Plans
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubscriptionGate;
