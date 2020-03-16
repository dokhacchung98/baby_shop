import * as Type from './Containt';

export function showAlertSuccess(content = 'Thành công') {
    return {
        type: Type.SHOW_SUCCESS_ALERT,
        content: content
    }
}

export function showAlertError(content = 'Thất bại') {
    return {
        type: Type.SHOW_ERROR_ALERT,
        content: content
    }
}

export function closeAlert() {
    return {
        type: Type.CLOSE_ALERT
    }
}