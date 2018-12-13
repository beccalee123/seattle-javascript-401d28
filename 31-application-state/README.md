![cf](http://i.imgur.com/7v5ASc8.png) Application State
=======================================================

## Learning Objectives

**Students will be able to ...**

* Manage state at an application level using a Redux Store
* Understand the basic roles of Actions and Reducers
* Implement the core Redux Boilerplating required to participate in a store-based state managed application

## Outline
* :05 **Housekeeping/Recap**
* :30 **Whiteboard/DSA Review**
* :15 **Lightning Talk**
* Break
* :30 **CS/UI Concepts** -
* :20 **Code Review**
* Break
* :60 **Main Topic**

## UI Concept:
* Component Styling
* `<Header />` and `<Footer />` components

## Main Topic:
* Global State
* Redux Stores
* Actions and Reducers
* **[DEMO](https://codesandbox.io/s/2p30m03o9n)** (explained below)

**Store**

Ultimately, the "store" is where your application state is, well, stored.

React applications with Redux dispatch "actions" (like an event) with "payload" (data). An action creator function as shown below always returns an action object with the action type to perform and the data to perform it with.

```javascript
// actions.js
const doTheGetThing = payload => {
  return {
    type: 'CHANGEIT',
    payload: payload,
  };
};

```

When an action is dispatched, a reducer responds to it, and receives that payload, where it then operates on state using it.

This simple example starts off the application with a state where `foo` = `bar` ... and whenever the `CHANGEIT` action happens, it sets the value of `foo` to either be the data (payload) you sent it, or a random number.  A reducer always returns the new state.  Multiple reducers, if loaded into the store, can respond to the same actions.

```javascript
let initialState = { foo: 'bar' };

const myReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'CHANGEIT':
      return { foo: payload || Math.random() };

    default:
      return state;
  }
};
```

We use a store to "bring it all together" ... in the store, you declare what middleware you may need and the reducers that you'll use to manage your state data

```javascript
import { createStore, combineReducers, applyMiddleware } from 'redux';

import logger from './middleware/logger.js';
import doAllTheThings from './reducers.js';

let reducers = combineReducers({
  someStuff: doAllTheThings,
});

export default () => createStore(reducers, applyMiddleware(reporter));
```

Components subscribe to the store and get to use actions with a bit of boilerplate code ...

In this example, when the div is clicked, it runs an action method called `handleGet()`. This method is declared in the `mapDispatchToProps` function as a pointer to the actions.doTheGetThing method. When you do this, you get to use `this.props.handleGet` as a method. That's what the mapper does for you, along with mapping the reducers's state to `this.props` with the key that you specified.

```javascript
import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div onClick={this.props.handleGet}>
        {this.props.stuff.foo}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stuff: state.someStuff,
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleGet: () => dispatch(actions.doTheGetThing()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

```
