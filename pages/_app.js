import { CartProvider } from '../components/cartContext';
import Layout from '../components/Layout';
import '../public/style.css';

function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default App;
