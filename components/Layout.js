import Header from './Header';
import Footer from './Footer';
import { CartProvider } from './cartContext';

export default function Layout({ children }) {
  return (
    <CartProvider>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </CartProvider>
  );
}

