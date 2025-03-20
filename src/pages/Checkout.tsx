
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { getSubscriptionPlanById, formatPrice } from "@/data/subscriptionPlans";
import { useAuth } from "@/context/AuthContext";
import { useSubscription } from "@/context/SubscriptionContext";
import { CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { stripePromise } from "@/integrations/stripe/client";

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
    
    if (success === 'true' && sessionId) {
      setIsSuccess(true);
      refetchSubscription();
      
      // Record purchase event in analytics
      if (window.gtag && plan) {
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
        description: `Your ${plan?.name} subscription has been successfully activated.`,
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
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-checkout-session`,
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
      
      const { url, sessionId, error } = await response.json();
      
      if (error) {
        throw new Error(error);
      }
      
      // Redirect to Stripe Checkout
      window.location.href = url;
      
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
          ) : (
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Complete your purchase</CardTitle>
                    <CardDescription>
                      Subscribe to the {plan.name} plan
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>You're about to subscribe to the {plan.name} plan at {formatPrice(plan.price)}/{plan.interval}.</p>
                      
                      <div className="space-y-2">
                        <h3 className="font-medium">What's included:</h3>
                        <ul className="space-y-2 pl-5 list-disc text-quantum-600 dark:text-quantum-400">
                          {plan.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button 
                        onClick={handleCheckout}
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
                            : `Subscribe for ${formatPrice(plan.price)}/${plan.interval}`
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="font-medium">{plan.name}</span>
                        <span>{formatPrice(plan.price)}</span>
                      </div>
                      
                      <div className="text-sm text-quantum-600 dark:text-quantum-400">
                        <p>Billing cycle: {plan.interval}</p>
                        <p>Next billing date: {new Date(Date.now() + (plan.interval === "monthly" ? 30 : 365) * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
                      </div>
                      
                      <Separator />
                      
                      <div className="font-bold flex justify-between text-lg">
                        <span>Total</span>
                        <span>{formatPrice(plan.price)}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-quantum-50 dark:bg-quantum-900/20 flex flex-col items-start text-sm text-quantum-600 dark:text-quantum-400 space-y-2">
                    <p>✓ Secure payment processing</p>
                    <p>✓ Cancel anytime</p>
                    <p>✓ 14-day money-back guarantee</p>
                  </CardFooter>
                </Card>
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
