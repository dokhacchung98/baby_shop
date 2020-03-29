import React, { Component } from 'react';
import { closeModal } from './../../../../state/transaction/TransactionAction';
import { connect } from 'react-redux';

class ItemDetail extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div style={{ maxHeight: 'calc(100vh - 210px)', overflowY: 'auto' }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Thông Tin Đơn Hàng</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.props.closeModel()}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <h2>Đơn Hàng: {this.props.dataValue.id}.{this.props.dataValue.userId}.{this.props.dataValue.createdDate}</h2>
                            <br />
                            <span>Đặt Lúc: {new Date(this.props.dataValue.createdDate).toLocaleString().replace("00:00:00, ", "")}</span>
                        </div>
                        <div className="row">
                            <div className="col-sm-12"><table id="datable_1" className="table table-hover w-100 display pb-30 dataTable dtr-inline" role="grid" aria-describedby="datable_1_info">
                                <thead>
                                    <tr role="row">
                                        <th className="sorting">Ảnh</th>
                                        <th className="sorting">Tên Sản Phẩm</th>
                                        <th className="sorting">Giá</th>
                                        <th className="sorting">Số Lượng</th>
                                        <th className="sorting">Tổng Giá</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.dataValue.orders.map((item, key) => {
                                            return (
                                                <tr role="row" className="even" key={key}>
                                                    <td><img src={item.product.imagePath} style={{ width: '128px', objectFit: 'contain' }} /></td>
                                                    <td>{item.product.name}</td>
                                                    <td>{item.priceSale.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VND</td>
                                                    <td>{item.number}</td>
                                                    <td>{item.priceNumber.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VND</td>
                                                </tr>
                                            );
                                        })
                                    }

                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th className="sorting" colSpan={5} style={{ textAlign: 'center' }}>{this.props.dataValue.orders.reduce((s, t) => {
                                            return s + t.priceNumber;
                                        }, 0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VND</th>
                                    </tr>
                                </tfoot>
                            </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        closeModel: () => {
            dispatch(closeModal());
        }
    }
}

export default connect(null, mapDispatchToProps)(ItemDetail);