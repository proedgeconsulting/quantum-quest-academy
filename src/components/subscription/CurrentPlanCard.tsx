
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
import { Progress } from "@/components/ui/progress";
import { 
  Clock, 
  ShieldCheck, 
  CreditCard, 
  CalendarDays, 
  CheckCircle2,
  Loader2,
  ExternalLink
} from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { formatPrice } from "@/data/subscriptionPlans";
import { SubscriptionPlan } from "@/data/subscriptionPlans";
import { UserSubscription } from "@/types/subscription";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";

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
  
  const [isProcessingCancel, setIsProcessingCancel] = useState(false);
  const [showCancelDialog, setShowCancelDialog] = useState(false);
  const [isLoadingPortal, setIsLoadingPortal] = useState(false);
  
  const currentPeriodEnd = userSubscription 
    ? new Date(userSubscription.current_period_end)
    : new Date();
  
  const daysRemaining = Math.round((currentPeriodEnd.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
  const percentRemaining = Math.round((daysRemaining / (plan.interval === "monthly" ? 30 : 365)) * 100);
  
  const handleCancelSubscription = async () => {
    if (!userSubscription || userSubscription.tier === "free") return;
    
    setIsProcessingCancel(true);
    
    try {
      // Update the subscription status
      const { error } = await supabase
        .from("user_subscriptions")
        .update({ 
          cancel_at_period_end: true,
          status: "canceled"
        })
        .eq("id", userSubscription.id);
      
      if (error) throw error;
      
      // Create a new free subscription
      await supabase.from("user_subscriptions").insert({
        user_id: user.id,
        plan_id: "free",
        status: "active",
        tier: "free",
        current_period_start: currentPeriodEnd.toISOString(),
        current_period_end: new Date(currentPeriodEnd.getTime() + 365 * 24 * 60 * 60 * 1000).toISOString(), // 1 year
        cancel_at_period_end: false
      });
      
      // Refresh subscription data
      await refetchSubscription();
      
      toast({
        title: "Subscription canceled",
        description: `Your subscription has been canceled and will end on ${currentPeriodEnd.toLocaleDateString()}.`,
      });
      
      setShowCancelDialog(false);
    } catch (error) {
      console.error("Error canceling subscription:", error);
      toast({
        title: "Error canceling subscription",
        description: error.message || "An error occurred while canceling your subscription.",
        variant: "destructive",
      });
    } finally {
      setIsProcessingCancel(false);
    }
  };

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
        
        {/* Subscription Details */}
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
        
        {/* Subscription Features */}
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
        
        {userSubscription?.tier !== "free" && (
          <Dialog open={showCancelDialog} onOpenChange={setShowCancelDialog}>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-red-300 hover:bg-red-50 text-red-500 hover:text-red-600">
                Cancel Subscription
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Cancel Subscription</DialogTitle>
                <DialogDescription>
                  Are you sure you want to cancel your subscription?
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <Alert variant="destructive" className="mb-4">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Important</AlertTitle>
                  <AlertDescription>
                    If you cancel, you'll lose access to premium content at the end of your current billing period on {currentPeriodEnd.toLocaleDateString()}.
                  </AlertDescription>
                </Alert>
                <p className="text-sm text-quantum-600 dark:text-quantum-400">
                  You can resubscribe at any time to regain access to all content.
                </p>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowCancelDialog(false)}>
                  Keep Subscription
                </Button>
                <Button 
                  variant="destructive" 
                  onClick={handleCancelSubscription}
                  disabled={isProcessingCancel}
                >
                  {isProcessingCancel ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Canceling...
                    </>
                  ) : (
                    "Confirm Cancellation"
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </CardFooter>
    </Card>
  );
};

export default CurrentPlanCard;
