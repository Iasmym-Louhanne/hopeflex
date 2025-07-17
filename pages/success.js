import Link from 'next/link';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';
import Layout from '../components/Layout';

export async function getServerSideProps({ query }) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

  const sessionId = query.session_id || null;
  if (sessionId) {
    try {
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      const productId = session.metadata?.productId;
      if (productId) {
        const { data: product } = await supabase
          .from('products')
          .select('stock')
          .eq('id', productId)
          .single();
        if (product && product.stock > 0) {
          await supabase
            .from('products')
            .update({ stock: product.stock - 1 })
            .eq('id', productId);
        }
      }
    } catch (err) {
      console.error(err);
    }
  }

  return { props: {} };
}

export default function Success() {
  return (
    <Layout>
      <h1>Pagamento realizado com sucesso!</h1>
      <Link href="/">Voltar à loja</Link>
    </Layout>
  );
}
