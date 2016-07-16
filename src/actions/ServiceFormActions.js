import * as types from '../constants/ActionTypes';

export function setProducts(value) {
  return { type: types.SET_PRODUCTS, value };
}

export function requestProducts() {
  return { type: types.REQUEST_PRODUCTS };
}

export function setCartItem(value) {
  return { type: types.SET_CART_ITEM, value };
}