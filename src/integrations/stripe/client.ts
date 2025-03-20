
import { loadStripe, Stripe } from '@stripe/stripe-js';

// Initialize Stripe with the publishable key
const stripePromise = loadStripe('pk_live_51QxEZtP4rfVIAg3zZp6fPcjLIPkbk6PgSqTcB1pvccdMG828jDOlUGrmvZucGfG5nysJPoExcY1X5b7DFV32zPA300mfvxO6b7');

export { stripePromise };

// Add utility functions for Stripe client-side operations
export const redirectToCheckout = async (sessionId: string): Promise<void> => {
  const stripe = await stripePromise;
  if (!stripe) {
    throw new Error('Failed to load Stripe');
  }
  
  const { error } = await stripe.redirectToCheckout({ sessionId });
  
  if (error) {
    console.error('Stripe redirect error:', error);
    throw new Error(error.message);
  }
};
