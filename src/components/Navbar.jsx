import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";

function Navbar() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <nav className="bg-orange-400 h-20 w-full flex items-center justify-around relative">
      <section>
        <img src="loogo.gif" alt="" className="sm:w-32 w-16 bg-transparent" />
      </section>

      <section className="flex justify-center items-center relative">
        <input
          type="text"
          placeholder="search here"
          className=" border-solid border-orange-400 outline-none pl-2 pr-10 focus:shadow-xl rounded-3xl h-7"
        />
        <button className="absolute right-2 h-5 w-5">
          <CiSearch />
        </button>
      </section>

      <section className="lg:hidden">
        <button onClick={() => setIsMenuOpened(!isMenuOpened)}>
          <CiMenuFries size={22} />
        </button>

        {isMenuOpened && (
          <ul className="flex flex-col items-center gap-4 bg-white w-[200px] h-auto absolute top-20 right-0 shadow-lg p-4 z-10">
            <button className="self-end" onClick={() => setIsMenuOpened(false)}>
              <MdOutlineCancel size={22} />
            </button>
            <li className="my-hover-class  ">Cart</li>
            <li className="my-hover-class  ">Wishlist</li>
            <li className="my-hover-class  ">Profile</li>
            <li className="my-hover-class  ">About Us</li>
            <li className="my-hover-class  ">Sign In</li>
          </ul>
        )}
      </section>
      <section className="hidden lg:flex gap-10">
        <ul className="flex gap-10 text-white">
          <li>Cart</li>
          <li>Wishlist</li>
          <li>Contact Us</li>
          <li>Sign In</li>
        </ul>
      </section>
    </nav>
  );
}

export default Navbar;
