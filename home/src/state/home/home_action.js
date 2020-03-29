import * as Type from './constant';
import callApi from './../../service/call_api';
import * as Method from './../../utilities';

export function getSellerList(page) {
    return (dispatch) => {
        return callApi(`get-seller-products?page=${0}&size=${Type.SIZE_SELLER}`, Method.GET, null, false)
            .then(res => {
                if (res != undefined && res.data.coode === 200) {

                } else {

                }
            }).catch(err => {

            });
    }
}
