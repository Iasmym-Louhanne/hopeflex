import '../public/style.css';
import Layout from '../components/Layout';
import { CartProvider } from '../components/cartContext';

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}
