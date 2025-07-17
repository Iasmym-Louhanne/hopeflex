import { createClient } from '@supabase/supabase-js';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';

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
  return (
    <Layout>
      <div className="banner">
        <strong>Promoção:</strong> Frete grátis nas compras acima de R$50
      </div>
      <h1>Produtos</h1>
      {error && <p>{error}</p>}
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
}
