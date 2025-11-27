import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function ProtectedAdminRoutes() {
  const { currentUser } = useContext(AuthContext);
  return currentUser && currentUser.role === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
}