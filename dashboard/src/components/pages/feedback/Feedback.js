import React, { Component } from 'react';
import Header from './../../layouts/header';
import LeftMenu from './../../layouts/left_menu';
import BreadCrumb from './../../layouts/bread_crumb';
import Footer from './../../layouts/footer';
import { connect } from 'react-redux';
import Popup from "reactjs-popup";
import { closeModal, openDetail, getListFB } from './../../../state/feedback/FeedbackAction'

class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSelected: null
        }
        this.getListFB(0);
    }

    getListFB = (page) => {
        this.props.getListData(page);
    }

    showDetail = (e, item) => {
        this.setState({
            dataSelected: item
        });
        console.log(item);
        this.props.openModal();
    }

    render() {
        return (
            <div>
                <Header />
                <LeftMenu />
                <div className="hk-pg-wrapper" style={{ minHeight: '600px' }}>
                    <BreadCrumb currentName="Phản Hồi" />
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card card-lg">
                                    <h6 className="card-header">
                                        DANH SÁCH PHẢN HỒI
                                    </h6>
                                    <hr />
                                    <div className="card-body">
                                        <div className="col-sm-12">
                                            <table id="datable_1" className="table table-hover w-100 display pb-30 dataTable dtr-inline" role="grid" aria-describedby="datable_1_info">
                                                <thead>
                                                    <tr role="row">
                                                        <th rowSpan={1} colSpan={4}>Id</th>
                                                        <th rowSpan={1} colSpan={4}>Tiêu Đề</th>
                                                        <th rowSpan={1} colSpan={4}>Người Gửi</th>
                                                        <th className="sorting" rowSpan={1} colSpan={4} style={{ textAlign: 'center' }}>Chức Năng</th>
                                                    </tr>
                                                </thead>
                                                {(this.props.listFeedback.length == 0)
                                                    ?
                                                    <tbody style={{ marginBottom: '14px' }}>
                                                        <tr>
                                                            <td colSpan={4}>Không có phần tử nào</td>
                                                        </tr>
                                                    </tbody>
                                                    :
                                                    <tbody>

                                                        {this.props.listFeedback.map((item, index) =>
                                                            <tr role="row" className="even" key={index}>
                                                                <td rowSpan={1} colSpan={4}>{item.id}</td>
                                                                <td rowSpan={1} colSpan={4}>{item.subject}</td>
                                                                <td rowSpan={1} colSpan={4}>{item.name}</td>
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
                                                        <th rowSpan={1} colSpan={4}>Id</th>
                                                        <th rowSpan={1} colSpan={4}>Tiêu Đề</th>
                                                        <th rowSpan={1} colSpan={4}>Người Gửi</th>
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
                                                this.state.dataSelected == null
                                                    ?
                                                    <div></div>
                                                    :
                                                    <div style={{ maxHeight: 'calc(100vh - 210px)', overflowY: 'auto' }}>
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title">Thông Tin Phản Hồi</h5>
                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.props.closeModal()}>
                                                                    <span aria-hidden="true">×</span>
                                                                </button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <h4 style={{ fontSize: '18px', marginBottom: '12px', fontWeight: '400' }}>Email: {this.state.dataSelected.email}</h4>
                                                                <h2 style={{ fontSize: '18px', marginBottom: '12px', fontWeight: '400' }}>Tên Người Gửi: {this.state.dataSelected.name}</h2>
                                                                <h2 style={{ fontSize: '18px', marginBottom: '12px', fontWeight: '400' }}>Tiêu Đề: {this.state.dataSelected.subject}</h2>
                                                                <h2 style={{ fontSize: '18px', marginBottom: '12px', fontWeight: '400' }}>Nội Dung</h2>
                                                                <p> {this.state.dataSelected.value}</p>
                                                            </div>
                                                        </div>
                                                    </div>
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
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getListData: (page) => {
            dispatch(getListFB(page));
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
        listFeedback: state.FeedbackReducer.listFeedback,
        totalPage: state.FeedbackReducer.totalPage,
        totalSize: state.FeedbackReducer.totalSize,
        isFirst: state.FeedbackReducer.isFirst,
        isLast: state.FeedbackReducer.isLast,
        currentPage: state.FeedbackReducer.pageNumber,
        openDetail: state.FeedbackReducer.isOpenDetail,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);