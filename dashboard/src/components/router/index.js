import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login/Login';
import NotFound from '../pages/not_found';
import { PrivateRoute } from './../router/PrivateRoute';
import { connect } from 'react-redux';
import Catalog from '../pages/catalog';
import Product from '../pages/product';
import Blog from '../pages/blog';
import User from '../pages/user/User';
import OrderNew from '../pages/order/OrderNew';
import OrderDestroy from '../pages/order/OrderDestroy';
import OrderSuccess from '../pages/order/OrderSuccess';
import Feedback from '../pages/feedback';

class MyRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/login" component={Login}></Route>
                <PrivateRoute exact path="/" component={Home} isLogin={this.props.isAuthenticated}></PrivateRoute>
                <PrivateRoute exact path="/catalog" component={Catalog} isLogin={this.props.isAuthenticated}></PrivateRoute>
                <PrivateRoute exact path="/products" component={Product} isLogin={this.props.isAuthenticated}></PrivateRoute>
                <PrivateRoute exact path="/blogs" component={Blog} isLogin={this.props.isAuthenticated}></PrivateRoute>
                <PrivateRoute exact path="/users" component={User} isLogin={this.props.isAuthenticated}></PrivateRoute>
                <PrivateRoute exact path="/orders-new" component={OrderNew} isLogin={this.props.isAuthenticated}></PrivateRoute>
                <PrivateRoute exact path="/orders-destroy" component={OrderDestroy} isLogin={this.props.isAuthenticated}></PrivateRoute>
                <PrivateRoute exact path="/orders-success" component={OrderSuccess} isLogin={this.props.isAuthenticated}></PrivateRoute>
                <PrivateRoute exact path="/feedback" component={Feedback} isLogin={this.props.isAuthenticated}></PrivateRoute>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.AuthReducer.isAuthenticated
    }
}

export default connect(mapStateToProps)(MyRouter);