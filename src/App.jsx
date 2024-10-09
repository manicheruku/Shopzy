import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Ads from "./components/Ads";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <Categories />
      <Ads />
    </>
  );
}

export default App;
