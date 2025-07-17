import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { createClient } from '@supabase/supabase-js';

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
      <>
      <h1 className="text-3xl font-bold my-4">Produtos</h1>
      {error && <p>{error}</p>}
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      </>
  );
}
