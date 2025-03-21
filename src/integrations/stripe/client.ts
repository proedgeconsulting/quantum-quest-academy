
import { loadStripe, Stripe } from '@stripe/stripe-js';

// Get the Stripe publishable key based on environment
const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 
  'pk_test_51QxEZtP4rfVIAg3zZp6fPcjLIPkbk6PgSqTcB1pvccdMG828jDOlUGrmvZucGfG5nysJPoExcY1X5b7DFV32zPA300mfvxO6b7';

// Initialize Stripe with the publishable key
const stripePromise = loadStripe(stripePublishableKey);

console.log(`Stripe initialized with key starting with: ${stripePublishableKey.substring(0, 8)}...`);

export { stripePromise };

// Add utility functions for Stripe client-side operations
export const redirectToCheckout = async (sessionId: string): Promise<void> => {
  try {
    const stripe = await stripePromise;
    if (!stripe) {
      throw new Error('Failed to load Stripe');
    }
    
    const { error } = await stripe.redirectToCheckout({ sessionId });
    
    if (error) {
      console.error('Stripe redirect error:', error);
      throw new Error(error.message);
    }
  } catch (error) {
    console.error('Error in redirectToCheckout:', error);
    throw error;
  }
};

// Function to open Stripe Customer Portal
export const openCustomerPortal = async (userId: string, returnUrl?: string): Promise<void> => {
  try {
    const response = await fetch('/api/create-portal-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        userId,
        return_url: returnUrl 
      }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to create portal session');
    }
    
    const { url } = await response.json();
    
    // Redirect to the portal
    window.location.href = url;
  } catch (error) {
    console.error('Error opening customer portal:', error);
    throw error;
  }
};
