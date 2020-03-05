import React from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { editProcurement, approveProcurement } from "../store/actions/procurementAction";

import Section from "../../../common/Section";
import Master from "../../Master";
import Datatable from "../../../common/table/Datatable";
import Modal from "../../../common/Modal";
import { TextArea, FreeText } from "../../../common/FormGroup";

const ProcurementDetail = props => {
  // get param from url
  let { refnumber } = useParams();
  const param = refnumber;

  // get procurement detail
  const getDetailproc = props.procurement.find(proc => {
    return proc.submission_id === param;
  });
  const approvedProc = getDetailproc.items.filter(submis => {
    return submis.isApprove === 0;
  });

  let catalogueList = getDetailproc.items.map(item => {
    let detail = props.catalogue.find(vdr => {
      return vdr.id + "" === item.id_catalogue;
    })
    return detail
  });
  const uniqueItems = [];
  catalogueList.map(item => {
    if (uniqueItems.indexOf(item.name) === -1) {
      uniqueItems.push(item.name)
    }
    return uniqueItems
  });

  const setujuRenkeu = () => {
    let procurement = {
      submission_id: getDetailproc.submission_id,
      date: getDetailproc.date,
      subject: getDetailproc.subject,
      to: getDetailproc.to,
      from: getDetailproc.from,
      note: getDetailproc.note,
      approvalNote: "",
      approval: 1,
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
  const tolakRenkeu = () => {
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
          approval: 2,
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


  const submitRenkeu = (e, i, brg) => {
    e.preventDefault()
    let myForm = document.getElementById("formItem" + i)
    if (myForm.radio.value) {
      if (
        window.confirm(
          "Proses ini akan menghapus item yang tidak terpilih, lanjutkan?"
        )
      ) {
        let result = getDetailproc.items.map(row => {
          let detail = props.catalogue.find(dtl => {
            return dtl.id + "" === row.id_catalogue;
          })
          return {
            id: row.id_catalogue,
            name: detail.name
          }
        })
        let hasil = result.filter(dtl => {
          return dtl.name === brg;
        })

        let hasil2 = hasil.filter(elim => {
          return elim.id !== myForm.radio.value;
        })
        let selected = getDetailproc.items.map(row => {
          return {
            id_catalogue: row.id_catalogue,
            amount: row.amount,
            isApprove: 1
          }
        })
        let selectedx = selected.find(elim => {
          return elim.id_catalogue === myForm.radio.value;
        })
        props.EditProc(param, hasil2, selectedx)
      }
    } else {
      alert('Pilih dahulu sebelum mengunci pilihan')
    }
  }


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

  if (props.auth.group_id === 11 + "") {
    tableHeader.map(header => (header.column6 = "Aksi"));
  }


  // will show action button if login by BAU
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
    }

  ];

  const procForm3 = [
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
    }

  ];

  const procForm4 = [
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
    }
  ];
  const procForm5 = [
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
    }]
  const procForm6 = [
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
    }
  ];
  const procForm7 = [
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
  var gt = 0
  let navButton = (
    <>
      <Link className="btn btn-warning" to="/procurement">
        <i className="fa fa-chevron-left"></i> Kembali
      </Link>
    </>
  );
  let btnSetuju =
    <button className="btn btn-success" style={{ margin: "3px" }} disabled="disabled"><i className="fa fa-check"></i> Setuju</button>
  if (approvedProc.length === 0) {
    btnSetuju = <button className="btn btn-success" style={{ margin: "3px" }} onClick={() => setujuRenkeu()} disabled={getDetailproc.approval === 0 ? false : true}><i className="fa fa-check"></i> Setuju</button>
  }
  return (
    <Master>
      <Section
        pageName={"Detail Pengadaan"}
        pageSubject={`Nomor ${getDetailproc.submission_id}`}
        box_header={navButton}
      >
        <div className='row'>
          <div className='col-xs-6 col-sm-6 col-md-3 col-lg-3'>
            <FreeText formProp={procForm1} />
          </div>
          <div className='col-xs-6 col-sm-6 col-md-3 col-lg-3'>
            <FreeText formProp={procForm3} />
          </div>
          <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
            <FreeText formProp={procForm4} />
          </div>
          <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
            <FreeText formProp={procForm6} />
          </div>
          <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
            <FreeText formProp={procForm5} />
          </div>
          <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <TextArea formProp={procForm7} />
          </div>
        </div>
        <hr />
        {uniqueItems.map((item, i) => {
          let prepareTableContent = getDetailproc.items.map((items, index) => {
            var act = <input type="radio" name="radio" id={"radioBtn" + items.id_catalogue} value={items.id_catalogue} disabled={items.isApprove === 1 ? true : false} defaultChecked={items.isApprove === 1 ? true : false} />
            let detail = props.catalogue.find(dtl => {
              return dtl.id + "" === items.id_catalogue;
            })
            return {
              no: 0,
              item: detail.name,
              vendor: detail.vendor,
              price: detail.price,
              amount: items.amount,
              total: detail.price * items.amount,
              action: act
            };
          })

          let prepareTableContent2 = prepareTableContent.filter(dtl => {
            return dtl.item === item;
          })
          prepareTableContent2.map((items, index) => {
            let add = (items.no = index + 1)
            if (items.action.props.defaultChecked) {
              gt = items.total + gt
            }
            return add
          })
          const btnCfg = prepareTableContent2.filter(proc => {
            return proc.action.props.defaultChecked === false;
          });
          return (
            <form onSubmit={e => submitRenkeu(e, i, item)} key={i} id={"formItem" + i}>
              <div className="post">
                <div className="user-block">
                  <span className="username">
                    <p>{item} <button type="submit" id="lock" className="btn btn-success pull-right" disabled={btnCfg.length === 0 ? true : false}><i className={prepareTableContent2.length === 1 ? ("fa fa-lock") : ("fa fa-unlock")}></i></button></p>
                  </span>
                </div>
                <Datatable headContent={tableHeader} content={prepareTableContent2} />
              </div>
            </form>
          )
        })}
        <small id="notice" style={{ color: "red", display: gt >= 2000000 ? 'block' : 'none' }}>*Grand Total melebihi 2juta, Membutuhkan persetujuan Rektor</small>
        <div className="row">
          <div className="pull-right col-sm-6">
            <div className="form-group">
              <label className="col-sm-4 control-label">Grand Total<br /><small>*barang yang disetujui</small></label>

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
          <div className="col-sm-12">
            <div className="pull-right">
              <button className="btn btn-danger" style={{ margin: "3px" }} data-toggle="modal" data-target="#rejectModal" disabled={getDetailproc.approval === 0 ? false : true}><i className="fa fa-close"></i> Tolak</button>
              {btnSetuju}
            </div>
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
                onClick={() => tolakRenkeu()}
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
        <br />
        <div id="snackbar">Berhasil...</div>
      </Section>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProcurementDetail);