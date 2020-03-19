import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from './app';
import authReducer from './auth';
import contactReducer from './contact';
import alertReducer from './alert';
import productReducer from './product';
import catalogReducer from './catalog';

const mReducer = combineReducers({
    appReducer,
    authReducer,
    contactReducer,
    alertReducer,
    productReducer,
    catalogReducer
});

const Store = createStore(mReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default Store;