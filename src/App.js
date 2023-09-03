import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';
import Products from './components/Products';
import UserProfile from './components/UserProfile';
import { fetchCart, updateCart } from './store/slices/productsThunks';

let initialLoad = true;

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialLoad) {
      initialLoad = false;
      return;
    }
    dispatch(updateCart(cart));
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  console.log(cart);
  return (
    <>
      <Header />
      {isAuthenticated ? <UserProfile /> : <Auth />}
      <Counter />
      <Products />
    </>
  );
}

export default App;
