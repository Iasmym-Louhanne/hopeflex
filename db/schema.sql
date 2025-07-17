-- Supabase schema for Hopeflex
CREATE TABLE IF NOT EXISTS products (
  id serial PRIMARY KEY,
  name text NOT NULL,
  price integer NOT NULL,
  stock integer NOT NULL
);
