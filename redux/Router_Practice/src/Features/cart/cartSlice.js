import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    RemoveFromCart: (state, action) => {
      console.log("Delete from cart is called");

      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        // const index = state.cart.findIndex(item=>item.id === action.payload.id)
        // state.cart.splice(index, 1);

      console.log("Item is Deleted from cart");
    },
  },
});

export const { AddToCart, RemoveFromCart } = cartSlice.actions;
export default cartSlice.reducer;
