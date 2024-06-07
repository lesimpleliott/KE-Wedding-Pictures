import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const password = true;
  return password ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
