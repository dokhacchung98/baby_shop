import React, { Component } from 'react';
import Header from './../../layouts/header';
import Search from './../../layouts/search';
import Banner from './../../layouts/banner';
import Group from './../../layouts/group';
import Footer from './../../layouts/footer';
import Breadcrumb from '../../layouts/breadcrumb/breadcrumb';
import { updateDetailUser, getDetailUser } from './../../../state/auth/auth_action';
import { connect } from 'react-redux';

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
                            <h2>Thông Tin Người Dùng</h2>
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
                                                <input type="text" name="fPhone" placeholder="0123..." value={this.state.fPhone}  onChange={(e) => { this.onChangeData(e) }} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-input">
                                                <label> Email</label>
                                                <input type="email" name="fEmail" placeholder="abc@ef..." value={this.state.fEmail}  onChange={(e) => { this.onChangeData(e) }} />
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="single-input">
                                                <label> Địa Chỉ</label>
                                                <input type="text" name="fAddress" placeholder="Đường, phố,..." value={this.state.fAddress}  onChange={(e) => { this.onChangeData(e) }} />
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
                    <h2 style={{ marginTop: '12px' }}>Danh Sách Yêu Thích</h2>
                    <hr />
                    <h2 style={{ marginTop: '12px' }}>Các Giao Dịch</h2>
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
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        userDetail: state.authReducer.userInfo
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);