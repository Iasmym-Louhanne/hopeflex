import { CartProvider } from '../contexts/CartContext';
import Layout from '../components/Layout';
import '../public/style.css';


export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}