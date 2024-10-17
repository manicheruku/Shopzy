import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

function ProductPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;
  const { data, isLoaded, error } = useFetchData(url);
  const navigate = useNavigate();
  if (error) return <p>Error loading product details.</p>;
  if (isLoaded) return <p>Loading...</p>;
  console.log("Product ID:", id);
  console.log("Fetched Data:", data);
  console.log("Is Loaded:", isLoaded);
  console.log("Error:", error);
  if (!data || Object.keys(data).length === 0) {
    return <p>Product not found.</p>;
  }
  const handleBuyNow = () => {
    navigate("/payment", { state: { data } });
  };
  const addCart = (product) => {
    dispatch(addToCart(data));
    toast.success("Added to Cart");
  };
  return (
    <>
      <Toaster />
      <section className="w-full ">
        <div className="m-4 md:m-10 flex justify-center items-center flex-col gap-2">
          <h1 className="font-bold md:text-2xl text-lg text-orange-400 mb-4">
            {data.title}
          </h1>
          <img src={data.image} alt={data.title} className="w-auto h-48  o" />
          <p className="mt-4 text-center font-bold"> ₹{data.price}</p>
          <div className="flex items-center gap-1">
            <p>
              <FaStar />
            </p>
            <p className="font-semibold">{data.rating.rate} </p>
            <p className="text-orange-400">{data.rating.count} ratings</p>
          </div>
          <p className="mt-2 text-xs">{data.description}</p>
          <div className="flex gap-4">
            <button
              className="bg-orange-400 px-4 py-2 mt-4 rounded-lg hover:bg-orange-500"
              onClick={() => addCart(data)}
            >
              Add to Cart
            </button>
            <button
              className="bg-orange-400 px-4 py-2 mt-4 rounded-lg hover:bg-orange-500"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPage;
