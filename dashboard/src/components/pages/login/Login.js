import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { loginRequest } from './../../../state/auth/Action';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPassword: true,
            femail: "",
            fpass: "",
            fsave: true
        }
    }

    changeTypePass = (e) => {
        e.preventDefault();
        this.setState({
            isPassword: !this.state.isPassword
        })
    }

    changeValue = (e) => {
        const name = e.target.name;
        var v = e.target.value.trim();
        if (name === 'fsave') {
            v = e.target.checked;
        }
        this.setState({
            [name]: v
        });
    }

    sendDataLogin = (e) => {
        e.preventDefault();
        this.props.dispathLogin({
            'username': this.state.femail.trim(),
            'password': this.state.fpass.trim()
        });
    }

    render() {
        return (
            <div className="hk-wrapper">
                <div className="hk-pg-wrapper hk-auth-wrapper" style={{ minHeight: '492px', marginLeft: '0px' }}>
                    <header className="d-flex justify-content-between align-items-center">
                        <a className="d-flex text-white auth-brand" href="/#" onClick={e => e.preventDefault()}>
                            Baby Shop
                    </a>
                    </header>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-5 pa-0">
                                <div id="owl_demo_1" className="owl-carousel dots-on-item owl-theme owl-loaded">
                                    <div className="owl-stage-outer"><div className="owl-stage" style={{ transform: 'translate3d(-1605px, 0px, 0px)', transition: 'all 0s ease 0s', width: '4818px' }}><div className="owl-item cloned" style={{ width: '792.906px', marginRight: '10px' }}><div className="fadeOut item auth-cover-img overlay-wrap" style={{ backgroundImage: 'url(dist/img/a1.jpg)' }}>
                                    </div>
                                    </div>
                                        <div className="owl-item cloned" style={{ width: '792.906px', marginRight: '10px' }}><div className="fadeOut item auth-cover-img overlay-wrap" style={{ backgroundImage: 'url(dist/img/a2.jpg)' }}>
                                        </div>
                                        </div>
                                        <div className="owl-item active" style={{ width: '792.906px', marginRight: '10px' }}><div className="fadeOut item auth-cover-img overlay-wrap" style={{ backgroundImage: 'url(dist/img/a3.jpg)' }}>
                                        </div>
                                        </div>
                                        <div className="owl-item" style={{ width: '792.906px', marginRight: '10px' }}><div className="fadeOut item auth-cover-img overlay-wrap" style={{ backgroundImage: 'url(dist/img/a4.jpg)' }}>
                                        </div>

                                        </div>
                                    </div>
                                    </div>
                                    <div className="owl-nav disabled">
                                        <button type="button" role="presentation" className="owl-prev">
                                            <span aria-label="Previous">‹</span>
                                        </button>
                                        <button type="button" role="presentation" className="owl-next">
                                            <span aria-label="Next">›</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 pa-0">
                                <div className="auth-form-wrap py-xl-0 py-50">
                                    <div className="auth-form w-xxl-55 w-xl-75 w-sm-90 w-xs-100">
                                        <form>
                                            <h1 className="display-4 mb-10">Chào Mừng Quay Lại Admin</h1>
                                            <p className="mb-30">Đăng nhập và tận hưởng doanh thu lớn.</p>
                                            <i style={{ color: '#f00090', fontStyle: 'italic' }}>{this.props.errlogin}</i>
                                            <div className="form-group">
                                                <input className="form-control" placeholder="Email" type="email" name="femail" onChange={(e) => this.changeValue(e)} />
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input onChange={(e) => this.changeValue(e)} name="fpass" className="form-control" placeholder="Password" type={this.state.isPassword ? "password" : "text"} />
                                                    <a href="/#" onClick={(e) => this.changeTypePass(e)}>
                                                        <span className="input-group-text"><span className="feather-icon"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye-off"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1={1} y1={1} x2={23} y2={23} /></svg></span></span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="custom-control custom-checkbox mb-25">
                                                <input className="custom-control-input" name="fsave" id="same-address" type="checkbox" checked={this.state.fsave} onChange={(e) => this.changeValue(e)} />
                                                <label className="custom-control-label font-14" htmlFor="same-address">Giữ trạng thái đăng nhập</label>
                                            </div>
                                            <button className="btn btn-primary btn-block" onClick={(e) => this.sendDataLogin(e)} disabled={this.props.isLoading}>Đăng Nhập</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Main Content */}
                <Helmet>
                    <script src="/vendors/owl.carousel/dist/owl.carousel.min.js"></script>
                    <script src="/dist/js/login-data.js"></script>
                </Helmet>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        errlogin: state.AuthReducer.errlogin,
        isLoading: state.AuthReducer.isLoading
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispathLogin: (body) => {
            dispatch(loginRequest(body))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
