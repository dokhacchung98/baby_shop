import React, { Component } from 'react';
import Header from './../../layouts/header';
import Search from './../../layouts/search';
import Group from './../../layouts/group';
import Footer from './../../layouts/footer';
import Banner from '../../layouts/banner';
import Breadcrumb from '../../layouts/breadcrumb/breadcrumb';
import { connect } from 'react-redux';
import ItemCart from './item_cart';
import { getListCart } from './../../../state/cart/cart_action';

class Cart extends Component {
    constructor(props) {
        super(props);
        // this.props.getListCart();
    }

    dataLinkCheckOut = () => {
        return [
            { name: 'Trang Chủ', link: '/' },
        ];
    }

    render() {
        return (
            <div>
                <Header></Header>
                <Search></Search>
                <Banner imgBg="images/bg/4.jpg" title="Giỏ Hàng"></Banner>
                <Breadcrumb dataLink={this.dataLinkCheckOut()} myName="Giỏ Hàng"></Breadcrumb>

                <div className="cart-main-area ptb--100 bg__white">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <form action="#">
                                    <div className="table-content table-responsive">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="product-thumbnail">hình ảnh</th>
                                                    <th className="product-name">sản phẩm</th>
                                                    <th className="product-price">giá gốc</th>
                                                    <th className="product-quantity">số lượng</th>
                                                    <th className="product-subtotal">tổng giá</th>
                                                    <th className="product-remove">xóa</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.props.listCart.length === 0
                                                        ?
                                                        <tr><td colSpan={6}>Giỏ Hàng Trống</td></tr>
                                                        :
                                                        this.props.listCart.map((item, key) => {
                                                            return (
                                                                <ItemCart key={key} dataValue={item}></ItemCart>
                                                            )
                                                        })
                                                }
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 col-xs-12">
                                        </div>
                                        <div className="col-md-6 col-sm-12 col-xs-12 smt-40 xmt-40">
                                            <div className="htc__cart__total">
                                                <h6>Tổng</h6>
                                                <div className="cart__desk__list">
                                                    <ul className="cart__desc">
                                                        <li>Tổng giá</li>
                                                        <li>Vận chuyển</li>
                                                    </ul>
                                                    <ul className="cart__price">
                                                        <li>{this.props.listCart === undefined ? '0' :
                                                            this.props.listCart.reduce((total, currentValue) => {
                                                                return total + currentValue.priceAfterSale
                                                            }, 0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VND</li>
                                                        <li style={{textAlign: 'end'}}>30.000 VND</li>
                                                    </ul>
                                                </div>
                                                <div className="cart__total">
                                                    <span>Tổng đơn hàng</span>
                                                    <span>{this.props.listCart === undefined ? '0' :
                                                        (this.props.listCart.reduce((total, currentValue) => {
                                                            return total + currentValue.priceAfterSale
                                                        }, 0) + 30000).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VND</span>
                                                </div>
                                                <ul className="payment__btn">
                                                    <li className="active"><a href="/checkout">Thanh Toán</a></li>
                                                    <li><a href="/">Tiếp Tục Mua Sắm</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </form>
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
        listCart: state.cartReducer.listCart
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getListCart: () => {
            dispatch(getListCart());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);