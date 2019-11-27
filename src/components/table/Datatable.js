import React, { Component } from "react";

import TableHead from './TableHead';
import TableContent from './TableContent';

class Datatable extends Component {

  componentDidMount() {
    const script = document.createElement("script");

    script.src = "js/content.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            <div className="box-body">
              <table
                id="example1"
                className="table table-bordered table-striped"
              >
                <thead>
                  <tr>
                    <TableHead tableHeadContent={this.props.headContent} />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <TableContent tableContent={this.props.content} />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Datatable;
