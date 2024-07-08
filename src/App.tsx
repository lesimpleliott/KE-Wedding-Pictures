import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery/:idAlbum" element={<Gallery />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
