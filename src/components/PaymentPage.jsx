import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.data; // Getting product details from state

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePayment = (e) => {
    e.preventDefault();

    // Simulating payment process here
    setTimeout(() => {
      // On successful payment, redirect to success page
      navigate("/payment-success");
    }, 1000); // Simulating delay
  };

  return (
    <div className="p-10">
      <h1>Payment Page</h1>
      <p>Product: {data.title}</p>
      <p>Price: ₹{data.price}</p>

      <form onSubmit={handlePayment}>
        <div>
          <label>Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleInputChange}
            required
            className="border p-2"
          />
        </div>
        <div>
          <label>Expiry Date:</label>
          <input
            type="text"
            name="expiryDate"
            value={paymentDetails.expiryDate}
            onChange={handleInputChange}
            required
            className="border p-2"
          />
        </div>
        <div>
          <label>CVV:</label>
          <input
            type="text"
            name="cvv"
            value={paymentDetails.cvv}
            onChange={handleInputChange}
            required
            className="border p-2"
          />
        </div>

        <button type="submit" className="bg-green-500 px-4 py-2 mt-4">
          Pay ₹{data.price}
        </button>
      </form>
    </div>
  );
}

export default PaymentPage;
