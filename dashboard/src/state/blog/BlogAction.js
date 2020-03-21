import * as Type from './Constant';
import callApi from './../../service';
import * as Method from './../../utilities';
import Store from './../Store';
import { showAlertError, showAlertSuccess } from './../alert/ActionAlert';
import { uploadImage } from '../../service/CallApi';

export function createBlog(data) {
    const page = Store.getState().BlogReducer.totalPage;
    return (dispath) => {
        dispath(loadding());
        return callApi('admin/create-blog', Method.POST, data, true)
            .then(res => {
                if (res === undefined) {
                    dispath(createError());
                    dispath(showAlertError(Type.MSG_ERR_CREATE));
                }
                if (res.data.code === 200) {
                    dispath(createSuccess(res));
                    dispath(showAlertSuccess(Type.MSG_SS_CRATE));
                    dispath(getListBlog(page));
                } else {
                    dispath(createError());
                    dispath(showAlertError(Type.MSG_ERR_CREATE));
                }
            }).catch(() => {
                dispath(createError());
                dispath(showAlertError(Type.MSG_ERR_CREATE));
            });
    }
}

export function uploadImageAndCreate(image, data) {
    return (dispath) => {
        return uploadImage(image).then(res => {
            dispath(createBlog({ ...data, imagePath: res.data.data }));
        }).catch(() => {
            dispath(createError());
            dispath(showAlertError(Type.MSG_ERR_CREATE));
        });
    }
}

export function uploadImageAndUpdate(image, data) {
    return (dispath) => {
        return uploadImage(image).then(res => {
            dispath(editBlog({ ...data, imagePath: res.data.data }));
        }).catch(() => {
            dispath(createError());
            dispath(showAlertError(Type.MSG_ERR_CREATE));
        });
    }
}

export function getListBlog(number) {
    const pageSize = Store.getState().BlogReducer.pageSize;
    if (number < 0) {
        number = 0;
    }
    return (dispath) => {
        const parameter = `get-blogs?page=${number}&size=${pageSize}&type=0`;
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

export function editBlog(data) {
    const page = Store.getState().BlogReducer.pageNumber;
    return (dispath) => {
        dispath(loadding());
        return callApi('admin/update-blog', Method.POST, data, true)
            .then(res => {
                if (res === undefined) {
                    dispath(editError());
                    dispath(showAlertError(Type.MSG_ERR_EDIT));
                }
                if (res.data.code === 200) {
                    dispath(showAlertSuccess(Type.MSG_SS_EDIT));
                    dispath(editSuccess(res));
                    dispath(getListBlog(page));
                } else {
                    dispath(editError());
                    dispath(showAlertError(Type.MSG_ERR_EDIT));
                }
            }).catch(() => {
                dispath(editError());
                dispath(showAlertError(Type.MSG_ERR_EDIT));
            });
    }
}

export function removeBlog(id) {
    const page = Store.getState().BlogReducer.pageNumber;
    return (dispath) => {
        dispath(loadding());
        callApi(`admin/delete-blog?id=${id}`, Method.GET, null, true).then(res => {
            if (res === undefined) {
                dispath(removeError());
                dispath(showAlertError(Type.MSG_ERR_DELETE));
            }
            if (res.data.code === 200) {
                dispath(removeSuccess());
                dispath(showAlertSuccess(Type.MSG_SS_DELETE));
                dispath(getListBlog(page));
            } else {
                dispath(removeError());
                dispath(showAlertError(Type.MSG_ERR_DELETE));
            }
        }).catch(() => {
            dispath(removeError());
            dispath(showAlertError(Type.MSG_ERR_DELETE));
        });
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

export function loadding() {
    return {
        type: Type.BLOG_FETCHING
    }
}

export function createSuccess(data) {
    return {
        type: Type.CREATE_BLOG_SS,
        data: data
    }
}

export function createError() {
    return {
        type: Type.CREATE_BLOG_ER,
    }
}

export function editSuccess(data) {
    return {
        type: Type.EDIT_BLOG_SS,
        data: data
    }
}

export function editError() {
    return {
        type: Type.EDIT_BLOG_ER,
    }
}

export function removeSuccess(data) {
    return {
        type: Type.REMOVE_BLOG_SS,
        data: data
    }
}

export function removeError() {
    return {
        type: Type.REMOVE_BLOG_ER,
    }
}

export function openCreate() {
    return {
        type: Type.OPEN_CREATE
    }
}

export function closeModal() {
    return {
        type: Type.CLOSE_MODAL
    }
}

export function openEdit(data) {
    return {
        type: Type.OPEN_EDIT,
        data: data
    }
}


export function openDelete(data) {
    return {
        type: Type.OPEN_DELETE,
        data: data
    }
}