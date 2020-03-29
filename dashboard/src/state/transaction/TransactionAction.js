import * as Type from './Constant';
import callApi from './../../service/CallApi';
import * as Method from './../../utilities';
import { showAlertError, showAlertSuccess } from './../alert/ActionAlert';
import Store from './../Store';

export function getListNewTransaction(number) {
    const pageSize = Store.getState().TransactionReducer.pageSize;
    if (number < 0) {
        number = 0;
    }
    return (dispatch) => {
        const parameter = `admin/get-new-transactions?page=${number}&size=${pageSize}`;
        dispatch(loadding());
        return callApi(parameter, Method.GET,
            null, true).then(res => {
                if (res == undefined) {
                    dispatch(showAlertError(Type.ALERT_GET_TRANSACTION_ER));
                }
                if (res.data.code === 200) {
                    if ((res.data.data.totalPages - 1) < number && res.data.data.totalElements > 0) {
                        return dispatch(getListNewTransaction(number - 1));
                    }
                    dispatch(getListTransactionSS(res.data.data.content,
                        res.data.data.totalElements,
                        res.data.data.totalPages,
                        res.data.data.first,
                        res.data.data.last,
                        res.data.data.number
                    ));
                } else {
                    dispatch(showAlertError(Type.ALERT_GET_TRANSACTION_ER));
                }
            }).catch(() => {
                dispatch(showAlertError(Type.ALERT_GET_TRANSACTION_ER));
            });
    }
}

export function getListTransactionType(number, status) {
    const pageSize = Store.getState().TransactionReducer.pageSize;
    if (number < 0) {
        number = 0;
    }
    return (dispath) => {
        const parameter = `admin/get-transactions-status?page=${number}&size=${pageSize}&type=${status}`;
        dispath(loadding());
        return callApi(parameter, Method.GET,
            null, true).then(res => {
                if (res == undefined) {
                    dispath(showAlertError(Type.ALERT_GET_TRANSACTION_ER));
                }
                if (res.data.code === 200) {
                    if ((res.data.data.totalPages - 1) < number && res.data.data.totalElements > 0) {
                        return dispath(getListNewTransaction(number - 1));
                    }
                    dispath(getListTransactionSS(res.data.data.content,
                        res.data.data.totalElements,
                        res.data.data.totalPages,
                        res.data.data.first,
                        res.data.data.last,
                        res.data.data.number
                    ));
                } else {
                    dispath(showAlertError(Type.ALERT_GET_TRANSACTION_ER));
                }
            }).catch(() => {
                dispath(showAlertError(Type.ALERT_GET_TRANSACTION_ER));
            });
    }
}

export function loadding() {
    return {
        type: Type.LOADING_TRANSACTION
    }
}

export function getListTransactionSS(data, size, page, first, last, number) {
    return {
        type: Type.GELIST_TRANSACTION_SS,
        data: data,
        totalSize: size,
        totalPage: page,
        isFirst: first,
        isLast: last,
        currentPage: number
    }
}

export function getListTransactionER(err) {
    return {
        type: Type.GELIST_TRANSACTION_ER
    }
}

export function openDetail() {
    return {
        type: Type.OPEN_DETAIL_TRANSACTION
    }
}

export function openUpdate() {
    return {
        type: Type.OPEN_UPDETE_TRANSACTION
    }
}

export function closeModal() {
    return {
        type: Type.CLOSE_MODAL_TRANSACTION
    }
}