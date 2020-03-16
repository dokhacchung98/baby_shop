import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LeftMenu extends Component {
    render() {
        return (
            <nav className="hk-nav hk-nav-dark">
                <a href="/#" id="hk_nav_close" className="hk-nav-close"><span className="feather-icon"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg></span></a>
                <div className="slimScrollDiv" style={{position: 'relative', overflow: 'hidden', width: 'auto', height: '100%'}}><div className="nicescroll-bar" tabIndex={-50} style={{overflow: 'hidden', width: 'auto', height: '100%', outline: 'none'}}>
                    <div className="navbar-nav-wrap">

                    <ul className="navbar-nav flex-column">
                        <li className="nav-item">
                        <Link className="nav-link" to="/">
                            <span className="icon-home mr-3"></span>
                            <span className="nav-link-text">Trang Chủ</span>
                        </Link>
                        </li>
                    </ul>

                    <hr className="nav-separator" />
                    <div className="nav-header">
                        <span>Sản Phẩm</span>
                        <span>SP</span>
                    </div>

                    <ul className="navbar-nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="/#" data-toggle="collapse" data-target="#catalog_drp" aria-expanded="false">
                                <span className="icon-tag mr-3"></span>
                                <span className="nav-link-text">Thể Loại</span>
                            </a>
                            <ul id="catalog_drp" className="nav flex-column collapse collapse-level-1">
                            <li className="nav-item">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/catalog">
                                            Danh Sách Thể Loại
                                    </Link>
                                </li>
                            </ul>
                            </li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link collapsed" href="/#" data-toggle="collapse" data-target="#product_drp" aria-expanded="false">
                            <span className="icon-basket mr-3"></span>
                            <span className="nav-link-text">Sản Phẩm</span>
                        </a>
                        <ul id="product_drp" className="nav flex-column collapse collapse-level-1">
                            <li className="nav-item">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/products">
                                        Danh Sách Sản Phẩm
                                    </Link>
                                </li>
                            </ul>
                            </li>
                        </ul>
                        </li>
                    </ul>
                    
                    <hr className="nav-separator" />
                    <div className="nav-header">
                        <span>Đơn Hàng</span>
                        <span>ĐH</span>
                    </div>

                    <ul className="navbar-nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="/#" data-toggle="collapse" data-target="#Order_drp" aria-expanded="false">
                                <span className="icon-handbag mr-3"></span>
                                <span className="nav-link-text">Danh Sác Đơn Hàng</span>
                            </a>
                            <ul id="Order_drp" className="nav flex-column collapse collapse-level-1">
                            <li className="nav-item">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                     <Link className="nav-link" to="/orders-new">
                                        Đơn Hàng Mới
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/orders-destroy">
                                        Đơn Hàng Đã Hủy
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/orders-success">
                                        Đơn Hàng Đã Thành Công
                                    </Link>
                                </li>
                            </ul>
                            </li>
                        </ul>
                        </li>
                    </ul>
                                        
                    <hr className="nav-separator" />
                    <div className="nav-header">
                        <span>Bài Viết</span>
                        <span>BV</span>
                    </div>

                    <ul className="navbar-nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="/#" data-toggle="collapse" data-target="#Bloc_drp" aria-expanded="false">
                                <span className="icon-note mr-3"></span>
                                <span className="nav-link-text">Bài Viết</span>
                            </a>
                            <ul id="Bloc_drp" className="nav flex-column collapse collapse-level-1">
                            <li className="nav-item">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/blogs">
                                        Danh Sách Bài Viết
                                    </Link>
                                </li>
                            </ul>
                            </li>
                        </ul>
                        </li>
                    </ul>
                                  
                    <hr className="nav-separator" />
                    <div className="nav-header">
                        <span>Người Dùng</span>
                        <span>ND</span>
                    </div>

                    <ul className="navbar-nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="/#" data-toggle="collapse" data-target="#User_drp" aria-expanded="false">
                                <span className="icon-user mr-3"></span>
                                <span className="nav-link-text">Người Dùng</span>
                            </a>
                            <ul id="User_drp" className="nav flex-column collapse collapse-level-1">
                            <li className="nav-item">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/users">
                                        Danh Sách Người Dùng
                                    </Link>
                                </li>
                            </ul>
                            </li>
                        </ul>
                        </li>
                    </ul>
                    
                    <hr className="nav-separator" />

                    </div>
                </div><div className="slimScrollBar" tabIndex={-50} style={{background: 'rgb(214, 217, 218)', width: '6px', position: 'absolute', top: '168px', opacity: '0.8', display: 'none', borderRadius: '0px', zIndex: 99, right: '1px', height: '302.519px', outline: 'none'}} /><div className="slimScrollRail" style={{width: '6px', height: '100%', position: 'absolute', top: '0px', display: 'none', borderRadius: '7px', background: 'rgb(51, 51, 51)', opacity: '0.2', zIndex: 90, right: '1px'}} /></div>
            </nav>
        );
    }
}

export default LeftMenu;