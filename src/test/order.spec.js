import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import order from '../reducers/order';

describe('reducer', () => {
	it('handles SET_ORDER', () => {
    const initialState = Map();
    const action = {
      type: 'SET_ORDER',
      value: fromJS({
				"order_products": [
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
      })
    };
    const nextState = order(initialState, action);

    expect(nextState).to.equal(fromJS({
      order: [{
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
      }]
    }));
  });
  
  it('handles DEFAULT', () => {
    const initialState = Map();
    const action = {type: ''};
    const nextState = order(initialState, action);
    
    expect(nextState).to.equal(fromJS({
    }));
  });
});
