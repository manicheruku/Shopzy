import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { BsFillHandbagFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { useSelector } from "react-redux";
import { HiOutlineHome } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";

function Navbar({ products }) {
  // const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();

  const cartItems = useSelector((state) => state.cart);
  const cartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

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
          <ul className="absolute bg-white shadow-md w-full max-h-48 overflow-y-auto mt-1 md:mt-2.5 z-50 top-8">
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

      {/* <section className="lg:hidden">
        <button onClick={() => setIsMenuOpened(!isMenuOpened)}>
          <CiMenuFries size={22} />
        </button>

        {isMenuOpened && (
          <ul className="flex flex-col items-center gap-4 bg-white w-[200px] h-auto absolute top-20 right-0 shadow-lg p-4 z-10">
            <button className="self-end" onClick={() => setIsMenuOpened(false)}>
              <MdOutlineCancel size={22} />
            </button>
            <Link to={"/cart"}>
              <li className="my-hover-class">
                <BsFillHandbagFill />
              </li>
            </Link>
            <li className="my-hover-class">
              <FaRegHeart />
            </li>
            <li className="my-hover-class">Profile</li>
            <Link to={"/about"}>
              <li
                className="my-hover-class"
                onClick={() => setIsMenuOpened(false)}
              >
                <FcAbout />
              </li>
            </Link>
            <li className="my-hover-class">Sign In</li>
          </ul>
        )}
      </section> */}

      <section className="hidden lg:flex gap-10">
        <ul className="flex gap-10 text-white items-center">
          <Link to={"/cart"}>
            <li className="flex gap-0.5">
              <BsFillHandbagFill size={20} />
              {cartQuantity}
            </li>
          </Link>
          <li>
            <FaRegHeart size={20} />
          </li>
          <Link to={"/about"}>
            <li>
              <FcAbout size={20} />
            </li>
          </Link>
        </ul>
        <div>
          <button className="text-white bg-orange-500 px-3 py-2 rounded-full text-right hover:bg-orange-400">
            Sign In
          </button>
        </div>
      </section>
      <section className="bg-slate-100 fixed bottom-0 left-0 right-0 w-full z-50 lg:hidden">
        <div className="flex justify-around py-3">
          <ul className="flex justify-between w-full text-center">
            <li className="flex-1 flex justify-center">
              <Link to={"/"}>
                <HiOutlineHome size={24} />
              </Link>
            </li>
            <li className="flex-1 flex justify-center gap-1">
              <Link to={"/cart"} className="flex items-center">
                <BsFillHandbagFill size={24} />
                <span>{cartQuantity}</span>
              </Link>
            </li>
            <li className="flex-1 flex justify-center">
              <Link to={"/wishlist"}>
                <FaRegHeart size={24} />
              </Link>
            </li>
            <li className="flex-1 flex justify-center">
              <Link to={"/profile"}>
                <CgProfile size={24} />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
