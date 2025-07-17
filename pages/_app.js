import { CartProvider } from '../components/cartContext'; // Verifique se o caminho está correto
import '../public/style.css';


export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}