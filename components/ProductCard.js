import React from "react";
import { useCart } from "./cartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded-md shadow-md">
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      <button 
        onClick={() => addToCart(product)} 
        className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
        disabled={product.stock <= 0}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ProductCard;
