import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  open: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggle: (state) => {
      state.open = !state.open;
    },
  },
});

export const { toggle } = modalSlice.actions;

export default modalSlice.reducer;
