import { useContext } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { CartContext } from '../components/cartContext';

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <Layout>
      <h1>Seu Carrinho</h1>
      {cartItems.length === 0 && <p>Carrinho vazio</p>}
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} style={{ marginBottom: '1rem' }}>
            {item.name} - ${(item.price / 100).toFixed(2)}
            <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: '1rem' }}>Remover</button>
          </li>
        ))}
      </ul>
      {cartItems.length > 0 && (
        <>
          <Link href="/checkout"><button>Finalizar Compra</button></Link>
          <button onClick={clearCart} style={{ marginLeft: '1rem' }}>Limpar</button>
        </>
      )}
    </Layout>
  );
}
