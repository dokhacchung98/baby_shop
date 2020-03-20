import React, { Component } from 'react'
import { connect } from 'react-redux'
import { openMenu, openSearch } from './../../../state/app/app_action';
import { getListCatalog } from './../../../state/catalog/catalog_action';
import { to_slug } from './../../../utilities/slug';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: false,
            isOpenMenuMobile1: false,
            isOpenMunuMobile2: false
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.fetchDataCatalog();
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ isMobile: window.innerWidth < 992 });
    }

    toggleMenu1 = () => {
        this.setState({
            isOpenMenuMobile1: !this.state.isOpenMenuMobile1
        });
    }

    toggleMenu2 = () => {
        this.setState({
            isOpenMenuMobile2: !this.state.isOpenMenuMobile2
        });
    }

    fetchDataCatalog() {
        this.props.fetchListDataCatalog();
    }

    render() {
        return (
            <header id="htc__header" className="htc__header__area header--one">
                {/* Start Mainmenu Area */}
                <div id="sticky-header-with-topbar" className="mainmenu__wrap sticky__header scroll-header">
                    <div className="container">
                        <div className="row">
                            <div className="menumenu__container clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-5">
                                    <div className="logo">
                                        <a href="/"><img src="images/logo/4.png" alt="logo images" /></a>
                                    </div>
                                </div>
                                <div className="col-md-7 col-lg-8 col-sm-5 col-xs-3">
                                    <nav className="main__menu__nav hidden-xs hidden-sm">
                                        <ul className="main__menu" style={{ justifyContent: 'space-evenly' }}>
                                            <li><Link to="/">Trang Chủ</Link></li>
                                            <li className="drop"><a href="/#" onClick={(e) => e.preventDefault()}>Sản Phẩm</a>
                                                <ul className="dropdown">
                                                    {(this.props.listCatalog === undefined) ?
                                                        <div></div>
                                                        :
                                                        this.props.listCatalog.map((item, index) => {
                                                            const strSlug = to_slug(item.name);
                                                            const path = `/danh-muc-${strSlug}.${item.id}.`;
                                                            return (
                                                                <li key={index}><a href={path}>{item.name}</a></li>
                                                            );
                                                        })
                                                    }
                                                </ul>
                                            </li>

                                            <li><Link to="/blogs">Bài Viết</Link></li>

                                            <li><Link to="/contact">Liên Hệ</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="col-md-3 col-lg-2 col-sm-4 col-xs-4">
                                    <div className="header__right">
                                        <div className="header__search search search__open">
                                            <a href="/#" onClick={(e) => {
                                                e.preventDefault();
                                                this.props.openSearch();
                                            }}><i className="icon-magnifier icons" /></a>
                                        </div>
                                        <div className="header__account">
                                            <a href="/#" onClick={(e) => {
                                                if (!this.props.isAuthenticated) {
                                                    e.preventDefault();
                                                    this.props.openMenu();
                                                }
                                            }}><i className="icon-user icons" /></a>
                                        </div>
                                        <div className="htc__shopping__cart" onClick={(e) => {
                                            this.props.openMenu();
                                        }}>
                                            <a className="cart__menu" href="/#" onClick={(e) => e.preventDefault()}><i className="icon-handbag icons" /></a>
                                            <a onClick={(e) => e.preventDefault()} href="/#"><span className="htc__qua">{this.props.myCarts.length}</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* mobile-menu-area mean-container */}
                        <div className="mobile-menu-area mean-container" style={{ display: this.state.isMobile ? 'block' : 'none' }} >
                            <div className="mean-bar">
                                <a href="/#" onClick={(e) => {
                                    e.preventDefault();
                                    this.toggleMenu1();
                                }} className="meanmenu-reveal meanclose" style={{ background: '', color: '', right: 0, left: 'auto' }}>
                                    <span />
                                    <span />
                                    <span />
                                </a>
                                <nav className="mean-nav">
                                    <ul style={{ display: this.state.isOpenMenuMobile1 ? 'block' : 'none', transition: '0.3s' }}>
                                        <li><Link to="/">Trang Chủ</Link></li>
                                        <li><a href="/#" onClick={(e) => {
                                            e.preventDefault();
                                            this.toggleMenu2();
                                        }}>Sản Phẩm</a>
                                            <ul style={{ display: this.state.isOpenMenuMobile2 ? 'contents' : 'none' }}>
                                                {(this.props.listCatalog === undefined) ?
                                                        <div></div>
                                                        :
                                                        this.props.listCatalog.map((item, index) => {
                                                            const strSlug = to_slug(item.name);
                                                            const path = `/danh-muc-${strSlug}.${item.id}`;
                                                            return (
                                                                <li key={index}><a href={path}>{item.name}</a></li>
                                                            );
                                                        })
                                                    }
                                            </ul>
                                            <a className="mean-expand" href="/#" onClick={(e) => {
                                                e.preventDefault();
                                                this.toggleMenu2();
                                            }} style={{ fontSize: '18px' }}>+</a>
                                        </li>

                                        <li><Link to="/blogs">Bài Viết</Link></li>

                                        <li><Link to="/contact">Liên Hệ</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Mainmenu Area */}
            </header>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.authReducer.isAuthenticated,
        myCarts: state.appReducer.myCarts,
        listCatalog: state.catalogReducer.listCatalog
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        openMenu: () => {
            dispatch(openMenu())
        },
        openSearch: () => {
            dispatch(openSearch());
        },
        fetchListDataCatalog: () => {
            dispatch(getListCatalog());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);