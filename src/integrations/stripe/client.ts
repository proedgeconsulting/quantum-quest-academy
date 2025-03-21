
import { loadStripe, Stripe } from '@stripe/stripe-js';

// Check if we're using mock checkout
const useMockCheckout = import.meta.env.VITE_USE_MOCK_CHECKOUT === 'true';

// Get the Stripe publishable key based on environment
const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 
  'pk_test_51QxEZtP4rfVIAg3zZp6fPcjLIPkbk6PgSqTcB1pvccdMG828jDOlUGrmvZucGfG5nysJPoExcY1X5b7DFV32zPA300mfvxO6b7';

// Initialize Stripe with the publishable key (only if not using mock checkout)
const stripePromise = useMockCheckout ? null : loadStripe(stripePublishableKey);

if (useMockCheckout) {
  console.log('Using mock checkout flow - Stripe API will not be initialized');
} else {
  console.log(`Stripe initialized with key starting with: ${stripePublishableKey.substring(0, 8)}...`);
}

export { stripePromise, useMockCheckout };

// Add utility functions for Stripe client-side operations
export const redirectToCheckout = async (sessionId: string): Promise<void> => {
  // If using mock checkout, just simulate the redirect
  if (useMockCheckout) {
    console.log('Mock checkout: would redirect to session', sessionId);
    // Simulate successful checkout by redirecting to success URL
    window.location.href = `${window.location.origin}/checkout?success=true&session_id=mock_session_${Date.now()}`;
    return;
  }

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
  // If using mock checkout, just simulate the portal
  if (useMockCheckout) {
    console.log('Mock checkout: would open customer portal for user', userId);
    alert('In development mode: This would open the Stripe Customer Portal');
    return;
  }

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
