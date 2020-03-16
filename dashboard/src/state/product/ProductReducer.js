import * as Type from './Constant';
var initState = {
    isFetching: false,
    data: null,
    isError: false,
    openCreate: false,
    openEdit: false,
    openDelete: false,
    pageSize: 5,
    pageNumber: 0,
    totalPage: 0,
    totalSize: 0,
    isFirst: true,
    isLast: false,
    listData: [],
    listCatalog: []
}

const ProductReducer = (state = initState, action) => {
    switch (action.type) {
        case Type.PRODUCT_FETCHING:
            return { ...state, isFetching: true }
        case Type.CREATE_PRODUCT_SS:
            return { ...state, isFetching: false, data: null, openCreate: false }
        case Type.CREATE_PRODUCT_ER:
            return { ...state, isFetching: false, isError: true }
        case Type.EDIT_PRODUCT_SS:
            return { ...state, isFetching: false, openEdit: false, data: null }
        case Type.EDIT_PRODUCT_ER:
            return { ...state, isFetching: false, isError: true, data: null }
        case Type.REMOVE_PRODUCT_SS:
            return { ...state, isFetching: false, openDelete: false, data: null }
        case Type.REMOVE_PRODUCT_ER:
            return { ...state, isFetching: false, isError: true, data: null }
        case Type.OPEN_CREATE:
            return { ...state, openCreate: true }
        case Type.CLOSE_MODAL:
            return { ...state, openCreate: false, openEdit: false, openDelete: false }
        case Type.OPEN_EDIT:
            return { ...state, openEdit: true, data: action.data }
        case Type.OPEN_DELETE:
            return { ...state, openDelete: true, data: action.data }
        case Type.FETCH_LIST:
            return {
                ...state,
                listData: action.listData,
                isFetching: false,
                totalPage: action.totalPage,
                totalSize: action.totalSize,
                isFirst: action.isFirst,
                isLast: action.isLast,
                pageNumber: action.currentPage
            }
        case Type.FETCH_LIST_CATALOG:
            return { ...state, listCatalog: action.listCatalog };
        default: return state;
    }
}

export default ProductReducer;