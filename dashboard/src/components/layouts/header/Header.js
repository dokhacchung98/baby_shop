import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../state/auth/Action';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-xl navbar-light fixed-top hk-navbar">
                <a id="navbar_toggle_btn" className="navbar-toggle-btn nav-link-hover" href="/"><span className="feather-icon"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1={3} y1={12} x2={21} y2={12} /><line x1={3} y1={6} x2={21} y2={6} /><line x1={3} y1={18} x2={21} y2={18} /></svg></span></a>
                <a className="navbar-brand font-weight-700" href="/">
                    Baby Shop
                </a>
                <ul className="navbar-nav hk-navbar-content">
                    {/* <li className="nav-item">
                    <a id="navbar_search_btn" className="nav-link nav-link-hover" href="/#"><span className="feather-icon"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg></span></a>
                </li> */}
                    <li className="nav-item dropdown dropdown-authentication">
                        <a className="nav-link dropdown-toggle no-caret" href="/#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="media">
                                <div className="media-img-wrap">
                                    <div className="avatar avatar-sm">
                                        <img src="dist/img/admin.png" alt="user" className="avatar-img rounded-circle" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <span>Tên người dùng<i className="zmdi zmdi-chevron-down" /></span>
                                </div>
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" data-dropdown-in="flipInX" data-dropdown-out="flipOutX">
                            <a className="dropdown-item" href="/#" onClick={(e)=>{
                                e.preventDefault();
                                this.props.logoutAction();
                            }}><i className="dropdown-icon zmdi zmdi-power" /><span>Đăng Xuất</span></a>
                        </div>
                    </li>
                </ul>
            </nav>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        logoutAction: () => {
            dispatch(logout());
        }
    }
}

export default connect(null, mapDispatchToProps)(Header);