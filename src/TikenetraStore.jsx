import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';

const products = [
  { id: 1, name: 'Polera Tikénētra', price: 15000, category: 'Ropa' },
  { id: 2, name: 'Pantalón Tikénētra', price: 20000, category: 'Ropa' },
  { id: 3, name: 'Gorra Tikénētra', price: 10000, category: 'Accesorios' },
];

export default function TikenetraStore() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Tikenetra Store</h1>
      
      {/* Productos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      {/* Carrito */}
      <Cart cart={cart} />
    </div>
  );
}