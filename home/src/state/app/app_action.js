import * as Type from './constant';

export function openMenu() {
    return {
        type: Type.OPEN_MENU
    }
}

export function closeMenu() {
    return {
        type: Type.CLOSE_MENU
    }
}

export function openSearch() {
    return {
        type: Type.OPEN_SEARCH
    }
}

export function closeSearch() {
    return {
        type: Type.CLOSE_SEARCH
    }
}

export function setNumberCart(myCarts) {
    return {
        type: Type.SET_CARTS,
        myCarts: myCarts
    }
}