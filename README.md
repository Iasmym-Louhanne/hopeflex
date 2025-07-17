# Hopeflex E-commerce

This is a simple example of an e-commerce application using Next.js, Supabase for the database and Stripe for payments. The project now includes a basic cart system, a checkout page with shipping calculation by CEP and an admin area protected by password. The frontend has been improved with a header, footer and styled product cards.

## Setup

1. Configure o arquivo `.env.local` com suas chaves do Stripe e Supabase e defina `NEXT_PUBLIC_ADMIN_PASS`.
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

To access the admin panel navigate to `/admin` and use the password defined in `NEXT_PUBLIC_ADMIN_PASS` in the `.env.local` file. From the panel you can cadastrar novos produtos.

The `sql/schema.sql` file contains example SQL to create the required tables for products, orders and admin users.
