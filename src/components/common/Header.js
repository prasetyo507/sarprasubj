import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  handleClick() {
    var result = window.confirm("Yakin keluar?");
    if (result === true) {
      localStorage.clear()
      window.location.href = "/"
    }
  }

  render() {
    return (
      <header className="main-header">
        {/* Logo */}
        <Link to="/home" className="logo">
          {/* mini logo for sidebar mini 50x50 pixels */}
          <span className="logo-mini">
            <img src="new_ubj.png" alt="logo ubj" />
          </span>
          {/* logo for regular state and mobile devices */}
          <span className="logo-lg">
            <b>SARPRAS </b>UBJ
          </span>
        </Link>
        {/* Header Navbar: style can be found in header.less */}
        <nav className="navbar navbar-static-top">
          {/* Sidebar toggle button*/}
          <a
            href="#!"
            className="sidebar-toggle"
            data-toggle="push-menu"
            role="button"
          >
            <span className="sr-only">Toggle navigation</span>
          </a>
          {/* Navbar Right Menu */}
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              {/* Tasks: style can be found in dropdown.less */}
              <li className="dropdown tasks-menu">
                <a href="#!" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-bell" />
                  <span className="label label-danger">9</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="header">You have 9 tasks</li>
                  <li>
                    {/* inner menu: contains the actual data */}
                    <ul className="menu">
                      <li>
                        {/* Task item */}
                        <a href="#!">
                          <h3>
                            Design some buttons
                            <small className="pull-right">20%</small>
                          </h3>
                          <div className="progress xs">
                            <div
                              className="progress-bar progress-bar-aqua"
                              style={{ width: "20%" }}
                              role="progressbar"
                              aria-valuenow={20}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <span className="sr-only">20% Complete</span>
                            </div>
                          </div>
                        </a>
                      </li>
                      {/* end task item */}
                    </ul>
                  </li>
                  <li className="footer">
                    <a href="#!">View all tasks</a>
                  </li>
                </ul>
              </li>
              {/* User Account: style can be found in dropdown.less */}
              <li className="dropdown user user-menu">
                <a href="#!" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-user"></i>
                  <span className="hidden-xs">&nbsp;{this.props.auth.divisi}</span>
                </a>
                <ul className="dropdown-menu">
                  {/* User image */}
                  <li className="user-header">
                    <p>
                      {this.props.auth.divisi}
                      <small>{this.props.auth.group_name}</small>
                    </p>
                  </li>
                  {/* Menu Footer*/}
                  <li className="user-footer">
                    <div className="pull-left">
                      <a href="#!" className="btn btn-default btn-flat">
                        Profile
                      </a>
                    </div>
                    <div className="pull-right">
                      <button type="button" onClick={() => this.handleClick()} className="btn btn-default btn-flat">
                        Keluar
                      </button>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.authForm
  };
};
export default connect(mapStateToProps, null)(Header);
