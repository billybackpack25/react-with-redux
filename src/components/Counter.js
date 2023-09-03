import classes from './Counter.module.css';
import { counterActions } from '../store/slices/counter';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();

  const { counter, show } = useSelector((state) => state.counter);
  const { decrement, increment, toggle } = counterActions;

  const toggleCounterHandler = () => dispatch(toggle());

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{show && counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(increment(5))}>Increase by 5</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </main>
  );
};

export default Counter;

// import { connect } from 'react-redux';
// import { Component } from 'react';

// class Counter extends Component {
//   handleIncrement() {
//     this.props.increment();
//   }

//   handleDecrement() {
//     this.props.decrement();
//   }

//   handleToggleCounter() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <button onClick={this.handleToggleCounter.bind(this)}>
//           Toggle Counter
//         </button>
//         <button onClick={this.handleIncrement.bind(this)}>Increment</button>
//         <button onClick={this.handleDecrement.bind(this)}>Decrement</button>
//       </main>
//     );
//   }
// }

// /** Takes the app state as a prop, and passes to class as props */
// const mapStateToProps = (state) => ({
//   counter: state.counter,
// });

// const mapDispatchToProps = (dispatch) => ({
//   increment: () => dispatch({ type: INCREMENT }),
//   decrement: () => dispatch({ type: DECREMENT }),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
