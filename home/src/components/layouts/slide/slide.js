import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { connect } from 'react-redux';
import { getNewProduct } from './../../../state/product/product_action';
import { to_slug } from './../../../utilities/slug';
import './aslide.css';

class Slide extends Component {
    constructor(props) {
        super(props);
        this.props.getListProduct();
    }

    getLinkProduct = (name, id) => {
        const strSlug = to_slug(name);
        const path = `/san-pham-${strSlug}.${id}.`;
        return path;
    }

    render() {
        return (
            <div className="slider__container slider--one bg__cat--3">
                <div className='container-fluid' >
                    {
                        this.props.listNewProduct.length == 0
                            ?
                            <div style={{ marginTop: '200px', height: '200px', backgroundColor: '#000' }}></div>
                            :
                            <OwlCarousel items={1}
                                nav="true"
                                className="owl-theme active"
                                dotsContainer="true"
                                loop
                                autoplay="true"
                                autoplayTimeout="3000"
                                margin={8} >
                                {
                                    this.props.listNewProduct.map((item, key) => {
                                        return (
                                            <div className="single__slide animation__style01 slider__fixed--height" key={key}>
                                                <div className="container">
                                                    <div className="row align-items__center">
                                                        <div className="col-md-7 col-sm-7 col-xs-12 col-lg-6">
                                                            <div className="slide">
                                                                <div className="slider__inner">
                                                                    <h2 style={{fontSize: '14px'}}>Sản Phẩm Mới</h2>
                                                                    <h1 style={{fontSize: '32px'}}>{item.name}</h1>
                                                                    <div className="cr__btn">
                                                                        <a href={this.getLinkProduct(item.name, item.id)}>Chi Tiết</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-sm-5 col-xs-12 col-md-5">
                                                            <div className="slide__thumb">
                                                                <img src={item.imagePath} alt={item.name} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </OwlCarousel>
                    }
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        listNewProduct: state.productReducer.listNewProduct
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getListProduct: () => {
            dispatch(getNewProduct());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slide);