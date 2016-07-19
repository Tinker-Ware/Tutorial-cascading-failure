import * as types from '../constants/ActionTypes';
import {Map, fromJS} from 'immutable';

const initialState = Map({order:""});

export default function order(state = initialState, action) {
  switch (action.type) {
		case types.SET_ORDER:
    {
      return state.set('order', action.value.get('order_products'));
    }
    default:
      return state;
  }
}