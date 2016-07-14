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

export default function* root() {
  yield* takeLatest(types.REQUEST_PRODUCTS, getProducts);
}