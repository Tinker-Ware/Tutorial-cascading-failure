import * as types from '../constants/ActionTypes';

export function setProducts(value) {
  return { type: types.SET_PRODUCTS, value };
}

export function requestProducts() {
  return { type: types.REQUEST_PRODUCTS };
}

export function requestCart() {
  return { type: types.REQUEST_CART };
}

export function setCartItem(value) {
  return { type: types.SET_CART_ITEM, value };
}

export function setCart(value) {
  return { type: types.SET_CART, value };
}

export function deleteCartItem(value) {
  return { type: types.DELETE_CART_ITEM, value };
}
