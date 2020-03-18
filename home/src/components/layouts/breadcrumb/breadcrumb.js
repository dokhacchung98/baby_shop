import React, { Component } from 'react'

export default class Breadcrumb extends Component {
    render() {
        return (
            <div className="container" style={{ marginTop: '8px', marginBottom: '24px' }}>
                <div className="row">
                    <div className="col-xs-12">
                        <nav className="bradcaump-inner">

                            {this.props.dataLink.map(t => {
                                return (
                                    <>
                                        <a className="breadcrumb-item" href={t.link}>{t.name}</a>
                                        <span className="brd-separetor"><i className="zmdi zmdi-chevron-right" /></span>
                                    </>
                                )
                            })}
                            <span className="breadcrumb-item active">{this.props.myName}</span>

                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}
