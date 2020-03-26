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
        this.props.searchProduct(0, k);
        this.props.searchBlog(0, k);
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
                <Breadcrumb dataLink={this.dataLinkUser()} myName={`Tìm Kiếm: ${this.state.keySearch}`} ></Breadcrumb>

                <Group></Group>
                <Footer></Footer>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
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