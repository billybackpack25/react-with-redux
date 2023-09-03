// Thunk -> Action creator

import { productSlice } from './products';

const DB = process.env.REACT_APP_DB;

export const fetchCart = () => {
  return async (dispatch) => {
    const fetchCart = async () => {
      const response = await fetch(DB.concat('productCart.json'));
      if (!response.ok) throw new Error('Request not okay');
      const data = await response.json();
      return data;
    };

    try {
      const data = await fetchCart();

      if (data) {
        dispatch(
          productSlice.actions.setCart({
            // Counteract FireBase not saving empty lists
            items: data.items ?? [],
            ...data,
          })
        );
      }
    } catch (err) {
      // Show UI feedback dispatch
      console.log(err);
    }
  };
};

export const updateCart = (cart) => {
  return async (dispatch) => {
    const postCart = async () => {
      const response = await fetch(DB.concat('productCart.json'), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cart),
      });

      if (!response.ok) throw new Error('Request not okay');
      dispatch(productSlice.actions.setCart(cart));
    };

    try {
      await postCart();
    } catch (err) {
      // Show UI feedback dispatch
      console.log(err);
    }
  };
};
