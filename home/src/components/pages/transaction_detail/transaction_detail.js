import React, { Component } from 'react';
import Header from './../../layouts/header';
import Search from './../../layouts/search';
import Banner from './../../layouts/banner';
import Group from './../../layouts/group';
import Footer from './../../layouts/footer';
import Breadcrumb from '../../layouts/breadcrumb/breadcrumb';
import { connect } from 'react-redux';
import { getDetailTransaction } from './../../../state/cart/cart_action';
import ItemOrder from './item_order/item_order';
import './transaction_detail.css';

class TransactionDetail extends Component {
    constructor(props) {
        super(props);
        this.getDataFromUrl();
    }

    getDataFromUrl = () => {
        const k = this.props.match.params.id;
        this.props.getDetail(k);
    }

    dataLinkUser = () => {
        return [
            { name: 'Trang Chủ', link: '/' },
            { name: 'Người Dùng', link: '/user' },
        ];
    }

    render() {
        return (
            <div>
                <Header></Header>
                <Search></Search>
                <Banner imgBg="images/bg/3.jpg" title="Thông Tin Đơn Hàng"></Banner>
                <Breadcrumb dataLink={this.dataLinkUser()} myName="Thông Tin Đơn Hàng"></Breadcrumb>


                <div className="wishlist-area ptb--100 bg__white">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="wishlist-content">

                                    <div style={{ marginBottom: '24px' }}>
                                        <span style={{ fontSize: '22px' }}>Đơn Hàng: {this.props.currentDetail != undefined ?
                                            `${this.props.currentDetail.id}.${this.props.currentDetail.userId}.${this.props.currentDetail.createdDate}`
                                            : ''}
                                        </span>
                                        {
                                            this.props.currentDetail == undefined
                                                ? <div></div>
                                                :
                                                this.props.currentDetail.status == 0
                                                    ?
                                                    <span className="badge-primary">Đang Chờ Xử Lý</span>
                                                    : this.props.currentDetail.status == 1
                                                        ?
                                                        <span className="badge-info">Đã Xác Nhận</span>
                                                        : this.props.currentDetail.status == 2
                                                            ?
                                                            <span className="badge-warning">Đang Giao Hàng</span>
                                                            : this.props.currentDetail.status == 3
                                                                ? <span className="badge-success">Thành Công</span>
                                                                : this.props.currentDetail.status == 4
                                                                    ? <span className="badge-danger">Đơn Hàng Bị Hủy</span>
                                                                    : <div></div>
                                        }
                                    </div>

                                    <form action="#">
                                        <div className="wishlist-table table-responsive">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th className="product-thumbnail">Image</th>
                                                        <th className="product-name"><span className="nobr">Product Name</span></th>
                                                        <th className="product-price"><span className="nobr"> Unit Price </span></th>
                                                        <th className="product-stock-stauts"><span className="nobr"> Stock Status </span></th>
                                                        <th className="product-add-to-cart"><span className="nobr">Add To Cart</span></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.props.currentDetail == null
                                                            ?
                                                            <tr>
                                                                <td colSpan="5">Không có sản phẩm</td>
                                                            </tr>
                                                            :
                                                            this.props.currentDetail.orders.map((item, key) => {
                                                                return (<ItemOrder key={key} dataValue={item}></ItemOrder>)
                                                            })
                                                    }
                                                    {
                                                        this.props.currentDetail == null
                                                            ?
                                                            <tr></tr>
                                                            :
                                                            <tr>
                                                                <td colSpan="5">
                                                                    <span className="amount">Tổng: {this.props.currentDetail.orders.reduce((s, t) => {
                                                                        return s + t.priceNumber;
                                                                    }, 0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VND</span>
                                                                </td>
                                                            </tr>
                                                    }
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <td colSpan={6}>
                                                            <div className="wishlist-share">
                                                                <h4 className="wishlist-share-title">Chia Sẻ:</h4>
                                                                <div className="social-icon">
                                                                    <ul>
                                                                        <li><a href="#"><i className="zmdi zmdi-vimeo" /></a></li>
                                                                        <li><a href="#"><i className="zmdi zmdi-tumblr" /></a></li>
                                                                        <li><a href="#"><i className="zmdi zmdi-pinterest" /></a></li>
                                                                        <li><a href="#"><i className="zmdi zmdi-linkedin" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Group></Group>
                <Footer></Footer>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        currentDetail: state.cartReducer.currentTransaction
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getDetail: (id) => {
            dispatch(getDetailTransaction(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionDetail);