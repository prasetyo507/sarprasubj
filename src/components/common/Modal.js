import React from "react";

const Modal = props => {
  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
          <h4 className="modal-title">{props.title}</h4>
        </div>
        <div className="modal-body col-md-12">{props.children}</div>
        <div className="modal-footer">
          {props.close}
          {props.save}
        </div>
      </div>
      {/* /.modal-content */}
    </div>
  );
};

export default Modal;
