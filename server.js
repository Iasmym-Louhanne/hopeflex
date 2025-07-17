const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = process.env.PORT || 3000;

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('id', { ascending: true });
  if (error) return res.status(500).send(error.message);
  res.render('index', { products });
});

app.get('/admin', (req, res) => {
  res.render('admin');
});

app.post('/admin', async (req, res) => {
  const { name, price, stock } = req.body;
  const { error } = await supabase
    .from('products')
    .insert({ name, price: parseInt(price, 10), stock: parseInt(stock, 10) });
  if (error) return res.status(500).send(error.message);
  res.redirect('/');
});

app.post('/create-checkout-session', async (req, res) => {
  const { productId } = req.body;

  const { data: product, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', productId)
    .single();

  if (error || !product) return res.status(400).send('Product not found');
  if (product.stock <= 0) return res.status(400).send('Out of stock');

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: { name: product.name },
          unit_amount: product.price,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${req.protocol}://${req.get('host')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.protocol}://${req.get('host')}/cancel`,
      metadata: { productId: product.id }
    });

    res.redirect(303, session.url);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get('/success', async (req, res) => {
  try {
    const sessionId = req.query.session_id;
    if (sessionId) {
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      const productId = session.metadata.productId;
      if (productId) {
        const { data: product, error } = await supabase
          .from('products')
          .select('stock')
          .eq('id', productId)
          .single();
        if (!error && product && product.stock > 0) {
          await supabase
            .from('products')
            .update({ stock: product.stock - 1 })
            .eq('id', productId);
        }
      }
    }
  } catch (err) {
    console.error(err);
  }
  res.render('success');
});

app.get('/cancel', (req, res) => {
  res.render('cancel');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

