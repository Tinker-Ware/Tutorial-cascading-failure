import 'whatwg-fetch';
import "babel-polyfill";
import {expect} from 'chai';
import {Map, fromJS} from 'immutable';
import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects'; 
import * as actions from '../actions/MiddlewareActions';
import { doRequest, getProducts, getCart, getUser, doRequestProducts, doRequestCart, doRequestUser } from '../sagas';

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
	
	it('handles DO_REQUEST_CART', () => {
    const generator = getCart();
    const Cart = fromJS({
			"cart": {
				"id": 1,
				"user_id": 1,
				"products": {
					"products": [
						{
							"id": 2,
							"title": "Dearlovers",
							"description": "Chiffon Blouse U Neck",
							"price": 89.99,
							"category": "Women",
							"image": "images/pc1.jpg"
						},
						{
							"id": 5,
							"title": "Nautica",
							"description": "Slim Fit",
							"price": 76.99,
							"category": "Men",
							"image": "images/pc4.jpg"
						}
					]
				}
			}
    });
    
    expect(generator.next().value).to.deep.equal(
      call(doRequestCart)
    );
    
    expect(generator.next(Cart).value).to.deep.equal(
			put(actions.receiveCart(Cart))
    );
  });
	
	it('handles DO_REQUEST_USER', () => {
    const generator = getUser();
    const User = fromJS({
			"user": {
					"id": 1,
					"name": "Leonel Roberto",
					"username": "iLeonelRoberto",
					"email": "leonel@email.com"
			}
    });
    
    expect(generator.next().value).to.deep.equal(
      call(doRequestUser)
    );
    
    expect(generator.next(User).value).to.deep.equal(
			put(actions.receiveUser(User))
    );
  });
});