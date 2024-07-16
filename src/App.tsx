import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./hooks/useProtectedRoutes";
import Footer from "./layouts/Footer";
import Menu from "./layouts/Menu";
import Error from "./pages/Error";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { RootState } from "./store";

const App = () => {
  const password = useSelector((state: RootState) => state.app.password);

  return (
    <BrowserRouter>
      {password === import.meta.env.VITE_KEDEMO && <Menu />}

      <Routes>
        {/* Redirige immédiatement vers /home si le mot de passe est correct */}
        {password === import.meta.env.VITE_KEDEMO && (
          <Route path="/" element={<Navigate to="/home" />} />
        )}

        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/gallery/:idAlbum" element={<Gallery />} />
          <Route path="*" element={<Error />} />
        </Route>

        {/* Si le mot de passe est incorrect, affiche la page de connexion */}
        <Route path="/" element={<Login />} />
      </Routes>
      {password === import.meta.env.VITE_KEDEMO && <Footer />}
    </BrowserRouter>
  );
};

export default App;
