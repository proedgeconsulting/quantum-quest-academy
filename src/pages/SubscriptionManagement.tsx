
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { getSubscriptionPlanById, subscriptionPlans } from "@/data/subscriptionPlans";
import { useAuth } from "@/context/AuthContext";
import { useSubscription } from "@/context/SubscriptionContext";
import SubscriptionHeader from "@/components/subscription/SubscriptionHeader";
import CurrentPlanCard from "@/components/subscription/CurrentPlanCard";
import ContentAccessCard from "@/components/subscription/ContentAccessCard";

const SubscriptionManagement = () => {
  const { user } = useAuth();
  const { userSubscription, refetchSubscription } = useSubscription();
  const navigate = useNavigate();
  
  if (!user) {
    navigate("/auth?redirect=/subscription");
    return null;
  }
  
  const plan = userSubscription?.plan_id 
    ? getSubscriptionPlanById(userSubscription.plan_id) 
    : subscriptionPlans[0]; // Default to free plan
  
  if (!plan) return null;
  
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
            <SubscriptionHeader />
            
            <div className="grid gap-8">
              {/* Current Plan */}
              <CurrentPlanCard 
                plan={plan} 
                userSubscription={userSubscription} 
                refetchSubscription={refetchSubscription} 
              />
              
              {/* Access Summary */}
              <ContentAccessCard userSubscription={userSubscription} />
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SubscriptionManagement;
