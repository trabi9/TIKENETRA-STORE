import React, { useState } from "react";
import ProductCard from "./components/ProductCard.jsx";
import Cart from "./components/Cart.jsx";
import { ShoppingCart } from "lucide-react";

const products = [
  { id: 1, name: "Polera Tikénétra", price: 15000, category: "Ropa" },
  { id: 2, name: "Jeans Tikénétra", price: 25000, category: "Ropa" },
  { id: 3, name: "Chaqueta Tikénétra", price: 60000, category: "Ropa" },
  { id: 4, name: "Bolso Tikénétra", price: 20000, category: "Accesorios" },
  { id: 5, name: "Gorra Tikénétra", price: 10000, category: "Accesorios" },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white min-h-screen">
      <header className="flex justify-between items-center px-6 py-4 shadow">
        <h1 className="text-2xl font-bold text-brandOrange">Tikénétra</h1>
        <button 
          className="relative" 
          onClick={() => setIsCartOpen(!isCartOpen)}
        >
          <ShoppingCart className="w-6 h-6 text-brandGreen" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-brandOrange text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </button>
      </header>

      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </main>

      {isCartOpen && (
        <Cart cart={cart} removeFromCart={removeFromCart} />
      )}
    </div>
  );
}
