import { Route, Routes } from "react-router-dom";
import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import MensCategory from "./components/MensCategory";
import ProductPage from "./components/ProductPage";
import WomensCategory from "./components/WomensCategory";
import Homepage from "./components/Homepage";

function App() {
  return (
    <>
      <BrowserRouter basename="/Shopzy/">
        <Navbar />

        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/womensfashion" element={<WomensCategory />} />
            <Route path="/mensfashion" element={<MensCategory />} />
            <Route path="/products/:id" element={<ProductPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
