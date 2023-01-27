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
      const existingItem = state.myCart.find((item) => item.id === newItem.id);

      state.totalItems++;
      if (!existingItem) {
        state.myCart.push({ ...newItem, quantity: 1 });
        state.totalPrice = state.totalPrice + newItem.price;
      } else {
        existingItem.quantity++;
        state.totalPrice += existingItem.price;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.myCart.find((item) => item.id === id);
      if (!existingItem) {
        return;
      }
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        state.totalPrice -= existingItem.price;
        state.totalItems--;
      } else {
        state.myCart = state.myCart.filter((item) => item.id !== id);
        state.totalPrice -= existingItem.price;
        state.totalItems--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
