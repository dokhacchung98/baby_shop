import * as Type from './constant';

const initState = {
    isOpenMenu: false,
    isOpenSearch: false,
    myCarts: [],
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case Type.OPEN_MENU:
            return { ...state, isOpenMenu: true };
        case Type.CLOSE_MENU:
            return { ...state, isOpenMenu: false };
        case Type.OPEN_SEARCH:
            return { ...state, isOpenSearch: true };
        case Type.CLOSE_SEARCH:
            return { ...state, isOpenSearch: false };
        case Type.SET_CARTS:
            return {...state, myCarts: action.myCarts};
        default: return state;
    }
}

export default appReducer;