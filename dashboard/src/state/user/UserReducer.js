import * as Type from './Constant';
var initState = {
    isFetching: false,
    data: null,
    isError: false,
    openDelete: false,
    pageSize: 5,
    pageNumber: 0,
    totalPage: 0,
    totalSize: 0,
    isFirst: true,
    isLast: false,
    listData: []
}

const UserReducer = (state = initState, action) => {
    switch (action.type) {
        case Type.FETCH_LIST_USER:
            return { ...state, isFetching: true }
        case Type.REMOVE_USER_SS:
            return { ...state, isFetching: false, openDelete: false, data: null }
        case Type.REMOVE_USER_ER:
            return { ...state, isFetching: false, isError: true, data: null }
        case Type.CLOSE_MODAL:
            return { ...state, openCreate: false, openEdit: false, openDelete: false }
        case Type.OPEN_DELETE:
            return { ...state, openDelete: true, data: action.data }
        case Type.FETCH_DATA:
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
        default: return state;
    }
}

export default UserReducer;