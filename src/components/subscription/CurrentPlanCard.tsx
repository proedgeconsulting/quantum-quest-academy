
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Card, 
  CardHeader, 
  CardContent, 
  CardFooter, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Loader2,
  ExternalLink
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { SubscriptionPlan } from "@/data/subscriptionPlans";
import { UserSubscription } from "@/types/subscription";
import { useAuth } from "@/context/AuthContext";
import PlanDetails from "./PlanDetails";
import PlanFeatures from "./PlanFeatures";
import SubscriptionProgress from "./SubscriptionProgress";
import CancelDialog from "./CancelDialog";

interface CurrentPlanCardProps {
  plan: SubscriptionPlan;
  userSubscription: UserSubscription | null;
  refetchSubscription: () => Promise<void>;
}

const CurrentPlanCard: React.FC<CurrentPlanCardProps> = ({ 
  plan, 
  userSubscription, 
  refetchSubscription 
}) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [isLoadingPortal, setIsLoadingPortal] = useState(false);
  
  const currentPeriodEnd = userSubscription 
    ? new Date(userSubscription.current_period_end)
    : new Date();
  
  const daysRemaining = Math.round((currentPeriodEnd.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
  const percentRemaining = Math.round((daysRemaining / (plan.interval === "monthly" ? 30 : 365)) * 100);

  // Function to redirect to Stripe Customer Portal
  const handleManageSubscription = async () => {
    if (!user || userSubscription?.tier === "free") return;
    
    setIsLoadingPortal(true);
    
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-portal-session`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
          },
          body: JSON.stringify({
            userId: user.id,
            return_url: window.location.href
          })
        }
      );
      
      const { url, error } = await response.json();
      
      if (error) {
        throw new Error(error);
      }
      
      // Redirect to Stripe Customer Portal
      window.location.href = url;
      
    } catch (error) {
      console.error("Error creating portal session:", error);
      toast({
        title: "Error",
        description: "Unable to access subscription management portal.",
        variant: "destructive",
      });
    } finally {
      setIsLoadingPortal(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>Current Plan</CardTitle>
            <CardDescription>
              Your active subscription details
            </CardDescription>
          </div>
          <Badge variant={userSubscription?.tier === "free" ? "outline" : "default"}>
            {plan.name}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Subscription Period */}
        <SubscriptionProgress 
          userSubscription={userSubscription}
          daysRemaining={daysRemaining}
          percentRemaining={percentRemaining}
        />
        
        {/* Subscription Details */}
        <PlanDetails plan={plan} userSubscription={userSubscription} />
        
        {/* Subscription Features */}
        <PlanFeatures plan={plan} />
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-3 justify-between">
        {userSubscription?.tier !== "free" ? (
          <Button 
            variant="outline"
            onClick={handleManageSubscription}
            disabled={isLoadingPortal}
            className="flex items-center"
          >
            {isLoadingPortal ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <ExternalLink className="mr-2 h-4 w-4" />
            )}
            Manage Payment Details
          </Button>
        ) : (
          <Button 
            variant="outline"
            onClick={() => navigate("/pricing")}
          >
            Upgrade Plan
          </Button>
        )}
        
        {userSubscription?.tier !== "free" && user && (
          <CancelDialog 
            userSubscription={userSubscription} 
            refetchSubscription={refetchSubscription}
            userId={user.id}
          />
        )}
      </CardFooter>
    </Card>
  );
};

export default CurrentPlanCard;
