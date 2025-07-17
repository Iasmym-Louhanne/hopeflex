# Hopeflex E-commerce

This is a simple example of an e-commerce application using Node.js, Express, Supabase for the database and Stripe for payments.

## Setup

1. Create a project in [Supabase](https://supabase.com) and copy your project URL and service role key.
2. Run the SQL in `db/schema.sql` using Supabase's SQL editor to create the required `products` table.
3. Copy `.env.example` to `.env` and fill in your Stripe and Supabase credentials.
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the server:
   ```bash
   npm start
   ```
6. Navigate to `http://localhost:3000` to see the store.

The `/admin` page provides a basic form to add products with price and stock.
