import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";

function Navbar({ products }) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      if (search) {
        const filtered = products.filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredProducts(filtered);
      } else {
        setFilteredProducts([]);
      }
    }
  }, [search, products]);

  return (
    <nav className="bg-orange-400 h-20 w-full flex items-center justify-around fixed top-0 left-0 z-50">
      <section>
        <Link to="/">
          <img
            src="loogo.gif"
            alt="logo"
            className="sm:w-32 w-16 bg-transparent"
          />
        </Link>
      </section>

      <section className="flex justify-center items-center relative">
        <input
          type="text"
          placeholder="Search here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-solid border-orange-400 outline-none pl-4 pr-10 focus:shadow-xl rounded-3xl h-7 lg:h-10"
        />
        <button className="absolute right-2 h-5 w-5">
          <CiSearch />
        </button>

        {/* Display filtered product list below the search bar */}
        {filteredProducts.length > 0 && (
          <ul className="absolute bg-white shadow-md w-full max-h-48 overflow-y-auto mt-1 z-50 top-8">
            {filteredProducts.map((product) => (
              <li
                key={product.id}
                className="p-2 hover:bg-gray-200 text-sm cursor-pointer"
              >
                <Link
                  to={`/products/${product.id}`}
                  onClick={() => setSearch("")}
                >
                  {product.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
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
            <li className="my-hover-class">Cart</li>
            <li className="my-hover-class">Wishlist</li>
            <li className="my-hover-class">Profile</li>
            <li className="my-hover-class">About Us</li>
            <li className="my-hover-class">Sign In</li>
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
