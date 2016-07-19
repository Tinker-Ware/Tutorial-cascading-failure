import * as types from '../../constants/ActionTypes';

export function receiveProducts(products){
  return {
    type: types.SET_PRODUCTS,
    value: products
  };
}

export function receiveCart(cart){
  return {
    type: types.SET_CART,
    value: cart
  };
}