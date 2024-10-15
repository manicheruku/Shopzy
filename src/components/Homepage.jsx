import React from "react";

import Ads from "./Ads";
import Categories from "./Categories";
import Hero from "./Hero";

function Homepage() {
  return (
    <>
      <Hero />
      <Categories />
      <Ads />
    </>
  );
}

export default Homepage;
