
import React from "react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useMockCheckout } from "@/integrations/stripe/client";

const MockCheckoutBanner = () => {
  // Only show if using mock checkout
  if (!useMockCheckout) return null;
  
  return (
    <Alert variant="warning" className="mb-6 bg-yellow-50 border-yellow-200 dark:bg-yellow-950 dark:border-yellow-800">
      <AlertCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
      <AlertTitle>Development Mode</AlertTitle>
      <AlertDescription>
        The application is running in mock checkout mode. No actual payments will be processed.
        Set <code className="px-1 py-0.5 bg-yellow-100 dark:bg-yellow-900 rounded">VITE_USE_MOCK_CHECKOUT=false</code> to use the real Stripe checkout.
      </AlertDescription>
    </Alert>
  );
};

export default MockCheckoutBanner;
