import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { rejectItem, approveItem } from "../store/actions/submissionAction";

import HeaderLayout from "./HeaderLayout";
import Section from "../../../common/Section";
import Master from "../../Master";
import Datatable from "../../../common/table/Datatable";
import Modal from "../../../common/Modal";
import { TextArea } from "../../../common/FormGroup";

const SubmissionDetail = props => {
  // get param from url
  let { refnumber } = useParams();
  const param = refnumber;

  // get submission detail
  const getDetailSubmission = props.detailSubmission.find(submission => {
    return submission.refnumber === param;
  });

  // dispatch state store to local state
  const [submission, setSubmission] = useState([...getDetailSubmission.items]);

  // add action button to item object if login as BAU
  const prepareTableContent = submission.map((items, i) => {
    // let itemClone = { ...items };
    if (props.usedByProcurementChecking) {
      let id = i + 1;
      items.action = (
        <>
          <span data-toggle="tooltip" title="tolak barang">
            <button
              className="btn btn-danger"
              data-toggle="modal"
              data-target="#rejectModal"
              onClick={() => setRejectItem(id)}
            >
              <i className="fa fa-ban"></i>
            </button>
          </span>
          <button
            className="btn btn-success"
            data-toggle="tooltip"
            title="setujui barang"
            style={{ marginLeft: "3px" }}
            onClick={() => proveItem(id)}
          >
            <i className="fa fa-check"></i>
          </button>
        </>
      );
    }
    return items;
  });

  // set submission object after adjustment
  useEffect(() => {
    // adjust object to store to the table
    const serveTableContent = prepareTableContent.map((items, i) => {
      return {
        no: i + 1,
        type: items.type,
        item: items.item,
        qty: items.qty,
        note: items.note,
        isApprove: items.isApprove,
        action: items.action
      };
    });
    setSubmission(serveTableContent);
  }, [getDetailSubmission]);

  // handle approve item
  const proveItem = id => {
    let findItem = submission.find(item => {
      return item.no === id;
    });
    findItem.isApprove = 1;

    let approveSelectedItem = getDetailSubmission.items.find(item => {
      return item.item === id;
    });
    approveSelectedItem.isApprove = 1;
    props.approveSubmissionItem(approveSelectedItem);
    // set local state
    setSubmission(submission);
  };

  // provide state to be identifier when give action
  const [rejectedItem, setRejectedItem] = useState("");

  // handle reject item
  const submitRejectReason = async () => {
    if (
      window.confirm(
        "Proses ini akan menghapus item pada pengajuan, lanjutkan?"
      )
    ) {
      let findItem = submission.items.find(item => {
        return item.item === rejectedItem;
      });
      findItem.isApprove = 2;
      findItem.approvalNote = document.getElementById("reason").value;
      // dispatch to store
      await props.rejectSubmissionItem(submission);
      // update local state
      setSubmission(getDetailSubmission);
      // hide modal after submit
      const hideModal = () => {
        document
          .getElementById("rejectModal")
          .setAttribute("class", "modal fade");

        document
          .getElementsByClassName("modal-backdrop")[0]
          .setAttribute("class", "modal-backdrop fade");
      };
      hideModal();
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
      column2: "Tipe",
      column1: "Nama Barang",
      column3: "QTY",
      column4: "Catatan",
      column5: "Status Barang"
    }
  ];

  // will show action button if login by BAU
  if (props.usedByProcurementChecking) {
    tableHeader.map(header => (header.column5 = "Aksi"));
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

  let navButton = (
    <>
      <Link className="btn btn-warning" to="/submission">
        Kembali
      </Link>
      {/* button will different depend on who is login */}
      {props.usedByProcurementChecking ? (
        <Link
          className="btn btn-success pull-right"
          to={`/procurement/${refnumber}/submission/create_procurement`}
        >
          Buat Pengadaan
        </Link>
      ) : (
        <Link className="btn btn-danger pull-right" to="">
          Batalkan Pengajuan
        </Link>
      )}
    </>
  );

  return (
    <Master>
      <Section
        pageName={"Detail Pengajuan"}
        pageSubject={`Nomor ${getDetailSubmission.refnumber}`}
        box_header={navButton}
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
        <Datatable headContent={tableHeader} content={submission} />
        <div className="modal fade" id="rejectModal">
          <Modal
            title="Reject Item"
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
                    name: "reason"
                  }
                }
              ]}
            ></TextArea>
          </Modal>
        </div>
      </Section>
    </Master>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    rejectSubmissionItem: payload => dispatch(rejectItem(payload)),
    approveSubmissionItem: payload => dispatch(approveItem(payload))
  };
};

const mapStateToProps = state => {
  return {
    detailSubmission: state.submission.submissionForm
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmissionDetail);
