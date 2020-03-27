import * as Type from './constant';
import * as Method from './../../utilities';
import callApi from './../../service/call_api';
import { showAlertError } from './../alert/alert_action';
import * as Value from '../alert/containt';

export function getListCatalog() {
    return (dispatch) => {
        return callApi(`get-catalogs?page=0&size=20`, Method.GET, null, false)
            .then(res => {
                if (res != undefined && res.data.code === 200) {
                    dispatch(loadingSuccess(res.data.data.content));
                } else {
                    dispatch(loadingError(''));
                    dispatch(showAlertError(Value.AGAIN));
                }
            }).catch(() => {
                dispatch(loadingError(''));
                dispatch(showAlertError(Value.AGAIN));
            });
    }
}

export function getCurentCatalog(id) {
    return (dispatch) => {
        return callApi(`get-catalog-by-id?id=${id}`, Method.GET, null, false)
            .then(res => {
                if (res != undefined && res.data.code === 200) {
                    dispatch(getSSCurentCatalog(res.data.data));
                } else {
                    dispatch(loadingError(''));
                    dispatch(showAlertError(Value.AGAIN));
                }
            }).catch(() => {
                dispatch(loadingError(''));
                dispatch(showAlertError(Value.AGAIN));
            });
    }
}

export function getSSCurentCatalog(data) {
    return {
        type: Type.LOAD_CURRENT_CATALOG,
        currentCatalog: data
    }
}

export function loading() {
    return {
        type: Type.LOADDING_CATALOG
    }
}

export function loadingSuccess(data) {
    return {
        type: Type.LOAD_SS,
        data: data
    }
}

export function loadingError(err) {
    return {
        type: Type.LOAD_ER,
        error: err
    }
}

