import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  show: true,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state, action) {
      state.counter +=
        (typeof action.payload === 'number' && action.payload) || 1;
    },
    decrement(state, action) {
      state.counter -=
        (typeof action.payload === 'number' && action.payload) || 1;
    },
    toggle(state) {
      state.show = !state.show;
    },
  },
});

export const counterActions = counterSlice.actions;
