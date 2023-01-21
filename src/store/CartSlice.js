import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    myCart: [],
    currency: "",
    totalItems: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem  = state.myCart.find((item => item.id === newItem.id));
      state.totalItems++;
      if (!existingItem) {
        state.myCart.push({ ...newItem, quantity: 1 });
      } else {
        existingItem.quantity++
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
