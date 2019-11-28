import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "js/tree.js";
    script.async = true;

    document.body.appendChild(script);
  }
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
                <i className="fa fa-money" />
                <span>Pembelian</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="pages/charts/chartjs.html">
                    <i className="fa fa-circle-o" /> Pengajuan
                  </a>
                </li>
                <li>
                  <a href="pages/charts/morris.html">
                    <i className="fa fa-circle-o" /> Pengadaan
                  </a>
                </li>
                <li>
                  <a href="pages/charts/flot.html">
                    <i className="fa fa-circle-o" /> Purchasing Order
                  </a>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#!">
                <i className="fa fa-th-list" />
                <span>Pendataan</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="pages/charts/chartjs.html">
                    <i className="fa fa-circle-o" /> Pendaftaran Barang
                  </a>
                </li>
                <li>
                  <a href="pages/charts/morris.html">
                    <i className="fa fa-circle-o" /> Mutasi
                  </a>
                </li>
                <li>
                  <a href="pages/charts/flot.html">
                    <i className="fa fa-circle-o" /> Disposal
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="https://adminlte.io/docs">
                <i className="fa fa-wrench" /> Perawatan
              </a>
            </li>
            <li>
              <a href="https://adminlte.io/docs">
                <i className="fa fa-pie-chart" /> Laporan
              </a>
            </li>
            <li className="treeview">
              <Link to="#">
                <i className="fa fa-folder-open" />
                <span>Master</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </Link>
              <ul className="treeview-menu">
                <li>
                  <a href="pages/charts/chartjs.html">
                    <i className="fa fa-circle-o" /> Barang
                  </a>
                </li>
                <li>
                  <Link to="/vendor">
                    <i className="fa fa-circle-o" /> Vendor
                  </Link>
                </li>
                <li>
                  <a href="pages/charts/flot.html">
                    <i className="fa fa-circle-o" /> Grup Barang
                  </a>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#!">
                <i className="fa fa-users" />
                <span>Pengguna</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="pages/charts/chartjs.html">
                    <i className="fa fa-circle-o" /> Daftar Pengguna
                  </a>
                </li>
                <li>
                  <a href="pages/charts/morris.html">
                    <i className="fa fa-circle-o" /> Grup Pengguna
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        {/* /.sidebar */}
      </aside>
    );
  }
}

export default Menu;
