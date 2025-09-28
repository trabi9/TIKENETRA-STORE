import { useState, useEffect } from "react";
import { ShoppingCart, Shirt, Bag } from "lucide-react";

const products = [
  { id: 1, name: "Polera Tikénétra", price: 15000, category: "Ropa" },
  { id: 2, name: "Jeans Tikénétra", price: 25000, category: "Ropa" },
  { id: 3, name: "Chaqueta Tikénétra", price: 60000, category: "Ropa" },
  { id: 4, name: "Bolso Tikénétra", price: 20000, category: "Accesorios" },
  { id: 5, name: "Gorra Tikénétra", price: 10000, category: "Accesorios" },
];

export default function TikenétraStore() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold tracking-wide">👗 Tikénétra</h1>

        <div className="flex items-center gap-2">
          <ShoppingCart />
          <span>{cart.length} productos</span>
        </div>
      </header>

      <section className="bg-white shadow rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-semibold mb-2">Sobre nosotros</h2>
        <p className="text-gray-600">
          En <strong>Tikénétra</strong> creemos que la moda es una forma de expresión. 
          Ofrecemos ropa y accesorios únicos, combinando estilo y comodidad para quienes buscan destacar.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="rounded-2xl shadow bg-white p-4 flex flex-col items-center">
            <div className="text-4xl mb-2">👕</div>
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price.toLocaleString()}</p>
            <button className="bg-blue-600 text-white rounded-xl px-4 py-2 mt-2" onClick={() => addToCart(product)}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="mt-10 p-6 bg-white shadow rounded-2xl">
          <h2 className="text-xl font-bold mb-4">🛒 Carrito</h2>
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{item.name} - ${item.price.toLocaleString()}</span>
                <button className="bg-red-500 text-white rounded px-2 py-1" onClick={() => removeFromCart(index)}>
                  Quitar
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-bold">Total: ${total.toLocaleString()}</p>
          <button className="bg-green-600 text-white w-full py-2 rounded-xl mt-2">Proceder al pago</button>
        </div>
      )}

      <footer className="mt-12 p-6 bg-gray-900 text-white rounded-2xl text-center">
        <h2 className="text-lg font-semibold mb-2">Contacto</h2>
        <p>Síguenos en nuestras redes sociales para conocer las últimas colecciones.</p>
        <p className="mt-2">📧 contacto@tikenétra.com</p>
      </footer>
    </div>
  );
}
