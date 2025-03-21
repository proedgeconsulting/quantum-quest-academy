
-- Create stripe_customers table to track customer IDs
CREATE TABLE IF NOT EXISTS public.stripe_customers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  stripe_customer_id TEXT NOT NULL,
  email TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_stripe_customers_user_id ON public.stripe_customers(user_id);
CREATE INDEX IF NOT EXISTS idx_stripe_customers_stripe_id ON public.stripe_customers(stripe_customer_id);

-- Set up RLS policies
ALTER TABLE public.stripe_customers ENABLE ROW LEVEL SECURITY;

-- Admin can do anything
CREATE POLICY "Admins can do anything" ON public.stripe_customers
  USING (auth.uid() IN (SELECT id FROM public.administrators))
  WITH CHECK (auth.uid() IN (SELECT id FROM public.administrators));

-- Users can read their own records
CREATE POLICY "Users can read their own customer records" ON public.stripe_customers
  FOR SELECT USING (auth.uid() = user_id);

-- Service role can do anything (needed for edge functions)
CREATE POLICY "Service role can do anything" ON public.stripe_customers
  USING (auth.jwt() ->> 'role' = 'service_role')
  WITH CHECK (auth.jwt() ->> 'role' = 'service_role');
