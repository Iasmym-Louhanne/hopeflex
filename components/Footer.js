import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Hopeflex Store</p>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/account">Minha Conta</Link>
          <Link href="/cart">Carrinho</Link>
        </nav>
      </div>
    </footer>
  );
}

