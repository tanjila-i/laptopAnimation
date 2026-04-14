import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductHome from "./pages/ProductHome";
import ProductAbout from "./pages/ProductAbout";
import ProductBuy from "./pages/ProductBuy";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductHome />} />
        <Route path="/about" element={<ProductAbout />} />
        <Route path="/buy" element={<ProductBuy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
