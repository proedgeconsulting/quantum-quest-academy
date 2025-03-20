
import { SubscriptionPlan } from '@/types/subscription';

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'free',
    name: 'Free Access',
    description: 'Basic access to introductory quantum computing courses',
    price: 0,
    interval: 'monthly',
    tier: 'free',
    features: [
      'Access to Level 1 courses',
      'Basic quizzes and assignments',
      'Community forum access',
      'Mobile-friendly learning'
    ]
  },
  {
    id: 'basic-monthly',
    name: 'Basic',
    description: 'Perfect for beginners looking to expand their quantum knowledge',
    price: 1999, // $19.99
    interval: 'monthly',
    tier: 'basic',
    features: [
      'Everything in Free tier',
      'Access to Level 2 courses',
      'Interactive quantum simulators',
      'Progress tracking',
      'Downloadable resources'
    ]
  },
  {
    id: 'pro-monthly',
    name: 'Professional',
    description: 'For serious learners pursuing comprehensive quantum expertise',
    price: 3999, // $39.99
    interval: 'monthly',
    tier: 'pro',
    isPopular: true,
    features: [
      'Everything in Basic tier',
      'Full access to all courses (Levels 1-3)',
      'Advanced quantum programming tutorials',
      'Personalized learning path',
      'Priority support',
      'Completion certificates'
    ]
  },
  {
    id: 'ultimate-monthly',
    name: 'Ultimate',
    description: 'Complete quantum computing education and professional development',
    price: 8999, // $89.99
    interval: 'monthly',
    tier: 'ultimate',
    features: [
      'Everything in Professional tier',
      'One-on-one mentorship sessions',
      'Real quantum hardware access',
      'Industry projects and case studies',
      'Career development resources',
      'Early access to new courses'
    ]
  },
  {
    id: 'basic-yearly',
    name: 'Basic (Annual)',
    description: 'Perfect for beginners looking to expand their quantum knowledge',
    price: 19990, // $199.90 (≈ $16.66/month)
    interval: 'yearly',
    tier: 'basic',
    features: [
      'Everything in Free tier',
      'Access to Level 2 courses',
      'Interactive quantum simulators',
      'Progress tracking',
      'Downloadable resources',
      '2 months free compared to monthly'
    ]
  },
  {
    id: 'pro-yearly',
    name: 'Professional (Annual)',
    description: 'For serious learners pursuing comprehensive quantum expertise',
    price: 39990, // $399.90 (≈ $33.33/month)
    interval: 'yearly',
    tier: 'pro',
    features: [
      'Everything in Basic tier',
      'Full access to all courses (Levels 1-3)',
      'Advanced quantum programming tutorials',
      'Personalized learning path',
      'Priority support',
      'Completion certificates',
      '2 months free compared to monthly'
    ]
  },
  {
    id: 'ultimate-yearly',
    name: 'Ultimate (Annual)',
    description: 'Complete quantum computing education and professional development',
    price: 89990, // $899.90 (≈ $74.99/month)
    interval: 'yearly',
    tier: 'ultimate',
    features: [
      'Everything in Professional tier',
      'One-on-one mentorship sessions',
      'Real quantum hardware access',
      'Industry projects and case studies',
      'Career development resources',
      'Early access to new courses',
      '2 months free compared to monthly'
    ]
  }
];

export const getSubscriptionPlanById = (planId: string): SubscriptionPlan | undefined => {
  return subscriptionPlans.find(plan => plan.id === planId);
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(price / 100);
};
