import React, { Component } from 'react';
import Header from './../../layouts/header';
import Search from './../../layouts/search';
import Group from './../../layouts/group';
import Footer from './../../layouts/footer';
import ItemView from '../../layouts/item_view/item_view';
import Banner from './../../layouts/banner';

export default class Product extends Component {
    render() {
        return (
            <div >
                <Header></Header>
                <Search></Search>
                <Banner imgBg="images/bg/6.jpg" title="SẢN PHẨM"></Banner>

                <section className="htc__category__area ptb--100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="section__title--2 text-center">
                                    <h2 className="title__line">New Arrivals</h2>
                                    <p>But I must explain to you how all this mistaken idea</p>
                                </div>
                            </div>

                            <div className="htc__product__container">
                                <div className="row">
                                    <div className="product__list clearfix mt--30" style={{ position: 'relative', height: '0px' }}>
                                        <div className="col-md-4 col-lg-3 col-sm-4 col-xs-12">
                                            <ItemView></ItemView>
                                        </div>
                                    </div>
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
