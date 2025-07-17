import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export default function Header() {
  const { cartItems } = useContext(CartContext);
  return (
    <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/">Home</Link>
        <Link href="/account">Minha Conta</Link>
        <Link href="/cart">Carrinho ({cartItems.length})</Link>
      </nav>
    </header>
  );
}
