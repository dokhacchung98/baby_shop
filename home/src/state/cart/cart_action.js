import * as Type from './constant';
import callApi from './../../service/call_api';
import * as Method from './../../utilities';
import { showAlertError, showAlertSuccess } from './../alert/alert_action';

export function getListCart() {
    return (dispatch) => {
        dispatch(loadding());
        return callApi(`user/get-carts?page=0&size=${100}`, Method.GET, null, true)
            .then(res => {
                if (res !== undefined && res.data.code === 200) {
                    dispatch(getListCartSS(res.data.data.content));
                } else {
                    dispatch(getListCartErr(Type.ALERT_ER_GET));
                }
            }).catch(err => {
                dispatch(getListCartErr(err));
            });
    }
}

export function addToCart(data) {
    return (dispatch) => {
        dispatch(loadding());
        return callApi("user/add-to-cart", Method.POST, data, true)
            .then(res => {
                if (res !== undefined && res.data.code === 200) {
                    dispatch(showAlertSuccess(Type.ALERT_SS_ADD));
                    dispatch(getListCart());
                } else {
                    dispatch(showAlertError(Type.ALERT_ER_ADD));
                }
            }).catch(err => {
                dispatch(getListCartErr(err));
                dispatch(showAlertError(Type.ALERT_ER_ADD));
            });
    }
}

export function removeCart(id) {
    return (dispatch) => {
        dispatch(loadding());
        return callApi(`user/remove-to-cart?id=${id}`, Method.GET, null, true)
            .then(res => {
                if (res !== undefined && res.data.code === 200) {
                    dispatch(showAlertSuccess(Type.ALERT_SS_REMOVE));
                    dispatch(getListCart());
                } else {
                    dispatch(showAlertError(Type.ALERT_ER_REMOVE));
                }
            }).catch(err => {
                dispatch(getListCartErr(err));
                dispatch(showAlertError(Type.ALERT_ER_REMOVE));
            });
    }
}

export function updateCart(id, number) {
    return (dispatch) => {
        dispatch(loadding());
        return callApi(`user/update-cart?idCart=${id}&number=${number}`, Method.GET, null, true)
            .then(res => {
                if (res !== undefined && res.data.code === 200) {
                    dispatch(showAlertSuccess(Type.ALERT_UPDATE_SS));
                    dispatch(updateSS(res.data.data));
                } else {
                    dispatch(showAlertError(Type.ALERT_UPDATE_ER));
                }
            }).catch(err => {
                dispatch(updateER());
                dispatch(showAlertError(Type.ALERT_UPDATE_ER));
            });
    }
}

export function loadding() {
    return {
        type: Type.LOADDING_CART
    }
}

export function updateSS(data) {
    return {
        type: Type.UPDATE_CART_SS,
        data: data
    }
}

export function updateER() {
    return {
        type: Type.UPDATE_CART_ER,
    }
}

export function getListCartSS(data) {
    return {
        type: Type.GET_CART_SS,
        data: data
    }
}

export function getListCartErr(err) {
    return {
        type: Type.GET_CART_ER,
        error: err
    }
}

export function addCartSS() {
    return {
        type: Type.ADD_CART_SS
    }
}

export function addCartEr(err) {
    return {
        type: Type.ADD_CART_ER,
        error: err
    }
}