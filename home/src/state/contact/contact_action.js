import * as Type from './constant';
import callApi from './../../service/call_api';
import * as Method from './../../utilities';
import { showAlertError, showAlertSuccess } from './../alert/alert_action';

export function sendingContact(data) {
    return (dispath) => {
        dispath(loadding());
        return callApi('create-feedback', Method.POST, data, false)
            .then(res => {
                if (res.data != undefined && res.data.code === 200) {
                    dispath(senddingSuccess());
                    dispath(showAlertSuccess(Type.ALERT_SS))
                } else {
                    dispath(senddingError());
                    dispath(showAlertError(Type.ALERT_ER));
                }
            }).catch(() => {
                dispath(senddingError());
                dispath(showAlertError(Type.ALERT_ER));
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