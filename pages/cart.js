import React from "react";
import { useCart } from "../components/cartContext";
import Link from "next/link";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
      <div className="p-4">
        <h2 className="text-2xl font-bold">Carrinho</h2>
        {cartItems.length === 0 ? (
          <p>Carrinho vazio</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-2">
                <span>{item.name} - ${item.price}</span>
                <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white py-1 px-3 rounded">
                  Remover
                </button>
              </li>
            ))}
          </ul>
      )}
      {cartItems.length > 0 && (
        <div className="mt-4">
          <button onClick={clearCart} className="bg-gray-500 text-white py-2 px-4 rounded mr-2">
            Limpar Carrinho
          </button>
          <Link href="/checkout">
            <button className="bg-green-500 text-white py-2 px-4 rounded">
              Finalizar Compra
            </button>
          </Link>
        </div>
      )}
      </div>
  );
};

export default Cart;
