import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { OrderLine, AuthStore, ImagesStore } from './store';
import { reaction, configure } from 'mobx';
import { Provider } from 'mobx-react';
import { UnsplashApi } from './api/unsplash';

configure({enforceActions: 'always'});

const testStore = new OrderLine();
const apis = {
  unsplash: new UnsplashApi()
};

const stores = {
  authStore: new AuthStore(),
  orderStore: new OrderLine(),
  imagesStore: new ImagesStore(apis.unsplash),
};

ReactDOM.render(<Provider {...stores} >
  <App/>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
