import React, { memo, useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import callApi from '../../../../service';
import { Multiselect } from 'multiselect-react-dropdown';

const CreatePer = ({
    closeModal,
    fetchList
}) => {
    const seRef = useRef(null);

    const [listModule, setListModule] = useState([])
    const [isFetching, setIsFetching] = useState(false);
    const [errCatalog, setErrCatalog] = useState('')
    const [errCatalog1, setErrCatalog1] = useState('')
    const [errCatalog2, setErrCatalog2] = useState('')
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [moduleSelect, setModuleSelect] = useState([])

    useEffect(() => {
        getLisModule();
    }, [])

    const getLisModule = async () => {
        await callApi('admin/get-module-permission', 'get', {}, true)
            .then(res => {
                setListModule(res.data?.data);
            }, err => {
                console.log('getLisModule error', err)
            })
    }

    const onSelectSize = (list, e) => {
        setModuleSelect([e]);
    }

    const onRemoveSize = (list, e) => {
        setModuleSelect([])
    }

    const sendDataCreate = async () => {
        if (!name.trim()) {
            setErrCatalog('Vui lòng nhập tên quyền');
            return;
        }
        setErrCatalog('');
        if (!type.trim()) {
            setErrCatalog1('Vui lòng nhập định danh');
            return;
        }
        setErrCatalog1('');
        if (moduleSelect.length == 0) {
            setErrCatalog2('Vui lòng chọn module');
            return;
        }
        setErrCatalog2('');
        setIsFetching(true);
        const body = {
            name: name.trim(),
            type: type.trim(),
            idModule: moduleSelect[0].id
        }
        await callApi('admin/create-per', 'post', body, true)
            .then(res => {
                console.log('res', res)
                setIsFetching(false);
                fetchList();
                closeModal();
            },
                err => {
                    console.log('error', err)
                    setIsFetching(false)
                })
    }

    return (
        <div>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Thêm Mới quyền</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    {/* Modal Body */}
                    <form className="mb-30">
                        <div className="form-group">
                            <label htmlFor="fNameCreate">Tên quyền</label>
                            <br />
                            <small style={{ color: '#ff0000' }}>{errCatalog}</small>
                            <input type="text"
                                value={name}
                                id="fNameCreate" name="fNameCatalog"
                                onChange={(e) => setName(e.target.value)}
                                className="form-control" aria-describedby="helpInput1" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="fNameCreate">Định danh</label>
                            <br />
                            <small style={{ color: '#ff0000' }}>{errCatalog1}</small>
                            <input type="text"
                                value={type}
                                id="fNameCreate" name="fNameCatalog"
                                onChange={(e) => setType(e.target.value)} className="form-control" aria-describedby="helpInput1" />
                        </div>

                        <Multiselect
                            ref={seRef}
                            singleSelect
                            className="border border-2"
                            style={{
                                chips: {
                                    background: "#9a3092",
                                    color: '#fff'
                                },
                                searchBox: {
                                    "border": "2px solid #e0e3e4",
                                    "borderRadius": "4px"
                                },
                                multiselectContainer: {
                                    color: "black"
                                },
                            }}
                            closeIcon="close"
                            selectedValue={moduleSelect}
                            options={listModule} // Options to display in the dropdown
                            onSelect={onSelectSize} // Function will trigger on select event
                            onRemove={onRemoveSize} // Function will trigger on remove event
                            displayValue="name" // Property name to display in the dropdown options
                        />
                        <small style={{ color: '#ff0000' }}>{errCatalog2}</small>
                    </form>

                </div>
                <div className="modal-footer">
                    <button type="button" id="asd" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Hủy</button>
                    <button type="button" className="btn btn-primary" onClick={sendDataCreate} disabled={isFetching}>Thêm Mới</button>
                </div>
            </div>
        </div>
    );
}


export default memo(CreatePer);