import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { subscriptionPlans, formatPrice } from "@/data/subscriptionPlans";
import { useAuth } from "@/context/AuthContext";
import { useSubscription } from "@/context/SubscriptionContext";

const Pricing = () => {
  const [billingInterval, setBillingInterval] = useState<"monthly" | "yearly">("monthly");
  const { user } = useAuth();
  const { userSubscription } = useSubscription();
  const navigate = useNavigate();
  
  const handleSelectPlan = (planId: string) => {
    if (!user) {
      navigate("/auth?redirect=/pricing");
      return;
    }
    
    navigate(`/checkout/${planId}`);
  };

  const monthlyPlans = subscriptionPlans.filter(plan => plan.interval === "monthly" || plan.id === "free");
  const yearlyPlans = subscriptionPlans.filter(plan => plan.interval === "yearly" || plan.id === "free");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-12 md:py-24 bg-gradient-to-b from-quantum-50 to-white dark:from-quantum-950 dark:to-quantum-900">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <motion.h1 
                className="text-3xl md:text-5xl font-bold tracking-tighter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Simple, Transparent Pricing
              </motion.h1>
              <motion.p 
                className="text-quantum-600 dark:text-quantum-300 md:text-xl max-w-[700px] mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Choose the perfect plan for your quantum learning journey
              </motion.p>
              
              <motion.div
                className="flex justify-center mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Tabs 
                  defaultValue="monthly" 
                  className="w-full max-w-md"
                  onValueChange={(value) => setBillingInterval(value as "monthly" | "yearly")}
                >
                  <TabsList className="grid grid-cols-2 w-full">
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    <TabsTrigger value="yearly">Yearly (Save 16%)</TabsTrigger>
                  </TabsList>
                  <TabsContent value="monthly">
                    {/* Content handled below */}
                  </TabsContent>
                  <TabsContent value="yearly">
                    {/* Content handled below */}
                  </TabsContent>
                </Tabs>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {(billingInterval === "monthly" ? monthlyPlans : yearlyPlans).map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card className={`h-full flex flex-col ${plan.popular ? 'border-quantum-500 dark:border-quantum-400 shadow-lg' : ''}`}>
                    <CardHeader className={`${plan.popular ? 'bg-quantum-50 dark:bg-quantum-900/50' : ''}`}>
                      {plan.popular && (
                        <div className="py-1 px-3 bg-quantum-500 text-white text-xs font-semibold rounded-full w-fit mx-auto mb-2">
                          Most Popular
                        </div>
                      )}
                      <CardTitle className="text-center">{plan.name}</CardTitle>
                      <CardDescription className="text-center">{plan.description}</CardDescription>
                      <div className="text-center mt-4">
                        <span className="text-4xl font-bold">{formatPrice(plan.price)}</span>
                        {plan.price > 0 && (
                          <span className="text-quantum-600 dark:text-quantum-400 ml-2">
                            /{plan.interval}
                          </span>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="flex flex-col">
                      <Button 
                        className={`w-full ${plan.popular ? 'bg-quantum-500 hover:bg-quantum-600' : ''}`}
                        onClick={() => handleSelectPlan(plan.id)}
                        disabled={userSubscription?.plan_id === plan.id}
                      >
                        {userSubscription?.plan_id === plan.id ? (
                          "Current Plan"
                        ) : plan.price === 0 ? (
                          "Get Started"
                        ) : (
                          "Choose Plan"
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
                <div className="space-y-2">
                  <h3 className="font-medium">Can I change plans later?</h3>
                  <p className="text-quantum-600 dark:text-quantum-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the end of your current billing cycle.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Is there a refund policy?</h3>
                  <p className="text-quantum-600 dark:text-quantum-300">We offer a 14-day money-back guarantee for all subscription plans if you're not satisfied.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Do you offer team or institutional plans?</h3>
                  <p className="text-quantum-600 dark:text-quantum-300">Yes, we offer special pricing for educational institutions and teams. Contact us for more details.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">What payment methods do you accept?</h3>
                  <p className="text-quantum-600 dark:text-quantum-300">We accept all major credit cards and PayPal. Payment processing is secure and encrypted.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
