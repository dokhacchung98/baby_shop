import * as Type from './constant';
import callApi from './../../service/call_api';
import * as Method from './../../utilities';
import Store from './../store'

export function sendLogin(data) {
    return (dispath) => {
        dispath(loading());
        return callApi('login', Method.POST, data, false)
            .then(res => {
                if (res.data !== undefined && res.data.code === 200) {
                    localStorage.setItem(Method.AUTH, res.data.data.token);
                    window.location.reload();
                    dispath(loginSS(res.data.data.token));
                } else {
                    dispath(loginErr('Lỗi! Kiểm tra lại thông tin đăng nhập'));
                }
            }).catch(e => {
                dispath(loginErr('Lỗi! Kiểm tra lại kết nối'))
            });
    }
}

export function sendRegister(data) {
    return (dispath) => {
        dispath(loading());
        return callApi('register', Method.POST, data, false)
            .then(res => {
                console.log(res);
                if (res.data !== undefined && res.data.code === 200) {
                    dispath(loginSS(res.data.data));
                } else {
                    dispath(registerErr(res.data.data));
                }
            }).catch(e => {
                dispath(registerErr('Lỗi! Kiểm tra lại'))
            });
    }
}

export function getDetailUser() {
    return (dispath) => {
        if (Store.getState().authReducer.isAuthenticated)
            return callApi('user/get-information', Method.GET, null, true)
                .then(res => {
                    if (res.data !== undefined && res.data.code === 200) {
                        dispath(getInformationSS(res.data.data));
                    }
                });
    }
}

export function getInformationSS(data) {
    return {
        type: Type.UPDATE_INFO,
        data: data
    }
}

export function logout() {
    return {
        type: Type.LOGOUT
    }
}

export function loading() {
    return {
        type: Type.SEND_REQ
    }
}

export function loginErr(err) {
    return {
        type: Type.LOGIN_ER,
        err: err
    }
}

export function registerErr(err) {
    return {
        type: Type.REGISTER_ER,
        err: err
    }
}

export function loginSS(data) {
    return {
        type: Type.LOGIN_SS,
        data: data
    }
}