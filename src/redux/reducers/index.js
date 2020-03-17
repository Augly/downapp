/*
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-03-17 16:11:13
 * @LastEditors: zero
 * @LastEditTime: 2020-03-17 16:11:23
 */
import { combineReducers } from 'redux';
import productsReducer from './products-reducer';
import cartReducer from './cart-reducer';

const allReducers = {
  products: productsReducer,
  shoppingCart: cartReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;
