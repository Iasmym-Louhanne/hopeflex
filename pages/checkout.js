import { useContext, useState } from 'react';
import { CartContext } from '../components/cartContext';
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
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {cartItems.length === 0 && <p>Carrinho vazio</p>}
      <ul className="mb-4">
        {cartItems.map((item) => (
          <li key={item.id}>{item.name} - {(item.price / 100).toFixed(2)}</li>
        ))}
      </ul>
      <div className="flex items-center gap-2 mb-4">
        <input
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          placeholder="CEP"
          className="border px-2 py-1 rounded"
        />
        <button onClick={calculateShipping} className="bg-blue-500 text-white px-4 py-1 rounded">
          Calcular Frete
        </button>
      </div>
      {shipping && <p className="mb-4">{shipping}</p>}
      {cartItems.length > 0 && (
        <button onClick={handlePayment} className="bg-green-600 text-white px-4 py-2 rounded">
          Pagar
        </button>
      )}
    </>
  );
}
