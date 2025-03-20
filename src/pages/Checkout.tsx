
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { getSubscriptionPlanById, formatPrice } from "@/data/subscriptionPlans";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useSubscription } from "@/context/SubscriptionContext";
import { CreditCard, CheckCircle, Calendar, Loader2 } from "lucide-react";

const Checkout = () => {
  const { planId } = useParams<{ planId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const { refetchSubscription } = useSubscription();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Form state
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  
  const plan = planId ? getSubscriptionPlanById(planId) : undefined;
  
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

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/g, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };
  
  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/g, "");
    
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    
    return v;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user || !plan) return;
    
    setIsProcessing(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real application, you would use a payment processor like Stripe
      // For this demo, we'll simulate a successful payment
      const now = new Date();
      const endDate = new Date();
      
      if (plan.interval === "monthly") {
        endDate.setMonth(now.getMonth() + 1);
      } else {
        endDate.setFullYear(now.getFullYear() + 1);
      }
      
      // Create subscription record
      const { error } = await supabase.from("user_subscriptions").insert({
        user_id: user.id,
        plan_id: plan.id,
        status: "active",
        current_period_start: now.toISOString(),
        current_period_end: endDate.toISOString(),
        cancel_at_period_end: false,
        payment_method: `**** **** **** ${cardNumber.slice(-4)}`,
        tier: plan.tier
      });
      
      if (error) {
        throw error;
      }
      
      // Refresh the user's subscription state
      await refetchSubscription();
      
      // Show success state
      setIsSuccess(true);
      
      // Record the purchase event in analytics
      if (window.gtag) {
        window.gtag('event', 'purchase', {
          transaction_id: Date.now().toString(),
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
      
      toast({
        title: "Subscription activated!",
        description: `Your ${plan.name} subscription has been successfully activated.`,
      });
      
      // Redirect after delay
      setTimeout(() => {
        navigate("/subscription");
      }, 3000);
    } catch (error: any) {
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
                    <CardTitle>Payment Information</CardTitle>
                    <CardDescription>
                      Complete your subscription purchase
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Name on card</Label>
                        <Input 
                          id="cardName" 
                          value={cardName} 
                          onChange={(e) => setCardName(e.target.value)} 
                          placeholder="Name as it appears on card"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card number</Label>
                        <div className="relative">
                          <Input 
                            id="cardNumber" 
                            value={cardNumber} 
                            onChange={(e) => setCardNumber(formatCardNumber(e.target.value))} 
                            placeholder="0000 0000 0000 0000"
                            maxLength={19}
                            required
                          />
                          <CreditCard className="absolute right-3 top-2.5 h-5 w-5 text-quantum-400" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry date</Label>
                          <div className="relative">
                            <Input 
                              id="expiry" 
                              value={cardExpiry} 
                              onChange={(e) => setCardExpiry(formatExpiry(e.target.value))} 
                              placeholder="MM/YY"
                              maxLength={5}
                              required
                            />
                            <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-quantum-400" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="cvc">CVC</Label>
                          <Input 
                            id="cvc" 
                            value={cardCvc} 
                            onChange={(e) => setCardCvc(e.target.value.replace(/\D/g, ""))} 
                            placeholder="123"
                            maxLength={3}
                            required
                          />
                        </div>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full mt-6" 
                        disabled={isProcessing}
                      >
                        {isProcessing ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          `Pay ${formatPrice(plan.price)}`
                        )}
                      </Button>
                    </form>
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
