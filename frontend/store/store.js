import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import thunk from '../reducers/thunk';



export default (preloadedState = {}) => createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))