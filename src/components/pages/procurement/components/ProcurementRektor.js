import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { editProcurement, approveProcurement } from "../store/actions/procurementAction";

import Section from "../../../common/Section";
import Master from "../../Master";
import Datatable from "../../../common/table/Datatable";
import { TextArea, FreeText } from "../../../common/FormGroup";

const ProcurementRektor = props => {
  // get param from url
  let { refnumber } = useParams();
  const param = refnumber;

  // get procurement detail
  const getDetailproc = props.procurement.find(proc => {
    return proc.submission_id === param;
  });

  // handle approve item
  const setujuRektor = () => {
    let noticeReason = document.getElementById("noticeReason")
    if (reason.length === 0) {
      noticeReason.style.display = "block"
    } else {
      let procurement = {
        submission_id: getDetailproc.submission_id,
        date: getDetailproc.date,
        subject: getDetailproc.subject,
        to: getDetailproc.to,
        from: getDetailproc.from,
        note: getDetailproc.note,
        approvalNote: reason,
        approval: 3,
        grandTotal: gt,
        items: getDetailproc.items
      };
      props.rektorProcurement(procurement, procurement.submission_id);
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

  const focusChange = (e) => {
    reason = e.target.value
  }
  const focusHandle = () => {
    let noticeReason = document.getElementById("noticeReason")
    noticeReason.style.display = "none"
  }

  // handle reject item
  const tolakRektor = () => {
    let noticeReason = document.getElementById("noticeReason")
    if (reason.length === 0) {
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
          approvalNote: reason,
          approval: 4,
          grandTotal: gt,
          items: getDetailproc.items
        };
        props.rektorProcurement(procurement, procurement.submission_id);

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
  let reason = ""
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
                <TextArea
                  formProp={[
                    {
                      forAttr: "reason",
                      lableName: "Masukan catatan",
                      inputAttr: {
                        className: "form-control",
                        id: "reason",
                        name: "reason",
                        onChange: e => focusChange(e),
                        onFocus: () => focusHandle()
                      }
                    }
                  ]}
                ></TextArea>
                <small id="noticeReason" style={{ color: "red", display: 'none' }}>*Catatan harus diisi</small>
              </div>
              <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                <div className="pull-right">
                  <button className="btn btn-danger" style={{ margin: "3px" }} onClick={() => tolakRektor()} disabled={getDetailproc.approval === 1 ? false : true}><i className="fa fa-close"></i> Tolak</button>
                  <button className="btn btn-success" style={{ margin: "3px" }} onClick={() => setujuRektor()} disabled={getDetailproc.approval === 1 ? false : true}><i className="fa fa-check"></i> Setuju</button>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
      <div id="snackbar">Berhasil...</div>
    </Master>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    EditProc: (refnumber, index, select) =>
      dispatch(editProcurement(refnumber, index, select)),
    rektorProcurement: (payload, refnumber) =>
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