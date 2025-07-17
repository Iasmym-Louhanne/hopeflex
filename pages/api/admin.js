import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
  const { name, price, stock } = req.body;

  const { error } = await supabase.from('products').insert({
    name,
    price: parseInt(price, 10),
    stock: parseInt(stock, 10),
  });

  if (error) return res.status(500).send(error.message);
  res.redirect(303, '/');
}
