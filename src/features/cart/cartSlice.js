import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

//Example of createAsyncThunk function using fetch
/* export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}); */

//createAsyncThunk function using axios
export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (_, thunkApi) => {
    try {
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

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
      const item = state.cartItems.find((item) => item.id === payload);
      item.amount++;
    },
    decrementItem: (state, { payload }) => {
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
        itemsInCart++;
        total += item.amount * item.price;
      });

      state.amount = itemsInCart;
      state.total = total;
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state, action) => {
      state.isLoading = false;
      console.log(action);
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
