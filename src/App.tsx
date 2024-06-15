import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BurgerButton from "./components/menu/BurgerButton";
import Menu from "./components/menu/Menu";
import ProtectedRoutes from "./utils/ProtectedRoutes";
const GalleryPhotos = lazy(() => import("./layouts/GalleryPhotos"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));

const App = () => {
  return (
    <BrowserRouter>
      <>
        <BurgerButton />
        <Menu />
      </>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/gallery" element={<GalleryPhotos />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
