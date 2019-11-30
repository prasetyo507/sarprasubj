import React from "react";

const Section = props => {
  return (
    <>
      <section className="content-header">
        <h1>
          {props.pageName}
          <small>{props.pageSubject}</small>
        </h1>
      </section>
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            <div className="box-header with-border">{props.box_header}</div>

            <div className="box-body">
              <section className="content">{props.children}</section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
