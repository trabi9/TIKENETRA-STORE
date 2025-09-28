import React from "react";

export default function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed right-0 top-0 w-80 h-full bg-white shadow-lg p-6 flex flex-col">
      <h2 className="text-xl font-bold mb-4 text-brandOrange">Carrito</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Tu carrito está vacío</p>
      ) : (
        <ul className="flex-1 space-y-2 overflow-y-auto">
          {cart.map((item, index) => (
            <li key={index} className="flex justify-between items-center border-b pb-2">
              <span>{item.name}</span>
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500 text-sm"
              >
                Quitar
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4">
        <p className="font-bold text-brandGreen">Total: ${total.toLocaleString()}</p>
        <button className="mt-2 w-full bg-brandGreen text-white py-2 rounded-lg hover:bg-green-600">
          Proceder al pago
        </button>
      </div>
    </div>
  );
}
