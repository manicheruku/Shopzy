import React from "react";
import { VscCoverage } from "react-icons/vsc";

function Ads() {
  return (
    <>
      <section className="my-10 mx-2 sm:mx-4 lg:mx-10">
        <div className="w-full flex flex-col sm:flex-row justify-around items-center bg-[#045641] h-auto sm:h-40 gap-4 sm:gap-2 p-4 sm:px-8 sm:py-4">
          <div className="flex flex-col gap-2 min-w-[180px] sm:min-w-[200px]">
            <div className="flex items-center text-white">
              <VscCoverage />
              <p className="text-xs">AUTHENTICITY GUARANTEE</p>
            </div>
            <p className="font-bold text-white text-lg sm:text-xl lg:text-3xl">
              Shop top brands for under 2000
            </p>
            <p className="text-[10px] sm:text-xs text-white">
              Score fresh finds from New balance, Palm Angels, and more.
            </p>
            <button className="bg-white rounded-md sm:rounded-2xl sm:w-[80px] w-[60px] lg:w-[100px] sm:px-2 sm:py-1 px-1 text-[#045843] text-[10px] sm:text-xs">
              Jump in
            </button>
          </div>
          <div className="flex gap-2 sm:gap-4 items-center">
            <img
              src="shoes.png"
              className="w-12 sm:block hidden sm:w-20 lg:w-32 h-auto"
              alt="Shoes"
            />
            <img
              src="t-shirt.png"
              className="w-12 hidden sm:w-20 lg:w-32 sm:block h-auto"
              alt="T-shirt"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Ads;
