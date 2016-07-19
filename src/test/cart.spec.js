import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import cart from '../reducers/cart';

describe('reducer', () => {
	it('handles SET_CART', () => {
    const initialState = Map();
    const action = {
      type: 'SET_CART',
      value: fromJS({
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
      })
    };
    const nextState = cart(initialState, action);

    expect(nextState).to.equal(fromJS({
      cart: [{
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
	
  it('handles SET_CART_ITEM when no exist CART_ITEMS', () => {
    const initialState = Map();
    const action = {
      type: 'SET_CART_ITEM',
      value: fromJS({
        cart_items: [],
        cart_item: {
          id: 1, 
          title: "Luna Flower", 
          description: "Collared Neck Stylish",
          price: 60.92,
          category: "Men",
          image: "images/product.jpg"
        }
      })
    };
    const nextState = cart(initialState, action);

    expect(nextState).to.equal(fromJS({
      cart: [{
        id: 1, 
        title: "Luna Flower", 
        description: "Collared Neck Stylish",
        price: 60.92,
        category: "Men",
        image: "images/product.jpg"
      }]
    }));
  });
  
  it('handles SET_CART_ITEM when exist CART_ITEMS', () => {
    const initialState = Map();
    const action = {
      type: 'SET_CART_ITEM',
      value: fromJS({
        cart_items: [{
          id: 1, 
          title: "Luna Flower", 
          description: "Collared Neck Stylish",
          price: 60.92,
          category: "Men",
          image: "images/product.jpg"
        }],
        cart_item: {
          id: 2, 
          title: "Dearlovers", 
          description: "Chiffon Blouse U Neck",
          price: 89.99,
          category: "Women",
          image: "images/product2.jpg"
        }
      })
    };
    const nextState = cart(initialState, action);

    expect(nextState).to.equal(fromJS({
      cart: [{
        id: 1, 
        title: "Luna Flower", 
        description: "Collared Neck Stylish",
        price: 60.92,
        category: "Men",
        image: "images/product.jpg"
      },
      {
        id: 2, 
        title: "Dearlovers", 
        description: "Chiffon Blouse U Neck",
        price: 89.99,
        category: "Women",
        image: "images/product2.jpg"
      }]
    }));
  });
  
  it('handles DELETE_CART_ITEM', () => {
    const initialState = Map();
    const action = {
      type: 'DELETE_CART_ITEM',
      value: fromJS({
        cart_items:
          [{
            id: 1, 
            title: "Luna Flower", 
            description: "Collared Neck Stylish",
            price: 60.92,
            category: "Men",
            image: "images/product.jpg"
          },
          {
            id: 2, 
            title: "Dearlovers", 
            description: "Chiffon Blouse U Neck",
            price: 89.99,
            category: "Women",
            image: "images/product2.jpg"
          }],
        id: 1
      })
    };
    const nextState = cart(initialState, action);

    expect(nextState).to.equal(fromJS({
      cart: [{
        id: 2, 
        title: "Dearlovers", 
        description: "Chiffon Blouse U Neck",
        price: 89.99,
        category: "Women",
        image: "images/product2.jpg"
      }]
    }));
  });
  
	it('handles CLEAN_CART', () => {
    const initialState = Map();
    const action = {
      type: 'CLEAN_CART',
      value: ""
    };
    const nextState = cart(initialState, action);

    expect(nextState).to.equal(fromJS({
			cart: ""
		}));
  });
	
  it('handles DEFAULT', () => {
    const initialState = Map();
    const action = {type: ''};
    const nextState = cart(initialState, action);
    
    expect(nextState).to.equal(fromJS({
    }));
  });
});
