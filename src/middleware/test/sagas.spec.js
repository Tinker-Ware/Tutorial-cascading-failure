import 'whatwg-fetch';
import "babel-polyfill";
import {expect} from 'chai';
import {Map, fromJS} from 'immutable';
import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects'; 
import * as actions from '../actions/MiddlewareActions';
import { doRequest, getProducts, doRequestProducts } from '../sagas';

describe('sagas middleware', () => {
  it('handles DO_REQUEST_PRODUCTS', () => {
    const generator = getProducts();
    const Products = fromJS({
      "products": [
          {
            "id": 1,
            "title": "Product",
            "description": "A product from Acme's catalog",
            "price": 19.99,
            "image": "http://localhost/somestuff.jpg"
          },
          {
            "id": 2,
            "title": "Product",
            "description": "A product from Acme's catalog",
            "price": 19.99,
            "image": "http://localhost/somestuff.jpg"
          },
          {
            "id": 3,
            "title": "Product",
            "description": "A product from Acme's catalog",
            "price": 19.99,
            "image": "http://localhost/somestuff.jpg"
          }
        ]
      });
    
    expect(generator.next().value).to.deep.equal(
      call(doRequestProducts)
    );
    
    expect(generator.next(Products).value).to.deep.equal(
      put(actions.receiveProducts(Products))
    );
  });
});