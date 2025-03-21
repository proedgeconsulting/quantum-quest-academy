
-- Create user_subscriptions table
CREATE TABLE IF NOT EXISTS public.user_subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  stripe_subscription_id TEXT,
  stripe_customer_id TEXT,
  plan_id TEXT NOT NULL,
  price_id TEXT,
  status TEXT NOT NULL CHECK (status IN ('active', 'trialing', 'canceled', 'incomplete', 'past_due')),
  tier TEXT NOT NULL CHECK (tier IN ('free', 'basic', 'pro', 'ultimate')),
  current_period_start TIMESTAMP WITH TIME ZONE NOT NULL,
  current_period_end TIMESTAMP WITH TIME ZONE NOT NULL,
  cancel_at_period_end BOOLEAN NOT NULL DEFAULT false,
  payment_method TEXT,
  last_payment_status TEXT,
  last_payment_date TIMESTAMP WITH TIME ZONE,
  last_payment_failure_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add indexes for faster lookups
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_user_id ON public.user_subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_subscription_id ON public.user_subscriptions(stripe_subscription_id);
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_customer_id ON public.user_subscriptions(stripe_customer_id);
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_status ON public.user_subscriptions(status);

-- Set up RLS policies
ALTER TABLE public.user_subscriptions ENABLE ROW LEVEL SECURITY;

-- Admin can do anything
CREATE POLICY "Admins can do anything" ON public.user_subscriptions
  USING (auth.uid() IN (SELECT id FROM public.administrators))
  WITH CHECK (auth.uid() IN (SELECT id FROM public.administrators));

-- Users can read their own subscription records
CREATE POLICY "Users can read their own subscription records" ON public.user_subscriptions
  FOR SELECT USING (auth.uid() = user_id);

-- Service role can do anything (needed for edge functions)
CREATE POLICY "Service role can do anything" ON public.user_subscriptions
  USING (auth.jwt() ->> 'role' = 'service_role')
  WITH CHECK (auth.jwt() ->> 'role' = 'service_role');

-- Create a trigger to update the updated_at column
CREATE OR REPLACE FUNCTION public.update_timestamp_user_subscriptions()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_user_subscriptions_timestamp
BEFORE UPDATE ON public.user_subscriptions
FOR EACH ROW
EXECUTE FUNCTION public.update_timestamp_user_subscriptions();
