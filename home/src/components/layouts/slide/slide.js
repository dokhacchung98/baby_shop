import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class Slide extends Component {
    render() {
        return (
            <div className="slider__container slider--one bg__cat--3">

                <div className='container-fluid' >
                    <OwlCarousel items={1}
                        nav
                        navContainer="true"
                        className="owl-theme active"
                        dotsContainer="true"
                        loop
                        autoplay="true"
                        autoplayTimeout="3000"
                        margin={8} >
                        <div></div>
                        <div className="single__slide animation__style01 slider__fixed--height">
                            <div className="container">
                                <div className="row align-items__center">
                                    <div className="col-md-7 col-sm-7 col-xs-12 col-lg-6">
                                        <div className="slide">
                                            <div className="slider__inner">
                                                <h2>Sản Phẩm Mới</h2>
                                                <h1>NICE CHAIR</h1>
                                                <div className="cr__btn">
                                                    <a href="cart.html">Chi Tiết</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-5 col-xs-12 col-md-5">
                                        <div className="slide__thumb">
                                            <img src="images/slider/fornt-img/1.png" alt="slider images" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                    {/* <div className="owl-nav"><div className="owl-prev"><i className="icon-arrow-left icons"></i></div><div className="owl-next"><i className="icon-arrow-right icons"></i></div></div> */}
                </div>

            </div>
        )
    }
}
