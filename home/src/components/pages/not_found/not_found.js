import React, { Component } from 'react';
import Header from './../../layouts/header';
import Search from './../../layouts/search';
import Group from './../../layouts/group';
import Footer from './../../layouts/footer';
import './not_found.css';

export default class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fKey: ''
        }
    }
    getLinkSearch = (name) => {
        const path = `/tim-kiem-${name.trim()}`;
        return path;
    }

    searchKeyword = () => {
        const keyword = this.state.fKey;
        if (keyword.trim() === '') {
            return;
        }
        window.location.replace(this.getLinkSearch(keyword));
    }

    render() {
        return (
            <div>
                <Header></Header>
                <Search></Search>

                <div id="notfound">
                    <div className="notfound">
                        <div className="notfound-404">
                            <h1>404</h1>
                        </div>
                        <h2>Ồ, Trang mà bạn yêu cầu không tồn tại!</h2>
                        <form className="notfound-search">
                            <input type="text" placeholder="Tìm kiếm..." onChange={(e) => {
                                this.setState({
                                    fKey: e.target.value
                                })
                            }} />
                            <button type="button" onClick={(e) => {
                                e.preventDefault();
                                this.searchKeyword()
                            }}>Tìm Kiếm</button>
                        </form>
                        <a href="/"><span className="arrow" />Về Trang Chủ</a>
                    </div>
                </div>

                <Group></Group>
                <Footer></Footer>
            </div>
        )
    }
}
