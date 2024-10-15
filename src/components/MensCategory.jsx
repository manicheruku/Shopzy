import React from "react";
import useFetchData from "../hooks/useFetchData";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function MensCategory() {
  const url = "https://fakestoreapi.com/products/category/men's%20clothing";
  let { data, isLoaded, error } = useFetchData(url);
  console.log(data, error, isLoaded);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar products={data} />
      <main className="m-4 md:m-10">
        <p className="font-bold text-2xl text-orange-400 mb-6">
          Men's Category
        </p>
        <section className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {data.map((product) => (
            <Link to={`/products/${product.id}`} onClick={() => setSearch("")}>
              <div className="bg-slate-300 p-4 flex flex-row md:flex-col justify-start items-start w-full h-auto">
                {/* Image Section */}
                <div className="flex-shrink-0 w-1/3 h-40 md:w-full">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain w-full h-full"
                  />
                </div>

                {/* Details Section */}
                <div className="flex flex-col justify-start w-2/3 md:w-full ml-4 md:ml-0 mt-0 md:mt-4">
                  {/* Product Title with Ellipsis */}
                  <p className="text-xs md:text-lg w-full overflow-hidden text-ellipsis whitespace-nowrap">
                    {product.title}
                  </p>

                  {/* Rating */}
                  <p className="flex gap-2">
                    {product.rating.rate} <FaStar /> ({product.rating.count})
                  </p>

                  {/* Other Info */}
                  <p className="bg-red-600 w-fit text-white px-2 py-1 text-sm">
                    Great Indian Festival
                  </p>
                  <p>₹{product.price}</p>
                  <p>Free Delivery</p>
                  <p>7 days replacement</p>

                  {/* Add to Cart Button */}
                  <button className="bg-orange-400 px-4 py-2 mt-2 rounded-lg w-fit">
                    Add to cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
      <div className="h-screen">
        {isLoaded && (
          <p className="text-slate-500 flex justify-center items-center h-1/2">
            Loading...
          </p>
        )}
      </div>
    </>
  );
}

export default MensCategory;
