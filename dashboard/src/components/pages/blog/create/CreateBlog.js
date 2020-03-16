import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeModal, createBlog } from './../../../../state/blog/BlogAction';
import CKEditor from "react-ckeditor-component";

class CreateBlog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titleBlog: '',
            shortDes: '',
            description: '',
            errTitle: '',
            errDes: ''
        }
    }

    onChangeValue(evt) {
        this.setState({
            description: evt.editor.getData()
        })
    }

    validateForm = () => {
        if (!this.state.titleBlog.trim()) {
            this.setState({
                errTitle: 'Vui lòng nhập tiêu đề'
            });
            return false;
        } else {
            this.setState({
                errTitle: ''
            });
        }
        if (!this.state.shortDes.trim()) {
            this.setState({
                errDes: 'Vui lòng mô tả ngắn'
            });
            return false;
        } else {
            this.setState({
                errDes: ''
            });
        }
        return true;
    }

    sendRequest = (e) => {
        if (this.validateForm()) {
            const data = this.parseToJson();
            this.props.sendDataCreate(data);
        }
    }

    parseToJson = () => {
        const data = {
            title: this.state.titleBlog.trim(),
            shortDescription: this.state.shortDes.trim(),
            description: this.state.description
        };
        return data;
    }

    render() {
        return (
            <div>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Thêm Mới Bài Viết</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.props.closeModel()}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {/* Modal Body */}
                        <form className="mb-30">
                            <div className="form-group">
                                <label htmlFor="fNameCreate">Tiêu Đề</label>
                                <br />
                                <small style={{ color: '#ff0000' }}>{this.state.errTitle}</small>
                                <input type="text" id="fNameCreate" name="fNameCatalog" onChange={(e) => {
                                    this.setState({
                                        titleBlog: e.target.value
                                    })
                                }} className="form-control" aria-describedby="helpInput1" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="fNameCreate">Mô Tả Ngắn</label>
                                <br />
                                <small style={{ color: '#ff0000' }}>{this.state.errDes}</small>
                                <input type="text" id="fNameCreate" name="fNameCatalog" onChange={(e) => {
                                    this.setState({
                                        shortDes: e.target.value
                                    })
                                }} className="form-control" aria-describedby="helpInput1" />
                            </div>

                            <div className="form-group mt-3">
                                <label htmlFor="fNameCreate">Mô Tả</label>
                                <br />
                                <CKEditor content={this.state.description} events={{
                                    "change": this.onChangeValue.bind(this)
                                }} />
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
        isFetching: state.BlogReducer.isFetching
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sendDataCreate: (data) => {
            dispatch(createBlog(data));
        },
        closeModel: () => {
            dispatch(closeModal());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBlog);