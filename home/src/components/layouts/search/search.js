import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeMenu, openMenu, openSearch, closeSearch } from './../../../state/app/app_action';
import FormLogin from '../form_login/form_login';
import { getListCart } from './../../../state/cart/cart_action';
import ItemCartSearch from './item_cart';

class Search extends Component {
    constructor(props) {
        super(props);
        if (this.props.isAuthenticated) {
            this.props.getListCart();
        }
        this.state = {
            fKey: ''
        }
    }

    getLinkSearch = (name) => {
        const path = `/tim-kiem-${name.trim()}`;
        return path;
    }

    searchKeyword = () => {
        const keyword = this.state.fKey;
        if (keyword.trim() === '') {
            return;
        }
        window.location.replace(this.getLinkSearch(keyword));
    }

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
                                            <input placeholder="Tìm kiếm... " type="text" onChange={(e) => {
                                                this.setState({
                                                    fKey: e.target.value
                                                })
                                            }} />
                                            <button onClick={(e) => {
                                                e.preventDefault();
                                                this.searchKeyword();
                                            }} />
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
                                        {/* Start Item */}
                                        {
                                            this.props.listCart.length === 0
                                                ?
                                                <div>Giỏ Hàng Trống</div>
                                                :
                                                this.props.listCart.map((item, key) => {
                                                    return (
                                                        <ItemCartSearch key={key} dataValue={item}></ItemCartSearch>
                                                    )
                                                })
                                        }
                                        {/* End Item */}
                                        <ul className="shoping__total">
                                            <li className="subtotal">Tổng:</li>
                                            <li className="total__price">{this.props.listCart === undefined ? '0' :
                                                this.props.listCart.reduce((total, currentValue) => {
                                                    return total + currentValue.priceAfterSale
                                                }, 0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
                                            } VND</li>
                                        </ul>
                                        <ul className="shopping__btn" >
                                            <li><a href="/cart">Xem Giỏ Hàng</a></li>
                                            <li className="shp__checkout">
                                                <a href="/checkout">Thanh Toán</a>
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
        isAuthenticated: state.authReducer.isAuthenticated,
        listCart: state.cartReducer.listCart
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
        getListCart: () => {
            dispatch(getListCart());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);