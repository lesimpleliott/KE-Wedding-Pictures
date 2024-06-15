import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../store";

const ProtectedRoutes = () => {
  const password = useSelector((state: RootState) => state.app.password);

  return password === import.meta.env.VITE_KATELIOSECRET ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

export default ProtectedRoutes;
