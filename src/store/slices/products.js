import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  product: [
    { id: 1, name: 'Harry Potter 1', amount: 1, price: 11 },
    { id: 2, name: 'Harry Potter 2', amount: 1, price: 12 },
  ],
  cart: {
    items: [],
    itemCount: 0,
    totalCost: 0,
  },
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCart(state, { payload }) {
      state.cart = payload;
    },
    addProduct(state, { payload }) {
      const product = state.product.find(({ id }) => id === payload);
      const item = state.cart.items.find(({ id }) => id === product.id);
      if (item) {
        item.amount += 1;
      } else {
        state.cart.items.push(product);
      }
      state.cart.totalCost += product.price;
      ++state.cart.itemCount;
    },
    removeProduct(state, { payload }) {
      const item = state.cart.items.find(({ id }) => id === payload);
      if (item) {
        state.cart.totalCost -= item.price;
        if (item.amount > 0) {
          item.amount -= 1;
        }
        if (item.amount === 0) {
          state.cart.items.splice(state.cart.items.indexOf(item), 1);
        }
        if (state.cart.itemCount > 0) {
          --state.cart.itemCount;
        }
      }
    },
  },
});

export const productActions = productSlice.actions;
