import * as Type from './Containt';

const initstate = {
    isShowAlert: false,
    typeAlert: Type.SSC,
    content: ''
}

const AlertReducer = (state = initstate, action) => {
    switch (action.type) {
        case Type.SHOW_SUCCESS_ALERT:
            return { ...state, isShowAlert: true, typeAlert: Type.SSC, content: action.content };
        case Type.SHOW_ERROR_ALERT:
            return { ...state, isShowAlert: true, typeAlert: Type.ERR, content: action.content };
        case Type.CLOSE_ALERT:
            return { ...state, isShowAlert: false };
        default: return state;
    }
}

export default AlertReducer;