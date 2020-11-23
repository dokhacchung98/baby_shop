import React, { Component } from 'react';
import Header from './../../layouts/header';
import LeftMenu from './../../layouts/left_menu';
import BreadCrumb from './../../layouts/bread_crumb';
import Footer from './../../layouts/footer';
import CreateCatalog from './create/CreateCatalog';
import Popup from "reactjs-popup";
import { connect } from 'react-redux';
import { closeModal, openCreate, openDelete, openEdit, getListCatalog } from './../../../state/catalog/CatalogAction';
import EditCatalog from './edit/EditCatalog';
import DeleteCatalog from './delete/DeleteCatalog';

import React from 'react'

const Permission = (props) => {
    return (
        <div>
            <Header />
            <LeftMenu />
            <div className="hk-pg-wrapper" style={{ minHeight: '600px' }}>
                <BreadCrumb currentName="Thể Loại" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card card-lg">
                                <h6 className="card-header">
                                    DANH SÁCH THỂ LOẠI
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
                                                    <th className="sorting" rowSpan={1} colSpan={4}>Tên Thể Loại</th>
                                                    <th className="sorting" rowSpan={1} colSpan={4} style={{ textAlign: 'center' }}>Chức Năng</th>
                                                </tr>
                                            </thead>
                                            {(props.listData === undefined)
                                                ?
                                                <tbody style={{ marginBottom: '14px' }}>
                                                    <tr>
                                                        <td>Không có phần tử nào</td>
                                                    </tr>
                                                </tbody>
                                                :
                                                <tbody>

                                                    {props.listData.map((item, index) =>
                                                        <tr role="row" className="even" key={index}>
                                                            <td rowSpan={1} colSpan={4}>{item.id}</td>
                                                            <td rowSpan={1} colSpan={4}>{item.name}</td>
                                                            <td rowSpan={1} colSpan={4} style={{ textAlign: 'center' }}>
                                                                <button className="btn btn-warning" style={{ marginRight: '14px' }} onClick={(e) => {
                                                                    this.openAlertEdit(item);
                                                                }}><i className="icon-wrench"></i></button>
                                                                <button className="btn btn-danger" onClick={(e) => {
                                                                    this.openAlertDelete(item);
                                                                }}><i className="icon-trash"></i></button>
                                                            </td>
                                                        </tr>
                                                    )}

                                                </tbody>
                                            }

                                            <tfoot>
                                                <tr>
                                                    <th rowSpan={1} colSpan={4}>Id</th>
                                                    <th rowSpan={1} colSpan={4}>Tên Thể Loại</th>
                                                    <th rowSpan={1} colSpan={4} style={{ textAlign: 'center' }}>Chức Năng</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12 col-md-5">
                                            <div className="dataTables_info" id="datable_1_info" role="status" aria-live="polite">Tổng số {props.totalSize} phần tử</div>
                                        </div>
                                        <div className="col-sm-12 col-md-7">
                                            <div className="dataTables_paginate paging_simple_numbers" id="datable_1_paginate">
                                                <ul className="pagination">
                                                    <li className={
                                                        props.isFirst ? "paginate_button page-item previous disabled"
                                                            : "paginate_button page-item previous"
                                                    } id="datable_1_previous">
                                                        <a href="/#" aria-controls="datable_1" data-dt-idx={0} tabIndex={0} className="page-link" onClick={(e) => {
                                                            e.preventDefault();
                                                            this.fetchData(props.currentPage - 1);
                                                        }}>Trước</a>
                                                    </li>
                                                    {
                                                        Array.from(Array(props.totalPage).keys()).map((item, key) => {
                                                            return (<li className={
                                                                (props.currentPage === item)
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
                                                        props.isLast ? "paginate_button page-item previous disabled"
                                                            : "paginate_button page-item previous"
                                                    } id="datable_1_next">
                                                        <a href="/#" aria-controls="datable_1" data-dt-idx={7} tabIndex={0} className="page-link"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                this.fetchData(props.currentPage + 1);
                                                            }}>Sau</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <Popup open={props.openCreate}
                                            closeOnDocumentClick
                                            onClose={this.closeModal} modal><CreateCatalog></CreateCatalog></Popup>

                                        <Popup open={props.openEdit}
                                            closeOnDocumentClick
                                            onClose={this.closeModal} modal><EditCatalog></EditCatalog></Popup>

                                        <Popup open={props.openDelete}
                                            closeOnDocumentClick
                                            onClose={this.closeModal} modal><DeleteCatalog></DeleteCatalog></Popup> */}
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


export default Permission;