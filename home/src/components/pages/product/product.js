import React, { Component } from 'react';
import Header from './../../layouts/header';
import Search from './../../layouts/search';
import Group from './../../layouts/group';
import Footer from './../../layouts/footer';
import ItemView from '../../layouts/item_view/item_view';
import ItemViewList from '../../layouts/item_view_list';
import Banner from './../../layouts/banner';
import Breadcrumb from './../../layouts/breadcrumb';
import { setIdCatalog, getListProduct, setTypeSort } from './../../../state/product/product_action';
import { connect } from 'react-redux';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeGrid: true
        };
    }

    componentDidMount() {
        const idCatalog = this.props.match.params.id;
        this.props.setIdCatalog(idCatalog);
        this.props.fetchListProduct(0);
    }


    dataLinkProduct = () => {
        return [
            { name: 'Trang Chủ', link: '/' },
            { name: 'Sản Phẩm', link: '/products' }
        ];
    }

    render() {
        return (
            <div >
                <Header></Header>
                <Search></Search>
                <Banner imgBg="images/bg/6.jpg" title="SẢN PHẨM"></Banner>
                <Breadcrumb dataLink={this.dataLinkProduct()} myName="Sản Phẩm"></Breadcrumb>

                <section className="htc__category__area ptb--100">
                    <div className="section__title--2 text-center">
                        <h2 className="title__line" style={{ marginBottom: '14px' }}>New Arrivals</h2>
                    </div>

                    <div className="container">

                        <div className="row">
                            <div className="container" style={{ justifyContent: 'space-between', padding: '0px' }}>
                                <div className="row" style={{ margin: '0px' }}>
                                    <div className="product__list clearfix mt--30" style={{ position: 'relative', height: '0px' }}>
                                        <select className="ht__select col-md-4 col-lg-4 col-sm-4 col-xs-12" onChange={(e) => {
                                            this.props.setTypeSort(e.target.value);
                                            this.props.fetchListProduct(this.props.pageNumber);
                                        }}>
                                            <option value="0">Sắp xếp Mặc Định</option>
                                            <option value="1">Sắp xếp theo Tên A → Z</option>
                                            <option value="2">Sắp xếp theo Tên Z → A</option>
                                            <option value="3">Sắp xếp theo Giá Tăng Dần</option>
                                            <option value="4">Sắp xếp theo Giá Giảm Dần</option>
                                        </select>

                                        <div className="ht__pro__qun col-md-4 col-lg-4 col-sm-4 col-xs-12" style={{ textAlign: 'center' }}>
                                            <span>Showing 1-12 of 1033 products</span>
                                        </div>
                                        {/* Start List And Grid View */}
                                        <ul className="view__mode col-md-4 col-lg-4 col-sm-4 col-xs-12" role="tablist" style={{ padding: '0px', justifyContent: 'flex-end' }}>
                                            <li role="presentation" className={this.state.typeGrid ? "grid-view active" : "grid-view"}>
                                                <a href="/#" role="tab" data-toggle="tab" aria-expanded="true" onClick={(e) => {
                                                    e.preventDefault();
                                                    this.setState({
                                                        typeGrid: true
                                                    })
                                                }}>
                                                    <i className="zmdi zmdi-grid" />
                                                </a>
                                            </li>
                                            <li role="presentation" className={this.state.typeGrid ? "list-view" : "grid-view active"}>
                                                <a href="/#" role="tab" data-toggle="tab" aria-expanded="false" onClick={(e) => {
                                                    e.preventDefault();
                                                    this.setState({
                                                        typeGrid: false
                                                    })
                                                }}>
                                                    <i className="zmdi zmdi-view-list" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* End List And Grid View */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">

                        <div className="row">
                            <div className="htc__product__container">
                                <div className="row">
                                    <div className={this.state.typeGrid ? "single-grid-view tab-pane fade clearfix active in" : "single-grid-view tab-pane fade clearfix"} style={{ position: 'relative', height: '0px' }}>
                                        {
                                            (this.props.listProduct === undefined)
                                                ?
                                                <div> Không có dữ liệu </div>
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
                                    <div role="tabpanel" id="list-view" className={this.state.typeGrid ? "single-grid-view tab-pane fade clearfix" : "single-grid-view tab-pane fade clearfix active in"}>
                                        <div className="col-xs-12">
                                            <div className="ht__list__wrap">
                                                {
                                                    (this.props.listProduct === undefined)
                                                        ?
                                                        <div> Không có dữ liệu </div>
                                                        :
                                                        this.props.listProduct.map((item, key) => {
                                                            return (
                                                                < ItemViewList valueData={item} key={key}></ItemViewList>
                                                            );
                                                        })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Start paging */}
                        <div className="row">
                            <div className="col-xs-12">
                                <ul className="htc__pagenation">
                                    <li><a href="#"><i className="zmdi zmdi-chevron-left" /></a></li>
                                    <li><a href="#">1</a></li>
                                    <li className="active"><a href="#">3</a></li>
                                    <li><a href="#">19</a></li>
                                    <li><a href="#"><i className="zmdi zmdi-chevron-right" /></a></li>
                                </ul>
                            </div>
                        </div>
                        {/* End paging */}
                    </div>
                </section>

                <Group></Group>
                <Footer></Footer>
            </div >
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        pageNumber: state.productReducer.pageNumber,
        listProduct: state.productReducer.listData,
        typeSort: state.productReducer.typeSort
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setIdCatalog: (id) => {
            dispatch(setIdCatalog(id))
        },
        fetchListProduct: (page) => {
            dispatch(getListProduct(page))
        },
        setTypeSort: (type) => {
            dispatch(setTypeSort(type));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);