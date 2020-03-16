import React, { Component } from 'react';
import Header from './../../layouts/header';
import LeftMenu from './../../layouts/left_menu';
import BreadCrumb from './../../layouts/bread_crumb';
import Footer from './../../layouts/footer';
import CreateProduct from './create/CreateProduct';
import Popup from "reactjs-popup";
import { connect } from 'react-redux';
import { closeModal, openCreate, openDelete, openEdit, getListCatalog, getListProduct } from './../../../state/product/ProductAction';
import DeleteProduct from './delete/DeleteProduct';
import EditProduct from './edit/EditProduct';

class Product extends Component {
    constructor(props) {
        super(props);
        this.fetchData(0);
        this.props.fetchListCatalog();
    }

    openAlertDelete(data) {
        this.props.dpOpenModalDelete(data);
    }

    openAlertEdit(data) {
        this.props.dpOpenModalEdit(data);
    }

    openModalCreate = () => {
        this.props.dpOpenModalCreate();
    }

    closeModal = () => {
        this.props.dpCloseModal();
    }

    fetchData(page) {
        this.props.fetchListData(page);
    }

    render() {
        return (
            <div>
                <Header />
                <LeftMenu />
                <div className="hk-pg-wrapper" style={{ minHeight: '600px' }}>
                    <BreadCrumb currentName="Sản Phẩm" />
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card card-lg">
                                    <h6 className="card-header">
                                        DANH SÁCH SẢN PHẨM
                                    </h6>
                                    <hr />
                                    <div className="card-body">
                                        <div className="col-sm-12">
                                            <button type="button" className="btn btn-primary" onClick={(e) => this.openModalCreate()}>
                                                <i className="icon-plus mr-5" style={{ fontSize: '18px' }}></i>Thêm Mới
                                         </button>
                                        </div>
                                        <div className="col-sm-12">
                                            <table id="datable_1" className="table table-hover w-100 display pb-30 dataTable dtr-inline" role="grid" aria-describedby="datable_1_info">
                                                <thead>
                                                    <tr role="row">
                                                        <th className="sorting" rowSpan={1} colSpan={4}>Id</th>
                                                        <th className="sorting" rowSpan={1} colSpan={4}>Tên Sản Phẩm</th>
                                                        <th className="sorting" rowSpan={1} colSpan={2}>Giá</th>
                                                        <th className="sorting" rowSpan={1} colSpan={1}>Giảm Giá</th>
                                                        <th className="sorting" rowSpan={1} colSpan={4} style={{ textAlign: 'center' }}>Chức Năng</th>
                                                    </tr>
                                                </thead>
                                                {(this.props.listData === undefined)
                                                    ?
                                                    <tbody style={{ marginBottom: '14px' }}>
                                                        <tr>
                                                            <td>Không có phần tử nào</td>
                                                        </tr>
                                                    </tbody>
                                                    :
                                                    <tbody>
                                                        {this.props.listData.map((item, index) =>
                                                            <tr role="row" className="even" key={index}>
                                                                <td rowSpan={1} colSpan={4}>{item.id}</td>
                                                                <td rowSpan={1} colSpan={4}>{item.name}</td>
                                                                <td rowSpan={1} colSpan={2}>{item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VND</td>
                                                                <td rowSpan={1} colSpan={1} style={{ textAlign: 'center' }}>{item.discount} %</td>
                                                                <td rowSpan={1} colSpan={4} style={{ textAlign: 'center' }}>
                                                                    <button className="btn btn-warning btn-icon-style-1" style={{ marginRight: '14px' }} onClick={(e) => {
                                                                        this.openAlertEdit(item);
                                                                    }}><i className="icon-wrench"></i></button>
                                                                    <button className="btn btn-danger btn-icon-style-1" onClick={(e) => {
                                                                        this.openAlertDelete(item);
                                                                    }}><i className="icon-trash"></i></button>
                                                                </td>
                                                            </tr>
                                                        )}
                                                    </tbody>}
                                                <tfoot>
                                                    <tr>
                                                        <th rowSpan={1} colSpan={4}>Id</th>
                                                        <th rowSpan={1} colSpan={4}>Tên Sản Phẩm</th>
                                                        <th className="sorting" rowSpan={1} colSpan={2}>Giá</th>
                                                        <th className="sorting" rowSpan={1} colSpan={1}>Giảm Giá</th>
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

                                        <Popup open={this.props.openCreate}
                                            closeOnDocumentClick
                                            onClose={this.closeModal} modal><CreateProduct></CreateProduct></Popup>

                                        <Popup open={this.props.openEdit}
                                            closeOnDocumentClick
                                            onClose={this.closeModal} modal><EditProduct></EditProduct></Popup>

                                        <Popup open={this.props.openDelete}
                                            closeOnDocumentClick
                                            onClose={this.closeModal} modal><DeleteProduct></DeleteProduct></Popup>
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
        dpOpenModalCreate: () => {
            dispatch(openCreate())
        },
        dpCloseModal: () => {
            dispatch(closeModal())
        },
        dpOpenModalEdit: (data) => {
            dispatch(openEdit(data))
        },
        dpOpenModalDelete: (data) => {
            dispatch(openDelete(data))
        },
        fetchListData: (number) => {
            dispatch(getListProduct(number));
        },
        fetchListCatalog: () => {
            dispatch(getListCatalog());
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        openCreate: state.ProductReducer.openCreate,
        openEdit: state.ProductReducer.openEdit,
        openDelete: state.ProductReducer.openDelete,
        listData: state.ProductReducer.listData,
        totalPage: state.ProductReducer.totalPage,
        totalSize: state.ProductReducer.totalSize,
        isFirst: state.ProductReducer.isFirst,
        isLast: state.ProductReducer.isLast,
        currentPage: state.ProductReducer.pageNumber
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);