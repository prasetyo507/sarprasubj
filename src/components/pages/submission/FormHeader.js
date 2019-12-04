import React from 'react';

import { FreeText } from '../../common/FormGroup';

const FormHeader = (props) => {
    const leftForm = [
        {
            forAttr: "refnumber",
            lableName: "Nomor referensi",
            inputAttr: {
                id: "refnumber",
                type: "text",
                placeholder: "nomor referansi pengajuan",
                className: "form-control",
                name: "refnumber",
                readOnly: "readonly",
                value: "2987-291119-01"
            }
        },
        {
            forAttr: "to",
            lableName: "Kepada",
            inputAttr: {
                id: "to",
                type: "text",
                placeholder: "unit tujuan",
                className: "form-control",
                name: "to"
            }
        },
        {
            forAttr: "date",
            lableName: "Tanggal",
            inputAttr: {
                type: "text",
                placeholder: "tanggal pengajuan",
                className: "form-control",
                name: "date"
            }
        }
    ];

    const rightForm = [
        {
            forAttr: "subject",
            lableName: "Perihal",
            inputAttr: {
                id: "subject",
                type: "text",
                placeholder: "perihal pengajuan",
                className: "form-control",
                name: "subject"
            }
        },
        {
            forAttr: "from",
            lableName: "Dari",
            inputAttr: {
                id: "from",
                type: "text",
                placeholder: "unit yang mengajukan",
                className: "form-control",
                name: "from"
            }
        }
    ]

    return(
        <div className="row">
            <form>
                <div className="col-md-6">
                    <FreeText formProp={leftForm} />
                </div>
                <div className="col-md-6">
                    <FreeText formProp={rightForm} />
                </div>
            </form>
        </div>
    )
}

export default FormHeader;