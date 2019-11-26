import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Menu extends Component {
  state = {};
  render() {
    return (
      <aside className="main-sidebar">
        {/* sidebar: style can be found in sidebar.less */}
        <section className="sidebar">
          {/* Sidebar user panel */}
          <div className="user-panel">
            <div className="pull-left image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle"
                alt="User"
              />
            </div>
            <div className="pull-left info">
              <p>Alexander Pierce</p>
              <a href="#!">
                <i className="fa fa-circle text-success" /> Online
              </a>
            </div>
          </div>
          {/* sidebar menu: : style can be found in sidebar.less */}
          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">MAIN NAVIGATION</li>
            <li className="active">
              <Link to="/">
                <i className="fa fa-dashboard" /> Dashboard
              </Link>
            </li>
            <li className="treeview">
              <a href="#!">
                <i className="fa fa-pie-chart" />
                <span>Charts</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="pages/charts/chartjs.html">
                    <i className="fa fa-circle-o" /> ChartJS
                  </a>
                </li>
                <li>
                  <a href="pages/charts/morris.html">
                    <i className="fa fa-circle-o" /> Morris
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="https://adminlte.io/docs">
                <i className="fa fa-book" /> <span>Documentation</span>
              </a>
            </li>
          </ul>
        </section>
        {/* /.sidebar */}
      </aside>
    );
  }
}

export default Menu;
