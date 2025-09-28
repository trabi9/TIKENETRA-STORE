import React, { useState, useEffect } from 'react';

const products = [
  { id: 1, name: 'Polera Tikénétra', price: 15000, category: 'Ropa' },
  { id: 2, name: 'Pantalón Tikénétra', price: 20000, category: 'Ropa' },
  { id: 3, name: 'Chaqueta Tikénétra', price: 35000, category: 'Ropa' },
  { id: 4, name: 'Gorra Tikénétra', price: 10000, category: 'Accesorios' },
];

export default function TikenetraStore() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(products);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Tikénétra Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="border rounded-xl p-4 shadow bg-white">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600">{item.category}</p>
            <p className="text-green-600 font-bold">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
