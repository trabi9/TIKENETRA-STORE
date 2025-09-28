import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { ShoppingCart } from "lucide-react";

const App = () => {
  const products = [
    { id: 1, name: "Polera Tikénétra", price: 15000, category: "Ropa" },
    { id: 2, name: "Pantalón Tikénétra", price: 20000, category: "Ropa" },
    { id: 3, name: "Gorra Tikénétra", price: 10000, category: "Accesorios" },
    { id: 4, name: "Jeans Tikénétra", price: 25000, category: "Ropa" },
    { id: 5, name: "Chaqueta Tikénétra", price: 40000, category: "Ropa" },
  ];

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HEADER */}
      <header className="bg-green-600 text-white p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Tikénétra Store 🛍️</h1>
        {/* Botón carrito */}
        <button
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="relative bg-white text-green-600 p-2 rounded-full shadow"
        >
          <ShoppingCart className="w-6 h-6" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </button>
      </header>

      {/* MAIN */}
      <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Productos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        </section>

        {/* Carrito (solo si isCartOpen = true) */}
        {isCartOpen && (
          <aside className="bg-gray-50 p-4 rounded-lg shadow relative">
            <button
              onClick={() => setIsCartOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
            >
              ✖
            </button>
            <h2 className="text-xl font-semibold mb-4">🛒 Carrito</h2>
            <Cart cart={cart} removeFromCart={removeFromCart} />
          </aside>
        )}
      </main>

      <footer className="bg-orange-500 text-white text-center p-4 mt-6">
        © {new Date().getFullYear()} Tikénétra Store. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default App;