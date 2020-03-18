import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div className="ht__bradcaump__area" style={{
                background: "rgba(0, 0, 0, 0) url(" + this.props.imgBg + ") no-repeat scroll center center / cover",
                marginTop: '80px',
                height: '270px'
            }}>
                <div className="ht__bradcaump__wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="bradcaump__inner">
                                    <h1 style={{ color: '#fff', fontSize: '86px' }} className="breadcrumb-item">{this.props.title.toUpperCase()}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
