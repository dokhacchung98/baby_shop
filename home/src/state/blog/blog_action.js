import * as Type from './constant';
import * as Method from './../../utilities';
import Store from './../store';
import callApi from './../../service/call_api';
import { showAlertError, showAlertSuccess } from './../alert/alert_action';

export function getListBlog(number) {
    const pageSize = Store.getState().blogReducer.pageSize;
    if (number < 0) {
        number = 0;
    }
    const typeSort = Store.getState().blogReducer.typeSort;
    return (dispath) => {
        const parameter = `get-blogs?page=${number}&size=${pageSize}&type=${typeSort}`;
        dispath(loadding());
        return callApi(parameter, Method.GET,
            null, false).then(res => {
                if (res === undefined) {
                    dispath(showAlertError(Type.MSG_ERR_GET));
                }
                if (res.data.code === 200) {
                    if ((res.data.data.totalPages - 1) < number && res.data.data.totalElements > 0) {
                        return dispath(getListBlog(number - 1));
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

export function searchBlogs(keyword, number) {
    const pageSize = Store.getState().blogReducer.pageSize;
    if (number < 0) {
        number = 0;
    }
    const typeSort = Store.getState().blogReducer.typeSort;
    return (dispath) => {
        const parameter = `search-blog?page=${number}&size=${pageSize}&keyword=${keyword}`;
        dispath(loadding());
        return callApi(parameter, Method.GET,
            null, false).then(res => {
                if (res === undefined) {
                    dispath(showAlertError(Type.MSG_ERR_GET));
                }
                if (res.data.code === 200) {
                    if ((res.data.data.totalPages - 1) < number && res.data.data.totalElements > 0) {
                        return dispath(searchBlogs(number - 1));
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

export function getDetailBlog(id) {
    return (dispath) => {
        const parameter = `get-blog-by-id?id=${id}`;
        dispath(loadding());
        return callApi(parameter, Method.GET,
            null, false).then(res => {
                if (res === undefined) {
                    dispath(showAlertError(Type.MSG_ERR_GET));
                }
                if (res.data.code === 200) {
                    dispath(getDetailSS(res.data.data));
                } else {
                    dispath(showAlertError(Type.MSG_ERR_GET));
                }
            }).catch(() => {
                dispath(showAlertError(Type.MSG_ERR_GET));
            });
    }
}

export function getDetailSS(data) {
    return {
        type: Type.FETCH_BLOG_DETAIL,
        currentBLOG: data
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
        type: Type.FETCH_BLOG_SS,
        data: data
    }
}

export function fetchProductError(er) {
    return {
        type: Type.FETCH_BLOG_ER,
        err: er
    }
}

export function loadding() {
    return {
        type: Type.LOADDING_BLOG
    }
}