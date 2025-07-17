# Hopeflex E-commerce

This is a simple example of an e-commerce application using Next.js, Supabase for the database and Stripe for payments.

## Setup

1. Copy `.env.example` to `.env` and fill in your Stripe and Supabase credentials.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Navigate to `http://localhost:3000` to see the store.
5. For production builds:
   ```bash
   npm run build
   npm start
   ```

The `/admin` page provides a basic form to add products with price and stock.
