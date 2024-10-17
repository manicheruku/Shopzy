import React, { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import { FaStar } from "react-icons/fa";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import toast, { Toaster } from "react-hot-toast";

function WomensCategory() {
  const dispatch = useDispatch();
  const url = "https://fakestoreapi.com/products/category/women's%20clothing";
  let { data, isLoaded, error } = useFetchData(url);
  const [Wishlist, setWishlist] = useState([]);
  const globalState = useSelector((state) => console.log(state));
  useState(() => {
    console.log(globalState);
  }, []);

  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Added to Cart");
  };

  const handleWishlist = (id) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.includes(id)) {
        return prevWishlist.filter((productId) => productId !== id);
      } else {
        return [...prevWishlist, id];
      }
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Toaster />
      {/* Pass the fetched products data to Navbar */}
      <Navbar products={data} />

      <main className="m-4 md:m-10 ">
        <p className="font-bold text-2xl text-orange-400 mb-6">
          Women's Category
        </p>
        <section className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {isLoaded ? (
            <p className="text-slate-500 flex justify-center items-center h-1/2">
              Loading...
            </p>
          ) : (
            data.map((product) => (
              <div
                key={product.id}
                className="bg-slate-100 p-4 flex flex-row md:flex-col justify-start items-start w-full h-auto"
              >
                {/* Image Section */}

                <div className="flex-shrink-0 w-1/3 h-40 md:w-full">
                  <Link to={`/products/${product.id}`} className="">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-contain w-full h-full"
                    />
                  </Link>
                </div>

                {/* Details Section */}
                <div className="flex flex-col justify-start w-2/3 md:w-full ml-4 md:ml-0 mt-0 md:mt-4">
                  <p className="text-xs md:text-lg w-full overflow-hidden text-ellipsis whitespace-nowrap">
                    {product.title}
                  </p>

                  <p className="flex gap-1 items-center">
                    {product.rating.rate} <FaStar /> ({product.rating.count})
                  </p>

                  <p className="bg-red-600 w-fit text-white px-2 py-1 text-sm">
                    Great Indian Festival
                  </p>
                  <p className="font-bold">₹{product.price}</p>
                  <p>Free Delivery</p>
                  <p>7 days replacement</p>
                  <div className="flex gap-2 items-center ">
                    <button
                      className="bg-orange-400 px-4 py-2 mt-2 rounded-lg w-fit"
                      onClick={() => addCart(product)}
                    >
                      Add to cart
                    </button>
                    <button onClick={() => handleWishlist(product.id)}>
                      {Wishlist.includes(product.id) ? (
                        <IoMdHeart size={20} color="red" />
                      ) : (
                        <IoMdHeartEmpty size={20} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </section>
      </main>
    </>
  );
}

export default WomensCategory;
