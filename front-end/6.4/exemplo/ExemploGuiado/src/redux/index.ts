// ./src/redux/index.ts

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import dogReducer from './reducers';


const store = createStore(
  dogReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;