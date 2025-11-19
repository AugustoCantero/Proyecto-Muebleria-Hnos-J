import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const value = {};
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
