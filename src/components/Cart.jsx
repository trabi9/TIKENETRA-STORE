import React from "react";

export default function Cart({ cart, removeFromCart, onClose }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed right-0 top-0 w-80 h-full bg-white shadow-2xl p-6 flex flex-col z-50">
      {/* Botón de cierre */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Cerrar ✖
      </button>

      <h2 className="text-xl font-bold mb-4 text-green-700">🛒 Carrito</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Tu carrito está vacío</p>
      ) : (
        <ul className="flex-1 space-y-2 overflow-y-auto pr-2">
          {cart.map((item, index) => (
            <li key={index} className="flex justify-between items-center border-b pb-2">
              <div>
                <span className="block font-semibold">{item.name}</span>
                <span className="text-sm text-gray-600">${item.price.toLocaleString()}</span>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500 text-sm hover:underline"
              >
                Quitar
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4">
        <p className="font-bold text-green-700">Total: ${total.toLocaleString()}</p>
        <button className="mt-2 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
          Proceder al pago
        </button>
      </div>
    </div>
  );
}