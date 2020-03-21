import * as Type from './constant';

const initialState = {
    isLoadding: false,
    data: null,
    error: null,
    pageSize: 6,
    pageNumber: 0,
    totalPage: 0,
    totalSize: 0,
    isFirst: true,
    isLast: false,
    listData: [],
    idCatalog: 0,
    typeSort: 0,
    currentBLOG: null,
};

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.FETCH_BLOG_SS:
            return { ...state, isLoadding: false, listData: action.data };
        case Type.FETCH_BLOG_ER:
            return { ...state, isLoadding: false, error: action.err };
        case Type.LOADDING_BLOG:
            return { ...state, isLoadding: true };
        case Type.FETCH_LIST:
            return {
                ...state,
                listData: action.listData,
                isLoadding: false,
                totalPage: action.totalPage,
                totalSize: action.totalSize,
                isFirst: action.isFirst,
                isLast: action.isLast,
                pageNumber: action.currentPage
            }
        case Type.UPDATE_ID_TYPE:
            return { ...state, typeSort: action.typeSort };
        case Type.FETCH_BLOG_DETAIL:
            return { ...state, currentBLOG: action.currentBLOG };
        default: return state;
    }
}

export default blogReducer;
