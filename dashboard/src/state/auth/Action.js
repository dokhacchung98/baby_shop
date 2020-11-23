import * as Type from './Constant';
import * as Method from './../../utilities';
import callApi from './../../service/CallApi';

function loading() {
    return {
        type: Type.LOADING
    }
}

export function loginRequest(body) {
    return (dispath) => {
        dispath(loading());
        return callApi('login-admin',
            Method.POST,
            body,
            false
        ).then(res => {
            if (res.data.code === 200) {
                var token = res.data.data.token;
                console.log(token);
                dispatch({
                    type: 'isadmin',
                    isAdmin: res.data.data?.isAdmin || false
                });
                dispath(login(token));
            } else {
                dispath(error());
            }
        });

        // localStorage.setItem(Method.AUTH,  'res.data.data.token');
        // dispath(login('res.data.data.token'));
    }
}

export function login(token) {
    return {
        type: Type.LOGIN,
        token: token
    }
}

export function logout() {
    return {
        type: Type.LOGOUT
    }
}

export function error() {
    return {
        type: Type.ERROR_LOGIN
    }
}