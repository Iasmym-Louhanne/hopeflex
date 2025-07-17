import { useContext } from 'react';
import { CartContext } from './cartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const inStock = product.stock > 0;

  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p className="price">R$ {(product.price / 100).toFixed(2)}</p>
      <p className="stock">Estoque: {product.stock}</p>
      <button onClick={() => addToCart(product)} disabled={!inStock}>
        {inStock ? 'Adicionar ao carrinho' : 'Indisponível'}
      </button>
    </div>
  );
}

