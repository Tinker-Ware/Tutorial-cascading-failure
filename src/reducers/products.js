import * as types from '../constants/ActionTypes';
import {Map, fromJS} from 'immutable';

const initialState = Map({products:""});

export default function products(state = initialState, action) {
  switch (action.type) {
    case types.SET_PRODUCTS:
    {
      return state.set('products', action.value.get('products'));
    }
    default:
      return state;
  }
}