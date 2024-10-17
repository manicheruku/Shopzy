import { createSlice } from "@reduxjs/toolkit";

const initialData = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialData,
  reducers: {
    addToCart: (state, action) => {
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        price: action.payload.price,
        image: action.payload.image,
      });
    },
    deleteFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
  },
});
export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
