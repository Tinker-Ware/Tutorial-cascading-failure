import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import productsAppState from './products';
import cartAppState from './cart';

const rootReducer = combineReducers({
  cartAppState,
  productsAppState,
  routing: routerReducer
});

export default rootReducer;
