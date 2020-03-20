import React, { Component } from 'react';
import Header from './../../layouts/header';
import Search from './../../layouts/search';
import Banner from './../../layouts/banner';
import Group from './../../layouts/group';
import Footer from './../../layouts/footer';
import Breadcrumb from '../../layouts/breadcrumb/breadcrumb';
import { connect } from 'react-redux';
import { sendingContact } from './../../../state/contact/contact_action';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vName: this.props.userLogin !== null ? this.props.userLogin.name : '',
            vEmail: this.props.userLogin !== null ? this.props.userLogin.email : '',
            vSubject: '',
            vValue: ''
        };
    }

    dataLinkContact = () => {
        return [
            { name: 'Trang Chủ', link: '/' },
        ];
    }

    changeValue = (e) => {
        const n = e.target.name;
        const v = e.target.value;
        this.setState({
            [n]: v
        });
    }

    validateContent = () => {
        if (!this.state.vName) {
            return false;
        }
        if (!this.state.vEmail) {
            return false;
        }
        return true;
    }

    changeNameAndMail = (name, email) => {
        this.setState({
            vName: name,
            vEmail: email,
        })
    }

    sendRequest = () => {
        if (!this.props.isSendding && this.validateContent()) {
            this.props.sendContact({
                name: this.state.vName,
                email: this.state.vEmail,
                subject: this.state.vSubject,
                value: this.state.vValue
            });
        }
    }

    componentDidMount() {
        this.setState({
            vName: this.props.userLogin !== null ? this.props.userLogin.name : '',
            vEmail: this.props.userLogin !== null ? this.props.userLogin.email : '',
        });
    }


    render() {
        return (
            <div>
                <Header></Header>
                <Search></Search>
                <Banner imgBg="images/bg/1.jpg" title="LIÊN HỆ"></Banner>
                <Breadcrumb dataLink={this.dataLinkContact()} myName="Liên Hệ"></Breadcrumb>

                <section className="htc__contact__area ptb--100 bg__white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12">
                                <div className="map-contacts--2">
                                    <div id="googleMap" >
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.658638469903!2d105.78415091533232!3d21.046340492552893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab2d88bb4195%3A0x3006e474cce20274!2zSOG7jWMgdmnhu4duIEvhu7kgdGh14bqtdCBRdcOibiBz4bux!5e0!3m2!1svi!2s!4v1584446430676!5m2!1svi!2s" width={660} height={500} frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
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
                                                <input type="text" name="vName" placeholder="Tên Bạn*" value={this.state.vName} onChange={(e) => this.changeValue(e)} />
                                                <input type="email" name="vEmail" placeholder="Email*" value={this.state.vEmail} onChange={(e) => this.changeValue(e)} />
                                            </div>
                                        </div>
                                        <div className="single-contact-form">
                                            <div className="contact-box subject">
                                                <input type="text" name="vSubject" placeholder="Tiêu Đề*" value={this.state.vSubject} onChange={(e) => this.changeValue(e)} />
                                            </div>
                                        </div>
                                        <div className="single-contact-form">
                                            <div className="contact-box message">
                                                <textarea name="vValue" placeholder="Nội Dung...." value={this.state.vValue} onChange={(e) => this.changeValue(e)} />
                                            </div>
                                        </div>
                                        <div className="contact-btn">
                                            <button type="submit" onClick={(e) => {
                                                e.preventDefault();
                                                this.sendRequest();
                                            }} className="fv-btn" disabled={this.props.isSendding}>GỬI TIN NHẮN</button>
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

const mapStateToProps = (state, ownProps) => {
    // if(state.authReducer.userInfo !== null) {
    //     Contact.changeNameAndMail(state.authReducer.userInfo.name, state.authReducer.userInfo.email);
    // }
    return {
        userLogin: state.authReducer.userInfo,
        isSendding: state.contactReducer.isLoading
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sendContact: (data) => {
            dispatch(sendingContact(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);