import { useDispatch } from 'react-redux';
import classes from './Auth.module.css';
import { authActions } from '../store/slices/auth';

const Auth = () => {
  const dispatch = useDispatch();
  const { login } = authActions;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(login(e.target.value));
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleOnSubmit}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
