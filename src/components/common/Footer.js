import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="main-footer">
        <div className="pull-right hidden-xs">
          <b>Version</b> 1.0.0 (Beta)
        </div>
        <strong>
          Copyright © 2019{" "}
          <a href="https://ubharajaya.ac.id">
            Universitas Bhayangkara Jakarta Raya
          </a>
          .
        </strong>{" "}
        All rights reserved.
      </footer>
    );
  }
}

export default Footer;
