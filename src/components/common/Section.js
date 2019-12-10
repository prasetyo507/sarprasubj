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
<<<<<<< HEAD
      <section className="content">
=======
      <section className={"content " + props.class_section}>
>>>>>>> feature/grup_barang
        <div className="box">
          {props.box_header ? (
            <div className="box-header with-border">{props.box_header}</div>
          ) : null}
          <div className="box-body">{props.children}</div>
        </div>
      </section>
    </>
  );
};

export default Section;
