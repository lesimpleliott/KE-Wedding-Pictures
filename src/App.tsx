import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import Menu from "./components/menu/Menu";
import Slider from "./pages/Slider";
import { RootState } from "./store";
import ProtectedRoutes from "./utils/ProtectedRoutes";
const Gallery = lazy(() => import("./pages/Gallery"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));

const App = () => {
  const password = useSelector((state: RootState) => state.app.password);
  const menuIsOpen = useSelector((state: RootState) => state.app.menuIsOpen);
  document.body.style.overflow = menuIsOpen ? "hidden" : "";

  return (
    <BrowserRouter>
      {password === import.meta.env.VITE_KATELIOSECRET && <Menu />}

      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Redirige immédiatement vers /home si le mot de passe est correct */}
          {password === import.meta.env.VITE_KATELIOSECRET && (
            <Route path="/" element={<Navigate to="/home" />} />
          )}

          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/gallery/:idAlbum" element={<Gallery />} />
            <Route path="/Slider" element={<Slider />} />
          </Route>

          {/* Si le mot de passe est incorrect, affiche la page de connexion */}
          <Route path="/" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
