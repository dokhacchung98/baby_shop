import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeModal, removeBlog } from './../../../../state/blog/BlogAction';

class DeleteBlog extends Component {
    sendRequest = (e) => {
        this.props.sendDataDelete(this.props.data.id);
    }

    render() {
        return (
            <div>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Xóa Bài Viết</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.props.closeModel()}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <span>Bạn có chắc chắn muốn xóa bài viết '<b style={{ fontWeight: '700' }}>{this.props.data !== null ? this.props.data.title : ''}</b>' ?</span>

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
        isFetching: state.BlogReducer.isFetching,
        data: state.BlogReducer.data
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sendDataDelete: (id) => {
            dispatch(removeBlog(id));
        },
        closeModel: () => {
            dispatch(closeModal());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteBlog);