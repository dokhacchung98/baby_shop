import * as Type from './constant';
import * as Ulti from './../../utilities';

let token = localStorage.getItem(Ulti.AUTH) ?? '';

const initState = {
    data: null,
    err: null,
    isAuthenticated: token ? true : false,
    isLoading: false,
    userInfo: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case Type.SEND_REQ:
            return { ...state, isLoading: true };
        case Type.LOGIN_SS:
            return { ...state, isLoading: false, data: action.data, err: '', isAuthenticated: true };
        case Type.LOGIN_ER:
            return { ...state, isLoading: false, err: action.err };
        case Type.REGISTER_ER:
            return { ...state, isLoading: false, err: action.err };
        case Type.UPDATE_INFO:
            return { ...state, isLoading: false, err: '', userInfo: action.data };
        case Type.LOGOUT:
            localStorage.removeItem(Ulti.AUTH);
            window.location.reload();
            return { ...state, isLoading: false, err: '', isAuthenticated: false };
        default: return state;
    }
};

export default authReducer;