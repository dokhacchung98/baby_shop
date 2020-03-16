import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeModal, uploadImageAndCreate } from '../../../../state/product/ProductAction';
import { Multiselect } from 'multiselect-react-dropdown';
import CKEditor from "react-ckeditor-component";

class CreateProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listSize: [
                { name: 'S' }, { name: 'M' }, { name: 'L' }, { name: 'XL' }, { name: 'XXL' }
            ],
            listSizeSelect: [],
            listCatalogSelect: [],
            imgSrc: 'dist/img/avatar1.jpg',
            isEnableSize: false,
            isEnableColor: false,
            listColor: [],
            imagePath: null,
            name: '',
            price: 0,
            discount: 0,
            description: '',
            errName: '',
            errImage: ''
        }

        this.style = {
            chips: {
                background: "#9a3092"
            },
            searchBox: {
                "border": "2px solid #e0e3e4",
                "borderRadius": "4px"
            },
            multiselectContainer: {
                color: "black"
            },
        };

        this.styleColor = {
            height: '20px',
            with: '20px',
            border: '1px solid #000'
        }

        this.onSelectSize = this.onSelectSize.bind(this);
        this.onRemoveSize = this.onRemoveSize.bind(this);
        this.onSelectCatalog = this.onSelectCatalog.bind(this);
        this.onRemoveCatalog = this.onRemoveCatalog.bind(this);
    }

    onChangeValue(evt) {
        this.setState({
            description: evt.editor.getData()
        })
    }

    validate = () => {
        if (!this.state.imagePath) {
            this.setState({ errImage: 'Bạn chưa chọn hình ảnh' })
            return false;
        }
        if (!this.state.name.trim()) {
            this.setState({ errName: 'Bạn chưa nhập tên sản phẩm' });
            return false;
        }
        return true;
    }

    sendRequest = (e) => {
        if (this.validate()) {
            var data = this.parseToJson();
            this.props.sendDataCreate(this.state.imagePath, data);
        }
    }

    onSelectCatalog(selectedList, selectedItem) {
        this.setState({ listCatalogSelect: [...this.state.listCatalogSelect, selectedItem] });
    }

    onRemoveCatalog(selectedList, removedItem) {
        this.setState({
            listCatalogSelect: this.state.listCatalogSelect.filter(t => t !== removedItem)
        })
    }

    onSelectSize(selectedList, selectedItem) {
        this.setState({
            listSizeSelect: [...this.state.listSizeSelect, selectedItem]
        });
    }

    onRemoveSize(selectedList, removedItem) {
        this.setState({
            listSizeSelect: this.state.listSizeSelect.filter(t => t !== removedItem)
        })
    }

    onChangeValueColor(value) {
        if (this.state.listColor.some(t => t === value)) {
            this.setState({
                listColor: this.state.listColor.filter(t => t !== value)
            });
        } else {
            this.setState({
                listColor: [...this.state.listColor, value]
            });
        }
    }

    parseToJson = () => {
        var size = '';
        var color = '';
        this.state.listSizeSelect.map(t => size += (t.name + ' '));
        this.state.listColor.map(t => color += (t + ' '));
        return {
            name: this.state.name.trim(),
            price: this.state.price,
            description: this.state.description,
            discount: this.state.discount,
            imagePath: '',
            hot: false,
            color: this.state.isEnableColor,
            size: this.state.isEnableSize,
            colorValue: color.trim(),
            sizeValue: size.trim(),
            listCatalogsId: this.state.listCatalogSelect.map(t => t.id)
        };
    }

    render() {
        return (
            <div style={{ maxHeight: 'calc(100vh - 210px)', overflowY: 'auto' }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Thêm Mới Sản Phẩm</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.props.closeModel()}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {/* Modal Body */}
                        <form className="mb-30">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="img">Hình Ảnh</label>
                                    <br />
                                    <small style={{ color: '#ff0000' }}>{this.state.errImage}</small>
                                    <input type="file" id="img" name="img" accept="image/*" onChange={(e) => {
                                        this.setState({
                                            imagePath: e.target.files[0],
                                            imgSrc: URL.createObjectURL(e.target.files[0])
                                        });
                                    }} />
                                </div>

                                <div className="col-md-6 row">
                                    <img src={this.state.imgSrc} className="mx-auto margin utility img-thumbnail" style={{ width: '150px', height: '150px' }} />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="fNameCreate">Tên Sản Phẩm</label>
                                <br />
                                <small style={{ color: '#ff0000' }}>{this.state.errName}</small>
                                <input type="text" id="fNameCreate" name="fNameCatalog" onChange={(e) => {
                                    this.setState({
                                        name: e.target.value
                                    })
                                }} className="form-control" aria-describedby="helpInput1" />
                            </div>

                            <div className="row">
                                <div className="col-md-4 form-group">
                                    <label htmlFor="firstName">Giá Tiền</label>
                                    <input className="form-control" type="number" id="firstName" onChange={(e) => {
                                        this.setState({
                                            price: e.target.value
                                        })
                                    }} />
                                </div>
                                <div className="col-md-4 form-group">
                                    <label>Giảm Giá (%)</label>
                                    <input className="form-control" type="number" id="lastName" min="0" max="100" onChange={(e) => {
                                        this.setState({
                                            discount: e.target.value
                                        })
                                    }} />
                                </div>
                                <div className="col-md-4 form-group">
                                    <label>Giá Khuyễn Mãi</label>
                                    <input className="form-control" id="lastName" disabled value={
                                        parseInt(this.state.price * (100 - this.state.discount) / 100)
                                    } />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" onChange={(e) => {
                                        this.setState({
                                            isEnableSize: !this.state.isEnableSize
                                        });
                                    }} />
                                    <label className="custom-control-label mb-3" htmlFor="customCheck1">Sản Phẩm Này Áp Dụng Size</label>
                                </div>

                                <Multiselect
                                    className="border border-2"
                                    style={this.style}
                                    closeIcon="close"
                                    selectedValue={this.state.listSizeSelect}
                                    options={this.state.listSize} // Options to display in the dropdown
                                    onSelect={this.onSelectSize} // Function will trigger on select event
                                    onRemove={this.onRemoveSize} // Function will trigger on remove event
                                    displayValue="name" // Property name to display in the dropdown options
                                />
                            </div>

                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="color" onChange={(e) => {
                                        this.setState({
                                            isEnableColor: !this.state.isEnableColor
                                        });
                                    }} />
                                    <label className="custom-control-label" htmlFor="color">Sản Phẩm Này Áp Dụng Màu Sắc</label>
                                </div>


                                <div className="row" style={{ paddingLeft: '15px', paddingRight: '15px' }}>
                                    <div className="col-md-1 custom-control custom-checkbox mt-3">
                                        <input type="checkbox" className="custom-control-input" id="color1" onChange={(e) => {
                                            this.onChangeValueColor('FDFEFE');
                                        }} />
                                        <label className="custom-control-label" htmlFor="color1">
                                            <div style={{ width: '20px', height: '20px', border: '1px solid #000', backgroundColor: '#FDFEFE' }}></div>
                                        </label>
                                    </div>
                                    <div className="col-md-1 custom-control custom-checkbox mt-3">
                                        <input type="checkbox" className="custom-control-input" id="color11" onChange={(e) => {
                                            this.onChangeValueColor('CACFD2');
                                        }} />
                                        <label className="custom-control-label" htmlFor="color11">
                                            <div style={{ width: '20px', height: '20px', border: '1px solid #000', backgroundColor: '#CACFD2' }}></div>
                                        </label>
                                    </div>
                                    <div className="col-md-1 custom-control custom-checkbox mt-3">
                                        <input type="checkbox" className="custom-control-input" id="color12" onChange={(e) => {
                                            this.onChangeValueColor('6E2C00');
                                        }} />
                                        <label className="custom-control-label" htmlFor="color12">
                                            <div style={{ width: '20px', height: '20px', border: '1px solid #000', backgroundColor: '#6E2C00' }}></div>
                                        </label>
                                    </div>
                                    <div className="col-md-1 custom-control custom-checkbox mt-3">
                                        <input type="checkbox" className="custom-control-input" id="color2" onChange={(e) => {
                                            this.onChangeValueColor('17202A');
                                        }} />
                                        <label className="custom-control-label" htmlFor="color2">
                                            <div style={{ width: '20px', height: '20px', border: '1px solid #000', backgroundColor: '#17202A' }}></div>
                                        </label>
                                    </div>
                                    <div className="col-md-1 custom-control custom-checkbox mt-3">
                                        <input type="checkbox" className="custom-control-input" id="color3" onChange={(e) => {
                                            this.onChangeValueColor('C0392B');
                                        }} />
                                        <label className="custom-control-label" htmlFor="color3">
                                            <div style={{ width: '20px', height: '20px', border: '1px solid #000', backgroundColor: '#C0392B' }}></div>
                                        </label>
                                    </div>
                                    <div className="col-md-1 custom-control custom-checkbox mt-3">
                                        <input type="checkbox" className="custom-control-input" id="color4" onChange={(e) => {
                                            this.onChangeValueColor('9B59B6');
                                        }} />
                                        <label className="custom-control-label" htmlFor="color4">
                                            <div style={{ width: '20px', height: '20px', border: '1px solid #000', backgroundColor: '#9B59B6' }}></div>
                                        </label>
                                    </div>
                                    <div className="col-md-1 custom-control custom-checkbox mt-3">
                                        <input type="checkbox" className="custom-control-input" id="color5" onChange={(e) => {
                                            this.onChangeValueColor('2980B9');
                                        }} />
                                        <label className="custom-control-label" htmlFor="color5">
                                            <div style={{ width: '20px', height: '20px', border: '1px solid #000', backgroundColor: '#2980B9' }}></div>
                                        </label>
                                    </div>
                                    <div className="col-md-1 custom-control custom-checkbox mt-3">
                                        <input type="checkbox" className="custom-control-input" id="color6" onChange={(e) => {
                                            this.onChangeValueColor('3498DB');
                                        }} />
                                        <label className="custom-control-label" htmlFor="color6">
                                            <div style={{ width: '20px', height: '20px', border: '1px solid #000', backgroundColor: '#3498DB' }}></div>
                                        </label>
                                    </div>
                                    <div className="col-md-1 custom-control custom-checkbox mt-3">
                                        <input type="checkbox" className="custom-control-input" id="color7" onChange={(e) => {
                                            this.onChangeValueColor('1ABC9C');
                                        }} />
                                        <label className="custom-control-label" htmlFor="color7">
                                            <div style={{ width: '20px', height: '20px', border: '1px solid #000', backgroundColor: '#1ABC9C' }}></div>
                                        </label>
                                    </div>
                                    <div className="col-md-1 custom-control custom-checkbox mt-3">
                                        <input type="checkbox" className="custom-control-input" id="color8" onChange={(e) => {
                                            this.onChangeValueColor('27AE60');
                                        }} />
                                        <label className="custom-control-label" htmlFor="color8">
                                            <div style={{ width: '20px', height: '20px', border: '1px solid #000', backgroundColor: '#27AE60' }}></div>
                                        </label>
                                    </div>
                                    <div className="col-md-1 custom-control custom-checkbox mt-3">
                                        <input type="checkbox" className="custom-control-input" id="color9" onChange={(e) => {
                                            this.onChangeValueColor('F1C40F');
                                        }} />
                                        <label className="custom-control-label" htmlFor="color9">
                                            <div style={{ width: '20px', height: '20px', border: '1px solid #000', backgroundColor: '#F1C40F' }}></div>
                                        </label>
                                    </div>
                                    <div className="col-md-1 custom-control custom-checkbox mt-3">
                                        <input type="checkbox" className="custom-control-input" id="color10" onChange={(e) => {
                                            this.onChangeValueColor('E67E22');
                                        }} />
                                        <label className="custom-control-label" htmlFor="color10">
                                            <div style={{ width: '20px', height: '20px', border: '1px solid #000', backgroundColor: '#E67E22' }}></div>
                                        </label>
                                    </div>
                                </div>

                                <div className="form-group mt-3">
                                    <label htmlFor="fNameCreate">Mô Tả</label>
                                    <br />
                                    <CKEditor content={this.state.description} events={{
                                        "change": this.onChangeValue.bind(this)
                                    }} />
                                </div>
                            </div>


                            <div className="form-group">
                                <label>Thể Loại</label>
                                <Multiselect
                                    className="border border-2"
                                    style={this.style}
                                    closeIcon="close"
                                    options={this.props.listCatalog} // Options to display in the dropdown
                                    onSelect={this.onSelectCatalog} // Function will trigger on select event
                                    onRemove={this.onRemoveCatalog} // Function will trigger on remove event
                                    displayValue="name" // Property name to display in the dropdown options
                                />
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
        isFetching: state.CatalogReducer.isFetching,
        listCatalog: state.ProductReducer.listCatalog
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sendDataCreate: (image, data) => {
            dispatch(uploadImageAndCreate(image, data));
        },
        closeModel: () => {
            dispatch(closeModal());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct);