import * as Type from './constant';
import * as Method from './../../utilities';
import callApi from './../../service/call_api';
import { showAlertError } from './../alert/alert_action';
import * as Value from '../alert/containt';

export function getListCatalog() {
    return (dispatch) => {
        return callApi(`get-catalogs?page=0&size=20`, Method.GET, null, false)
            .then(res => {
                if (res.data !== undefined && res.data.code === 200) {
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

