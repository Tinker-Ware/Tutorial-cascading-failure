import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import user from '../reducers/user';

describe('reducer', () => {
	it('handles SET_USER', () => {
    const initialState = Map();
    const action = {
      type: 'SET_USER',
      value: fromJS({
				"user": {
						"id": 1,
						"name": "Leonel Roberto",
						"username": "iLeonelRoberto",
						"email": "leonel@email.com"
				}
      })
    };
    const nextState = user(initialState, action);

    expect(nextState).to.equal(fromJS({
			"user": {
					"id": 1,
					"name": "Leonel Roberto",
					"username": "iLeonelRoberto",
					"email": "leonel@email.com"
			}
    }));
  });
  
  it('handles DEFAULT', () => {
    const initialState = Map();
    const action = {type: ''};
    const nextState = user(initialState, action);
    
    expect(nextState).to.equal(fromJS({
    }));
  });
});
