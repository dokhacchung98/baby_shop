import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCatalog } from './../../../../state/catalog/CatalogAction';
import { closeModal } from './../../../../state/catalog/CatalogAction';

class EditCatalog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fId: this.props.data.id,
            fNameCatalog: this.props.data.name,
            errCatalog: ''
        }
    }

    changeValueEdit = (e) => {
        const name = e.target.name;
        var v = e.target.value;
        this.setState({
            [name]: v
        });
    }

    sendRequest = (e) => {
        if (this.state.fNameCatalog.trim().length > 0) {
            this.props.sendDataEdit(this.state.fId, this.state.fNameCatalog);
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
                        <h5 className="modal-title">Sửa Thể Loại</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.props.closeModel()}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {/* Modal Body */}
                        <form className="mb-30">
                            <div className="form-group">
                                <label htmlFor="fNameCreate">Id</label>
                                <br />
                                <input type="text" id="fId" value={this.props.data.id} name="fId" disabled className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="fNameCreate">Tên Thể Loại</label>
                                <br />
                                <small style={{ color: '#ff0000' }}>{this.state.errCatalog}</small>
                                <input type="text" id="fNameCreate" value={this.state.fNameCatalog} name="fNameCatalog" onChange={(e) => this.changeValueEdit(e)} className="form-control" aria-describedby="helpInput1" />
                            </div>
                        </form>

                    </div>
                    <div className="modal-footer">
                        <button type="button" id="asd" className="btn btn-secondary" data-dismiss="modal" onClick={() => this.props.closeModel()}>Hủy</button>
                        <button type="button" className="btn btn-primary" onClick={(e) => this.sendRequest(e)} disabled={this.props.isFetching}>Chỉnh Sửa</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isFetching: state.CatalogReducer.isFetching,
        data: state.CatalogReducer.data
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sendDataEdit: (id, name) => {
            dispatch(editCatalog(id, name));
        },
        closeModel: () => {
            dispatch(closeModal());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCatalog);