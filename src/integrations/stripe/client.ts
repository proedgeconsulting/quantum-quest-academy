
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with the publishable key
const stripePromise = loadStripe('pk_live_51QxEZtP4rfVIAg3zZp6fPcjLIPkbk6PgSqTcB1pvccdMG828jDOlUGrmvZucGfG5nysJPoExcY1X5b7DFV32zPA300mfvxO6b7');

export { stripePromise };
