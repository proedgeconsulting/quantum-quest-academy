
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { 
  Clock, 
  ShieldCheck, 
  CreditCard, 
  CalendarDays, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronRight,
  Loader2,
  ExternalLink
} from "lucide-react";
import { motion } from "framer-motion";
import { getSubscriptionPlanById, formatPrice, subscriptionPlans } from "@/data/subscriptionPlans";
import { useAuth } from "@/context/AuthContext";
import { useSubscription } from "@/context/SubscriptionContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const SubscriptionManagement = () => {
  const { user } = useAuth();
  const { userSubscription, refetchSubscription } = useSubscription();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [isProcessingCancel, setIsProcessingCancel] = useState(false);
  const [showCancelDialog, setShowCancelDialog] = useState(false);
  const [isLoadingPortal, setIsLoadingPortal] = useState(false);
  
  if (!user) {
    navigate("/auth?redirect=/subscription");
    return null;
  }
  
  const plan = userSubscription?.plan_id 
    ? getSubscriptionPlanById(userSubscription.plan_id) 
    : subscriptionPlans[0]; // Default to free plan
  
  if (!plan) return null;
  
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold mb-8">Subscription Management</h1>
            
            <div className="grid gap-8">
              {/* Current Plan */}
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
              
              {/* Access Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Content Access</CardTitle>
                  <CardDescription>
                    What your subscription gives you access to
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="bg-quantum-50 dark:bg-quantum-900/20 p-3 rounded-md flex justify-between items-center">
                      <div className="flex items-center">
                        <Badge variant="outline" className="mr-2">Level 1</Badge>
                        <span>Quantum Basics Courses</span>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                        Accessible
                      </Badge>
                    </div>
                    
                    <div className="bg-quantum-50 dark:bg-quantum-900/20 p-3 rounded-md flex justify-between items-center">
                      <div className="flex items-center">
                        <Badge variant="outline" className="mr-2">Level 2</Badge>
                        <span>Intermediate Courses</span>
                      </div>
                      {userSubscription?.tier === "free" ? (
                        <Badge variant="secondary" className="bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400">
                          Upgrade Required
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                          Accessible
                        </Badge>
                      )}
                    </div>
                    
                    <div className="bg-quantum-50 dark:bg-quantum-900/20 p-3 rounded-md flex justify-between items-center">
                      <div className="flex items-center">
                        <Badge variant="outline" className="mr-2">Level 3</Badge>
                        <span>Advanced Courses</span>
                      </div>
                      {userSubscription?.tier !== "pro" && userSubscription?.tier !== "ultimate" ? (
                        <Badge variant="secondary" className="bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400">
                          Upgrade Required
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                          Accessible
                        </Badge>
                      )}
                    </div>
                    
                    <div className="bg-quantum-50 dark:bg-quantum-900/20 p-3 rounded-md flex justify-between items-center">
                      <div className="flex items-center">
                        <Badge variant="outline" className="mr-2">Premium</Badge>
                        <span>One-on-One Mentorship</span>
                      </div>
                      {userSubscription?.tier !== "ultimate" ? (
                        <Badge variant="secondary" className="bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400">
                          Upgrade Required
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                          Accessible
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="text-center">
                    <Button 
                      variant="link" 
                      onClick={() => navigate("/pricing")}
                      className="space-x-1"
                    >
                      <span>View All Plans</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SubscriptionManagement;
