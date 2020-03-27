import * as Type from './constant';
import callApi from './../../service/call_api';
import * as Method from './../../utilities';
import { showAlertError, showAlertSuccess } from './../alert/alert_action'

export function getListFavorite() {
    return (dispatch) => {
        dispatch(loadding());
        return callApi(`user/get-favorite?page=0&size=100`, Method.GET, null, true)
            .then(res => {
                if (res != undefined && res.data.code === 200) {
                    dispatch(getListFavoriteSS(res.data.data));
                } else {
                    dispatch(getListFavoriteER(Type.GET_FAVORITE_ER));
                    dispatch(showAlertError(Type.ALERT_GET_ERR));
                }
            }).catch(er => {
                dispatch(getListFavoriteER(Type.GET_FAVORITE_ER));
                dispatch(showAlertError(Type.ALERT_GET_ERR));
            })
    }
}

export function addFavorite(json) {
    return (dispatch) => {
        dispatch(loadding());
        return callApi('user/add-to-favorite', Method.POST, json, true)
            .then(res => {
                if (res != undefined && res.data.code === 200) {
                    dispatch(addFavoriteSS(res.data.data));
                    dispatch(showAlertSuccess(Type.ADD_SS));
                } else if (res != undefined && res.data.code === 400) {
                    dispatch(addFavoriteER(Type.ADD_FAVORITE_ER));
                    dispatch(showAlertError(Type.ADD_EXIST));
                } else {
                    dispatch(addFavoriteER(Type.ADD_FAVORITE_ER));
                    dispatch(showAlertError(Type.ADD_ER));
                }
            }).catch(er => {
                dispatch(addFavoriteER(Type.ADD_FAVORITE_ER));
                dispatch(showAlertError(Type.ADD_ER));
            })
    }
}

export function removeFavorite(id) {
    return (dispatch) => {
        dispatch(loadding());
        return callApi(`user/remove-favorite?id=${id}`, Method.GET, null, true)
            .then(res => {
                if (res != undefined && res.data.code === 200) {
                    dispatch(removeFavoriteSS(res.data.data));
                    dispatch(showAlertSuccess(Type.REMOVE_SS))
                } else {
                    dispatch(removeFavoriteER(Type.REMOVE_FAVORITE_ER));
                    dispatch(showAlertError(Type.REMOVE_ER));
                }
            }).catch(er => {
                dispatch(removeFavoriteER(Type.REMOVE_FAVORITE_ER));
                dispatch(showAlertError(Type.REMOVE_ER));
            })
    }
}

export function loadding() {
    return {
        type: Type.LOADING_FAVORIE
    }
}

export function getListFavoriteSS(data) {
    return {
        type: Type.GET_FAVORITE_SS,
        data: data
    }
}

export function getListFavoriteER(err) {
    return {
        type: Type.GET_FAVORITE_ER,
        error: err
    }
}

export function addFavoriteSS(data) {
    return {
        type: Type.ADD_FAVORITE_SS,
        data: data
    }
}

export function addFavoriteER(err) {
    return {
        type: Type.ADD_FAVORITE_ER,
        error: err
    }
}

export function removeFavoriteSS(data) {
    return {
        type: Type.REMOVE_FAVORITE_SS,
        data: data
    }
}

export function removeFavoriteER(err) {
    return {
        type: Type.REMOVE_FAVORITE_ER,
        error: err
    }
}