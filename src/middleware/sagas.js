import 'whatwg-fetch';
import { takeLatest } from 'redux-saga';
import {Map, fromJS} from 'immutable';
import { call, put, fork } from 'redux-saga/effects';
import * as actions from './actions/MiddlewareActions';
import * as types from '../constants/ActionTypes';

export function doRequest(url, options){
  return fetch(url, options)
    .then(function(response) {
      if (response.status >= 200 && response.status < 300) {  
        return Promise.resolve(response.json());
      } else {  
        return Promise.reject(new Error(response.statusText));
      } 
    })
    .catch(error => error);  
}

export function* getProducts() {
  const Products = yield call(doRequestProducts);
  yield put(actions.receiveProducts(fromJS(Products)));
}

export function* getCart() {
	const Cart = yield call(doRequestCart);
	yield put(actions.receiveCart(fromJS(Cart)));
}

export function* getUser() {
	const User = yield call(doRequestUser);
	yield put(actions.receiveUser(fromJS(User)));
}

export function* doRequestProducts() {
  return yield call(
    doRequest, 'http://localhost:3100/api/v1/products',
    {
      method: 'GET',
      headers: {
        'authorization': 'Bearer qphYSqjEFk1RcFxYqqIIFk4vaBJvDoBr3t9aHTp1JFEAO0NS7ECyLJJyUPybOUNf'
      },
      mode: 'cors'
    });
}

export function* doRequestCart() {
  return yield call(
    doRequest, 'http://localhost:3100/api/v1/cart/1',
    {
      method: 'GET',
      headers: {
        'authorization': 'Bearer qphYSqjEFk1RcFxYqqIIFk4vaBJvDoBr3t9aHTp1JFEAO0NS7ECyLJJyUPybOUNf'
      },
      mode: 'cors'
    });
}

export function* doRequestUser() {
  return yield call(
    doRequest, 'http://localhost:3100/api/v1/users/1',
    {
      method: 'GET',
      headers: {
        'authorization': 'Bearer qphYSqjEFk1RcFxYqqIIFk4vaBJvDoBr3t9aHTp1JFEAO0NS7ECyLJJyUPybOUNf'
      },
      mode: 'cors'
    });
}

export default function* root() {
  yield[
		takeLatest(types.REQUEST_PRODUCTS, getProducts),
		takeLatest(types.REQUEST_CART, getCart),
		takeLatest(types.REQUEST_USER, getUser)
	];
}