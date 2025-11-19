import { useContext } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const value = {};
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
