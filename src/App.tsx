import { BrowserRouter, Route, Routes } from "react-router-dom";
import GalleryPhotos from "./layouts/GalleryPhotos";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoutes from "./utils/ProtectedRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<GalleryPhotos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
