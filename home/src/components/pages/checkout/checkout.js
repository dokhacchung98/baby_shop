import React, { Component } from 'react';
import Header from './../../layouts/header';
import Search from './../../layouts/search';
import Group from './../../layouts/group';
import Footer from './../../layouts/footer';
import Banner from '../../layouts/banner';
import Breadcrumb from '../../layouts/breadcrumb/breadcrumb';

export default class CheckOut extends Component {
    dataLinkCheckOut = () => {
        return [
            { name: 'Trang Chủ', link: '/' },
        ];
    }

    render() {
        return (
            <div>
               <Header></Header>
                <Search></Search>
                <Banner imgBg="images/bg/3.jpg" title="Thanh Toán"></Banner>
                <Breadcrumb dataLink={this.dataLinkCheckOut()} myName="Thanh Toán"></Breadcrumb>


                <Group></Group>
                <Footer></Footer>
            </div>
        )
    }
}
