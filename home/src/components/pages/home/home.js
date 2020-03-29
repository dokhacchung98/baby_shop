import React, { Component } from 'react';
import Header from './../../layouts/header';
import Search from './../../layouts/search';
import Slide from './../../layouts/slide';
import Group from './../../layouts/group';
import Footer from './../../layouts/footer';

export default class Home extends Component {
    render() {
        return (
            <div >
                <Header></Header>
                <Search></Search>
                <Slide></Slide>
                <section className="htc__category__area ptb--100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="section__title--2 text-center">
                                    <h2 className="title__line">Sản Phẩm Giảm Giá Nhiều</h2>
                                </div>
                            </div>
                        </div>
                        <div className="htc__product__container">
                            <div className="row">
                                <div className="product__list clearfix mt--30" style={{ position: 'relative', height: '0px' }}>
                                    {/* Start Single Category */}
                                    <div className="col-md-4 col-lg-3 col-sm-4 col-xs-12">
                                        <div className="category">
                                            <div className="ht__cat__thumb">
                                                <a href="product-details.html">
                                                    <img src="images/product/8.jpg" alt="product images" />
                                                </a>
                                            </div>
                                            <div className="fr__hover__info">
                                                <ul className="product__action">
                                                    <li><a href="wishlist.html"><i className="icon-heart icons" /></a></li>
                                                    <li><a href="cart.html"><i className="icon-handbag icons" /></a></li>
                                                    <li><a href="#"><i className="icon-shuffle icons" /></a></li>
                                                </ul>
                                            </div>
                                            <div className="fr__product__inner">
                                                <h4><a href="product-details.html">Product Title Here </a></h4>
                                                <ul className="fr__pro__prize">
                                                    <li className="old__prize">$30.3</li>
                                                    <li>$25.9</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Category */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Group></Group>
                <Footer></Footer>
            </div>
        )
    }
}
