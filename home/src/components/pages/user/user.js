import React, { Component } from 'react';
import Header from './../../layouts/header';
import Search from './../../layouts/search';
import Banner from './../../layouts/banner';
import Group from './../../layouts/group';
import Footer from './../../layouts/footer';
import Breadcrumb from '../../layouts/breadcrumb/breadcrumb';
import { updateDetailUser, getDetailUser, logout } from './../../../state/auth/auth_action';
import { getListFavorite } from './../../../state/favorite/favorite_action';
import { getListTransaction } from './../../../state/cart/cart_action';
import { connect } from 'react-redux';
import './user.css';
import ItemFavorite from './item_favorite';
import ItemTransaction from './item_transaction';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: '',
            fEmail: '',
            fPhone: '',
            fAddress: ''
        };
        this.props.getDetailUser();
        this.props.getListFavorite();
        this.props.getListTransaction();
    }

    dataLinkUser = () => {
        return [
            { name: 'Trang Chủ', link: '/' },
        ];
    }

    onChangeData = (e) => {
        const n = e.target.name;
        const v = e.target.value;
        this.setState({
            [n]: v
        });
    }

    parseToJson = () => {
        const json = {
            name: this.state.fName,
            email: this.state.fEmail,
            address: this.state.fAddress,
            phone: this.state.fPhone,
        }
        return json;
    }

    logoutFuc = () => {
        this.props.logout();
        window.location.replace("/");
    }

    updateInfo = () => {
        const data = this.parseToJson();
        this.props.updateInformation(data);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.userDetail != undefined) {
            this.setState({
                fName: nextProps.userDetail.name == null ? '' : nextProps.userDetail.name,
                fEmail: nextProps.userDetail.email == null ? '' : nextProps.userDetail.email,
                fPhone: nextProps.userDetail.phone == null ? '' : nextProps.userDetail.phone,
                fAddress: nextProps.userDetail.address == null ? '' : nextProps.userDetail.address
            })
        }
    }

    render() {
        return (
            <div>
                <Header></Header>
                <Search></Search>
                <Banner imgBg="images/bg/1.jpg" title="Người Dùng"></Banner>
                <Breadcrumb dataLink={this.dataLinkUser()} myName="Người Dùng"></Breadcrumb>
                <div className="container">

                    <div className="row" style={{ margin: '0px' }}>
                        <div className="product__list clearfix mt--30" >
                            <row>
                                <div className="col-md-6" style={{ padding: '0px' }}>
                                    <h3 style={{ fontSize: '20px', fontWeight: '500' }}>
                                        Xin Chào: {this.props.userDetail != undefined ? this.props.userDetail.username : ''}
                                    </h3></div>
                                <div className="col-md-6" style={{ padding: '0px' }}>
                                    <a href="/#" id="logout" className="pull-right" onClick={(e) => {
                                        e.preventDefault();
                                        this.logoutFuc();
                                    }}>Đăng Xuất</a>
                                </div>
                            </row>

                            <h2 style={{ marginTop: '86px' }}>Thông Tin Người Dùng</h2>
                            <div className="bilinfo">
                                <form>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="single-input">
                                                <label> Họ và Tên</label>
                                                <input type="text" name="fName" placeholder="Tên người dùng..." value={this.state.fName} onChange={(e) => { this.onChangeData(e) }} />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="single-input">
                                                <label> Số Điện Thoại</label>
                                                <input type="text" name="fPhone" placeholder="0123..." value={this.state.fPhone} onChange={(e) => { this.onChangeData(e) }} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-input">
                                                <label> Email</label>
                                                <input type="email" name="fEmail" placeholder="abc@ef..." value={this.state.fEmail} onChange={(e) => { this.onChangeData(e) }} />
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="single-input">
                                                <label> Địa Chỉ</label>
                                                <input type="text" name="fAddress" placeholder="Đường, phố,..." value={this.state.fAddress} onChange={(e) => { this.onChangeData(e) }} />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>

                    <div className="dark-btn" style={{ marginTop: '12px' }}>
                        <a href="/#" onClick={(e) => {
                            e.preventDefault();
                            this.updateInfo();
                        }}>Cập Nhật</a>
                    </div>
                    <hr />
                    <h2 style={{ marginTop: '12px', marginBottom: '8px' }}>Danh Sách Yêu Thích</h2>

                    {/* Start List favorite */}
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <form action="#">
                                <div className="table-content table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">Hình Ảnh</th>
                                                <th className="product-name">Sản Phẩm</th>
                                                <th className="product-price">Giá Gốc</th>
                                                <th className="product-quantity">Giá Sale</th>
                                                <th className="product-remove">Xóa</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.props.listFavorite.length == 0
                                                    ?
                                                    <tr>
                                                        <td colSpan="5">Không có sản phẩm yêu thích nào</td>
                                                    </tr>
                                                    :
                                                    this.props.listFavorite.map((item, key) => {
                                                        return (
                                                            <ItemFavorite key={key} dataValue={item}></ItemFavorite>
                                                        )
                                                    })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* End List favorite */}

                    <hr />
                    <h2 style={{ marginTop: '12px', marginBottom: '8px' }}>Các Giao Dịch</h2>

                    {/* Start List transaction */}
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <form action="#">
                                <div className="table-content table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">Mã Đơn</th>
                                                <th className="product-name">Tổng Chi Phí</th>
                                                <th className="product-price">Ngày Tạo</th>
                                                <th className="product-quantity">Trạng Thái</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.props.listTransaction.length == 0
                                                    ?
                                                    <tr>
                                                        <td colSpan="4">Không có sản phẩm yêu thích nào</td>
                                                    </tr>
                                                    :
                                                    this.props.listTransaction.map((item, key) => {
                                                        return (
                                                            <ItemTransaction key={key} dataValue={item}></ItemTransaction>
                                                        )
                                                    })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* End List transaction */}

                </div>
                <Group></Group>
                <Footer></Footer>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateInformation: (data) => {
            dispatch(updateDetailUser(data))
        },
        getDetailUser: () => {
            dispatch(getDetailUser());
        },
        logout: () => {
            dispatch(logout());
        },
        getListFavorite: () => {
            dispatch(getListFavorite());
        },
        getListTransaction: () => {
            dispatch(getListTransaction());
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        userDetail: state.authReducer.userInfo,
        listFavorite: state.favoriteReducer.listFavorite,
        listTransaction: state.cartReducer.listTransaction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);