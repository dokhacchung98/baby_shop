import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCatalog } from './../../../../state/catalog/CatalogAction';
import { closeModal } from './../../../../state/catalog/CatalogAction';

class CreateCatalog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fNameCatalog: '',
            errCatalog: ''
        }
    }

    changeValue = (e) => {
        const name = e.target.name;
        var v = e.target.value.trim();
        this.setState({
            [name]: v
        });
    }

    sendRequest = (e) => {
        if (this.state.fNameCatalog.trim().length > 0) {
            this.props.sendDataCreate(this.state.fNameCatalog);
        } else {
            this.setState({
                errCatalog: 'Vui lòng nhập đầy đủ'
            });
        }
    }

    render() {
        return (
            <div>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Thêm Mới Thể Loại</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.props.closeModel()}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {/* Modal Body */}
                        <form className="mb-30">
                            <div className="form-group">
                                <label htmlFor="fNameCreate">Tên Thể Loại</label>
                                <br />
                                <small style={{ color: '#ff0000' }}>{this.state.errCatalog}</small>
                                <input type="text" id="fNameCreate" name="fNameCatalog" onChange={(e) => this.changeValue(e)} className="form-control" aria-describedby="helpInput1" />
                            </div>
                        </form>

                    </div>
                    <div className="modal-footer">
                        <button type="button" id="asd" className="btn btn-secondary" data-dismiss="modal" onClick={() => this.props.closeModel()}>Hủy</button>
                        <button type="button" className="btn btn-primary" onClick={(e) => this.sendRequest(e)} disabled={this.props.isFetching}>Thêm Mới</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isFetching: state.CatalogReducer.isFetching
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sendDataCreate: (name) => {
            dispatch(createCatalog(name));
        },
        closeModel: () => {
            dispatch(closeModal());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCatalog);