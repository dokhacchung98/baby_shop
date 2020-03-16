import * as Type from './Constant';
import * as Type2 from './../../utilities';
import { history } from './../../components/router/History';

let token = localStorage.getItem(Type2.AUTH) ?? '';
let email = localStorage.getItem(Type2.USER) ?? '';
let userId = localStorage.getItem(Type2.USER_ID) ?? '';

var initialState = {
    isAuthenticated: token ? true : false,
    token: token,
    errlogin: '',
    isLoading: false,
    email: email,
    userId: userId
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.LOGIN:
            console.log(action.token);
            localStorage.setItem(Type2.AUTH, action.token);
            history.replace({ pathname: "/" });
            window.location.reload();
            return {...state, isAuthenticated: true, token: action.token, isLoading: false};
        case Type.LOGOUT:
            localStorage.removeItem(Type2.AUTH);
            history.replace({ pathname: "/login" });
            // window.location.reload();
            return {...state, isAuthenticated: false};
        case Type.ERROR_LOGIN:
            localStorage.removeItem(Type2.AUTH);
            return {...state, errlogin: Type.ALERT_ERR, isLoading: false};
        case Type.LOADING:
            return {...state, isLoading: true};
        default: return state;
    }
};

export default AuthReducer;
