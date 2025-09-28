import React from "react";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="border rounded-xl p-4 shadow bg-white flex flex-col items-center">
      <div className="text-5xl mb-2">🛍️</div>
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-brandGreen font-bold">${product.price.toLocaleString()}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-3 px-4 py-2 bg-brandOrange text-white rounded-lg hover:bg-orange-500"
      >
        Agregar al carrito
      </button>
    </div>
  );
}
