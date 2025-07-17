import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';

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
    <div>
      <h1>Products</h1>
      {error && <p>{error}</p>}
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${(product.price / 100).toFixed(2)}</p>
            <p>Stock: {product.stock}</p>
            <form action="/api/create-checkout-session" method="POST">
              <input type="hidden" name="productId" value={product.id} />
              <button type="submit" disabled={product.stock <= 0}>Buy</button>
            </form>
          </li>
        ))}
      </ul>
      <Link href="/admin">Add Product</Link>
    </div>
  );
}
