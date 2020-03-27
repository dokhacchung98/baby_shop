import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from './app';
import authReducer from './auth';
import contactReducer from './contact';
import alertReducer from './alert';
import productReducer from './product';
import catalogReducer from './catalog';
import blogReducer from './blog';
import cartReducer from './cart';
import favoriteReducer from './favorite';

const mReducer = combineReducers({
    appReducer,
    authReducer,
    contactReducer,
    alertReducer,
    productReducer,
    catalogReducer,
    blogReducer,
    cartReducer,
    favoriteReducer
});

const Store = createStore(mReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default Store;