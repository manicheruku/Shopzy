import { Route, Routes } from "react-router-dom";
import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import MensCategory from "./components/MensCategory";

import WomensCategory from "./components/WomensCategory";
import Homepage from "./components/Homepage";

function App() {
  return (
    <>
      <BrowserRouter basename="/Shopzy/">
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/womensfashion" element={<WomensCategory />} />
          <Route path="/mensfashion" element={<MensCategory />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
