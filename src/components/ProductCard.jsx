import React from "react";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="border rounded-xl p-4 shadow bg-white flex flex-col items-center">
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-green-600 font-bold">${product.price.toLocaleString()}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-3 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 active:scale-95 transition transform"
      >
        Agregar al carrito
      </button>
    </div>
  );
}