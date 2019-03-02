import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer  from './reducers';
import { App } from './App';

// const someMiddleWear = (state: any) => {
//   return (next: any) => {
//     console.log('next', next);
//     return (action: any) => {
//       console.log('ACTION>>>', action);
//       next(action);
//     }
//   }
// }

import './index.scss';
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(rootReducer, compose(
  applyMiddleware(reduxThunk),
  composeEnhancers()
));

ReactDOM.render(<Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));
