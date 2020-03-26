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
        case Type.UPDATE_CART_SS:
            var tmp = [...state.listCart];
            var foundIndex = tmp.findIndex(x => x.id == action.data.id);
            tmp[foundIndex] = action.data;
            return { ...state, isLoading: false, listCart: tmp };
        case Type.UPDATE_CART_ER:
        case Type.DELETE_CART_SS:
            return { ...state, isLoading: false };
        case Type.DELETE_CART_ER:
            return { ...state, isLoading: false, error: action.error };
        case Type.CHECKOUT_ER:
            return { ...state, isLoading: false }
        case Type.CHECKOUT_SS:
            return { ...state, isLoading: false, listCart: [] };
        default: return state;
    }
}

export default cartReducer;