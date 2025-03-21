
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSubscriptionPlanById } from "@/data/subscriptionPlans";
import CheckoutSuccess from "@/components/checkout/CheckoutSuccess";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import { useCheckout } from "@/hooks/useCheckout";

const CheckoutPage = () => {
  const { planId } = useParams<{ planId: string }>();
  const plan = planId ? getSubscriptionPlanById(planId) : undefined;
  const { isProcessing, isSuccess, handleCheckout } = useCheckout(planId);
  
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

export default CheckoutPage;
