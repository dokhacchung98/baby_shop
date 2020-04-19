import React, { Component } from 'react';
import Header from './../../layouts/header';
import Search from './../../layouts/search';
import Group from './../../layouts/group';
import Footer from './../../layouts/footer';
import Banner from './../../layouts/banner';
import Breadcrumb from './../../layouts/breadcrumb';
import renderComponent from './../../layouts/render_component';
import { to_slug } from './../../../utilities/slug';
import { getDetailBlog } from './../../../state/blog/blog_action';
import { connect } from 'react-redux';
import './blog_detail.css';
import ItemBlog from '../../layouts/item_blog/item_blog';

class BlogDetail extends Component {
    constructor(props) {
        super(props);
        this.getDataBlog();
    }

    getDataBlog = () => {
        const idBlog = this.props.match.params.id;
        this.props.getDetailBlog(idBlog);
    }

    dataLinkBlog = () => {
        return [
            { name: 'Trang Chủ', link: '/' },
        ];
    }

    render() {
        return (
            <div >
                <Header></Header>
                <Search></Search>
                <Banner imgBg="images/bg/5.jpg" title="THÔNG TIN BÀI VIẾT"></Banner>
                <Breadcrumb dataLink={this.dataLinkBlog()} myName="Thông Tin Bài Viết"></Breadcrumb>

                <section className="htc__blog__details bg__white ptb--100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-lg-12">
                                <h2 style={{ fontWeight: '600', color: '#c43b68', textAlign: 'center', fontSize: '48px', marginBottom: '24px' }}>{this.props.currentBLOG === null ? '' : this.props.currentBLOG.title}</h2>
                                <h6 style={{ textAlign: 'end', fontSize: '12px', color: '##a0a0a0', marginBottom: '-16px' }}>Đăng ngày: {this.props.currentBLOG === null ? ''
                                    : new Date(this.props.currentBLOG.createdDate).toLocaleString().replace("00:00:00, ", "")}</h6>
                                <hr style={{ marginBottom: '48px' }} />
                                <div className="htc__blog__details__wrap" id="blog_detail">

                                    {this.props.currentBLOG === null ? '' : renderComponent(this.props.currentBLOG.description)}

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="htc__blog__area bg__white">
                    <div className="container">
                        <h6 style={{marginBottom: '14px', color: '#c43b68', fontSize: '24px'}}>Các Bài Viết Liên Quan</h6>
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
        currentBLOG: state.blogReducer.currentBLOG,
        listData: state.blogReducer.listData
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getDetailBlog: (id) => {
            dispatch(getDetailBlog(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail);