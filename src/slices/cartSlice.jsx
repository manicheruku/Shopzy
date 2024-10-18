import { createSlice } from "@reduxjs/toolkit";

const initialData = [];
// Utility function to round to two decimal places
const roundToTwoDecimals = (value) => {
  return Math.round((value + Number.EPSILON) * 100) / 100;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialData,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        // If the product exists, just update the quantity
        existingProduct.quantity += 1;
        // Update the total price based on the quantity and unit price
        existingProduct.totalPrice =
          Math.round(
            existingProduct.unitPrice * existingProduct.quantity * 100
          ) / 100;
      } else {
        // If the product doesn't exist, add it with a quantity of 1 and store unit price separately
        state.push({
          id: action.payload.id,
          title: action.payload.title,
          unitPrice: action.payload.price, // Store unit price separately
          totalPrice: action.payload.price, // Initial total price is the same as the unit price
          image: action.payload.image,
          quantity: 1,
        });
      }
    },

    deleteFromCart: (state, action) => {
      const existingProduct = state.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          // Decrease the quantity and update the total price
          existingProduct.quantity -= 1;
          existingProduct.totalPrice =
            Math.round(
              (existingProduct.totalPrice -
                existingProduct.unitPrice +
                Number.EPSILON) *
                100
            ) / 100;
        } else {
          // If quantity is 1, remove the product from the cart
          return state.filter((product) => product.id !== action.payload.id);
        }
      }
    },
  },
});
export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
