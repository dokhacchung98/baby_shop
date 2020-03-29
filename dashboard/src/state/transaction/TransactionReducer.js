import * as Type from './Constant';

const initialState = {
    listTransaction: [],
    pageSize: 5,
    pageNumber: 0,
    totalPage: 0,
    totalSize: 0,
    isFirst: true,
    isLast: false,
    error: null,
    isLoading: false,
    isOpenDetail: false,
    isOpenUpdate: false
};

const TransactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.LOADING_TRANSACTION:
            return { ...state, isLoading: true };
        case Type.GELIST_TRANSACTION_SS:
            return {
                ...state,
                isLoading: false,
                totalPage: action.totalPage,
                totalSize: action.totalSize,
                isFirst: action.isFirst,
                isLast: action.isLast,
                pageNumber: action.currentPage,
                listTransaction: action.data
            };
        case Type.GELIST_TRANSACTION_ER:
            return { ...state, isLoading: false };
        case Type.OPEN_DETAIL_TRANSACTION:
            return {...state, isOpenDetail: true};
        case Type.OPEN_UPDETE_TRANSACTION:
            return {...state, isOpenUpdate: true};
        case Type.CLOSE_MODAL_TRANSACTION:
            return {...state, isOpenDetail: false, isOpenUpdate: false};
        default: return state;
    }
}

export default TransactionReducer;