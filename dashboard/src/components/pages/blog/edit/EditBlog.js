import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeModal, editBlog, uploadImageAndUpdate } from './../../../../state/blog/BlogAction';
import CKEditor from "react-ckeditor-component";

class EditBlog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titleBlog: this.props.dataBlog.title,
            shortDes: this.props.dataBlog.shortDescription,
            description: this.props.dataBlog.description,
            errTitle: '',
            errDes: '',
            isChangeImage: false,
            imagePath: this.props.dataBlog.imagePath,
            imgSrc: this.props.dataBlog.imagePath,
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
            if (this.state.isChangeImage) {
                this.props.sendDataUploadAndEdit(this.state.imagePath, data);
            } else {
                this.props.sendDataEdit(data);
            }
        }
    }

    parseToJson = () => {
        const data = {
            id: this.props.dataBlog.id,
            title: this.state.titleBlog.trim(),
            shortDescription: this.state.shortDes.trim(),
            description: this.state.description,
            imagePath: this.state.imgSrc,
        };
        return data;
    }

    render() {
        return (
            <div style={{ maxHeight: 'calc(100vh - 210px)', overflowY: 'auto' }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Sửa Bài Viết</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.props.closeModel()}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {/* Modal Body */}
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="img">Hình Ảnh</label>
                                <br />
                                <input type="file" id="img" name="img" accept="image/*" onChange={(e) => {
                                    this.setState({
                                        imagePath: e.target.files[0],
                                        imgSrc: URL.createObjectURL(e.target.files[0]),
                                        isChangeImage: true
                                    });
                                }} />
                            </div>

                            <div className="col-md-6 row">
                                <img src={this.state.imgSrc} alt={`Baz taking a ${this.state.imgSrc}`} className="mx-auto margin utility img-thumbnail" style={{ width: '150px', height: '150px' }} />
                            </div>
                        </div>

                        <form className="mb-30">
                            <div className="form-group">
                                <label htmlFor="fNameCreate">Tiêu Đề</label>
                                <br />
                                <small style={{ color: '#ff0000' }}>{this.state.errTitle}</small>
                                <input type="text" id="fNameCreate" value={this.state.titleBlog} onChange={(e) => {
                                    this.setState({
                                        titleBlog: e.target.value
                                    })
                                }} className="form-control" aria-describedby="helpInput1" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="fNameCreate">Mô Tả Ngắn</label>
                                <br />
                                <small style={{ color: '#ff0000' }}>{this.state.errDes}</small>
                                <input type="text" id="fsda" value={this.state.shortDes} onChange={(e) => {
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
                        <button type="button" className="btn btn-primary" onClick={(e) => this.sendRequest(e)} disabled={this.props.isFetching}>Sửa</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isFetching: state.BlogReducer.isFetching,
        dataBlog: state.BlogReducer.data
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sendDataEdit: (data) => {
            dispatch(editBlog(data));
        },
        closeModel: () => {
            dispatch(closeModal());
        },
        sendDataUploadAndEdit: (image, data) => {
            dispatch(uploadImageAndUpdate(image, data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBlog);