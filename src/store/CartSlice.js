import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    myCart: [],
    currency: "USD",
    totalItems: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.myCart.find((item) => item.id === newItem.id);

      state.totalItems++;
      if (!existingItem) {
        state.myCart.push({ ...newItem, quantity: 1 });
      } else {
        existingItem.quantity++;
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

        state.totalItems--;
      } else {
        state.myCart = state.myCart.filter((item) => item.id !== id);

        state.totalItems--;
      }
    },
    selectCurrency(state, action) {
      const chosenCurrency = action.payload;
      state.currency = chosenCurrency;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
