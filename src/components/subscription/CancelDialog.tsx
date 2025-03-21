
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { UserSubscription } from "@/types/subscription";

interface CancelDialogProps {
  userSubscription: UserSubscription;
  refetchSubscription: () => Promise<void>;
  userId: string;
}

const CancelDialog: React.FC<CancelDialogProps> = ({ 
  userSubscription, 
  refetchSubscription,
  userId
}) => {
  const { toast } = useToast();
  const [showCancelDialog, setShowCancelDialog] = useState(false);
  const [isProcessingCancel, setIsProcessingCancel] = useState(false);
  
  const currentPeriodEnd = new Date(userSubscription.current_period_end);
  
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
        user_id: userId,
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

  return (
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
  );
};

export default CancelDialog;
