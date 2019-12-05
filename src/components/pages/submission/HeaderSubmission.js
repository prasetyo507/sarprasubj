import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';

import { FreeText } from '../../common/FormGroup';
import { fillOutSubmissionHeader } from '../../../store/actions/submissionHeader';

const HeaderSubmission = (props) => {
    const d = new Date();

    const [headerState, setState] = useState({
        refnumber: '',
        date: '',
        subject: '',
        to: '',
        from: ''
    });

    const handleFormChange = e => {
        setState({...headerState, 
            [e.target.name]: e.target.value,
            refnumber: $('input[name="refnumber"]').val(),
            date: `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`,
            to: $('input[name="to"]').val(),
            from: $('input[name="from"]').val()
        })
    }

    const formHeader = {...headerState}

    useEffect(() => {
        props.fillSubmissionHeader(formHeader)
    },[props, formHeader])

    const refNumber = [{
            forAttr: "refnumber",
            lableName: "Nomor referensi",
            inputAttr: {
                id: "refnumber",
                type: "text",
                placeholder: "nomor referansi pengajuan",
                className: "form-control",
                name: "refnumber",
                readOnly: "readonly",
                value: "2987-291119-01",
                onChange: e => handleFormChange(e)
            }
    }];
    
    const submissionDate = [{
            forAttr: "date",
            lableName: "Tanggal",
            inputAttr: {
                type: "text",
                value: `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`,
                placeholder: "tanggal pengajuan",
                className: "form-control",
                name: "date",
                readOnly: true,
                onChange: e => handleFormChange(e)
            }
    }]
        
    const subjectForm = [{
            forAttr: "subject",
            lableName: "Perihal",
            inputAttr: {
                id: "subject",
                type: "text",
                placeholder: "perihal pengajuan",
                className: "form-control",
                name: "subject",
                onChange: e => handleFormChange(e)
            }
    }];

    const recipient = [{
            forAttr: "to",
            lableName: "Kepada",
            inputAttr: {
                id: "to",
                type: "text",
                value: "Biro Administrasi Umum",
                placeholder: "unit tujuan",
                className: "form-control",
                name: "to",
                readOnly: true,
                onChange: e => handleFormChange(e)
            }
    }];

    const sender = [{
            forAttr: "from",
            lableName: "Dari",
            inputAttr: {
                id: "from",
                type: "text",
                placeholder: "unit yang mengajukan",
                className: "form-control",
                name: "from",
                readOnly: true,
                value: "PTI",
                onChange: e => handleFormChange(e)
            }
    }];

    return(
        <>
            <div className="row">
                <div className="col-md-3">
                    <FreeText formProp={refNumber} />
                </div>
                <div className="col-md-3">
                    <FreeText formProp={submissionDate} />
                </div>
                <div className="col-md-6">
                    <FreeText formProp={subjectForm} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <FreeText formProp={recipient} />
                </div>
                <div className="col-md-6">
                    <FreeText formProp={sender} />
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        fillSubmissionHeader: formHeader => dispatch(fillOutSubmissionHeader(formHeader))
    }
}

export default connect(null,mapDispatchToProps)(HeaderSubmission);