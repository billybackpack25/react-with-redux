import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter';
import { authSlice } from './slices/auth';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export default store;
