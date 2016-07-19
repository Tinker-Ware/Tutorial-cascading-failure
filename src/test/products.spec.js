import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import products from '../reducers/products';

describe('reducer', () => {
  it('handles SET_PRODUCTS', () => {
    const initialState = Map();
    const action = {type: 'SET_PRODUCTS', value: fromJS({
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
      })
    };
    const nextState = products(initialState, action);

    expect(nextState).to.equal(fromJS({
      products: [
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
    }));
  });
  it('handles DEFAULT', () => {
    const initialState = Map();
    const action = {type: ''};
    const nextState = products(initialState, action);
    
    expect(nextState).to.equal(fromJS({
    }));
  });
});
