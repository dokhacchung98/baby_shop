import React, { Component } from 'react';
import Header from './../../layouts/header';
import LeftMenu from './../../layouts/left_menu';
import BreadCrumb from './../../layouts/bread_crumb';
import Footer from './../../layouts/footer';
import { connect } from 'react-redux';
import { getListTransactionType, openDetail, closeModal } from './../../../state/transaction/TransactionAction';
import Popup from "reactjs-popup";
import ItemDetail from './item_detail/ItemDetail';

class OrderDestroy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSelected: null
        }
        this.getListTransaction(0);
    }

    getListTransaction = (page) => {
        this.props.getListData(page, 4);
    }

    showDetail = (e, item) => {
        this.setState({
            dataSelected: item
        });
        this.props.openModal();
    }

    render() {
        return (
            <div>
                <Header />
                <LeftMenu />
                <div className="hk-pg-wrapper" style={{ minHeight: '600px' }}>
                    <BreadCrumb currentName="Đơn Hàng Bị Hủy" />
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card card-lg">
                                    <h6 className="card-header">
                                        DANH SÁCH ĐƠN HÀNG BỊ HỦY
                                    </h6>
                                    <hr />
                                    <div className="card-body">
                                        <div className="col-sm-12">
                                            <table id="datable_1" className="table table-hover w-100 display pb-30 dataTable dtr-inline" role="grid" aria-describedby="datable_1_info">
                                                <thead>
                                                    <tr role="row">
                                                        <th rowSpan={1} colSpan={4}>Mã Đơn</th>
                                                        <th rowSpan={1} colSpan={4}>Đơn Giá</th>
                                                        <th rowSpan={1} colSpan={4}>Ngày Tạo</th>
                                                        <th className="sorting" rowSpan={1} colSpan={4} style={{ textAlign: 'center' }}>Chức Năng</th>
                                                    </tr>
                                                </thead>
                                                {(this.props.listTranasction.length == 0)
                                                    ?
                                                    <tbody style={{ marginBottom: '14px' }}>
                                                        <tr>
                                                            <td colSpan={4}>Không có phần tử nào</td>
                                                        </tr>
                                                    </tbody>
                                                    :
                                                    <tbody>

                                                        {this.props.listTranasction.map((item, index) =>
                                                            <tr role="row" className="even" key={index}>
                                                                <td rowSpan={1} colSpan={4}>{item.id}.{item.userId}.{item.createdDate}</td>
                                                                <td rowSpan={1} colSpan={4}>{item.orders.reduce((s, t) => {
                                                                    return s + t.priceNumber;
                                                                }, 0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
                                                                } VND</td>
                                                                <td rowSpan={1} colSpan={4}>{new Date(item.createdDate).toLocaleString().replace("00:00:00, ", "")}</td>
                                                                <td rowSpan={1} colSpan={4} style={{ textAlign: 'center' }}>
                                                                    <button className="btn btn-warning" style={{ marginRight: '14px' }} onClick={(e) => {
                                                                        e.preventDefault();
                                                                        this.showDetail(e, item);
                                                                    }}><i className="icon-eye"></i></button>
                                                                </td>
                                                            </tr>
                                                        )}

                                                    </tbody>
                                                }

                                                <tfoot>
                                                    <tr>
                                                        <th rowSpan={1} colSpan={4}>Mã Đơn</th>
                                                        <th rowSpan={1} colSpan={4}>Đơn Giá</th>
                                                        <th rowSpan={1} colSpan={4}>Ngày Tạo</th>
                                                        <th rowSpan={1} colSpan={4} style={{ textAlign: 'center' }}>Chức Năng</th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12 col-md-5">
                                                <div className="dataTables_info" id="datable_1_info" role="status" aria-live="polite">Tổng số {this.props.totalSize} phần tử</div>
                                            </div>
                                            <div className="col-sm-12 col-md-7">
                                                <div className="dataTables_paginate paging_simple_numbers" id="datable_1_paginate">
                                                    <ul className="pagination">
                                                        <li className={
                                                            this.props.isFirst ? "paginate_button page-item previous disabled"
                                                                : "paginate_button page-item previous"
                                                        } id="datable_1_previous">
                                                            <a href="/#" aria-controls="datable_1" data-dt-idx={0} tabIndex={0} className="page-link" onClick={(e) => {
                                                                e.preventDefault();
                                                                this.fetchData(this.props.currentPage - 1);
                                                            }}>Trước</a>
                                                        </li>
                                                        {
                                                            Array.from(Array(this.props.totalPage).keys()).map((item, key) => {
                                                                return (<li className={
                                                                    (this.props.currentPage === item)
                                                                        ? "paginate_button page-item active"
                                                                        : "paginate_button page-item"
                                                                } key={key}>
                                                                    <a href="/#" aria-controls="datable_1" data-dt-idx={1} tabIndex={0} className="page-link" onClick={(e) => {
                                                                        e.preventDefault();
                                                                        this.fetchData(item);
                                                                    }}>{item + 1}</a>
                                                                </li>)
                                                            })
                                                        }

                                                        <li className={
                                                            this.props.isLast ? "paginate_button page-item previous disabled"
                                                                : "paginate_button page-item previous"
                                                        } id="datable_1_next">
                                                            <a href="/#" aria-controls="datable_1" data-dt-idx={7} tabIndex={0} className="page-link"
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    this.fetchData(this.props.currentPage + 1);
                                                                }}>Sau</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <Popup open={this.props.openDetail}
                                            closeOnDocumentClick
                                            onClose={this.props.closeModal} modal>
                                            {
                                                this.state.dataSelected != null
                                                    ?
                                                    <ItemDetail dataValue={this.state.dataSelected}></ItemDetail>
                                                    : <div></div>
                                            }
                                        </Popup>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getListData: (page, type) => {
            dispatch(getListTransactionType(page, type));
        },
        closeModal: () => {
            dispatch(closeModal());
        },
        openModal: () => {
            dispatch(openDetail());
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        listTranasction: state.TransactionReducer.listTransaction,
        totalPage: state.TransactionReducer.totalPage,
        totalSize: state.TransactionReducer.totalSize,
        isFirst: state.TransactionReducer.isFirst,
        isLast: state.TransactionReducer.isLast,
        currentPage: state.TransactionReducer.pageNumber,
        openDetail: state.TransactionReducer.isOpenDetail,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(OrderDestroy);
