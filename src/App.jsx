import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

const App = () => {
  // Productos de la tienda
  const products = [
    { id: 1, name: "Polera Tikénétra", price: 15000, category: "Ropa" },
    { id: 2, name: "Pantalón Tikénétra", price: 20000, category: "Ropa" },
    { id: 3, name: "Gorra Tikénétra", price: 10000, category: "Accesorios" },
    { id: 4, name: "Jeans Tikénétra", price: 25000, category: "Ropa" },
    { id: 5, name: "Chaqueta Tikénétra", price: 40000, category: "Ropa" },
  ];

  // Estado del carrito
  const [cart, setCart] = useState([]);

  // Función para agregar al carrito
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Función para quitar del carrito
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-green-600 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">Tikénétra Store 🛍️</h1>
        <p className="text-sm">Ropa y accesorios con estilo</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {/* Lista de productos */}
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

        {/* Carrito */}
        <aside className="bg-gray-50 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">🛒 Carrito</h2>
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </aside>
      </main>

      <footer className="bg-orange-500 text-white text-center p-4 mt-6">
        © {new Date().getFullYear()} Tikénétra Store. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default App;