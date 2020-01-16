import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { isNull } from "util";

class Menu extends Component {
	componentDidMount() {
		let script = document.createElement("script");
		script.innerHTML = `$('.sidebar-menu').tree(); $('[data-toggle="tooltip"]').tooltip()`;
		document.body.appendChild(script);
	}

	render() {
		const _ = require("lodash");
		const menus = [
			{
				name: "Dashboard",
				destination: "/home",
				class_name: null,
				icon: "fa fa-dashboard"
			},
			{
				name: "Pembelian",
				destination: "/!#",
				class_name: "treeview",
				icon: "fa fa-money",
				spanIcon: "fa fa-angle-left pull-right",
				submenu: [
					{
						name: "Pengajuan",
						destination: "/submission",
						icon: "fa fa-circle-o"
					},
					{
						name: "Pengadaan",
						destination: "/procurement",
						icon: "fa fa-circle-o"
					},
					{
						name: "Purchasing Order",
						destination: "/po",
						icon: "fa fa-circle-o"
					}
				]
			},
			{
				name: "Pendataan",
				destination: "/!#",
				class_name: "treeview",
				icon: "fa fa-th-list",
				spanIcon: "fa fa-angle-left pull-right",
				submenu: [
					{
						name: "Gudang",
						destination: "/warehouse",
						icon: "fa fa-circle-o"
					},
					{
						name: "Mutasi",
						destination: "/mutation",
						icon: "fa fa-circle-o"
					},
					{
						name: "Disposal",
						destination: "/disposal",
						icon: "fa fa-circle-o"
					}
				]
			},
			{
				name: "Perawatan",
				destination: "/maintenance",
				class_name: null,
				icon: "fa fa-wrench"
			},
			{
				name: "Laporan",
				destination: "/report",
				class_name: null,
				icon: "fa fa-pie-chart"
			},
			{
				name: "Master",
				destination: "/!#",
				class_name: "treeview",
				icon: "fa fa-folder-open",
				spanIcon: "fa fa-angle-left pull-right",
				submenu: [
					{
						name: "Kategori Barang",
						destination: "/category",
						icon: "fa fa-circle-o"
					},
					{
						name: "Satuan",
						destination: "/satuan",
						icon: "fa fa-circle-o"
					},
					{
						name: "Vendor",
						destination: "/vendor",
						icon: "fa fa-circle-o"
					},
					{
						name: "Barang",
						destination: "/items",
						icon: "fa fa-circle-o"
					}
				]
			},
			{
				name: "Pengguna",
				destination: "/!#",
				class_name: "treeview",
				icon: "fa fa-users",
				spanIcon: "fa fa-angle-left pull-right",
				submenu: [
					{
						name: "Daftar Pengguna",
						destination: "/list-users",
						icon: "fa fa-circle-o"
					},
					{
						name: "Grup Pengguna",
						destination: "/group-users",
						icon: "fa fa-circle-o"
					}
				]
			}
		];

		let parentUrlPath = window.location.pathname.split("/");
		parentUrlPath = "/" + parentUrlPath[1];

		return (
			<aside className='main-sidebar'>
				{/* sidebar: style can be found in sidebar.less */}
				<section className='sidebar'>
					{/* sidebar menu: : style can be found in sidebar.less */}
					<ul className='sidebar-menu' data-widget='tree'>
						<li className='header'>MAIN NAVIGATION</li>
						{menus.map((menu, i) =>
							// if class_name object is null, it is mean not dropdown menu
							isNull(menu.class_name) ? (
								<li
									key={i}
									className={
										menu.destination === window.location.pathname
											? "active"
											: null
									}
								>
									<NavLink to={menu.destination}>
										<i className={menu.icon} /> <span>{menu.name}</span>
									</NavLink>
								</li>
							) : (
									<li
										key={i}
										className={`${menu.class_name} ${
											_.some(menu.submenu, {
												destination: parentUrlPath
											})
												? "active"
												: null
											}`}
									>
										<NavLink to={menu.destination}>
											<i className={menu.icon} /> <span>{menu.name}</span>
											<span className='pull-right-container'>
												<i className='fa fa-angle-left pull-right'></i>
											</span>
										</NavLink>
										<ul className='treeview-menu'>
											{menu.submenu.map((sub, key) => (
												<li
													key={key}
													className={
														sub.destination === window.location.pathname || sub.destination === parentUrlPath
															? `active`
															: null
													}
												>
													<NavLink to={sub.destination} activeClassName='active'>
														<i className={sub.icon} /> {sub.name}
													</NavLink>
												</li>
											))}
										</ul>
									</li>
								)
						)}
					</ul>
				</section>
				{/* /.sidebar */}
			</aside>
		);
	}
}

export default Menu;
