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

export function requestUser() {
  return { type: types.REQUEST_USER };
}

export function setCartItem(value) {
  return { type: types.SET_CART_ITEM, value };
}

export function setCart(value) {
  return { type: types.SET_CART, value };
}

export function cleanCart(value) {
  return { type: types.CLEAN_CART, value };
}

export function setOrder(value) {
  return { type: types.SET_ORDER, value };
}

export function setUser(value) {
  return { type: types.SET_USER, value };
}

export function deleteCartItem(value) {
  return { type: types.DELETE_CART_ITEM, value };
}
