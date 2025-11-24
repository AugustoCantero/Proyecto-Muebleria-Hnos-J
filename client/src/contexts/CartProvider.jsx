import { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    const saved = localStorage.getItem("carrito");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const addToCart = (producto) => {
    setCarrito(prevCarrito => {
      const index = prevCarrito.findIndex(p => p._id === producto._id);
      if (index !== -1) {
        const newCarrito = [...prevCarrito];
        newCarrito[index].cantidad = (newCarrito[index].cantidad || 1) + 1;
        return newCarrito;
      } else {
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCarrito(prev => prev.filter(p => p._id !== id));
  };

  return (
    <CartContext.Provider value={{ carrito, addToCart, removeFromCart, setCarrito }}>
      {children}
    </CartContext.Provider>
  );
};