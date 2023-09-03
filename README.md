# react-with-redux

Simple react app working with redux.

- auth
- counter

Counter also has a class based implementation, but it's not used. It serves as an example.

# Other branches

## async-with-redux

- Added a product and cart section to show adding/removing items from a cart, while updating firebase with the cart so that the cart persists on reloads. I do this by using async code withing an `action creator`. I have not bothered with error states, this is just an example of making an async function work with redux.

- In order to run this, you'll need an environment variable `REACT_APP_DB`, which will be the firebase real time database URL.

- Async with redux

  Since Reducers must be `pure`, (same input = always same output), no side-effects, no async code.

  So, where should `side-effect `code live if we do want to dispatch an action that calls an api?

  The answer is, it can live in `2 places`, in the `Component (useEffect)`, and then only dispatch once the side-effect is done.

  Or we can write an `action creator function`, solution from redux.

This branch uses `action creator functions` inside of the product thunk files.
I've not implemented a notification UI to show if the async was successful or not, so the app will look like it's still working, even if the network is down.
