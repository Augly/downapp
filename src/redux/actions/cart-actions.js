/*
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-03-17 16:10:20
 * @LastEditors: zero
 * @LastEditTime: 2020-03-17 16:51:38
 */
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export function updateCart (product, quantity, unitCost) {
  return {
    type: UPDATE_CART,
    payload: {
      product,
      quantity,
      unitCost
    }
  }
}

export function deleteFromCart (product) {
  return {
    type: DELETE_FROM_CART,
    payload: {
      product
    }
  }
}
