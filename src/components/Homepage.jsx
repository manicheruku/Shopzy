import React from "react";

import Ads from "./Ads";
import Categories from "./Categories";
import Hero from "./Hero";
import Footer from "./Footer";

function Homepage() {
  return (
    <>
      <Hero />
      <Categories />
      <Ads />
      <Footer />
    </>
  );
}

export default Homepage;
