import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import Router from 'next/router';

export default function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const [cep, setCep] = useState('');
  const [shipping, setShipping] = useState(null);

  const calculateShipping = async () => {
    if (!cep) return;
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!res.ok) throw new Error('Erro ao buscar CEP');
      const data = await res.json();
      setShipping(`Prazo estimado para ${data.localidade}: 5 dias`);
    } catch (e) {
      setShipping('CEP inválido');
    }
  };

  const handlePayment = () => {
    clearCart();
    Router.push('/success');
  };

  return (
      <>
      <h1>Checkout</h1>
      {cartItems.length === 0 && <p>Carrinho vazio</p>}
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name} - ${(item.price / 100).toFixed(2)}</li>
        ))}
      </ul>
      <div>
        <input value={cep} onChange={(e) => setCep(e.target.value)} placeholder="CEP" />
        <button onClick={calculateShipping}>Calcular Frete</button>
      </div>
      {shipping && <p>{shipping}</p>}
      {cartItems.length > 0 && (
        <button onClick={handlePayment}>Pagar</button>
      )}
    </>
  );
}
