/*
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-03-17 10:54:28
 * @LastEditors: zero
 * @LastEditTime: 2020-03-17 16:52:21
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './asstes/reset.less';
import './asstes/border.less';
import './index.css';
import { Index } from './view/index/index';
import 'lib-flexible';
import * as serviceWorker from './serviceWorker';
import "./redux/index";
import store from './redux/store.js';
import { updateCart, deleteFromCart} from "./redux/actions/cart-actions.js";
ReactDOM.render(<Index />, document.getElementById('root'));
// Update Cart
console.log(store.getState())
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);
store.dispatch(updateCart('milk 500ml', 10, 110));

// Delete from Cart
store.dispatch(deleteFromCart('Coffee 500gm'));
serviceWorker.unregister();
unsubscribe();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

