
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useSubscription } from "@/context/SubscriptionContext";
import { getSubscriptionPlanById } from "@/data/subscriptionPlans";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CurrentPlanCard from "@/components/subscription/CurrentPlanCard";
import ContentAccessCard from "@/components/subscription/ContentAccessCard";
import SubscriptionHeader from "@/components/subscription/SubscriptionHeader";
import SubscriptionPromo from "@/components/subscription/SubscriptionPromo";
import SubscriptionGate from "@/components/subscription/SubscriptionGate";
import MockCheckoutBanner from "@/components/subscription/MockCheckoutBanner";

const SubscriptionManagement = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { userSubscription, isLoading, refetchSubscription } = useSubscription();
  
  // Get the plan based on the user subscription
  const plan = userSubscription && userSubscription.plan_id ? 
    getSubscriptionPlanById(userSubscription.plan_id) : 
    getSubscriptionPlanById("free");
  
  if (!user) {
    return <SubscriptionGate />;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container px-4 max-w-4xl mx-auto">
          <SubscriptionHeader />
          
          <MockCheckoutBanner />
          
          <div className="mt-8 space-y-8">
            {/* Current Plan Card */}
            {plan && (
              <CurrentPlanCard 
                plan={plan} 
                userSubscription={userSubscription} 
                refetchSubscription={refetchSubscription} 
              />
            )}
            
            {/* Content Access Card */}
            {plan && (
              <ContentAccessCard 
                plan={plan} 
              />
            )}
            
            {/* Promo Section - Only if not on ultimate plan */}
            {(!userSubscription || userSubscription.tier !== "ultimate") && (
              <SubscriptionPromo />
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SubscriptionManagement;
