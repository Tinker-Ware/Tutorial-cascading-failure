import * as types from '../constants/ActionTypes';
import {Map, fromJS} from 'immutable';

const initialState = Map({user:""});

export default function user(state = initialState, action) {
  switch (action.type) {
    case types.SET_USER:
    {
      return state.set('user', action.value.get('user'));
    }
    default:
      return state;
  }
}