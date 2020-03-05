import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { dispatchEditSubmission } from "../store/actions/submissionAction";
import { currentDate } from "../../../services/Helper";
import HeaderLayout from "./HeaderLayout";
import Section from "../../../common/Section";
import Master from "../../Master";
import Datatable from "../../../common/table/Datatable";
import Modal from "../../../common/Modal";
import { TextArea } from "../../../common/FormGroup";
import Select2 from 'react-select';
import { dispatchProcurement } from "../../procurement/store/actions/procurementAction";

const SubmissionDetail = props => {
  // get param from url
  let { refnumber } = useParams();
  const param = refnumber;

  // get submission detail
  const getDetailSubmission = props.detailSubmission.find(submis => {
    return submis.refnumber === param;
  });
  console.log(getDetailSubmission.items)
  const approvedSubmission = getDetailSubmission.items.filter(submis => {
    return submis.isApprove === 1;
  });
  const uncheckedSubmission = getDetailSubmission.items.filter(submis => {
    return submis.isApprove === 0;
  });
  const checkedSubmission = getDetailSubmission.items.filter(submis => {
    return submis.isApprove !== 0;
  });


  let prepareTableContent = getDetailSubmission.items.map((items, i) => {
    let id = i + 1;
    var status = "-"
    var act = ""
    if (items.isApprove === 1) {
      status = "Disetujui"
    } else if (items.isApprove === 2) {
      status = "TIdak Disetujui"
    } else {
      status = "Belum Disetujui"
    }
    if (props.auth.group_id === 11 + "") {
      act =
        <>
          <span data-toggle="tooltip" title="tolak barang">
            <button
              id={"reject" + id}
              className="btn btn-danger"
              data-toggle="modal"
              data-target="#rejectModal"
              onClick={() => setRejectItem(id)}
              disabled={(items.isApprove !== 0) ? 'disabled' : null}
            >
              <i className="fa fa-ban"></i>
            </button>
          </span>
          <button
            id={"approve" + id}
            className="btn btn-success"
            data-toggle="tooltip"
            title="setujui barang"
            style={{ marginLeft: "3px" }}
            onClick={() => proveItem(id)}
            disabled={(items.isApprove !== 0) ? 'disabled' : null}
          >
            <i className="fa fa-check"></i>
          </button>
        </>
    }
    let link_ref = ""
    if (items.referensi) {
      link_ref = <a rel="noopener noreferrer" href={items.referensi} target="_blank">{items.item}</a>
    }
    return {
      no: id,
      referensi: link_ref,
      item: items.item,
      qty: items.qty,
      note: items.note,
      isApprove: status,
      action: act
    };
  })
  // handle approve item
  const proveItem = id => {
    let findItem = prepareTableContent.find(item => {
      return item.no === id;
    });
    let link = ""
    if (findItem.referensi !== "") {
      link = findItem.referensi.props.href
    }
    let fillStatus = {
      item: findItem.item,
      qty: findItem.qty,
      referensi: link,
      note: findItem.note,
      isApprove: 1,
      approvalNote: ""
    }
    props.EditSubmission(param, fillStatus.item, fillStatus)
  };

  // provide state to be identifier when give action
  const [rejectedItem, setRejectedItem] = useState("");

  const approvePengadaan = () => {
    if (getDetailSubmission.items.length === checkedSubmission.length) {
      document.getElementById("formPengadaan").style.display = "block";
    } else {
      document.getElementById("formPengadaan").style.display = "none";
    }
  }

  const focusHandle = () => {
    let noticeReason = document.getElementById("noticeReason")
    noticeReason.style.display = "none"
  }
  // handle reject item
  const submitRejectReason = async () => {
    let saveReject = document.getElementById("reason")
    let noticeReason = document.getElementById("noticeReason")
    if (saveReject.value.length === 0) {
      noticeReason.style.display = "block"
    } else {
      if (
        window.confirm(
          "Proses ini akan menghapus item pada pengajuan, lanjutkan?"
        )
      ) {
        let findItem = prepareTableContent.find(item => {
          return item.no === rejectedItem;
        });
        let fillStatus = {
          item: findItem.item,
          qty: findItem.qty,
          referensi: findItem.referensi,
          note: findItem.note,
          isApprove: 2,
          approvalNote: document.getElementById("reason").value
        }

        // dispatch to store
        await props.EditSubmission(param, fillStatus.item, fillStatus);

        // hide modal after submit

        let script = document.createElement("script");
        script.innerHTML = "$('.modal').modal('hide');";
        document.body.appendChild(script);
      }
    }
  };

  // set state to identify which item would be edited
  const setRejectItem = itemIdentifier => {
    setRejectedItem(itemIdentifier);
  };

  // set table header
  let tableHeader = [
    {
      column0: "No",
      column1: "Link Referensi",
      column2: "Nama Barang",
      column3: "QTY",
      column4: "Catatan",
      column5: "Status Barang"
    }
  ];

  // will show action button if login by BAU
  if (props.auth.group_id === 11 + "") {
    tableHeader.map(header => (header.column6 = "Aksi"));
  }

  const refNumber = [
    {
      forAttr: "refnumber",
      lableName: "Nomor referensi",
      inputAttr: {
        id: "refnumber",
        type: "text",
        value: getDetailSubmission.refnumber,
        className: "form-control",
        name: "refnumber",
        readOnly: "readonly"
      }
    }
  ];

  const submissionDate = [
    {
      forAttr: "date",
      lableName: "Tanggal",
      inputAttr: {
        type: "text",
        value: getDetailSubmission.date,
        className: "form-control",
        name: "date",
        readOnly: true
      }
    }
  ];

  const subjectForm = [
    {
      forAttr: "subject",
      lableName: "Perihal",
      inputAttr: {
        id: "subject",
        type: "text",
        value: getDetailSubmission.subject,
        className: "form-control",
        name: "subject",
        readOnly: true
      }
    }
  ];

  const recipient = [
    {
      forAttr: "to",
      lableName: "Kepada",
      inputAttr: {
        id: "to",
        type: "text",
        value: getDetailSubmission.to,
        className: "form-control",
        name: "to",
        readOnly: true
      }
    }
  ];

  const sender = [
    {
      forAttr: "from",
      lableName: "Dari",
      inputAttr: {
        id: "from",
        type: "text",
        value: getDetailSubmission.from,
        className: "form-control",
        name: "from",
        readOnly: true
      }
    }
  ];

  //buat pengadaan
  // handle add item before submit the procurement
  const [procItem, setprocItem] = useState([]);
  const addItemHandler = (e, i) => {
    e.preventDefault();
    const myForms = document.getElementById('myForm' + i);
    if (myForms.item_name.value) {

      let itemList = {
        i: i,
        id: procItem.length + 1,
        id_catalogue: myForms.item_name.value,
        amount: myForms.amount.value
      };
      setprocItem([...procItem, itemList])
      // reset form
      myForms.item_name.value = "";
      myForms.amount.value = "";
    } else {
      alert('Barang Harus diisi')
    }
  };

  const handleChange = (e, i) => {
    let Price = props.catalogue.find(vdr => {
      return vdr.id === e.value;
    })
    let pricetag = document.getElementById('price' + i);
    pricetag.value = Price.price
  }

  const submitProcurementHandler = e => {
    e.preventDefault();
    const pickItemObject = procItem.map(item => {
      return {
        id_catalogue: item.id_catalogue,
        amount: item.amount,
        isApprove: 0
      };
    });

    let procurement = {
      submission_id: e.target.noref.value,
      date: currentDate(),
      subject: e.target.subject.value,
      to: e.target.to.value,
      from: e.target.from.value,
      note: e.target.note.value,
      approvalNote: "",
      approval: 0,
      grandTotal: 0,
      items: [...pickItemObject]
    };
    props.submitProcurement(procurement);
    var btnSubmit = document.getElementById("save");
    btnSubmit.disabled = "disabled";
    /* Toast */
    var toast = document.getElementById("snackbar");
    /* Show Toast */
    toast.className = "show";
    setTimeout(() => {
      /* hide Toast after 2 seconds */
      toast.className = toast.className.replace("show", "");
      props.history.push("/submission");
    }, 1000);
  };
  const noteInput = [
    {
      forAttr: "note",
      lableName: "Catatan",
      inputAttr: {
        className: "form-control",
        name: "note"
      }
    }
  ];

  const tableHead = [
    {
      column1: "Nama Barang",
      column3: "Harga Satuan",
      column6: "Jumlah",
      column5: "Aksi"
    }
  ];
  var selectBarang = props.catalogue.map((item) => {
    return {
      value: item.id,
      label: item.name + ' - ' + item.vendor
    }
  });
  const removeProcItemHandler = (id) => {
    let items = procItem.filter(item => item.id !== id);
    setprocItem(items);
  };
  const tableContent = (qty, i) => [
    {
      item: (
        <Select2 id="itemSelect" name='item_name' options={selectBarang} onChange={e => handleChange(e, i)} required="true" />

      ),
      price: (
        <input
          type='text'
          className='form-control'
          id={'price' + i}
          name='price'
          placeholder='masukan harga item'
          readOnly="readonly"
          required
        />
      ),
      amount: (
        <input
          type='text'
          className='form-control'
          id='amount'
          name='amount'
          value={qty}
          placeholder='jumlah barang'
          readOnly="readonly"
          required
        />
      ),
      action: (
        <button className='btn btn-success btn-sm' type='submit'>
          <i className='fa fa-plus'></i>
        </button>
      )
    }
  ];
  let navButton = (
    <>
      <Link className="btn btn-warning" to="/submission">
        <i className="fa fa-chevron-left"></i> Kembali
      </Link>
    </>
  );
  let addpengadaan =
    <>
      <button
        id="showForm" className="btn btn-success pull-right" type="button" disabled="disabled"
      >
        Buat Form Pengadaan
        </button>
    </>
  console.log(approvedSubmission)
  if ((uncheckedSubmission.length === 0) && (approvedSubmission.length > 0)) {
    (
      addpengadaan =
      <>
        <button
          id="showForm" className="btn btn-success pull-right" type="button" onClick={() => approvePengadaan()}
        >
          Buat Form Pengadaan
        </button>
      </>
    )
  }

  const setting =
    (
      <div className="box-tools pull-right">
        <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i></button>
      </div>
    )
  return (
    <Master>
      <Section
        pageName={"Detail Pengajuan"}
        pageSubject={`Nomor ${getDetailSubmission.refnumber}`}
        box_header={navButton}
        class_section={"padding_bottom"}
        box_setting={setting}
      >
        <HeaderLayout
          formAttr={{
            refNumber,
            submissionDate,
            subjectForm,
            recipient,
            sender
          }}
        />
        <hr />
        <Datatable headContent={tableHeader} content={prepareTableContent} />
        {addpengadaan}
        <div className="modal fade" id="rejectModal">
          <Modal
            title="Tolak Barang"
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
                onClick={() => submitRejectReason()}
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
      </Section>
      <div id="formPengadaan" style={{ display: "none" }}>
        <Section
          pageName='NaN'
          box_header={"Form Pengadaan"}
          class_section={"padding_top"}>

          {
            approvedSubmission.map((item, i) => {
              var procy = procItem.filter(proc => {
                return proc.i === i;
              })
              let adjustItemList = procy.map(itemList => {
                let detail = props.catalogue.find(vdr => {
                  return vdr.id + "" === itemList.id_catalogue;
                })
                // remove item from item list
                return {
                  item: detail.name + '-' + detail.vendor,
                  price: detail.price,
                  amount: itemList.amount,
                  action: (<button type="button" className="btn btn-danger btn-sm" onClick={() => removeProcItemHandler(itemList.id)}><i className="fa fa-minus"></i></button >)
                }
              })
              return (
                <div className="post" key={i}>
                  <div className="user-block">
                    <span className="username">
                      <p>{item.item}</p>
                    </span>
                  </div>
                  <div>
                    <form onSubmit={e => addItemHandler(e, i)} name='formInput' id={"myForm" + i} >
                      <Datatable headContent={tableHead} content={tableContent(item.qty, i)} />
                      <div className="row">
                        <div className="col-xs-12">
                          <table className="table table-bordered table-striped">
                            <tbody>
                              {
                                adjustItemList.map((content, key) =>
                                  (
                                    <tr key={key}>
                                      <td>{content.item}</td>
                                      <td>{content.price}</td>
                                      <td>{content.amount}</td>
                                      <td>{content.action}</td>
                                    </tr>
                                  )
                                )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              )
            })}
          <form onSubmit={e => submitProcurementHandler(e)} >
            <TextArea formProp={noteInput} />
            <input type="hidden" name="noref" value={getDetailSubmission.refnumber} />
            <input type="hidden" name="subject" value={getDetailSubmission.subject} />
            <input type="hidden" name="to" value={getDetailSubmission.to} />
            <input type="hidden" name="from" value={getDetailSubmission.from} />
            <button className='btn btn-success pull-right' type='submit' id="save">
              <i className="fa fa-paper-plane"></i> Ajukan</button>
          </form>
        </Section>
      </div>
      <div id="snackbar">Berhasil...</div>
    </Master >
  );
};

const mapDispatchToProps = dispatch => {
  return {
    EditSubmission: (refnumber, index, submissionData) =>
      dispatch(dispatchEditSubmission(refnumber, index, submissionData)),
    submitProcurement: payload =>
      dispatch(dispatchProcurement(payload))
  };
};

const mapStateToProps = state => {
  return {
    detailSubmission: state.submission.submissionForm,
    catalogue: state.catalogue.catalogueForm,
    auth: state.auth.authForm
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmissionDetail);