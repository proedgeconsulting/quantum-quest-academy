
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
