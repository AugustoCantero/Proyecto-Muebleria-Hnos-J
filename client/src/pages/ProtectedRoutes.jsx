import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  const { currentUser } = useContext(AuthContext);
  return currentUser !== null || currentUser !== undefined ? <Outlet /> : <Navigate to="/login" replace />;
}
