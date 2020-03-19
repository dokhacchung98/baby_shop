import * as Type from './constant';

const initialState = {
    listCatalog: [],
    isLoading: false,
    err: null
};

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.LOADDING_CATALOG:
            return { ...state, isLoading: true };
        case Type.LOAD_SS:
            return { ...state, isLoading: false, listCatalog: action.data };
        case Type.LOAD_ER:
            return { ...state, isLoading: false, err: action.error };
        default: return state;
    }
}

export default catalogReducer;