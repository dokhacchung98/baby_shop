import * as Type from './constant';
import * as Method from './../../utilities';
import Store from './../store';
import callApi from './../../service/call_api';
import { showAlertError } from './../alert/alert_action';

export function getListProduct(number) {
    const pageSize = Store.getState().productReducer.pageSize;
    if (number < 0) {
        number = 0;
    }
    const typeSort = Store.getState().productReducer.typeSort;
    const catalog = Store.getState().productReducer.idCatalog;
    return (dispath) => {
        const parameter = `get-product-by-type?page=${number}&size=${pageSize}&type=${typeSort}&idCatalog=${catalog}`;
        dispath(loadding());
        return callApi(parameter, Method.GET,
            null, false).then(res => {
                if (res === undefined) {
                    dispath(showAlertError(Type.MSG_ERR_GET));
                }
                if (res.data.code === 200) {
                    if ((res.data.data.totalPages - 1) < number && res.data.data.totalElements > 0) {
                        return dispath(getListProduct(number - 1));
                    }
                    dispath(fetchList(res.data.data.content,
                        res.data.data.totalElements,
                        res.data.data.totalPages,
                        res.data.data.first,
                        res.data.data.last,
                        res.data.data.number
                    ));
                } else {
                    dispath(showAlertError(Type.MSG_ERR_GET));
                }
            }).catch(() => {
                dispath(showAlertError(Type.MSG_ERR_GET));
            });
    }
}

export function getNewProduct() {
    return (dispath) => {
        return callApi('get-new-products', Method.GET,
            null, false).then(res => {
                if (res == undefined) {
                    dispath(showAlertError(Type.MSG_ERR_GET));
                } else
                    if (res.data.code === 200) {
                        dispath(getListNewProductSS(res.data.data));
                    } else {
                        dispath(showAlertError(Type.MSG_ERR_GET));
                    }
            }).catch(() => {
                dispath(showAlertError(Type.MSG_ERR_GET));
            });
    }
}

export function searchProducts(keyword, number) {
    const pageSize = Store.getState().productReducer.pageSize;
    if (number < 0) {
        number = 0;
    }
    return (dispath) => {
        const parameter = `search-products?keyword=${keyword}&page=${number}&size=${pageSize}`;
        dispath(loadding());
        return callApi(parameter, Method.GET,
            null, false).then(res => {
                if (res === undefined) {
                    dispath(showAlertError(Type.MSG_ERR_GET));
                }
                if (res.data.code === 200) {
                    if ((res.data.data.totalPages - 1) < number && res.data.data.totalElements > 0) {
                        return dispath(searchProducts(number - 1));
                    }
                    dispath(fetchList(res.data.data.content,
                        res.data.data.totalElements,
                        res.data.data.totalPages,
                        res.data.data.first,
                        res.data.data.last,
                        res.data.data.number
                    ));
                } else {
                    dispath(showAlertError(Type.MSG_ERR_GET));
                }
            }).catch(() => {
                dispath(showAlertError(Type.MSG_ERR_GET));
            });
    }
}

export function getListNewProductSS(data) {
    return {
        type: Type.GET_NEW_PRODUCT_SS,
        data: data
    }
}

export function getDetailProduct(id) {
    return (dispath) => {
        const parameter = `get-detail-product?id=${id}`;
        dispath(loadding());
        return callApi(parameter, Method.GET,
            null, false).then(res => {
                if (res === undefined) {
                    dispath(showAlertError(Type.MSG_ERR_GET));
                }
                if (res.data.code === 200) {
                    dispath(getDetailProductSuccess(res.data.data));
                    dispath(randomProduct(id))
                } else {
                    dispath(showAlertError(Type.MSG_ERR_GET));
                }
            }).catch(() => {
                dispath(showAlertError(Type.MSG_ERR_GET));
            });
    }
}

export function randomProduct(id) {
    const catalog = Store.getState().productReducer.idCatalog;
    const currentProduct = Store.getState().productReducer.currentProduct;
    return (dispath) => {
        const parameter = `random-product?id=${id}&catalogId=${catalog == 0 ? currentProduct.catalogs[0].id : catalog}`;
        dispath(loadding());
        return callApi(parameter, Method.GET,
            null, false).then(res => {
                if (res === undefined) {
                    dispath(showAlertError(Type.MSG_ERR_GET));
                }
                if (res.data.code === 200) {
                    dispath(fetchList(res.data.data.content,
                        res.data.data.totalElements,
                        res.data.data.totalPages,
                        res.data.data.first,
                        res.data.data.last,
                        res.data.data.number
                    ));
                } else {
                    dispath(showAlertError(Type.MSG_ERR_GET));
                }
            }).catch(() => {
                dispath(showAlertError(Type.MSG_ERR_GET));
            });
    }
}

export function getDetailProductSuccess(data) {
    return {
        type: Type.FETCH_PRODUCT_DETAIL,
        currentProduct: data
    }
}

export function setIdCatalog(id) {
    return {
        type: Type.UPDATE_ID_CATALOG,
        idCatalog: id
    }
}

export function setTypeSort(type) {
    return {
        type: Type.UPDATE_ID_TYPE,
        typeSort: type
    }
}

export function fetchList(data, size, page, first, last, number) {
    return {
        type: Type.FETCH_LIST,
        listData: data,
        totalSize: size,
        totalPage: page,
        isFirst: first,
        isLast: last,
        currentPage: number
    }
}

export function fetchProductSuccess(data) {
    return {
        type: Type.FETCH_PRODUCT_SS,
        data: data
    }
}

export function fetchProductError(er) {
    return {
        type: Type.FETCH_PRODUCT_ER,
        err: er
    }
}

export function loadding() {
    return {
        type: Type.LOADDING_PRODUCT
    }
}