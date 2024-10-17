import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCircleCheck } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { deleteFromCart } from "../slices/cartSlice";
import { useNavigate } from "react-router";

function Cart() {
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Calculate total price
  let totalPrice = cartData.reduce((acc, product) => {
    return acc + (product.price || 0); // Ensure price exists
  }, 0);

  const deletecart = (id) => {
    dispatch(deleteFromCart({ id }));
  };

  // const handleBuyNow = () => {
  //   navigate("/payment", {
  //     state: { totalPrice, cartData }, // Pass relevant cart data
  //   });
  // };

  return (
    <main>
      <section className="m-5 md:m-10">
        {cartData.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="flex flex-col gap-2">
            <p className="text-lg md:text-2xl font-medium">
              Subtotal ₹{totalPrice} only
            </p>
            <p className="text-xs md:text-lg">EMI Available</p>
            <p className="flex gap-0.5 text-green-600 font-semibold">
              <FaCircleCheck size={25} color="green" />
              Your order is eligible for FREE Delivery. Choose FREE Delivery
              option at checkout.
            </p>
            <button
              className="w-full md:w-1/4 rounded-full bg-orange-400 font-medium px-2 py-2"
              // onClick={handleBuyNow}
            >
              {`Proceed to Buy (${cartData.length} ${
                cartData.length > 1 ? "items" : "item"
              })`}
            </button>
            <hr className="mt-3" />
          </div>
        )}
      </section>
      <section className="m-5 md:m-10 grid grid-col-1 md:grid-cols-3">
        {cartData.map((cartItem) => (
          <div
            className="border bg-slate-100 p-4 flex flex-row md:flex-col justify-start items-center w-full h-auto "
            key={cartItem.id}
          >
            <div className="flex-shrink-0 w-1/3 h-40 md:w-full">
              <img
                src={cartItem.image}
                alt=""
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-start w-2/3 md:w-full ml-4 md:ml-0 mt-0 md:mt-4">
              <p className="text-xs md:text-lg w-full overflow-hidden text-ellipsis whitespace-nowrap">
                {cartItem.title}
              </p>
              <p className="font-bold">
                <span className="text-sm align-top">₹</span>
                {cartItem.price}
              </p>
              <p className="text-sm md:text-lg">Eligible for FREE Shipping</p>
              <p className="text-green-600">In stock</p>
              <p className="text-blue-900">10 days Returnable</p>
              <div className="flex w-full gap-4">
                <div className="w-1/2 flex justify-around items-center bg-white rounded-full">
                  <button onClick={() => deletecart(cartItem.id)}>
                    <MdDelete size={18} />
                  </button>
                  <p>{cartItem.quantity || 1}</p>
                  <button>
                    <FaPlus size={14} />
                  </button>
                </div>
                <button
                  className="bg-white rounded-full md:px-3 md:py-2 px-2 py-1.5"
                  onClick={() => deletecart(cartItem.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Cart;
