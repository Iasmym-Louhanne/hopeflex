import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';
import { useContext } from 'react';
import Layout from '../components/Layout';
import { CartContext } from '../components/cartContext';

export async function getServerSideProps() {
  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('id', { ascending: true });

  if (error) {
    return { props: { products: [], error: error.message } };
  }

  return { props: { products } };
}

export default function Home({ products, error }) {
  const { addToCart } = useContext(CartContext);

  return (
    <Layout>
      <div style={{ background: '#f5f5f5', padding: '1rem', marginBottom: '1rem', textAlign: 'center' }}>
        <strong>Promoção:</strong> Frete grátis nas compras acima de R$50
      </div>
      <h1>Produtos</h1>
      {error && <p>{error}</p>}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '1rem' }}>
            <h2>{product.name}</h2>
            <p>Price: ${(product.price / 100).toFixed(2)}</p>
            <p>Stock: {product.stock}</p>
            <button onClick={() => addToCart(product)} disabled={product.stock <= 0}>Adicionar ao carrinho</button>
          </div>
        ))}
      </div>
    </Layout>
  );
}
