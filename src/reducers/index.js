import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import productsAppState from './products';

const rootReducer = combineReducers({
  productsAppState,
  routing: routerReducer
});

export default rootReducer;
