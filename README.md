
# custom-react-redux

Custom-react-redux is a predictable state container for JavaScript apps.
You can use custom-react-redux together with React.


## Installation

Install custom-react-redux with npm

```bash
  npm install custom-react-redux
```
or yarn
```bash
  yarn add custom-react-redux
```

## Basic Example

### Writing reducer

Reducers are functions that take the current state and an action as arguments, and return a new state result. In other words, (state, action) => newState.

```bash
import {AnyAction} from "custom-react-redux";

export const counterReducer = (state: number = 0, action: AnyAction): number  => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

```

### combineReducers(reducers)

The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.

```bash
import {combineReducers} from "custom-react-redux";
import {counterReducer} from "./counterReducer";

const rootReducer = combineReducers({
    counter: counterReducer
})

```

### createStore(reducer, initialState)

//Creates a store that holds the complete state tree of your app. There should only be a single store in your app.

```bash
import {createStore} from "custom-react-redux";

export const store = createStore(rootReducer, {
    counter: 0
})
```
### Provider

Added Provider into your app

```bash
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "custom-react-redux";
import {store} from "./store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
```
### useDispatch()

This hook returns a reference to the dispatch function from the store. You may use it to dispatch actions as needed.

```bash
import {useDispatch} from "custom-react-redux";


const dispatch = useDispatch()
dispatch({type: 'INCREMENT'})
```

### useSelector<StateType>()

```bash
import {useSelector} from "custom-react-redux";


 const state = useSelector<StateType>()
```