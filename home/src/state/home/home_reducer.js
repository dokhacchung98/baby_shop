import * as Type from './constant';

const initialState = {
    listSeller: [],
    listBlog: [],
    listCatalog: [],
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_LIST_CATALOG_SS:
            return { ...state, listCatalog: action.listCatalog };
        case Type.GET_LIST_SELLER_SS:
            return { ...state, listSeller: action.listSeller }
        case Type.GET_BLOG_SS:
            return { ...state, listBlog: action.listBlog };
        case Type.GET_ERR_HOMNE:
            return { ...state }
        default: return state;
    }
}

export default homeReducer;