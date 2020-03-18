import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeMenu, openMenu, openSearch, closeSearch } from './../../../state/app/app_action';
import FormLogin from '../form_login/form_login';

class Search extends Component {
    render() {
        return (
            <div className={this.props.isOpenSearch ? "search__box__show__hide" : ""}>
                <div className={this.props.isOpenMenu ? 'body__overlay is-visible' : 'body__overlay'} onClick={() => {
                    this.props.closeMenu();
                }} />

                <div className="offset__wrapper">
                    {/* Start Search Popap */}
                    <div className="search__area">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="search__inner">
                                        <form action="#" method="get">
                                            <input placeholder="Search here... " type="text" />
                                            <button type="submit" />
                                        </form>
                                        <div className="search__close__btn" onClick={() => this.props.closeSearch()}>
                                            <span className="search__close__btn_icon"><i className="zmdi zmdi-close" /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Search Popap */}
                    {/* Start Cart Panel */}
                    <div className={this.props.isOpenMenu ? 'shopping__cart shopping__cart__on' : 'shopping__cart'}>
                        <div className="shopping__cart__inner">
                            <div className="offsetmenu__close__btn">
                                <a href="/#" onClick={(e) => {
                                    e.preventDefault()
                                    this.props.closeMenu();
                                }}><i className="zmdi zmdi-close" /></a>
                            </div>
                            <div className="shp__cart__wrap">
                                {this.props.isAuthenticated ?
                                    <div>
                                        <div className="shp__single__product">
                                            <div className="shp__pro__thumb">
                                                <a href="/#">
                                                    <img src="images/product-2/sm-smg/1.jpg" alt="product images" />
                                                </a>
                                            </div>
                                            <div className="shp__pro__details">
                                                <h2><a href="product-details.html">BO&amp;Play Wireless Speaker</a></h2>
                                                <span className="quantity">QTY: 1</span>
                                                <span className="shp__price">$105.00</span>
                                            </div>
                                            <div className="remove__btn">
                                                <a href="/#" title="Remove this item"><i className="zmdi zmdi-close" /></a>
                                            </div>
                                        </div>
                                        <div className="shp__single__product">
                                            <div className="shp__pro__thumb">
                                                <a href="/#">
                                                    <img src="images/product-2/sm-smg/2.jpg" alt="product images" />
                                                </a>
                                            </div>
                                            <div className="shp__pro__details">
                                                <h2><a href="product-details.html">Brone Candle</a></h2>
                                                <span className="quantity">QTY: 1</span>
                                                <span className="shp__price">$25.00</span>
                                            </div>
                                            <div className="remove__btn">
                                                <a href="/#" title="Remove this item"><i className="zmdi zmdi-close" /></a>
                                            </div>
                                        </div>

                                        <ul className="shoping__total">
                                            <li className="subtotal">Subtotal:</li>
                                            <li className="total__price">$130.00</li>
                                        </ul>
                                        <ul className="shopping__btn" >
                                            <li><a href="cart.html">View Cart</a></li>
                                            <li className="shp__checkout">
                                                <a href="checkout.html">Checkout</a>
                                            </li>
                                        </ul>
                                    </div>
                                    : <FormLogin></FormLogin>
                                }
                            </div>

                        </div>
                    </div>
                    {/* End Cart Panel */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isOpenMenu: state.appReducer.isOpenMenu,
        isOpenSearch: state.appReducer.isOpenSearch,
        isAuthenticated: state.authReducer.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        openMenu: () => {
            dispatch(openMenu());
        },
        closeMenu: () => {
            dispatch(closeMenu());
        },
        openSearch: () => {
            dispatch(openSearch());
        },
        closeSearch: () => {
            dispatch(closeSearch());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);