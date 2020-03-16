import React, { Component } from 'react';

class BreadCrumb extends Component {
    render() {
        return (
            <nav className="hk-breadcrumb" aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-light bg-transparent">
                    <li className={this.props.currentName === 'Trang Chủ' ? 'breadcrumb-item active' : 'breadcrumb-item'} >
                        {this.props.currentName !== 'Trang Chủ'
                        ? <a href="/">Trang Chủ</a>
                        : "Trang Chủ"}
                    </li>
                    {this.props.currentName !== 'Trang Chủ'
                    ? <li className="breadcrumb-item active" aria-current="page" >{this.props.currentName}</li>
                    : null}
                </ol>
            </nav>
        );
    }
}

export default BreadCrumb;