import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import root from '../middleware/sagas';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware), initialState);
  
  sagaMiddleware.run(root);
  
  return store;
}
