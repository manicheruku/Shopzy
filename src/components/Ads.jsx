import React from "react";
import { VscCoverage } from "react-icons/vsc";

function Ads() {
  return (
    <>
      <section className="my-20 mx-4 lg:ml-10 lg:mr-10">
        <div className="w-full flex justify-around bg-[#045641] h-40 gap-2 px-8 py-4 flex-nowrap">
          <div className="flex flex-col gap-2 min-w-[200px]">
            <div className="flex items-center text-white">
              <VscCoverage />
              <p className="text-xs">AUTHENTICITY GUARANTEE</p>
            </div>
            <p className="font-bold text-white lg:text-3xl text-xl">
              Shop top brands for under 2000
            </p>
            <p className="lg:text-xs text-[8px] text-white">
              Score fresh finds from New balance, Palm Angels, and more.
            </p>
            <button className="bg-white rounded-2xl w-[80px] lg:w-[100px] px-2 py-1 text-[#045843]">
              Jump in
            </button>
          </div>
          <div className="flex gap-4 items-center flex-nowrap">
            <img src="shoes.png" className="lg:w-32 sm:w-20 w-10" alt="" />
            <img src="t-shirt.png" className="lg:w-32 sm:w-20 w-10" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Ads;
