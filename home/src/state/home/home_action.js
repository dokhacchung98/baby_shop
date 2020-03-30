import * as Type from './constant';
import callApi from './../../service/call_api';
import * as Method from './../../utilities';
import { showAlertError } from './../alert/alert_action'

export function getSellerList(page) {
    return (dispatch) => {
        return callApi(`get-seller?page=${0}&size=${Type.SIZE_SELLER}`, Method.GET, null, false)
            .then(res => {
                console.log(res);
                if (res != undefined && res.data.code === 200) {
                    dispatch(getListSellerSS(res.data.data.content));
                } else {
                    dispatch(showAlertError(Type.ALERT_ERR));
                }
            }).catch(err => {
                dispatch(showAlertError(Type.ALERT_ERR));
            });
    }
}

export function getListBlog(page) {
    return (dispatch) => {
        return callApi(`get-blogs?page=${0}&size=${Type.SIZE_BLOG}&type=1`, Method.GET, null, false)
            .then(res => {
                console.log(res);
                if (res != undefined && res.data.code === 200) {
                    dispatch(getListBlogSS(res.data.data.content));
                } else {
                    dispatch(showAlertError(Type.ALERT_ERR));
                }
            }).catch(err => {
                dispatch(showAlertError(Type.ALERT_ERR));
            });
    }
}

export function getListCatalog(page) {
    return (dispatch) => {
        return callApi(`get-catalogs?page=${0}&size=${100}`, Method.GET, null, false)
            .then(res => {
                console.log(res);
                if (res != undefined && res.data.code === 200) {
                    dispatch(getListCatalogSS(res.data.data.content));
                } else {
                    dispatch(showAlertError(Type.ALERT_ERR));
                }
            }).catch(err => {
                dispatch(showAlertError(Type.ALERT_ERR));
            });
    }
}

export function getListSellerSS(data) {
    return {
        type: Type.GET_LIST_SELLER_SS,
        listSeller: data
    }
}

export function getListBlogSS(data) {
    return {
        type: Type.GET_BLOG_SS,
        listBlog: data
    }
}

export function getListCatalogSS(data) {
    return {
        type: Type.GET_LIST_CATALOG_SS,
        listCatalog: data
    }
}

export function getErr() {
    return Type.GET_ERR_HOMNE
}