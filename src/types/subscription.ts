
export type SubscriptionTier = 'free' | 'basic' | 'pro' | 'ultimate';

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number; // Price in cents
  interval: 'monthly' | 'yearly';
  tier: SubscriptionTier;
  features: string[];
  isPopular?: boolean;
}

export interface UserSubscription {
  id: string;
  user_id: string;
  plan_id: string;
  status: 'active' | 'canceled' | 'past_due' | 'trialing' | 'incomplete';
  current_period_start: string;
  current_period_end: string;
  cancel_at_period_end: boolean;
  created_at: string;
  updated_at: string;
  payment_method?: string;
  tier: SubscriptionTier;
}

// Add module declaration to extend the Supabase types
declare module '@supabase/supabase-js' {
  interface Database {
    public: {
      Tables: {
        user_subscriptions: {
          Row: UserSubscription;
          Insert: Omit<UserSubscription, 'id' | 'created_at' | 'updated_at'>;
          Update: Partial<Omit<UserSubscription, 'id'>>;
        };
      };
    };
  }
}
