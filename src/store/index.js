import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter';
import { authSlice } from './slices/auth';
import { productSlice } from './slices/products';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
    products: productSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export default store;
