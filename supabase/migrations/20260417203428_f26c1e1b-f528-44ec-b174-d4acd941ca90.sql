-- Prayer team signups
CREATE TABLE public.prayer_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.prayer_signups ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit prayer signup" ON public.prayer_signups FOR INSERT WITH CHECK (true);

-- Missionary registrations (Go)
CREATE TABLE public.missionary_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  church TEXT,
  age INTEGER,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.missionary_registrations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can register as missionary" ON public.missionary_registrations FOR INSERT WITH CHECK (true);

-- Donations
CREATE TABLE public.donations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT,
  phone TEXT NOT NULL,
  amount NUMERIC NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  checkout_request_id TEXT,
  mpesa_receipt TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can create donation" ON public.donations FOR INSERT WITH CHECK (true);