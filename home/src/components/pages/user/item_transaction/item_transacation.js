import React, { Component } from 'react';
import { convertMoneyDisplay } from './../../../../utilities/convert_money';

export default class ItemTransaction extends Component {
    getLinkTransactionDetail = () => {
        return `/chi-tiet-don-hang-${this.props.dataValue.id}`;
    }

    render() {
        return (
            <tr>
                <td className="product-name">
                    <a href={this.getLinkTransactionDetail()}>{this.props.dataValue.id}.{this.props.dataValue.userId}.{this.props.dataValue.createdDate}</a>
                </td>
                <td className="product-price">
                    <span className="amount">{convertMoneyDisplay(this.props.dataValue.orders.reduce((s, t) => {
                        return s + t.priceNumber;
                    }, 0), 0)} VND</span>
                </td>
                <td className="product-subtotal">
                    {new Date(this.props.dataValue.createdDate).toLocaleString().replace("00:00:00, ", "")}
                </td>
                <td className="product-remove">

                    {
                        this.props.dataValue.status == 0
                            ?
                            <span className="badge-primary">Đang Chờ Xử Lý</span>
                            : this.props.dataValue.status == 1
                                ?
                                <span className="badge-info">Đã Xác Nhận</span>
                                : this.props.dataValue.status == 2
                                    ?
                                    <span className="badge-warning">Đang Giao Hàng</span>
                                    : this.props.dataValue.status == 3
                                        ? <span className="badge-success">Thành Công</span>
                                        : this.props.dataValue.status == 4
                                            ? <span className="badge-danger">Đơn Hàng Bị Hủy</span>
                                            : <div></div>
                    }
                </td>
            </tr>
        )
    }
}
