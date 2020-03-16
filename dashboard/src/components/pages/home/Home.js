import React, { Component } from 'react';
import Header from './../../layouts/header';
import LeftMenu from './../../layouts/left_menu';
import BreadCrumb from './../../layouts/bread_crumb';
import Footer from './../../layouts/footer';

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <LeftMenu/>

                <div id="hk_nav_backdrop" className="hk-nav-backdrop" />

                <div className="hk-pg-wrapper" style={{minHeight: '937px'}}>
                <BreadCrumb currentName="Trang Chủ"/>

                <div className="container">
                    {/* Title */}
                    <div className="hk-pg-header mb-10">
                    <div>
                        <h4 className="hk-pg-title"><span className="pg-title-icon"><span className="feather-icon"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg></span></span>Activity</h4>
                    </div>

                    </div>
                    {/* /Title */}
                    {/* Row */}
                    <div className="row">
                    <div className="col-xl-12">
                        <div className="card card-lg">
                        <h6 className="card-header">
                            This Month
                        </h6>							
                        <div className="card-body">
                            {/* BODY */}
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* /Row */}
                </div>
                <Footer/>
                </div>
            </div>
        );
    }
}

export default Home;