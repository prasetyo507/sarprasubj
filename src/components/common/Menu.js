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
    const homeClass = window.location.pathname === "/" ? "active" : "";

    const pembelianClass =
      window.location.pathname === "/submission" ||
      window.location.pathname === "/procurement" ||
      window.location.pathname === "/po"
        ? "active"
        : "";
    const submissionClass =
      window.location.pathname === "/submission" ? "active" : "";
    const procClass =
      window.location.pathname === "/procurement" ? "active" : "";
    const poClass = window.location.pathname === "/po" ? "active" : "";

    const pendataanClass =
      window.location.pathname === "/registration" ||
      window.location.pathname === "/mutation" ||
      window.location.pathname === "/disposal"
        ? "active"
        : "";
    const registClass =
      window.location.pathname === "/registration" ? "active" : "";
    const mutationClass =
      window.location.pathname === "/mutation" ? "active" : "";
    const disposalClass =
      window.location.pathname === "/disposal" ? "active" : "";

    const maintenanceClass =
      window.location.pathname === "/maintenance" ? "active" : "";

    const reportClass = window.location.pathname === "/report" ? "active" : "";

    const masterClass =
      window.location.pathname === "/vendor" ||
      window.location.pathname === "/items" ||
      window.location.pathname === "/group-items"
        ? "active"
        : "";
    const itemsClass = window.location.pathname === "/items" ? "active" : "";
    const vendorClass = window.location.pathname === "/vendor" ? "active" : "";
    const groupitemsClass =
      window.location.pathname === "/group-items" ? "active" : "";

    const userClass =
      window.location.pathname === "/list-users" ||
      window.location.pathname === "/group-users"
        ? "active"
        : "";
    const listusersClass =
      window.location.pathname === "/list-users" ? "active" : "";
    const groupusersClass =
      window.location.pathname === "/group-users" ? "active" : "";

    return (
      <aside className="main-sidebar">
        {/* sidebar: style can be found in sidebar.less */}
        <section className="sidebar">
          {/* sidebar menu: : style can be found in sidebar.less */}
          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">MAIN NAVIGATION</li>
            <li className={homeClass}>
              <Link to="/">
                <i className="fa fa-dashboard" /> Dashboard
              </Link>
            </li>
            <li className={"treeview " + pembelianClass}>
              <Link to="#!">
                <i className="fa fa-money" />
                <span>Pembelian</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </Link>
              <ul className="treeview-menu">
                <li className={submissionClass}>
                  <Link to="/submission">
                    <i className="fa fa-circle-o" /> Pengajuan
                  </Link>
                </li>
                <li className={procClass}>
                  <Link to="/procurement">
                    <i className="fa fa-circle-o" /> Pengadaan
                  </Link>
                </li>
                <li className={poClass}>
                  <Link to="/po">
                    <i className="fa fa-circle-o" /> Purchasing Order
                  </Link>
                </li>
              </ul>
            </li>
            <li className={"treeview " + pendataanClass}>
              <Link to="#!">
                <i className="fa fa-th-list" />
                <span>Pendataan</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </Link>
              <ul className="treeview-menu">
                <li className={registClass}>
                  <Link to="/registration">
                    <i className="fa fa-circle-o" /> Pendaftaran Barang
                  </Link>
                </li>
                <li className={mutationClass}>
                  <Link to="/mutation">
                    <i className="fa fa-circle-o" /> Mutasi
                  </Link>
                </li>
                <li className={disposalClass}>
                  <Link to="/disposal">
                    <i className="fa fa-circle-o" /> Disposal
                  </Link>
                </li>
              </ul>
            </li>
            <li className={maintenanceClass}>
              <Link to="/maintenance">
                <i className="fa fa-wrench" /> Perawatan
              </Link>
            </li>
            <li className={reportClass}>
              <Link to="/report">
                <i className="fa fa-pie-chart" /> Laporan
              </Link>
            </li>
            <li className={"treeview " + masterClass}>
              <Link to="#!">
                <i className="fa fa-folder-open" />
                <span>Master</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </Link>
              <ul className="treeview-menu">
                <li className={itemsClass}>
                  <Link to="/items">
                    <i className="fa fa-circle-o" /> Barang
                  </Link>
                </li>
                <li className={vendorClass}>
                  <Link to="/vendor">
                    <i className="fa fa-circle-o" /> Vendor
                  </Link>
                </li>
                <li className={groupitemsClass}>
                  <Link to="/group-items">
                    <i className="fa fa-circle-o" /> Grup Barang
                  </Link>
                </li>
              </ul>
            </li>
            <li className={"treeview " + userClass}>
              <Link to="#!">
                <i className="fa fa-users" />
                <span>Pengguna</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </Link>
              <ul className="treeview-menu">
                <li className={listusersClass}>
                  <Link to="/list-users">
                    <i className="fa fa-circle-o" /> Daftar Pengguna
                  </Link>
                </li>
                <li className={groupusersClass}>
                  <Link to="/group-users">
                    <i className="fa fa-circle-o" /> Grup Pengguna
                  </Link>
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
