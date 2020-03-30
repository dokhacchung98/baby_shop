import React, { Component } from 'react';
import Header from './../../layouts/header';
import Search from './../../layouts/search';
import Slide from './../../layouts/slide';
import Group from './../../layouts/group';
import Footer from './../../layouts/footer';
import { connect } from 'react-redux';
import { getListBlog, getSellerList, getListCatalog } from './../../../state/home/home_action';
import ItemView from './../../layouts/item_view'
import ItemBlog from '../../layouts/item_blog/item_blog';
import {to_slug} from './../../../utilities/slug';
import './home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        props.getListBlog(0);
        props.getListSeller(0);
        props.getListCatalog(0);
    }

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
                                    <h2 className="title__line">Danh Mục Sản Phẩm</h2>
                                </div>
                            </div>
                        </div>
                        <div className="htc__product__container">
                            <div className="row">
                                <div className="product__list clearfix mt--30" style={{ position: 'relative', height: '0px' }}>
                                    {
                                        this.props.listCatalog.length == 0
                                            ?
                                            <div>Không Có Danh Mục Nào</div>
                                            :
                                            this.props.listCatalog.map((item, key) => {
                                                const strSlug = to_slug(item.name);
                                                const path = `/danh-muc-${strSlug}.${item.id}.`;
                                                return (
                                                    <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                                        <div className="category catalogParent" key={key} style={{ border: '1px solid rgb(237, 242, 245)', background: 'rgb(255, 255, 255)', height: '228px', position: 'relative' }}>
                                                            <img src={`/images/g${key + 1}.jpg`} />
                                                            <div style={{ position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', backgroundColor: '#9494948f' }}></div>
                                                            <div className="nameCatalog"><a href={path}> {item.name}</a></div>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <div className="htc__brand__area bg__cat--4" style={{ height: '150px', paddingTop: '50px', textAlign: 'center' }}>
                    <img src="images/logo/4.png" />
                    <span style={{ fontSize: '32px', fontWeight: '500', color: '#c43b68' }}>BabyShop - Đồng Hành Cùng Con Trẻ</span>
                </div>

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
                                    {
                                        this.props.listSeller.length == 0
                                            ?
                                            <div>Không có sản phẩm nào</div>
                                            :
                                            this.props.listSeller.map((item, key) => {
                                                return (
                                                    <div className="col-md-4 col-lg-3 col-sm-4 col-xs-12" key={key}>
                                                        <ItemView valueData={item}></ItemView>
                                                    </div>
                                                );
                                            })
                                    }

                                    {/* End Single Category */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Group></Group>
                <section className="htc__blog__area bg__white ptb--100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="section__title--2 text-center">
                                    <h2 className="title__line">Bài Viết Mới</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="ht__blog__wrap clearfix">
                                {/* Start Single Blog */}

                                {
                                    this.props.listBlog.length == 0
                                        ?
                                        <div>Không có bài viết nào</div>
                                        :
                                        this.props.listBlog.map((item, key) => {
                                            return (
                                                <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                                    <ItemBlog key={key} dataValue={item}></ItemBlog>
                                                </div>
                                            );
                                        })
                                }

                                {/* End Single Blog */}
                            </div>
                        </div>
                    </div>
                </section>
                <Footer></Footer>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        listSeller: state.homeReducer.listSeller,
        listBlog: state.homeReducer.listBlog,
        listCatalog: state.homeReducer.listCatalog,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getListBlog: (page) => {
            dispatch(getListBlog(page));
        },
        getListSeller: (page) => {
            dispatch(getSellerList(page));
        },
        getListCatalog: (page) => {
            dispatch(getListCatalog(page));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);