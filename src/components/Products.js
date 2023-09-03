import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Products.module.css';
import { productActions } from '../store/slices/products';

const Products = () => {
  const {
    product,
    cart: { totalCost },
  } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { addProduct, removeProduct } = productActions;

  const handleAddToCart = (id) => dispatch(addProduct(id));
  const handleRemoveFromCart = (id) => dispatch(removeProduct(id));

  const currency = Intl.NumberFormat('en-GB', {
    currency: 'GBP',
    style: 'currency',
  });

  const allProducts = product.map((item) => (
    <Book
      key={item.id}
      {...item}
      onAddToCart={handleAddToCart}
      onRemoveFromCart={handleRemoveFromCart}
    />
  ));

  return (
    <main className={classes.products}>
      <section>
        <h3>Products</h3>
        {allProducts}
      </section>
      <section>
        <h4>Total: {currency.format(totalCost)}</h4>
      </section>
    </main>
  );
};

function Book({ id, name, onAddToCart, onRemoveFromCart }) {
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={() => onAddToCart(id)}>Add</button>
      <button onClick={() => onRemoveFromCart(id)}>Remove</button>
    </div>
  );
}

export default Products;
