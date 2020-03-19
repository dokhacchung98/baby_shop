import React, { Component } from 'react'

export default class Breadcrumb extends Component {
    render() {
        return (
            <div className="container" style={{ marginTop: '8px', marginBottom: '24px' }}>
                <div className="row">
                    <div className="col-xs-12">
                        <nav className="bradcaump-inner" style={{display: 'flex'}}>

                            {this.props.dataLink.map((t, ke) => {
                                return (
                                    <div key={ke}>
                                        <a className="breadcrumb-item" href={t.link}>{t.name}</a>
                                        <span className="brd-separetor"><i className="zmdi zmdi-chevron-right" /></span>
                                    </div>
                                )
                            })}
                            <span className="breadcrumb-item active" style={{ color: '#c43b68' }}>{this.props.myName}</span>

                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}
