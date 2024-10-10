import React from "react";
import { MdArrowDropDownCircle } from "react-icons/md";

function Hero() {
  return (
    <>
      <section className="">
        <div className="flex lg:justify-end justify-center items-center w-full bg-purple-400">
          <div className="text-lg lg:text-xl mb-8 max-w-lg">
            <p className="sm:text-3xl text-xl text-center font-bold">
              Discover the best products, tailored for you.
            </p>
            <button className="bg-orange-400 px-2 py-1 flex  items-center gap-1 hover:bg-orange-500 rounded-lg text-white mt-4 ">
              Explore <MdArrowDropDownCircle />
            </button>
          </div>
          <img src="hero.png" alt="" className="lg:w-[500px] w-[300px]" />
        </div>
      </section>
    </>
  );
}

export default Hero;
