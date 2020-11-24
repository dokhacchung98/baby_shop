import React, { Component, useEffect, useState } from 'react';
import Header from './../../layouts/header';
import LeftMenu from './../../layouts/left_menu';
import BreadCrumb from './../../layouts/bread_crumb';
import Footer from './../../layouts/footer';
import Popup from "reactjs-popup";
import { connect } from 'react-redux';
import { closeModal, openCreate, openDelete, openEdit, getListCatalog } from './../../../state/catalog/CatalogAction';
import EditCatalog from './edit/EditCatalog';
import DeleteCatalog from './delete/DeleteCatalog';
import CreatePer from './create/CreatePer';
import callApi from '../../../service';

const Permission = (props) => {
    const [listModule, setListModule] = useState([1])
    const [isShowCreate, setIsShowCreate] = useState(false);
    const [listRole, setListRole] = useState([])

    useEffect(() => {
        fetchList();
        fetchListRole();
    }, [])

    const openModalCreate = () => {
        setIsShowCreate(true);
    }

    const closeModalCreate = () => {
        setIsShowCreate(false);
    }

    const fetchList = async () => {
        await callApi('admin/get-module-permission', 'get', {}, true)
            .then(res => {
                setListModule(res.data?.data)
            }, err => {
                console.log('error', err)
            })
    }

    const fetchListRole = async () => {
        await callApi('admin/get-role-admin', 'get', {}, true)
            .then(res => {
                setListRole(res.data?.data)
            }, err => {
                console.log('error', err)
            })
    }

    return (
        <div>
            <Header />
            <LeftMenu />
            <div className="hk-pg-wrapper" style={{ minHeight: '600px' }}>
                <BreadCrumb currentName="Phân quyền" />
                {
                    listModule.map((item, index) => {
                        return <ItemModulePer
                            listRole={listRole}
                            item={item} index={index} />
                    })
                }

                <div style={{ position: 'fixed', bottom: 50, right: 30 }}
                >
                    <button type="button" className="btn btn-primary"
                        onClick={openModalCreate}>
                        <i className="icon-plus mr-5" style={{ fontSize: '18px' }}></i>Thêm Mới
                </button>
                </div>

                <Popup open={isShowCreate}
                    closeOnDocumentClick
                    onClose={closeModalCreate} modal>
                    <CreatePer closeModal={closeModalCreate} fetchList={fetchList} />
                </Popup>

                {/*                    <Popup open={props.openEdit}
                                            closeOnDocumentClick
                                            onClose={this.closeModal} modal><EditCatalog></EditCatalog></Popup>

                                        <Popup open={props.openDelete}
                                            closeOnDocumentClick
                                            onClose={this.closeModal} modal><DeleteCatalog></DeleteCatalog></Popup> */}

                <Footer />
            </div>
        </div>
    );
}


const ItemModulePer = ({ item, index, listRole }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="card card-lg">
                        <h6 className="card-header">
                            {item?.name}
                        </h6>
                        <hr />
                        <div className="card-body">
                            <div className="col-sm-12">
                                <table id="datable_1" className="table table-hover w-100 display pb-30 dataTable dtr-inline" role="grid" aria-describedby="datable_1_info">
                                    <thead>
                                        <tr role="row">
                                            <th className="sorting" rowSpan={1} colSpan={4}>Tên quyền</th>
                                            {
                                                listRole.map((e, i) => {
                                                    console.log('sssss', e)
                                                    return (
                                                        <th className="sorting" rowSpan={1} colSpan={4}>{e?.display}</th>
                                                    )
                                                })
                                            }
                                        </tr>
                                    </thead>
                                    {(item.permissions == undefined || item?.permissions.length == 0)
                                        ?
                                        <tbody style={{ marginBottom: '14px', textAlign: 'center' }}>
                                            <tr rowSpan={3} colSpan={3}>
                                                <td>Không có phần tử nào</td>
                                            </tr>
                                        </tbody>
                                        :
                                        <tbody>

                                            {(item?.permissions.map((e, i) =>
                                                <tr role="row" className="even" key={index}>
                                                    <td rowSpan={1} colSpan={4}>{e.name}</td>
                                                    {
                                                        listRole.map((e1, i1) => {
                                                            return (
                                                                <td rowSpan={1} colSpan={4} >
                                                                    <button
                                                                        className="btn btn-social btn-warning btn-icon-style-1"
                                                                        onClick={(e) => {

                                                                        }}>
                                                                        {
                                                                            1 && (
                                                                                <i className="fa fa-check"></i>
                                                                            )
                                                                        }

                                                                    </button>
                                                                </td>
                                                            )
                                                        })
                                                    }
                                                </tr>
                                            ))}

                                        </tbody>
                                    }

                                    <tfoot>
                                        <tr>
                                            <th rowSpan={1} colSpan={4}>Id</th>
                                            {
                                                listRole.map((e, i) => {
                                                    return (
                                                        <th rowSpan={1} colSpan={4}>{e?.display}</th>
                                                    )
                                                })
                                            }
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Permission;