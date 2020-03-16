import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="hk-footer-wrap container">
                <footer className="footer">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                    <p>Copyright by<a href="https://www.facebook.com/chung.origami" className="text-dark">Khắc Chung</a> © 2020</p>
                    </div>
                    <div className="col-md-6 col-sm-12">
                    <p className="d-inline-block">Follow us</p>
                    <a href="/#" className="d-inline-block btn btn-icon btn-icon-only btn-indigo btn-icon-style-4"><span className="btn-icon-wrap"><i className="fa fa-facebook" /></span></a>
                    <a href="/#" className="d-inline-block btn btn-icon btn-icon-only btn-indigo btn-icon-style-4"><span className="btn-icon-wrap"><i className="fa fa-twitter" /></span></a>
                    <a href="/#" className="d-inline-block btn btn-icon btn-icon-only btn-indigo btn-icon-style-4"><span className="btn-icon-wrap"><i className="fa fa-google-plus" /></span></a>
                    </div>
                </div>
                </footer>
            </div>
        );
    }
}

export default Footer;