import React, { Component } from 'react';
import Header from './../../layouts/header';
import Search from './../../layouts/search';
import Slide from './../../layouts/slide';
import Group from './../../layouts/group';
import Footer from './../../layouts/footer';
import Banner from '../../layouts/banner';
import Breadcrumb from '../../layouts/breadcrumb/breadcrumb';

export default class Blogs extends Component {
    dataLinkBlog = () => {
        return [
            { name: 'Trang Chủ', link: '/' },
        ];
    }

    render() {
        return (
            <div>
                <Header></Header>
                <Search></Search>
                <Banner imgBg="images/bg/3.jpg" title="Bài Viết"></Banner>
                <Breadcrumb dataLink={this.dataLinkBlog()} myName="Bài Viết"></Breadcrumb>

                <section className="htc__blog__area bg__white ptb--100">
                    <div className="container">
                        <div className="row">
                            <div className="ht__blog__wrap blog--page clearfix">
                                {/* Start Single Blog */}
                                <div className="col-md-6 col-lg-4 col-sm-12 col-xs-12">
                                    <div className="blog">
                                        <div className="blog__thumb">
                                            <a href="blog-details.html">
                                                <img src="images/blog/blog-img/3.jpg" alt="blog images" />
                                            </a>
                                        </div>
                                        <div className="blog__details">
                                            <div className="bl__date">
                                                <span>March 22, 2018</span>
                                            </div>
                                            <h2><a href="blog-details.html">Lorem ipsum dolor sit amet, consec tetur adipisicing elit</a></h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <div className="blog__btn">
                                                <a href="blog-details.html">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Blog */}
                            </div>
                        </div>
                        {/* Start PAgenation */}
                        <div className="row">
                            <div className="col-xs-12">
                                <ul className="htc__pagenation">
                                    <li><a href="#"><i className="zmdi zmdi-chevron-left" /></a></li>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#"><i className="zmdi zmdi-more" /></a></li>
                                    <li><a href="#">19</a></li>
                                    <li className="active"><a href="#"><i className="zmdi zmdi-chevron-right" /></a></li>
                                </ul>
                            </div>
                        </div>
                        {/* End PAgenation */}
                    </div>
                </section>

                <Group></Group>
                <Footer></Footer>
            </div>
        )
    }
}
