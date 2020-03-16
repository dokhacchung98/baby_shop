import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeModal, removeUser } from './../../../../state/user/UserAction';

class DeleteUser extends Component {
    sendRequest = (e) => {
        this.props.sendDataDelete(this.props.data.id);
    }

    render() {
        return (
            <div>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Xóa người dùng</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.props.closeModel()}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <span>Bạn có chắc chắn muốn xóa người dùng: '<b style={{fontWeight: '700'}}>{this.props.data !== null ? this.props.data.username : ''}</b>' ?</span>

                    </div>
                    <div className="modal-footer">
                        <button type="button" id="asd" className="btn btn-secondary" data-dismiss="modal" onClick={() => this.props.closeModel()}>Hủy</button>
                        <button type="button" className="btn btn-primary" onClick={(e) => this.sendRequest(e)} disabled={this.props.isFetching}>Xóa</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isFetching: state.UserReducer.isFetching,
        data: state.UserReducer.data
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sendDataDelete: (id) => {
            dispatch(removeUser(id));
        },
        closeModel: () => {
            dispatch(closeModal());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUser);