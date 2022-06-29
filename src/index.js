import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension';

import { Provider } from 'react-redux';

import App from './components/App';
import rootReducer from './reducers';

import 'bootstrap/dist/css/bootstrap.min.css'; 

const store = createStore(
  rootReducer,
  {},
  //composeWithDevTools(applyMiddleware(ReduxPromise))
  applyMiddleware(ReduxPromise));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("root")
);