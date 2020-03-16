import { combineReducers, createStore, applyMiddleware } from 'redux'
import AuthReducer from './auth';
import CatalogReducer from './catalog';
import AlertReducer from './alert';
import ProductReducer from './product';
import UserReducer from './user';
import BlogReducer from './blog';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const mReducer = combineReducers({
    AuthReducer,
    CatalogReducer,
    AlertReducer,
    ProductReducer,
    UserReducer,
    BlogReducer
});

const Store = createStore(mReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default Store;