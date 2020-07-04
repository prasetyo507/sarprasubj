import React, { Component } from "react";
import Services from "../../../services/Services";
import { connect } from "react-redux";
import { dispatchAuth, dispatchToken } from "../store/actions/loginAction";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {}
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {
		if (this.props.auth !== "") {
			this.props.history.push("/home");
		}
	}
	handleFocus() {
		var notice = document.getElementById("notice");
		notice.innerHTML = '';
	}
	async handleSubmit(event) {
		event.preventDefault();
		let Data = {
			username: event.target.username.value,
			password: event.target.password.value
		}
		let cfg = {
			headers: { "sarpras-key": "RLtxMNjW8o" }
		}
		var jwt = require("jsonwebtoken");
		var props = this.props;
		await Services.post("login", Data, cfg)
			.then(function (response) {
				var decode = jwt.decode(response.data.data.token);
				props.submitToken(response.data.data.token);
				props.submitAuth(decode.UserInfo);
				var toast = document.getElementById("snackbar");
				toast.className = "show";
				setTimeout(() => {
					toast.className = toast.className.replace("show", "");
					props.history.push("/home");
				}, 1000);
			})
			.catch(function (error) {
				console.log(error);
				var notice = document.getElementById("notice");
				notice.innerHTML = '<small style="color:red">Username atau Password salah,<br/>Periksa kembali username dan password anda!</small>';
			})
	}
	render() {
		return (
			<div className="login-box">
				<div className="login-logo">
					<img src="new_ubj.png" alt="logo ubj" style={{ width: "100px" }} />
					<br />
					<b>Sarpras </b>UBJ
			</div>
				<div className="login-box-body">
					<form method="post" onSubmit={this.handleSubmit}>
						<span id="notice"></span>
						<div className="form-group has-feedback">
							<input type="username" name="username" className="form-control" placeholder="Username" onFocus={this.handleFocus} />
							<span className="glyphicon glyphicon-user form-control-feedback" />
						</div>
						<div className="form-group has-feedback">
							<input type="password" name="password" className="form-control" placeholder="Password" onFocus={this.handleFocus} />
							<span className="glyphicon glyphicon-lock form-control-feedback" />
						</div>
						<div className="row">
							<div className="col-xs-8">
							</div>
							<div className="col-xs-4">
								<button type="submit" className="btn btn-primary btn-block btn-flat">Masuk</button>
							</div>
						</div>
					</form>
					<div id="snackbar">Selamat Datang</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		submitAuth: userInfo =>
			dispatch(dispatchAuth(userInfo)),
		submitToken: token =>
			dispatch(dispatchToken(token))
	};
};
const mapStateToProps = state => {
	return {
		auth: state.auth.authForm
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
