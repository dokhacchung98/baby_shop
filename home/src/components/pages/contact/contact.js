import React, { Component } from 'react';
import Header from './../../layouts/header';
import Search from './../../layouts/search';
import Banner from './../../layouts/banner';
import Group from './../../layouts/group';
import Footer from './../../layouts/footer';
import Breadcrumb from '../../layouts/breadcrumb/breadcrumb';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Search></Search>
                <Banner imgBg="images/bg/1.jpg" title="LIÊN HỆ"></Banner>
                <section className="htc__contact__area ptb--100 bg__white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12">
                                <div className="map-contacts--2">
                                    <div id="googleMap" >
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.658638469903!2d105.78415091533232!3d21.046340492552893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab2d88bb4195%3A0x3006e474cce20274!2zSOG7jWMgdmnhu4duIEvhu7kgdGh14bqtdCBRdcOibiBz4bux!5e0!3m2!1svi!2s!4v1584446430676!5m2!1svi!2s" width={660} height={500} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12">
                                <h2 className="title__line--6">LIÊN HỆ VỚI CHÚNG TÔI</h2>
                                <div className="address">
                                    <div className="address__icon">
                                        <i className="icon-location-pin icons" />
                                    </div>
                                    <div className="address__details">
                                        <h2 className="ct__title">ĐỊA CHỈ</h2>
                                        <p>236 Hoàng Quốc Việt, Hà Nội.</p>
                                    </div>
                                </div>
                                <div className="address">
                                    <div className="address__icon">
                                        <i className="icon-envelope icons" />
                                    </div>
                                    <div className="address__details">
                                        <h2 className="ct__title">Email</h2>
                                        <p>ochung3@gmail.com</p>
                                    </div>
                                </div>
                                <div className="address">
                                    <div className="address__icon">
                                        <i className="icon-phone icons" />
                                    </div>
                                    <div className="address__details">
                                        <h2 className="ct__title">Điện Thoại</h2>
                                        <p>123-6586-587456</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="contact-form-wrap mt--60">
                                <div className="col-xs-12">
                                    <div className="contact-title">
                                        <h2 className="title__line--6">GỬI EMAIL</h2>
                                    </div>
                                </div>
                                <div className="col-xs-12">
                                    <form id="contact-form" action="#" method="post">
                                        <div className="single-contact-form">
                                            <div className="contact-box name">
                                                <input type="text" name="name" placeholder="Tên Bạn*" />
                                                <input type="email" name="email" placeholder="Email*" />
                                            </div>
                                        </div>
                                        <div className="single-contact-form">
                                            <div className="contact-box subject">
                                                <input type="text" name="subject" placeholder="Tiêu Đề*" />
                                            </div>
                                        </div>
                                        <div className="single-contact-form">
                                            <div className="contact-box message">
                                                <textarea name="message" placeholder="Nội Dung...." defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="contact-btn">
                                            <button type="submit" className="fv-btn">GỬI TIN NHẮN</button>
                                        </div>
                                    </form>
                                    <div className="form-output">
                                        <p className="form-messege" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Group></Group>
                <Footer></Footer>
            </div>
        )
    }
}
