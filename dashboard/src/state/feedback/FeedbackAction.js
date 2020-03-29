import * as Type from './Constant';
import callApi from '../../service/CallApi';
import * as Method from '../../utilities';
import { showAlertError } from '../alert/ActionAlert';
import Store from '../Store';

export function getListFB(number) {
    const pageSize = Store.getState().FeedbackReducer.pageSize;
    if (number < 0) {
        number = 0;
    }
    return (dispatch) => {
        const parameter = `admin/get-all-feedback?page=${number}&size=${pageSize}`;
        dispatch(loadding());
        return callApi(parameter, Method.GET,
            null, true).then(res => {
                if (res == undefined) {
                    dispatch(showAlertError(Type.ALERT_GET_ER));
                }
                if (res.data.code === 200) {
                    if ((res.data.data.totalPages - 1) < number && res.data.data.totalElements > 0) {
                        return dispatch(getListFB(number - 1));
                    }
                    dispatch(getListFeedbackSS(res.data.data.content,
                        res.data.data.totalElements,
                        res.data.data.totalPages,
                        res.data.data.first,
                        res.data.data.last,
                        res.data.data.number
                    ));
                } else {
                    dispatch(showAlertError(Type.ALERT_GET_ER));
                    dispatch(getListFeedbackER(''));
                }
            }).catch(() => {
                dispatch(showAlertError(Type.ALERT_GET_ER));
                dispatch(getListFeedbackER(''));
            });
    }
}

export function loadding() {
    return {
        type: Type.LOADING_TRANSACTION
    }
}

export function getListFeedbackSS(data, size, page, first, last, number) {
    return {
        type: Type.GET_FEEDBACK_SS,
        data: data,
        totalSize: size,
        totalPage: page,
        isFirst: first,
        isLast: last,
        currentPage: number
    }
}

export function getListFeedbackER(err) {
    return {
        type: Type.GET_FEEDBACK_ER,
        error: err
    }
}

export function openDetail() {
    return {
        type: Type.OPEN_DETAIL
    }
}

export function closeModal() {
    return {
        type: Type.CLOSE_MODAL
    }
}