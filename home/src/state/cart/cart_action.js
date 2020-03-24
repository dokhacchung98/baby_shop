import * as Type from './constant';
import callApi from './../../service/call_api';
import * as Method from './../../utilities';

export function getListCart() {
    return (dispatch) => {
        return callApi("user/get-carts?page=0&size=100", Method.GET, null, true)
            .then(res => {
                console.log(res);
            }).catch(err => {
                dispatch(getListCartErr(err))
            });
    }
}

export function addToCart(data) {
    return (dispatch) => {
        return callApi("user/add-to-cart", Method.POST, data, true)
            .then(res => {
                console.log(res);
            }).catch(err => {
                dispatch(getListCartErr(err))
            });
    }
}

export function removeCart(id) {
    return (dispatch) => {
        return callApi(`user/remove-to-cart?id=${id}`, Method.GET, null, true)
            .then(res => {
                console.log(res);
            }).catch(err => {
                dispatch(getListCartErr(err))
            });
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

export function addCartSS(data) {
    return {
        type: Type.ADD_CART_SS,
        cart: data
    }
}

export function addCartEr(err) {
    return {
        type: Type.ADD_CART_ER,
        error: err
    }
}