import React, { Component } from 'react';
import Header from './../../layouts/header';
import Search from './../../layouts/search';
import Slide from './../../layouts/slide';
import Group from './../../layouts/group';
import Footer from './../../layouts/footer';

export default class Home extends Component {
    render() {
        return (
            <div >
                <Header></Header>
                <Search></Search>

                <Slide></Slide>

                <Group></Group>
                <Footer></Footer>
            </div>
        )
    }
}
