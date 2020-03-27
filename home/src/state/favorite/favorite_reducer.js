import * as Type from './constant';

const initialState = {
    listFavorite: [],
    error: null,
    isLoadding: false
}

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.LOADING_FAVORIE:
            return {...state, isLoadding: true};
        case Type.ADD_FAVORITE_SS:
            var list = [...state.listFavorite];
            list.push(action.data);
            return { ...state, listFavorite: list, isLoadding: false };
        case Type.ADD_FAVORITE_ER:
            return { ...state, error: action.error, isLoadding: false };
        case Type.REMOVE_FAVORITE_SS:
            return { ...state, isLoadding: action.data, isLoadding: false };
        case Type.REMOVE_FAVORITE_ER:
            return { ...state, error: action.error, isLoadding: false };
        case Type.REMOVE_FAVORITE_SS:
            var tmp = [...state.listFavorite];
            tmp = tmp.filter(t => t !== action.data);
            return { ...state, listFavorite: tmp, isLoadding: false };
        case Type.GET_FAVORITE_ER:
            return { ...state, error: action.error, isLoadding: false };
        default: return state;
    }
}

export default favoriteReducer;