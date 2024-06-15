import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import BurgerButton from "./components/menu/BurgerButton";
import Menu from "./components/menu/Menu";
import { RootState } from "./store";
import ProtectedRoutes from "./utils/ProtectedRoutes";
const Gallery = lazy(() => import("./pages/Gallery"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));

const App = () => {
  const password = useSelector((state: RootState) => state.app.password);

  return (
    <BrowserRouter>
      {password === import.meta.env.VITE_KATELIOSECRET && (
        <>
          <BurgerButton />
          <Menu />
        </>
      )}

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Redirige immédiatement vers /home si le mot de passe est correct */}
          {password === import.meta.env.VITE_KATELIOSECRET && (
            <Route path="/" element={<Navigate to="/home" />} />
          )}

          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
          </Route>

          {/* Si le mot de passe est incorrect, affiche la page de connexion */}
          <Route path="/" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
