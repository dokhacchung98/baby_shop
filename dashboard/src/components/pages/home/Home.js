import React, { Component } from 'react';
import Header from './../../layouts/header';
import LeftMenu from './../../layouts/left_menu';
import BreadCrumb from './../../layouts/bread_crumb';
import Footer from './../../layouts/footer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDataAnalytic } from './../../../state/user/UserAction';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataValue: null
        }
        props.getApi();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.valueAnalytic != undefined) {
            this.setState({
                dataValue: nextProps.valueAnalytic
            })
        }
    }

    render() {
        return (
            <div>
                <Header />
                <LeftMenu />

                <div id="hk_nav_backdrop" className="hk-nav-backdrop" />

                <div className="hk-pg-wrapper" style={{ minHeight: '937px' }}>
                    <BreadCrumb currentName="Trang Chủ" />

                    <div className="container">
                        {/* Title */}
                        <div className="container mt-xl-50 mt-sm-30 mt-15">
                            {/* Title */}
                            <div className="hk-pg-header align-items-top">
                                <div>
                                    <h2 className="hk-pg-title font-weight-600 mb-10">Thống Kê Cơ Bản</h2>
                                </div>
                            </div>
                            {/* /Title */}
                            {/* Row */}
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="hk-row">
                                        <div className="col-lg-7">
                                            <div className="hk-row">
                                                <div className="col-sm-6">
                                                    <div className="card card-sm">
                                                        <div className="card-body">
                                                            <div className="d-flex justify-content-between mb-5">
                                                                <div>
                                                                    <span className="d-block font-15 text-dark font-weight-500">Người Dùng</span>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <span className="d-block display-5 text-dark mb-5" style={{fontSize: '4.3rem'}}>
                                                                    {
                                                                        this.state.dataValue == null
                                                                            ?
                                                                            '0'
                                                                            :
                                                                            this.state.dataValue.numberUser
                                                                    }
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="card card-sm">
                                                        <div className="card-body">
                                                            <div className="d-flex justify-content-between mb-5">
                                                                <div>
                                                                    <span className="d-block font-15 text-dark font-weight-500">Đơn Hàng</span>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <span className="d-block display-5 text-dark mb-5" style={{fontSize: '4.3rem'}}>
                                                                    {
                                                                        this.state.dataValue == null
                                                                            ?
                                                                            '0'
                                                                            :
                                                                            this.state.dataValue.numberOrder
                                                                    }
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="card card-sm">
                                                        <div className="card-body">
                                                            <div className="d-flex justify-content-between mb-5">
                                                                <div>
                                                                    <span className="d-block font-15 text-dark font-weight-500">Đơn Hàng Thành Công</span>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <span className="d-block display-5 text-dark mb-5" style={{fontSize: '4.3rem'}}>
                                                                    {
                                                                        this.state.dataValue == null
                                                                            ?
                                                                            '0'
                                                                            :
                                                                            this.state.dataValue.numberOrderSuccess
                                                                    }
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="card card-sm">
                                                        <div className="card-body">
                                                            <div className="d-flex justify-content-between mb-5">
                                                                <div>
                                                                    <span className="d-block font-15 text-dark font-weight-500">Doanh Thu</span>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <span className="d-block display-5 text-dark mb-5" style={{fontSize: '4.3rem'}}>
                                                                    {
                                                                        this.state.dataValue == null
                                                                            ?
                                                                            '0'
                                                                            :
                                                                            this.state.dataValue.priceMonth.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
                                                                    }
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card card-refresh">
                                                <div className="refresh-container">
                                                    <div className="loader-pendulums" />
                                                </div>
                                                <div className="card-header card-header-action">
                                                    <h6>Danh Mục</h6>
                                                    <div className="d-flex align-items-center card-action-wrap">
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-4 mt-3">
                                                            <Link to="/catalog" className="btn btn-primary btn-wth-icon icon-wthot-bg btn-lg">
                                                                <span className="icon-label"><i className="icon-tag" /> </span>
                                                                <span className="btn-text">Danh Sách Thể Loại</span>
                                                            </Link>
                                                        </div>
                                                        <div className="col-4 mt-3">
                                                            <Link to="/products" className="btn btn-sky  btn-wth-icon icon-wthot-bg btn-lg">
                                                                <span className="icon-label"><i className="icon-basket" /></span>
                                                                <span className="btn-text">Danh Sách Sản Phẩm</span>
                                                            </Link>
                                                        </div>
                                                        <div className="col-4 mt-3">
                                                            <Link to="/orders-new" className="btn btn-indigo   btn-wth-icon icon-wthot-bg btn-lg">
                                                                <span className="icon-label"><i className="icon-handbag" /> </span>
                                                                <span className="btn-text">Đơn Hàng Mới</span>
                                                            </Link>
                                                        </div>
                                                        <div className="col-4 mt-3">
                                                            <Link to="/orders-destroy" className="btn btn-sun  btn-wth-icon icon-wthot-bg btn-lg">
                                                                <span className="icon-label"><i className="icon-handbag" /> </span>
                                                                <span className="btn-text">Đơn Hàng Đã Hủy</span>
                                                            </Link>
                                                        </div>
                                                        <div className="col-4 mt-3">
                                                            <Link to="/orders-success" className="btn btn-orange  btn-wth-icon icon-wthot-bg btn-lg">
                                                                <span className="icon-label"><i className="icon-handbag" /> </span>
                                                                <span className="btn-text">Đơn Hàng Thành Công</span>
                                                            </Link>
                                                        </div>
                                                        <div className="col-4 mt-3">
                                                            <Link to="/blogs" className="btn btn-smoke btn-wth-icon icon-wthot-bg btn-lg">
                                                                <span className="icon-label"><i className="icon-note" /> </span>
                                                                <span className="btn-text">Danh Sách Bài Viết</span>
                                                            </Link>
                                                        </div>
                                                        <div className="col-4 mt-3">
                                                            <Link to="/feedback" className="btn btn-pumpkin  btn-wth-icon icon-wthot-bg btn-lg">
                                                                <span className="icon-label"><i className="icon-pencil" /> </span>
                                                                <span className="btn-text">Danh Sách Phản Hồi</span>
                                                            </Link>
                                                        </div>
                                                        <div className="col-4 mt-3">
                                                            <Link to="/users" className="btn btn-pink   btn-wth-icon icon-wthot-bg btn-lg">
                                                                <span className="icon-label"><i className="icon-user" /> </span>
                                                                <span className="btn-text">Danh Sách Người Dùng</span>
                                                            </Link>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="card">
                                                <div className="card-header card-header-action">
                                                    <h6>Sản Phẩm</h6>
                                                </div>
                                                <div className="card-body">
                                                    <img src="dist/img/chart.png" style={{ objectFit: 'contain', width: '100%' }} />
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header card-header-action">
                                                    <h6>Lưu Lượng</h6>
                                                </div>
                                                <div className="card-body">
                                                    <img src="dist/img/chart2.png" style={{ objectFit: 'contain', width: '100%' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Row */}
                        </div>
                        {/* /Row */}
                    </div>
                    <Footer />
                </div >
            </div >
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getApi: () => {
            dispatch(getDataAnalytic())
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state.UserReducer.dataAnalytic)
    return {
        valueAnalytic: state.UserReducer.dataAnalytic
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
