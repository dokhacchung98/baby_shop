import React, { Component } from 'react';
import Header from './../../layouts/header';
import Search from './../../layouts/search';
import Group from './../../layouts/group';
import Footer from './../../layouts/footer';
import Banner from '../../layouts/banner';
import Breadcrumb from '../../layouts/breadcrumb/breadcrumb';
import { connect } from 'react-redux';
import { getListBlog, setTypeSort } from './../../../state/blog/blog_action';
import ItemBlog from '../../layouts/item_blog/item_blog';

class Blogs extends Component {
    constructor(props) {
        super(props);
        this.getDataBlog(0);
    }

    getDataBlog = (number) => {
        this.props.getDataBlog(number);
    }

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

                <section className="htc__blog__area bg__white ptb--100" style={{ paddingBottom: '50px' }}>
                    <div className="container">

                        <div className="row" style={{ margin: '0px' }}>
                            <div className="product__list clearfix mt--30" >
                                <select className="ht__select col-md-6 col-lg-6 col-sm-6 col-xs-12" onChange={(e) => {
                                    this.props.setTypeSort(e.target.value);
                                    this.getDataBlog(this.props.pageNumber);
                                }}>
                                    <option value="0">Sắp xếp theo Cũ → Mới</option>
                                    <option value="1">Sắp xếp theo Mới → Cũ</option>
                                </select>

                                <div className="ht__pro__qun col-md-6 col-lg-6 col-sm-6 col-xs-12" style={{ textAlign: 'end', padding: '0px' }}>
                                    <span>Tổng số {this.props.listData.length} sản phẩm</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>



                <section className="htc__blog__area bg__white">
                    <div className="container">

                        <div className="row">

                            <div className="ht__blog__wrap blog--page clearfix">
                                {/* Start Single Blog */}
                                {
                                    this.props.listData === null
                                        ? <div></div>
                                        :
                                        this.props.listData.map((item, index) => {
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
                                        this.getDataBlog(this.props.pageNumber - 1);
                                    }} className={this.props.isFirst ? "disable-pagging" : ""}><i className="zmdi zmdi-chevron-left" /></a></li>

                                    {
                                        Array.from(Array(this.props.totalPage).keys()).map((item, key) => {
                                            return (<li className={
                                                (this.props.pageNumber === item)
                                                    ? "active"
                                                    : ""
                                            } key={key}>
                                                <a href="/#" onClick={(e) => {
                                                    e.preventDefault();
                                                    this.getDataBlog(item);
                                                }}>{item + 1}</a>
                                            </li>)
                                        })
                                    }

                                    <li><a href="/#" onClick={(e) => {
                                        e.preventDefault();
                                        this.getDataBlog(this.props.pageNumber + 1);
                                    }} className={this.props.isLast ? "disable-pagging" : ""}><i className="zmdi zmdi-chevron-right" /></a></li>
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
        listData: state.blogReducer.listData,
        pageNumber: state.blogReducer.pageNumber,
        typeSort: state.blogReducer.typeSort,
        totalPage: state.blogReducer.totalPage,
        totalSize: state.blogReducer.totalSize,
        isFirst: state.blogReducer.isFirst,
        isLast: state.blogReducer.isLast,
        currentBlog: state.catalogReducer.currentBLOG
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getDataBlog: (page) => {
            dispatch(getListBlog(page))
        },
        setTypeSort: (type) => {
            dispatch(setTypeSort(type))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);