import React, { Component } from 'react';
import Header from './../../layouts/header';
import Search from './../../layouts/search';
import Group from './../../layouts/group';
import Footer from './../../layouts/footer';
import Banner from '../../layouts/banner';
import Breadcrumb from '../../layouts/breadcrumb/breadcrumb';
import { connect } from 'react-redux';
import { removeCart } from './../../../state/cart/cart_action';
import { to_slug } from './../../../utilities/slug';

class CheckOut extends Component {
    dataLinkCheckOut = () => {
        return [
            { name: 'Trang Chủ', link: '/' },
        ];
    }

    removeCart = (e, id) => {
        this.props.removeCart(id);
    }

    slugPath = (name, id) => {
        const strSlug = to_slug(name);
        const path = `/san-pham-${strSlug}.${id}.`;
        return path;
    }

    checkoutCart = () => {

    }

    render() {
        return (
            <div>
                <Header></Header>
                <Search></Search>
                <Banner imgBg="images/bg/3.jpg" title="Thanh Toán"></Banner>
                <Breadcrumb dataLink={this.dataLinkCheckOut()} myName="Thanh Toán"></Breadcrumb>

                <div className="checkout-wrap ptb--100">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="checkout__inner">
                                    <div className="accordion-list">
                                        <div className="accordion">
                                            <div className="accordion__title active">
                                                Thông Tin Nhận Hàng
                                            </div>
                                            <div className="accordion__body" style={{}}>
                                                <div className="bilinfo">
                                                    <form>
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="single-input">
                                                                    <label> Họ và Tên</label>
                                                                    <input type="text" name="fName" placeholder="Tên người nhận..." />
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="single-input">
                                                                    <label> Số Điện Thoại</label>
                                                                    <input type="text" name="fPhone" placeholder="0123..." />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="single-input">
                                                                    <label> Email</label>
                                                                    <input type="email" name="fMail" placeholder="abc@ef..." />
                                                                </div>
                                                            </div>

                                                            <div className="col-md-12">
                                                                <div className="single-input">
                                                                    <label> Địa Chỉ</label>
                                                                    <input type="text" name="fAddress" placeholder="Đường, phố,..." />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>

                                            <div className="accordion__title active">
                                                Thông Tin Thanh Toán
                                            </div>
                                            <div className="accordion__body" style={{}}>
                                                <div className="shipmethod">
                                                    <form action="#">
                                                        <div className="single-input">
                                                            <p>
                                                                <input type="radio" name="ship-method" id="ship-fast" checked readOnly />
                                                                <label htmlFor="ship-fast" style={{ color: 'black' }}> Giao hàng thanh toán tại nhà</label>
                                                            </p>
                                                        </div>
                                                        <div className="single-input">
                                                            <p>
                                                                <input type="radio" name="ship-method" id="ship-normal" />
                                                                <label htmlFor="ship-normal" style={{ color: 'black' }}> Thanh toán online qua Visa, MasterCard.</label>
                                                            </p>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dark-btn">
                                    <a href="/#" onClick={(e) => {
                                        e.preventDefault();
                                        this.checkoutCart();
                                    }}>Thanh Toán</a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="order-details">
                                    <h5 className="order-details__title">Đơn Hàng Của Bạn</h5>
                                    <div className="order-details__item">

                                        {
                                            this.props.listCart.length === 0
                                                ?
                                                <div>Không có sản phẩm nào</div>
                                                :
                                                this.props.listCart.map((item, key) => {
                                                    return (
                                                        <div className="single-item" key={key}>
                                                            <div className="single-item__thumb">
                                                                <img src={item.product.imagePath} style={{ width: '58px', objectFit: 'contain' }} alt="ordered item" />
                                                            </div>
                                                            <div className="single-item__content">
                                                                <a href={this.slugPath(item.product.name, item.product.id)}>
                                                                    <span >{item.product.name.length > 15 ? `${item.product.name.substring(0, 15)}...` : item.product.name}</span>
                                                                </a>
                                                                <span className="price">{item.priceAfterSale}</span>
                                                            </div>
                                                            <div className="single-item__remove">
                                                                <a href="/#" onClick={(e) => {
                                                                    e.preventDefault();
                                                                    this.removeCart(e, item.id);
                                                                }}><i className="zmdi zmdi-delete" /></a>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                        }

                                    </div>
                                    <div className="order-details__count">
                                        <div className="order-details__count__single">
                                            <h5>Tổng giá</h5>
                                            <span className="price">{this.props.listCart === undefined ? '0' :
                                                this.props.listCart.reduce((total, currentValue) => {
                                                    return total + currentValue.priceAfterSale
                                                }, 0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VND</span>
                                        </div>
                                        <div className="order-details__count__single">
                                            <h5>Vận chuyển</h5>
                                            <span className="price" style={{ textAlign: 'end' }}>30.000 VND</span>
                                        </div>
                                    </div>
                                    <div className="ordre-details__total">
                                        <h5>Tổng</h5>
                                        <span className="price" style={{ display: 'contents' }}>{this.props.listCart === undefined ? '0' :
                                            (this.props.listCart.reduce((total, currentValue) => {
                                                return total + currentValue.priceAfterSale
                                            }, 0) + 30000).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VND</span>
                                    </div>
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
        listCart: state.cartReducer.listCart
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        removeCart: (id) => {
            dispatch(removeCart(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);