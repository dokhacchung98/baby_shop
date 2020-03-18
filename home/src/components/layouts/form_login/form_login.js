import React, { Component } from 'react'
import { connect } from 'react-redux';
import { sendLogin, sendRegister } from './../../../state/auth/auth_action';

class FormLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginForm: true,
            username1: '',
            password1: '',
            passwordconfirm: '',
            errUser1: '',
            errPass1: '',
            errPass2: '',
            registerSS: false
        }
    }

    changeValue = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    validateInput = () => {
        if (!this.state.username1.trim()) {
            this.setState({
                errUser1: 'Vui lòng nhập tên đăng nhập'
            });
            return false;
        }

        if (!this.state.password1.trim()) {
            this.setState({
                errUser1: 'Vui lòng nhập mật khẩu'
            });
            return false;
        }

        if (!this.state.isLoginForm && !this.state.passwordconfirm.trim()) {
            this.setState({
                errUser1: 'Vui lòng nhập lại mật khẩu'
            });
            return false;
        }
        return true;
    }

    sendDataRequest = () => {
        if (!this.props.isLoading) {
            if (this.state.isLoginForm) {
                if (this.validateInput) {
                    this.props.sendDataLogin({
                        username: this.state.username1.trim(),
                        password: this.state.password1.trim()
                    });
                }
            } else {
                if (this.validateInput) {
                    this.props.sendDataRegister({
                        username: this.state.username1.trim(),
                        password: this.state.password1.trim(),
                        confirmPassword: this.state.passwordconfirm.trim()
                    });
                }
            }
        }
    }

    render() {
        return (
            <div>
                <h2 className="text-center mb-4">{this.state.isLoginForm ? 'Đăng Nhập' : 'Đăng Ký'}</h2>
                <form id="contact-form" action="#" style={{ marginTop: '24px' }}>
                    <div className="single-contact-form mt-5">
                        <div className="contact-box us">
                            <label>Tài Khoản</label>
                            <input type="text" onChange={(e) => this.changeValue(e)} name="username1" placeholder="abc.." />
                        </div>
                    </div>
                    <div className="single-contact-form">
                        <div className="contact-box pa">
                            <label>Mật Khẩu</label>
                            <input type="password" onChange={(e) => this.changeValue(e)} name="password1" placeholder="Mật khẩu" />
                        </div>
                    </div>

                    {this.state.isLoginForm ?
                        <div className="single-contact-form">
                            <input type="checkbox" checked />  <span> Nhớ Đăng Nhập</span>
                        </div>
                        :
                        <div className="single-contact-form" style={{ marginBottom: '8px' }}>
                            <div className="contact-box co">
                                <label>Xác Nhận Mật Khẩu</label>
                                <input type="password" name="passwordconfirm" onChange={(e) => this.changeValue(e)} placeholder="Mật khẩu" style={{ background: '#f5f5f5 none repeat scroll 0 0' }} />
                            </div>
                        </div>
                    }
                    <small style={{ color: 'red' }}>{this.props.errMess}</small>
                    <ul className="shopping__btn" style={{ marginTop: '16px' }}>
                        <li className="shp__checkout"><a href="/#" onClick={(e) => {
                            e.preventDefault();
                            this.sendDataRequest();
                        }}>{this.state.isLoginForm ? 'Đăng Nhập' : 'Đăng Ký'}</a></li>
                        <li><a href="/#" onClick={(e) => {
                            e.preventDefault();
                            this.setState({
                                isLoginForm: !this.state.isLoginForm
                            });
                        }}>{this.state.isLoginForm ? 'Chưa Có Tài Khoản' : 'Đã Có Tài Khoản'}</a></li>
                    </ul>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        errMess: state.authReducer.err,
        isLoading: state.authReducer.isLoading,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sendDataLogin: (data) => {
            dispatch(sendLogin(data))
        },
        sendDataRegister: (data) => {
            dispatch(sendRegister(data))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);