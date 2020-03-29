import React, { Component } from 'react';
import { closeModal, updateStatus } from '../../../../state/transaction/TransactionAction';
import { connect } from 'react-redux';

class ItemUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusOr: props.dataValue.status,
            statusOld: props.dataValue.status,
        };
    }

    updateStatus = () => {
        const j = {
            id: this.props.dataValue.id,
            status: this.state.statusOr
        };
        if (this.state.statusOld !== this.state.statusOr)
            this.props.updateStatus(j);
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
                            <br />
                            <span>Người Đặt: {this.props.dataValue.user.name}</span>
                            <br />
                            <span>Email: {this.props.dataValue.user.email}</span>
                            <br />
                            <span>Điện Thoại: {this.props.dataValue.user.phone}</span>
                            <br />
                            <span>Địa Chỉ Nhận: {this.props.dataValue.user.address}</span>
                            <br />
                            <span>Trạng Thái:</span>
                            <select value={this.state.statusOr} style={{ marginBottom: '12px', marginLeft: '24px' }} onChange={(e) => {
                                this.setState({
                                    statusOr: e.target.value
                                })
                            }}>
                                <option value="0" disabled={this.state.statusOr > 0}>Đang Chờ Xác Nhận</option>
                                <option value="1" disabled={this.state.statusOr > 1}>Đã Xác Nhận</option>
                                <option value="2" disabled={this.state.statusOr > 2}>Đang Giao Hàng</option>
                                <option value="3" >Thành Công</option>
                                <option value="4" >Thất Bại</option>
                            </select>
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
                                                    <td>{item.priceSale.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}</td>
                                                    <td>{item.number}</td>
                                                    <td>{item.priceNumber.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}</td>
                                                </tr>
                                            );
                                        })
                                    }

                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th className="sorting" colSpan={5} style={{ textAlign: 'center' }}>Tổng: {this.props.dataValue.orders.reduce((s, t) => {
                                            return s + t.priceNumber;
                                        }, 0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VND</th>
                                    </tr>
                                </tfoot>
                            </table>
                            </div>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" id="asd" className="btn btn-secondary" data-dismiss="modal" onClick={() => this.props.closeModel()}>Đóng</button>
                        <button type="button" className="btn btn-primary" onClick={(e) => this.updateStatus()} >Cập Nhật Trạng Thái</button>
                    </div>
                </div>
            </div >
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        closeModel: () => {
            dispatch(closeModal());
        },
        updateStatus: (d) => {
            dispatch(updateStatus(d));
        }
    }
}

export default connect(null, mapDispatchToProps)(ItemUpdate);