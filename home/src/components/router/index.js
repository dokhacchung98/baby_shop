import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './../router/private_route';
import { connect } from 'react-redux';
import Home from './../pages/home';
import Contact from './../pages/contact';
import NotFound from './../pages/not_found';
import Product from './../pages/product';
import Blogs from './../pages/blogs';

class MyRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                <Route exact path="/products" component={Product}></Route>
                <Route exact path="/blogs" component={Blogs}></Route>
                <Route exact path="/search" component={Home}></Route>
                <Route exact path="/user" component={Home}></Route>
                <Route exact path="/cart" component={Home}></Route>

                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.authReducer.isAuthenticated
    }
}

export default connect(mapStateToProps)(MyRouter);