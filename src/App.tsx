import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<div>Home</div>} />
        <Route path="/gallery" element={<div>gallery</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
