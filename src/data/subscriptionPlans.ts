export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  formattedPrice: string;
  interval: "monthly" | "yearly";
  features: string[];
  tier: "free" | "basic" | "pro" | "ultimate";
  popular?: boolean;
}

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: price % 100 === 0 ? 0 : 2,
  }).format(price / 100);
};

// Update the subscription plans to include formattedPrice
export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: "free",
    name: "Free Plan",
    description: "Basic access to quantum learning resources",
    price: 0,
    formattedPrice: "$0",
    interval: "monthly",
    features: [
      "Access to basic tutorials",
      "5 simulator runs per day",
      "Community forum access"
    ],
    tier: "free"
  },
  {
    id: "basic-monthly",
    name: "Basic Monthly",
    description: "Enhanced access with more simulator runs",
    price: 999,
    formattedPrice: "$9.99",
    interval: "monthly",
    features: [
      "Access to intermediate tutorials",
      "50 simulator runs per day",
      "Priority community support",
    ],
    tier: "basic"
  },
  {
    id: "basic-yearly",
    name: "Basic Yearly",
    description: "Save with yearly billing and enhanced access",
    price: 9990,
    formattedPrice: "$99.90",
    interval: "yearly",
    features: [
      "Access to intermediate tutorials",
      "Unlimited simulator runs",
      "Priority community support",
    ],
    tier: "basic",
    popular: true
  },
  {
    id: "pro-monthly",
    name: "Pro Monthly",
    description: "Advanced features for serious quantum enthusiasts",
    price: 2999,
    formattedPrice: "$29.99",
    interval: "monthly",
    features: [
      "Access to advanced tutorials",
      "Unlimited simulator runs",
      "Personalized support",
      "Access to beta features"
    ],
    tier: "pro"
  },
  {
    id: "pro-yearly",
    name: "Pro Yearly",
    description: "Maximize your savings with yearly billing",
    price: 29990,
    formattedPrice: "$299.90",
    interval: "yearly",
    features: [
      "Access to advanced tutorials",
      "Unlimited simulator runs",
      "Personalized support",
      "Access to beta features"
    ],
    tier: "pro"
  },
    {
    id: "ultimate-monthly",
    name: "Ultimate Monthly",
    description: "The ultimate plan for quantum mastery",
    price: 4999,
    formattedPrice: "$49.99",
    interval: "monthly",
    features: [
      "Access to all tutorials",
      "Unlimited simulator runs",
      "24/7 premium support",
      "Early access to new simulators",
      "Exclusive workshops"
    ],
    tier: "ultimate"
  },
  {
    id: "ultimate-yearly",
    name: "Ultimate Yearly",
    description: "Unlock the full potential with yearly billing",
    price: 49990,
    formattedPrice: "$499.90",
    interval: "yearly",
    features: [
      "Access to all tutorials",
      "Unlimited simulator runs",
      "24/7 premium support",
      "Early access to new simulators",
      "Exclusive workshops"
    ],
    tier: "ultimate"
  },
];

// Update each plan to include formattedPrice
subscriptionPlans.forEach(plan => {
  plan.formattedPrice = formatPrice(plan.price);
});

export const getSubscriptionPlanById = (planId: string): SubscriptionPlan | undefined => {
  return subscriptionPlans.find(plan => plan.id === planId);
};
