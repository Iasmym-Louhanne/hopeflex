import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from './cartContext';

export default function Header() {
  const { cartItems } = useContext(CartContext);
  return (
    <header className="header">
      <div className="logo">
        <Link href="/">Hopeflex</Link>
      </div>
      <nav className="menu">
        <Link href="/">Produtos</Link>
        <Link href="/account">Minha Conta</Link>
        <Link href="/cart">Carrinho ({cartItems.length})</Link>
      </nav>
    </header>
  );
}
