import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import CombinedReducers  from './reducers';
const store = createStore(CombinedReducers, applyMiddleware(thunk));


export default store;