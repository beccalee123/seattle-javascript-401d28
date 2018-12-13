![cf](http://i.imgur.com/7v5ASc8.png) Daily Review
==================================================

**Examine the code below**

* What is happening with: ` url => disaptch =>` ?
* Break it down to a non-arrow function
* Explain how this works with thunk middlware (below)

```

// actions.js
export const get = url => dispatch => {
  return api.get(url).then(data => {
    dispatch(runGet(data));
  });
};

```

---

```
// middleware/thunk.js
export default store => next => action =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action);

```

---

https://repl.it/@johncokos/Redux-Thunk-Middleware-Demo



