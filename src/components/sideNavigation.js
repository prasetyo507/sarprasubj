import React from "react";
import logo from "../assets/mdb-react.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from "mdbreact";
import { NavLink } from "react-router-dom";

const TopNavigation = () => {
  return (
    <div className="sidebar-fixed position-fixed">
      <a href="#!" className="logo-wrapper waves-effect">
        <img alt="Sarpras UBJ logo" className="img-fluid" src={logo} />
      </a>
      <MDBListGroup className="list-group-flush">
        <NavLink exact={true} to="/" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="chart-pie" className="mr-3" />
            Dashboard
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/pembelian" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="coins" className="mr-3" />
            Pembelian
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/pendataan" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="clipboard-list" className="mr-3" />
            Pendataan
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/perawatan" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="hammer" className="mr-3" />
            Perawatan
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/laporan" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="chart-pie" className="mr-3" />
            Laporan
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/laporan" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="folder-open" className="mr-3" />
            Master
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/laporan" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="user" className="mr-3" />
            Pengguna
          </MDBListGroupItem>
        </NavLink>
      </MDBListGroup>
    </div>
  );
};

export default TopNavigation;
