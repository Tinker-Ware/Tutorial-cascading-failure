import * as types from '../../constants/ActionTypes';

export function receiveProducts(products){
  return {
    type: types.SET_PRODUCTS,
    value: products
  };
}