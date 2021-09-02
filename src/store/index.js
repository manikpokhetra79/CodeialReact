import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
let store;
export function configureStore() {
  store = createStore(rootReducer, applyMiddleware(thunk, logger));
  return store;
}
