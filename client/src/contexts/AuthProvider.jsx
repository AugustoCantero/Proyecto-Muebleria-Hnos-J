import { AuthContext } from "./AuthContext";
import { useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const decodedToken = (newToken) => {
    try {
      const decoded = jwtDecode(newToken);
      setCurrentUser(decoded);
      console.log(decoded)
      return decoded;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
    decodedToken(newToken);
  }

  const logout = () => {
    setToken(null);
    setCurrentUser(null);
    localStorage.removeItem("token");
  }

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setCurrentUser(decoded);
      } catch (err) {
        console.error("Token inválido:", err);
        setToken(null);
        setCurrentUser(null);
        localStorage.removeItem("token");
      }
    }
  }, [token]);

  const value = {
    token,
    currentUser,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
