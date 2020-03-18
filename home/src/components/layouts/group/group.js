import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class Group extends Component {
    render() {
        return (
            <div className="htc__brand__area bg__cat--4" style={{ height: '150px', paddingTop: '50px' }}>
                <div className="container">

                    <OwlCarousel items={4}
                        className="owl-theme"
                        dotsContainer="true"
                        loop
                        autoplay="true"
                        autoplayTimeout="3000"
                        margin={8} >
                        <div><img className="img" style={{ width: '140px' }} src={'images/brand/1.png'} /></div>
                        <div><img className="img" style={{ width: '140px' }} src={'images/brand/2.png'} /></div>
                        <div><img className="img" style={{ width: '140px' }} src={'images/brand/3.png'} /></div>
                        <div><img className="img" style={{ width: '140px' }} src={'images/brand/4.png'} /></div>
                        <div><img className="img" style={{ width: '140px' }} src={'images/brand/5.png'} /></div>
                        <div><img className="img" style={{ width: '140px' }} src={'images/brand/6.png'} /></div>
                        <div><img className="img" style={{ width: '140px' }} src={'images/brand/7.png'} /></div>
                    </OwlCarousel>
                </div>
            </div>
        )
    }
}
