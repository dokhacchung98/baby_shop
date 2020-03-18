import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from './app';
import authReducer from './auth';

const mReducer = combineReducers({
    appReducer,
    authReducer
});

const Store = createStore(mReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default Store;