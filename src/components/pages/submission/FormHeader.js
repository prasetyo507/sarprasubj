import React from 'react';

import { FreeText } from '../../common/FormGroup';

const FormHeader = (props) => {
    const forms1 = [
        {
            lableFor: "refnumber",
            lableName: "Nomor referensi",
            inputAttr: {
                id: "refnumber",
                type: "text",
                placeholder: "nomor referansi pengajuan",
                className: "form-control",
                name: "asdas",
                readOnly: ""
            }
        },
        {
            lableFor: "to",
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
            lableFor: "date",
            lableName: "Tanggal",
            inputAttr: {
                type: "text",
                placeholder: "tanggal pengajuan",
                className: "form-control",
                name: "date"
            }
        }
    ];

    const forms2 = [
        {
            lableFor: "subject",
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
            lableFor: "from",
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
                    <FreeText formProp={forms1} />
                </div>
                <div className="col-md-6">
                    <FreeText formProp={forms2} />
                </div>
            </form>
        </div>
    )
}

export default FormHeader;