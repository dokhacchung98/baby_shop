import * as Type from './constant';
import callApi from './../../service/call_api';
import * as Method from './../../utilities';

export function sendingContact(data) {
    return (dispath) => {
        dispath(loadding());
        return callApi('create-feedback', Method.POST, data, false)
            .then(res => {
                if (res.data != undefined && res.data.code === 200) {
                    dispath(senddingSuccess());
                } else {
                    dispath(senddingError());
                }
            }).catch(() => {
                dispath(senddingError());
            })
    }
}

export function loadding() {
    return {
        type: Type.SENDDING_CONTACT
    }
}

export function senddingSuccess() {
    return {
        type: Type.SEND_CONTACT_SS
    }
}

export function senddingError() {
    return {
        type: Type.SEND_CONTACT_ER
    }
}