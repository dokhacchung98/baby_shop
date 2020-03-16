import * as Type from './Constant';
import callApi from './../../service';
import * as Method from './../../utilities';
import Store from './../Store';
import { showAlertError, showAlertSuccess } from './../alert/ActionAlert';


export function getListUser(number) {
    const pageSize = Store.getState().UserReducer.pageSize;
    if (number < 0) {
        number = 0;
    }
    return (dispath) => {
        const parameter = `admin/get-users?page=${number}&size=${pageSize}`;
        dispath(loadding());
        return callApi(parameter, Method.GET,
            null, true).then(res => {
                if (res === undefined) {
                    dispath(showAlertError(Type.MSG_ERR_GET));
                }
                if (res.data.code === 200) {
                    if ((res.data.data.totalPages - 1) < number && res.data.data.totalElements > 0) {
                        return dispath(getListUser(number - 1));
                    }
                    dispath(fetchList(res.data.data.content,
                        res.data.data.totalElements,
                        res.data.data.totalPages,
                        res.data.data.first,
                        res.data.data.last,
                        res.data.data.number
                    ));
                } else {
                    dispath(showAlertError(Type.MSG_ERR_GET));
                }
            }).catch(() => {
                dispath(showAlertError(Type.MSG_ERR_GET));
            });
    }
}

export function removeUser(id) {
    const page = Store.getState().UserReducer.pageNumber;
    return (dispath) => {
        dispath(loadding());
        callApi(`admin/delete-users?id=${id}`, Method.GET, null, true).then(res => {
            if (res === undefined) {
                dispath(removeError());
                dispath(showAlertError(Type.MSG_ERR_DELETE));
            }
            if (res.data.code === 200) {
                dispath(removeSuccess());
                dispath(showAlertSuccess(Type.MSG_SS_DELETE));
                dispath(getListUser(page));
            } else {
                dispath(removeError());
                dispath(showAlertError(Type.MSG_ERR_DELETE));
            }
        }).catch(() => {
            dispath(removeError());
            dispath(showAlertError(Type.MSG_ERR_DELETE));
        });
    }
}

export function fetchList(data, size, page, first, last, number) {
    return {
        type: Type.FETCH_DATA,
        listData: data,
        totalSize: size,
        totalPage: page,
        isFirst: first,
        isLast: last,
        currentPage: number
    }
}

export function loadding() {
    return {
        type: Type.FETCH_LIST_USER
    }
}

export function removeSuccess(data) {
    return {
        type: Type.REMOVE_USER_SS,
        data: data
    }
}

export function removeError() {
    return {
        type: Type.REMOVE_USER_ER,
    }
}

export function closeModal() {
    return {
        type: Type.CLOSE_MODAL
    }
}

export function openDelete(data) {
    return {
        type: Type.OPEN_DELETE,
        data: data
    }
}