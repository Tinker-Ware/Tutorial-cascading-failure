import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import productsAppState from './products';
import cartAppState from './cart';
import orderAppState from './order';
import userAppState from './user';

const rootReducer = combineReducers({
  cartAppState,
  orderAppState,
  productsAppState,
	userAppState,
  routing: routerReducer
});

export default rootReducer;
