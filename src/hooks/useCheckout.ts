
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/context/AuthContext";
import { useSubscription } from "@/context/SubscriptionContext";
import { SubscriptionPlan } from "@/data/subscriptionPlans";
import { getSubscriptionPlanById } from "@/data/subscriptionPlans";
import { event } from "@/utils/analytics";
import { useMockCheckout } from "@/integrations/stripe/client";

export function useCheckout(planId: string | undefined) {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, session } = useAuth();
  const { refetchSubscription } = useSubscription();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Get plan from planId
  const plan = planId ? getSubscriptionPlanById(planId) : undefined;

  // Check for success query param (returned from Stripe)
  useEffect(() => {
    const url = new URL(window.location.href);
    const success = url.searchParams.get('success');
    const sessionId = url.searchParams.get('session_id');
    
    if (success === 'true' && sessionId && plan) {
      setIsSuccess(true);
      refetchSubscription();
      
      // Record purchase event in analytics
      if (window.gtag) {
        // Track conversion event
        event({
          action: 'purchase',
          category: 'Subscription',
          label: plan.name,
          value: plan.price / 100
        });
      }
      
      // Clean up URL
      const cleanUrl = new URL(window.location.href);
      cleanUrl.searchParams.delete('success');
      cleanUrl.searchParams.delete('session_id');
      window.history.replaceState({}, document.title, cleanUrl.toString());
      
      // Show success toast
      toast({
        title: "Subscription activated!",
        description: `Your ${plan.name} subscription has been successfully activated.`,
      });
      
      // Redirect after delay
      setTimeout(() => {
        navigate("/subscription");
      }, 3000);
    }
  }, []);
  
  // Validate plan and user
  useEffect(() => {
    if (!user) {
      console.log("No user found, redirecting to auth page");
      navigate("/auth?redirect=/pricing");
      return;
    }
    
    if (!plan) {
      console.log("Invalid plan ID:", planId);
      toast({
        title: "Invalid plan",
        description: "The selected subscription plan is not valid.",
        variant: "destructive",
      });
      navigate("/pricing");
    }
  }, [user, plan, navigate, toast]);

  const handleCheckout = async () => {
    if (!user || !plan || !session) {
      setError("User session or plan information is missing");
      return;
    }
    
    setIsProcessing(true);
    setError(null);
    
    try {
      // If it's the free plan, handle it directly without Stripe
      if (plan.price === 0) {
        console.log("Processing free plan activation");
        const now = new Date();
        const endDate = new Date();
        endDate.setFullYear(now.getFullYear() + 1);
        
        const { error: subscriptionError } = await supabase.from("user_subscriptions").insert({
          user_id: user.id,
          plan_id: plan.id,
          status: "active",
          current_period_start: now.toISOString(),
          current_period_end: endDate.toISOString(),
          cancel_at_period_end: false,
          tier: plan.tier
        });
        
        if (subscriptionError) {
          console.error("Error activating free plan:", subscriptionError);
          throw new Error(`Failed to activate free plan: ${subscriptionError.message}`);
        }
        
        await refetchSubscription();
        setIsSuccess(true);
        
        // Track conversion in analytics
        if (window.gtag) {
          event({
            action: 'free_plan_activated',
            category: 'Subscription',
            label: plan.name
          });
        }
        
        toast({
          title: "Free plan activated!",
          description: `Your ${plan.name} has been successfully activated.`,
        });
        
        setTimeout(() => {
          navigate("/subscription");
        }, 3000);
        
        return;
      }
      
      // For paid plans, check if we're using mock checkout
      if (useMockCheckout) {
        console.log("Using mock checkout for plan:", plan.id);
        
        // Create a mock subscription
        const now = new Date();
        const endDate = new Date();
        
        // Set end date based on plan interval
        if (plan.interval === "monthly") {
          endDate.setMonth(now.getMonth() + 1);
        } else {
          endDate.setFullYear(now.getFullYear() + 1);
        }
        
        // Create a mock subscription in the database
        const { error: subscriptionError } = await supabase.from("user_subscriptions").insert({
          user_id: user.id,
          plan_id: plan.id,
          price_id: `mock_price_${plan.id}`,
          stripe_subscription_id: `mock_sub_${Date.now()}`,
          stripe_customer_id: `mock_cus_${user.id}`,
          status: "active",
          current_period_start: now.toISOString(),
          current_period_end: endDate.toISOString(),
          cancel_at_period_end: false,
          tier: plan.tier
        });
        
        if (subscriptionError) {
          console.error("Error creating mock subscription:", subscriptionError);
          throw new Error(`Failed to create mock subscription: ${subscriptionError.message}`);
        }
        
        await refetchSubscription();
        setIsSuccess(true);
        
        toast({
          title: "Mock subscription activated!",
          description: `Your ${plan.name} subscription has been activated in development mode.`,
        });
        
        setTimeout(() => {
          navigate("/subscription");
        }, 3000);
        
        return;
      }
      
      // For paid plans with real Stripe, use the checkout API
      console.log("Initiating Stripe checkout for plan:", plan.id);
      
      // Use the full URL to the Supabase Edge Function
      const response = await fetch(
        "https://tyyimchqyrgrbbceoytu.supabase.co/functions/v1/create-checkout-session",
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session.access_token}`
          },
          body: JSON.stringify({
            planId: plan.id,
            userId: user.id,
            redirectPath: '/checkout/' + plan.id
          })
        }
      );
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Checkout error response:", errorText);
        let errorMessage = `Failed to create checkout session: ${response.status} ${response.statusText}`;
        
        try {
          // Try to parse the error response for more details
          const errorData = JSON.parse(errorText);
          if (errorData.error) {
            errorMessage = errorData.error;
          }
        } catch (e) {
          // If we can't parse JSON, use the raw text
          console.log("Could not parse error response as JSON");
        }
        
        throw new Error(errorMessage);
      }
      
      const { url, sessionId, error: responseError } = await response.json();
      
      if (responseError) {
        console.error("Error in checkout response:", responseError);
        throw new Error(responseError);
      }
      
      // Redirect to Stripe Checkout
      if (url) {
        console.log("Redirecting to Stripe checkout URL");
        window.location.href = url;
      } else {
        throw new Error("No URL returned from checkout session");
      }
      
    } catch (error) {
      console.error("Subscription error:", error);
      setError(error.message || "There was a problem processing your subscription.");
      
      toast({
        title: "Subscription failed",
        description: error.message || "There was a problem processing your subscription.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    isProcessing,
    isSuccess,
    error,
    handleCheckout,
    plan
  };
}
