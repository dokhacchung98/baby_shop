import * as Type from './constant';

const initialState = {
    isLoading: false,
    listCart: [],
    error: null
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.LOADDING_CART:
            return { ...state, isLoading: true };
        case Type.ADD_CART_SS:
            return { ...state, isLoading: false };
        case Type.ADD_CART_ER:
            return { ...state, isLoading: false, error: action.error };
        case Type.GET_CART_SS:
            return { ...state, isLoading: false, listCart: action.data };
        case Type.GET_CART_ER:
            return { ...state, isLoading: false, error: action.error };
        case Type.DELETE_CART_SS:
            return { ...state, isLoading: false };
        case Type.DELETE_CART_ER:
            return { ...state, isLoading: false, error: action.error };
        default: return state;
    }
}

export default cartReducer;