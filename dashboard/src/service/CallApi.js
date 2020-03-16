import axios from 'axios';
import * as Type from './../utilities';

export default function callApi(pathUrl, method = 'GET', body, isAuthenticated) {
    const urlRequest = `${Type.BASE_URL}/${pathUrl}`;
    if (isAuthenticated) {
        var token = 'Bearer ' + localStorage.getItem(Type.AUTH);
        return axios({
            method: method,
            url: urlRequest,
            data: body,
            headers: {
                'Authorization': token
            }
        }).catch(e => {
            console.log(e);
        });
    }
    return axios({
        method: method,
        url: urlRequest,
        data: body
    }).catch(e => {
        console.log(e);
    });
}

export function uploadImage(imageFile) {
    const formData = new FormData();
    formData.append('image', imageFile);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    return axios.post(`${Type.BASE_URL}/upload-image`, formData, config);
}