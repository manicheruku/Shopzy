import { Route, Routes } from "react-router-dom";
import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import MensCategory from "./components/MensCategory";
import ProductPage from "./components/ProductPage";
import WomensCategory from "./components/WomensCategory";
import Homepage from "./components/Homepage";
import About from "./components/About";
import PaymentPage from "./components/PaymentPage";
import PaymentSuccess from "./components/PaymentSuccess";
import Cart from "./components/Cart";

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
            <Route path="/about" element={<About />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
