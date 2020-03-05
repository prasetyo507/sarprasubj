import React from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { editProcurement, approveProcurement } from "../store/actions/procurementAction";

import Section from "../../../common/Section";
import Master from "../../Master";
import Datatable from "../../../common/table/Datatable";
import Modal from "../../../common/Modal";
import { TextArea, FreeText } from "../../../common/FormGroup";

const ProcurementRektor = props => {
  // get param from url
  let { refnumber } = useParams();
  const param = refnumber;

  // get procurement detail
  const getDetailproc = props.procurement.find(proc => {
    return proc.submission_id === param;
  });


  const setujuRektor = () => {
    let procurement = {
      submission_id: getDetailproc.submission_id,
      date: getDetailproc.date,
      subject: getDetailproc.subject,
      to: getDetailproc.to,
      from: getDetailproc.from,
      note: getDetailproc.note,
      approvalNote: "",
      approval: 3,
      grandTotal: gt,
      items: getDetailproc.items
    };
    props.renkeuProcurement(procurement, procurement.submission_id);
    /* Toast */
    var toast = document.getElementById("snackbar");
    /* Show Toast */
    toast.className = "show";
    setTimeout(() => {
      /* hide Toast after 1 seconds */
      toast.className = toast.className.replace("show", "");
      props.history.push("/procurement");
    }, 1000);
  }
  // handle reject item
  const focusHandle = () => {
    let noticeReason = document.getElementById("noticeReason")
    noticeReason.style.display = "none"
  }
  const tolakRektor = () => {
    let saveReject = document.getElementById("reason")
    let noticeReason = document.getElementById("noticeReason")
    if (saveReject.value.length === 0) {
      noticeReason.style.display = "block"
    } else {
      if (
        window.confirm(
          "Proses ini akan membatalkan pengadaan, lanjutkan?"
        )
      ) {
        let procurement = {
          submission_id: getDetailproc.submission_id,
          date: getDetailproc.date,
          subject: getDetailproc.subject,
          to: getDetailproc.to,
          from: getDetailproc.from,
          note: getDetailproc.note,
          approvalNote: document.getElementById("reason").value,
          approval: 4,
          grandTotal: gt,
          items: getDetailproc.items
        };
        props.renkeuProcurement(procurement, procurement.submission_id);

        // hide modal after submit
        let script = document.createElement("script");
        script.innerHTML = "$('.modal').modal('hide');";
        document.body.appendChild(script);

        /* Toast */
        var toast = document.getElementById("snackbar");
        /* Show Toast */
        toast.className = "show";
        setTimeout(() => {
          /* hide Toast after 1 seconds */
          toast.className = toast.className.replace("show", "");
          props.history.push("/procurement");
        }, 1000);
      }
    }
  };
  const procForm1 = [
    {
      forAttr: "refnumber",
      lableName: "Nomor referensi",
      inputAttr: {
        id: "refnumber",
        type: "text",
        value: getDetailproc.submission_id,
        className: "form-control",
        name: "refnumber",
        readOnly: "readonly"
      }
    },
    {
      forAttr: "date",
      lableName: "Tanggal",
      inputAttr: {
        type: "text",
        value: getDetailproc.date,
        className: "form-control",
        name: "date",
        readOnly: true
      }
    },
    {
      forAttr: "subject",
      lableName: "Perihal",
      inputAttr: {
        id: "subject",
        type: "text",
        value: getDetailproc.subject,
        className: "form-control",
        name: "subject",
        readOnly: true
      }
    },
    {
      forAttr: "from",
      lableName: "Dari",
      inputAttr: {
        id: "from",
        type: "text",
        value: getDetailproc.from,
        className: "form-control",
        name: "from",
        readOnly: true
      }
    },
    {
      forAttr: "to",
      lableName: "Kepada",
      inputAttr: {
        id: "to",
        type: "text",
        value: getDetailproc.to,
        className: "form-control",
        name: "to",
        readOnly: true
      }
    }]
  const procForm2 = [
    {
      forAttr: "reason",
      lableName: "Catatan",
      inputAttr: {
        className: "form-control",
        id: "note",
        value: getDetailproc.note,
        name: "note",
        readOnly: true
      }
    }
  ];
  // set table header
  let tableHeader = [
    {
      column0: "No",
      column1: "Nama Barang",
      column2: "Nama Vendor",
      column4: "Harga Satuan",
      column3: "QTY",
      column5: "Total"
    }
  ];
  let tableContent = getDetailproc.items.map((items, index) => {
    let detail = props.catalogue.find(dtl => {
      return dtl.id + "" === items.id_catalogue;
    })
    return {
      no: index + 1,
      item: detail.name,
      vendor: detail.vendor,
      price: detail.price,
      amount: items.amount,
      total: detail.price * items.amount
    };
  })
  let gt = getDetailproc.grandTotal
  console.log(getDetailproc)
  return (
    <Master>
      <div className='row'>
        <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
          <div className='padding_right'>
            <Section
              pageName={"Pengadaan"}
              pageSubject={`Nomor ${getDetailproc.submission_id}`}
              box_header={"Keterangan"}
              class_section={"padding_right"}
            >
              <FreeText formProp={procForm1} />
              <TextArea formProp={procForm2} />

            </Section>
          </div>
        </div>
        <div className='col-xs-12 col-sm-8 col-md-8 col-lg-8'>
          <Section
            box_header={"Daftar"}
            class_section='padding_left'
          >
            <div className="row">
              <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                <Datatable
                  headContent={tableHeader}
                  content={tableContent}
                />
              </div>
              <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                <div className="form-group pull-right">
                  <label className="col-sm-4 control-label">Grand Total</label>
                  <div className="col-sm-8">
                    <input id="gt"
                      type="text"
                      className="form-control"
                      readOnly
                      value={
                        'Rp ' + gt
                          .toFixed(0) // always two decimal digits
                          .replace('.', ',') // replace decimal point character with ,
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
                      }
                    />
                  </div>
                </div>
              </div>
              <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                <div className="pull-right">
                  <button className="btn btn-danger" style={{ margin: "3px" }} data-toggle="modal" data-target="#rejectModal" disabled={getDetailproc.approval === 1 ? false : true}><i className="fa fa-close"></i> Tolak</button>
                  <button className="btn btn-success" style={{ margin: "3px" }} onClick={() => setujuRektor()} disabled={getDetailproc.approval === 1 ? false : true}><i className="fa fa-check"></i> Setuju</button>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
      <div className="modal fade" id="rejectModal">
        <Modal
          title="Tolak Pengadaan"
          close={
            <button
              className="btn btn-default"
              data-dismiss="modal"
              role="dialog"
            >
              Close
              </button>
          }
          save={
            <button
              className="btn btn-success"
              onClick={() => tolakRektor()}
              id="saveReject"
            >
              Submit
              </button>
          }
        >
          <TextArea
            formProp={[
              {
                forAttr: "reason",
                lableName: "Masukan alasan penolakan",
                inputAttr: {
                  className: "form-control",
                  id: "reason",
                  name: "reason",
                  onFocus: () => focusHandle()
                }
              }
            ]}
          ></TextArea>
          <small id="noticeReason" style={{ color: "red", display: 'none' }}>*Alasan penolakan harus diisi</small>
        </Modal>
      </div>
      <div id="snackbar">Berhasil...</div>
    </Master>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    EditProc: (refnumber, index, select) =>
      dispatch(editProcurement(refnumber, index, select)),
    renkeuProcurement: (payload, refnumber) =>
      dispatch(approveProcurement(payload, refnumber))
  };
};

const mapStateToProps = state => {
  return {
    procurement: state.procurement.list,
    catalogue: state.catalogue.catalogueForm,
    auth: state.auth.authForm
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProcurementRektor);