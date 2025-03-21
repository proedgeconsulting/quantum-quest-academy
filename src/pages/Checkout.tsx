
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { getSubscriptionPlanById } from "@/data/subscriptionPlans";
import { useAuth } from "@/context/AuthContext";
import { useSubscription } from "@/context/SubscriptionContext";
import { supabase } from "@/integrations/supabase/client";
import CheckoutSuccess from "@/components/checkout/CheckoutSuccess";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";

const Checkout = () => {
  const { planId } = useParams<{ planId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const { refetchSubscription } = useSubscription();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
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
        window.gtag('event', 'purchase', {
          transaction_id: sessionId,
          value: plan.price / 100,
          currency: 'USD',
          items: [{
            id: plan.id,
            name: plan.name,
            category: 'Subscription',
            price: plan.price / 100
          }]
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
  
  useEffect(() => {
    if (!user) {
      navigate("/auth?redirect=/pricing");
      return;
    }
    
    if (!plan) {
      toast({
        title: "Invalid plan",
        description: "The selected subscription plan is not valid.",
        variant: "destructive",
      });
      navigate("/pricing");
    }
  }, [user, plan, navigate, toast]);

  const handleCheckout = async () => {
    if (!user || !plan) return;
    
    setIsProcessing(true);
    
    try {
      // If it's the free plan, handle it directly without Stripe
      if (plan.price === 0) {
        const now = new Date();
        const endDate = new Date();
        endDate.setFullYear(now.getFullYear() + 1);
        
        const { error } = await supabase.from("user_subscriptions").insert({
          user_id: user.id,
          plan_id: plan.id,
          status: "active",
          current_period_start: now.toISOString(),
          current_period_end: endDate.toISOString(),
          cancel_at_period_end: false,
          tier: plan.tier
        });
        
        if (error) {
          throw error;
        }
        
        await refetchSubscription();
        setIsSuccess(true);
        
        toast({
          title: "Free plan activated!",
          description: `Your ${plan.name} has been successfully activated.`,
        });
        
        setTimeout(() => {
          navigate("/subscription");
        }, 3000);
        
        return;
      }
      
      // For paid plans, use Stripe Checkout
      // Use the full URL to the Supabase Edge Function
      const response = await fetch(
        "https://tyyimchqyrgrbbceoytu.supabase.co/functions/v1/create-checkout-session",
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
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
        throw new Error(`Failed to create checkout session: ${response.status} ${response.statusText}`);
      }
      
      const { url, sessionId, error } = await response.json();
      
      if (error) {
        throw new Error(error);
      }
      
      // Redirect to Stripe Checkout
      if (url) {
        window.location.href = url;
      } else {
        throw new Error("No URL returned from checkout session");
      }
      
    } catch (error) {
      console.error("Subscription error:", error);
      toast({
        title: "Subscription failed",
        description: error.message || "There was a problem processing your subscription.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };
  
  if (!plan) return null;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container px-4 max-w-4xl mx-auto">
          {isSuccess ? (
            <CheckoutSuccess plan={plan} />
          ) : (
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3">
                <CheckoutForm 
                  plan={plan} 
                  isProcessing={isProcessing} 
                  onCheckout={handleCheckout} 
                />
              </div>
              
              <div className="md:col-span-2">
                <OrderSummary plan={plan} />
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;
