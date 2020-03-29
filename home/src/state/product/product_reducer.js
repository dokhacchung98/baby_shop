import * as Type from './constant';

const initialState = {
    isLoadding: false,
    data: null,
    error: null,
    pageSize: 8,
    pageNumber: 0,
    totalPage: 0,
    totalSize: 0,
    isFirst: true,
    isLast: false,
    listData: [],
    idCatalog: 0,
    typeSort: 0,
    currentProduct: null,
    listNewProduct: []
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.FETCH_PRODUCT_SS:
            return { ...state, isLoadding: false, listData: action.data };
        case Type.FETCH_PRODUCT_ER:
            return { ...state, isLoadding: false, error: action.err };
        case Type.LOADDING_PRODUCT:
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
        case Type.UPDATE_ID_CATALOG:
            return { ...state, idCatalog: action.idCatalog };
        case Type.UPDATE_ID_TYPE:
            return { ...state, typeSort: action.typeSort };
        case Type.FETCH_PRODUCT_DETAIL:
            return { ...state, currentProduct: action.currentProduct };
        case Type.GET_NEW_PRODUCT_SS:
            return {...state, listNewProduct: action.data};
        default: return state;
    }
}

export default productReducer;