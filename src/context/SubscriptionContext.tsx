
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { UserSubscription, SubscriptionTier } from '@/types/subscription';

interface SubscriptionContextType {
  userSubscription: UserSubscription | null;
  isLoading: boolean;
  hasAccess: (requiredTier: SubscriptionTier) => boolean;
  refetchSubscription: () => Promise<void>;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

const tierLevels: Record<SubscriptionTier, number> = {
  'free': 0,
  'basic': 1,
  'pro': 2,
  'ultimate': 3
};

export function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [userSubscription, setUserSubscription] = useState<UserSubscription | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchUserSubscription = async () => {
    if (!user) {
      setUserSubscription(null);
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('user_subscriptions')
        .select('*')
        .eq('user_id', user.id)
        .eq('status', 'active')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (error) {
        console.error('Error fetching subscription:', error);
        // If no subscription found, set to free tier
        setUserSubscription({
          id: 'free',
          user_id: user.id,
          plan_id: 'free',
          status: 'active',
          tier: 'free',
          current_period_start: new Date().toISOString(),
          current_period_end: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(), // 1 year
          cancel_at_period_end: false,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        });
      } else {
        // Ensure the status is one of the allowed values from the UserSubscription type
        const subscription = data as unknown as UserSubscription;
        setUserSubscription(subscription);
      }
    } catch (error) {
      console.error('Error in subscription fetch:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const hasAccess = (requiredTier: SubscriptionTier): boolean => {
    if (!userSubscription) return requiredTier === 'free';
    
    const userTierLevel = tierLevels[userSubscription.tier];
    const requiredTierLevel = tierLevels[requiredTier];
    
    return userTierLevel >= requiredTierLevel;
  };

  useEffect(() => {
    fetchUserSubscription();
  }, [user]);

  const refetchSubscription = async () => {
    await fetchUserSubscription();
  };

  const value = {
    userSubscription,
    isLoading,
    hasAccess,
    refetchSubscription
  };

  return <SubscriptionContext.Provider value={value}>{children}</SubscriptionContext.Provider>;
}

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (context === undefined) {
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
};
