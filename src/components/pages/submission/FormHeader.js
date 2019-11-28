import React from 'react';

import { FreeText, Optional, Select } from '../../common/FormGroup';

const FormHeader = (props) => {
    const forms = [
        {
            lableFor: "noref",
            lableName: "Nomor referensi",
            inputAttr: {
                type: "text",
                placeholder: "lalala",
                className: "form-control",
                name: "asdas",
                disabled: true
            }
        }
    ]

    const optionalForm = [
        {
            optionName: "Pilhan pertama",
            optionList: [
                {
                    optionName: "Pilihan A",
                    inputAttr: {
                        type: "checkbox",
                        name: "pil[]",
                        value: "pila"
                    }
                },
                {
                    optionName: "Pilihan B",
                    inputAttr: {
                        type: "checkbox",
                        name: "pil[]",
                        value: "pilb"
                    }
                },
                {
                    optionName: "Pilihan C",
                    inputAttr: {
                        type: "checkbox",
                        name: "pil[]",
                        value: "pilc"
                    }
                }
                
            ]
        },
        {
            optionName: "Pilhan kedua",
            optionList: [
                {
                    optionName: "Pilihan A",
                    inputAttr: {
                        type: "checkbox",
                        name: "pil[]",
                        value: "pila"
                    }
                },
                {
                    optionName: "Pilihan B",
                    inputAttr: {
                        type: "checkbox",
                        name: "pil[]",
                        value: "pilb"
                    }
                },
                {
                    optionName: "Pilihan C",
                    inputAttr: {
                        type: "checkbox",
                        name: "pil[]",
                        value: "pilc"
                    }
                }
                
            ]
        }
    ]

    const selectForm = [
        {
            selectName: "Select Box 1",
            selectList: [
                {
                    inputAttr: {
                        value: "1",
                        selected: true,
                        disabled: true
                    },
                    name: "option 1"
                },
                {
                    inputAttr: {
                        value: "2"
                    },
                    name: "option 2"
                }
            ]
        },
        {
            selectName: "Select Box 2",
            selectList: [
                {
                    inputAttr: {
                        value: "",
                        selected: true,
                        disabled: true
                    },
                    name: "-- pilih --"
                },
                {
                    inputAttr: {
                        value: "2"
                    },
                    name: "option 2"
                }
            ]
        }
    ]

    return(
        <div className="row">
            <form>
                <div className="col-md-6">
                    <FreeText formProp={forms} />
                    <Optional formProp={optionalForm} />
                    <Select formProp={selectForm} />
                    <div className="form-group">
                        <label for="noref">Nomor referensi</label>
                        <input type="text" className="form-control" id="noref" />
                    </div>
                    <div className="form-group">
                        <label for="to">Kepada</label>
                        <input type="text" className="form-control" id="to" placeholder="unit tujuan" />
                    </div>
                    <div className="form-group">
                        <label for="tanggal">Tanggal</label>
                        <input type="text" className="form-control" id="tanggal" placeholder="tanggal pengajuan" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label for="subject">Perihal</label>
                        <input type="text" className="form-control" id="subject" placeholder="perihal pengajuan" />
                    </div>
                    <div className="form-group">
                        <label for="from">Dari</label>
                        <input type="text" className="form-control" id="from" placeholder="unit pengaju" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormHeader;