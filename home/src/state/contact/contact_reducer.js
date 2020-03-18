import * as Type from './constant';

const initialState = {
    isLoading: false
}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.SENDDING_CONTACT:
            return { ...state, isLoading: true };
        case Type.SEND_CONTACT_SS:
            return { ...state, isLoading: false };
        case Type.SEND_CONTACT_ER:
            return { ...state, isLoading: false };
        default: return state;
    }
}

export default contactReducer;