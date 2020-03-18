import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer id="htc__footer">
                {/* Start Footer Widget */}
                <div className="footer__container bg__cat--1">
                    <div className="container">
                        <div className="row">
                            {/* Start Single Footer Widget */}
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="footer">
                                    <h2 className="title__line--2">VỀ CHÚNG TÔI</h2>
                                    <div className="ft__details">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
                                        <div className="ft__social__link">
                                            <ul className="social__link">
                                                <li><a href="/#"><i className="icon-social-twitter icons" /></a></li>
                                                <li><a href="/#"><i className="icon-social-instagram icons" /></a></li>
                                                <li><a href="/#"><i className="icon-social-facebook icons" /></a></li>
                                                <li><a href="/#"><i className="icon-social-google icons" /></a></li>
                                                <li><a href="/#"><i className="icon-social-linkedin icons" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Footer Widget */}
                            {/* Start Single Footer Widget */}
                            <div className="col-md-2 col-sm-6 col-xs-12 xmt-40">
                                <div className="footer">
                                    <h2 className="title__line--2">thông tin</h2>
                                    <div className="ft__inner">
                                        <ul className="ft__list">
                                            <li><a href="/#">Vể Chúng Tôi</a></li>
                                            <li><a href="/#">Thông Tin Giao Hàng</a></li>
                                            <li><a href="/#">Chính Sách &amp; Bảo Mật</a></li>
                                            <li><a href="/#">Điều Khoản  &amp; Điều Kiện</a></li>
                                            <li><a href="/#">Sản Xuất</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Footer Widget */}
                            {/* Start Single Footer Widget */}
                            <div className="col-md-2 col-sm-6 col-xs-12 xmt-40 smt-40">
                                <div className="footer">
                                    <h2 className="title__line--2">tài khoản</h2>
                                    <div className="ft__inner">
                                        <ul className="ft__list">
                                            <li><a href="/#">Tài Khoản Của Tôi</a></li>
                                            <li><a href="/#">Giỏ Hàng</a></li>
                                            <li><a href="/#">Đăng Nhập</a></li>
                                            <li><a href="/#">Đăng Ký</a></li>
                                            <li><a href="/#">Đăng Xuất</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Footer Widget */}
                            {/* Start Single Footer Widget */}
                            <div className="col-md-2 col-sm-6 col-xs-12 xmt-40 smt-40">
                                <div className="footer">
                                    <h2 className="title__line--2">các dịch vụ</h2>
                                    <div className="ft__inner">
                                        <ul className="ft__list">
                                            <li><a href="/#">Tài Khoản Của Tôi</a></li>
                                            <li><a href="/#">Giỏ Hàng</a></li>
                                            <li><a href="/#">Đăng Nhập</a></li>
                                            <li><a href="/#">Đăng Ký</a></li>
                                            <li><a href="/#">Đăng Xuất</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Footer Widget */}
                            {/* Start Single Footer Widget */}
                            <div className="col-md-3 col-sm-6 col-xs-12 xmt-40 smt-40">
                                <div className="footer">
                                    <h2 className="title__line--2">liên hệ</h2>
                                    <div className="ft__inner">
                                        <div className="news__input">
                                            <input type="text" placeholder="Email Của Bạn*" />
                                            <div className="send__btn">
                                                <a className="fr__btn" href="/#">Gửi Mail</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Footer Widget */}
                        </div>
                    </div>
                </div>
                {/* End Footer Widget */}
                {/* Start Copyright Area */}
                <div className="htc__copyright bg__cat--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="copyright__inner">
                                    <p>Copyright© <a href="https://www.facebook.com/chung.origami/">Khacchung</a> 2020. All right reserved.</p>
                                    <a href="/#"><img src="images/others/shape/paypol.png" alt="payment images" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Copyright Area */}
            </footer>
        )
    }
}
