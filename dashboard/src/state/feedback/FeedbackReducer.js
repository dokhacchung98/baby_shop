import * as Type from './Constant';

const initialState = {
    listFeedback: [],
    pageSize: 5,
    pageNumber: 0,
    totalPage: 0,
    totalSize: 0,
    isFirst: true,
    isLast: false,
    error: null,
    isLoading: false,
    isOpenDetail: false,
};

const FeedbackReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.LOADING_TRANSACTION:
            return { ...state, isLoading: true };
        case Type.GET_FEEDBACK_SS:
            return {
                ...state,
                isLoading: false,
                totalPage: action.totalPage,
                totalSize: action.totalSize,
                isFirst: action.isFirst,
                isLast: action.isLast,
                pageNumber: action.currentPage,
                listFeedback: action.data
            };
        case Type.GET_FEEDBACK_ER:
            return { ...state, isLoading: false };
        case Type.OPEN_DETAIL:
            return {...state, isOpenDetail: true};
        case Type.CLOSE_MODAL:
            return {...state, isOpenDetail: false};
        default: return state;
    }
}

export default FeedbackReducer;