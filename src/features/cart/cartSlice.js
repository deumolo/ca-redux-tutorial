import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';
const initialState = {
  cartItems: [...cartItems],
  amount: [...cartItems].length,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
    },
    deleteItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== payload);
    },
    incrementItem: (state, { payload }) => {
      console.log("incremenet")
      const item = state.cartItems.find((item) => item.id === payload);
      item.amount++;
    },
    decrementItem: (state, { payload }) => {
      console.log("decrement")
      const item = state.cartItems.find((item) => item.id === payload);
      if (item.amount === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== payload);
      } else {
        item.amount--;
      }
    },
    calculateTotals: (state, { payload }) => {
      let itemsInCart = 0;
      let total = 0;

      state.cartItems.forEach((item) => {
        itemsInCart ++;
        total += item.amount * item.price;
      });

      state.amount = itemsInCart;
      state.total = total;
    },
  },
});

// console.log(cartSlice);

export const {
  clearCart,
  deleteItem,
  incrementItem,
  decrementItem,
  calculateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
