import React, { Component } from 'react';
import Header from './../../layouts/header';
import Search from './../../layouts/search';
import Banner from './../../layouts/banner';
import Group from './../../layouts/group';
import Footer from './../../layouts/footer';
import Breadcrumb from '../../layouts/breadcrumb/breadcrumb';
import { connect } from 'react-redux';
import { searchProducts } from './../../../state/product/product_action';
import { searchBlogs } from './../../../state/blog/blog_action';
import ItemView from '../../layouts/item_view/item_view';
import ItemBlog from '../../layouts/item_blog/item_blog';

class SearchDetail extends Component {
    constructor(props) {
        super(props);
        this.getDataSearch();
    }

    getDataSearch = () => {
        const k = this.props.match.params.slug;
        this.state = {
            keySearch: k
        }
        this.getListProduct(0);
        this.getListBlogs(0);
    }

    getListProduct = (number) => {
        this.props.searchProduct(number, this.state.keySearch);
    }

    getListBlogs = (number) => {
        this.props.searchBlog(number, this.state.keySearch);
    }

    dataLinkUser = () => {
        return [
            { name: 'Trang Chủ', link: '/' },
        ];
    }

    render() {
        return (
            <div>
                <Header></Header>
                <Search></Search>
                <Banner imgBg="images/bg/5.jpg" title="Tìm Kiếm"></Banner>
                <Breadcrumb dataLink={this.dataLinkUser()} myName={`Tìm Kiếm '${this.state.keySearch}'`} ></Breadcrumb>
                <section className="htc__category__area ptb--100">
                    <div className="text-center">
                        <h2 style={{ marginBottom: '14px' }}>Danh Sách Sản Phẩm</h2>
                        <span>(Tổng số <strong>{this.props.listProduct.length}</strong> sản phẩm)</span>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="htc__product__container">
                                <div className="row">
                                    <div className="single-grid-view tab-pane fade clearfix active in" style={{ position: 'relative', height: '0px' }}>
                                        {
                                            (this.props.listProduct.length == 0)
                                                ?
                                                <div style={{ textAlign: 'center' }}>Không Có Sản Phẩm Nào Phù Hợp</div>
                                                :
                                                this.props.listProduct.map((item, key) => {
                                                    return (
                                                        <div className="col-md-4 col-lg-3 col-sm-4 col-xs-12" key={key}>
                                                            <ItemView valueData={item}></ItemView>
                                                        </div>
                                                    );
                                                })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Start paging */}
                        <div className="row">
                            <div className="col-xs-12">
                                <ul className="htc__pagenation">
                                    <li><a href="/#" onClick={(e) => {
                                        e.preventDefault();
                                        if (!this.props.isFirstProduct)
                                            this.getListProduct(this.props.pageNumberProduct - 1);
                                    }} className={this.props.isFirstProduct ? "disable-pagging" : ""}><i className="zmdi zmdi-chevron-left" /></a></li>

                                    {
                                        Array.from(Array(this.props.totalPageProduct).keys()).map((item, key) => {
                                            return (<li className={
                                                (this.props.pageNumberProduct === item)
                                                    ? "active"
                                                    : ""
                                            } key={key}>
                                                <a href="/#" onClick={(e) => {
                                                    e.preventDefault();
                                                    this.getListProduct(item);
                                                }}>{item + 1}</a>
                                            </li>)
                                        })
                                    }
                                    <li><a href="/#" onClick={(e) => {
                                        e.preventDefault();
                                        if (!this.props.isLastProduct)
                                            this.getListProduct(parseInt(this.props.pageNumberProduct + 1));
                                    }} className={this.props.isLastProduct ? "disable-pagging" : ""}><i className="zmdi zmdi-chevron-right" /></a></li>
                                </ul>
                            </div>
                        </div>
                        {/* End paging */}
                    </div>

                    <div className="text-center" style={{ marginTop: '32px' }}>
                        <h2 style={{ marginBottom: '14px' }}>Danh Sách Bài Viết</h2>
                        <span>(Tổng số <strong>{this.props.listDataBlog.length}</strong> bài viết)</span>
                    </div>

                    <div className="container">

                        <div className="row">

                            <div className="ht__blog__wrap blog--page clearfix" style={{ display: 'contents' }}>
                                {/* Start Single Blog */}
                                {
                                    this.props.listDataBlog.length == 0
                                        ?
                                        <div style={{ textAlign: 'center' }}>Không Có Bài Viết Nào Phù Hợp</div>
                                        :
                                        this.props.listDataBlog.map((item, index) => {
                                            return (
                                                <div className="col-md-6 col-lg-4 col-sm-12 col-xs-12">
                                                    <ItemBlog key={index} dataValue={item}></ItemBlog>
                                                </div>
                                            )
                                        })
                                }
                                {/* End Single Blog */}
                            </div>
                        </div>
                        {/* Start PAgenation */}
                        <div className="row">
                            <div className="col-xs-12">
                                <ul className="htc__pagenation">
                                    <li><a href="/#" onClick={(e) => {
                                        e.preventDefault();
                                        if (!this.props.isFirstBlog)
                                            this.getListBlogs(this.props.pageNumberBlog - 1);
                                    }} className={this.props.isFirstBlog ? "disable-pagging" : ""}><i className="zmdi zmdi-chevron-left" /></a></li>

                                    {
                                        Array.from(Array(this.props.totalPage).keys()).map((item, key) => {
                                            return (<li className={
                                                (this.props.pageNumberBlog === item)
                                                    ? "active"
                                                    : ""
                                            } key={key}>
                                                <a href="/#" onClick={(e) => {
                                                    e.preventDefault();
                                                    this.getListBlogs(item);
                                                }}>{item + 1}</a>
                                            </li>)
                                        })
                                    }

                                    <li><a href="/#" onClick={(e) => {
                                        e.preventDefault();
                                        if (!this.props.isLastBlog)
                                            this.getListBlogs(this.props.pageNumberBlog + 1);
                                    }} className={this.props.isLastBlog ? "disable-pagging" : ""}><i className="zmdi zmdi-chevron-right" /></a></li>
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

const mapStateToProps = (state, ownProps) => {
    return {
        pageNumberProduct: state.productReducer.pageNumber,
        listProduct: state.productReducer.listData,
        totalPageProduct: state.productReducer.totalPage,
        totalSizeProduct: state.productReducer.totalSize,
        isFirstProduct: state.productReducer.isFirst,
        isLastProduct: state.productReducer.isLast,

        listDataBlog: state.blogReducer.listData,
        pageNumberBlog: state.blogReducer.pageNumber,
        totalPageBlog: state.blogReducer.totalPage,
        totalSizeBlog: state.blogReducer.totalSize,
        isFirstBlog: state.blogReducer.isFirst,
        isLastBlog: state.blogReducer.isLast,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchProduct: (page, key) => {
            dispatch(searchProducts(key, page))
        },
        searchBlog: (page, key) => {
            dispatch(searchBlogs(key, page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchDetail);