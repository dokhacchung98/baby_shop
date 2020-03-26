import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './../router/private_route';
import { connect } from 'react-redux';
import Home from './../pages/home';
import Contact from './../pages/contact';
import NotFound from './../pages/not_found';
import Product from './../pages/product';
import ProductDetail from './../pages/product_detail';
import BlogDetail from './../pages/blog_detail';
import Blogs from './../pages/blogs';
import { getDetailUser } from './../../state/auth/auth_action';
import Cart from '../pages/cart';
import CheckOut from '../pages/checkout';
import User from '../pages/user';
import SearchDetail from '../pages/search';
import TransactionDetail from '../pages/transaction_detail';

class MyRouter extends Component {
    componentWillMount() {
        this.props.getInfoUserLogin();
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/danh-muc-:slug.:id." component={Product}></Route>
                <Route exact path="/san-pham-:slug.:id." component={ProductDetail}></Route>
                <Route exact path="/bai-viet-:slug.:id." component={BlogDetail}></Route>
                <Route exact path="/tim-kiem-:slug" component={SearchDetail}></Route>
                <Route exact path="/chi-tiet-don-hang-:id" component={TransactionDetail}></Route>
                <Route exact path="/blogs" component={Blogs}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                <Route exact path="/search" component={Home}></Route>
                <Route exact path="/user" component={User}></Route>
                <Route exact path="/cart" component={Cart}></Route>
                <Route exact path="/checkout" component={CheckOut}></Route>

                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.authReducer.isAuthenticated,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getInfoUserLogin: () => {
            dispatch(getDetailUser())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyRouter);