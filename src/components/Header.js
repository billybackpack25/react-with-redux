import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authActions } from '../store/slices/auth';

const Header = () => {
  const dispatch = useDispatch();
  const { itemCount } = useSelector((state) => state.products.cart);
  const { logout } = authActions;

  const badge = (num) => <div className={classes.badge}>{num}</div>;

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <span>My Products {badge(itemCount)}</span>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
