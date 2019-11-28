import React, { Component } from "react";
import Section from "../../common/Section";
import Master from "../Master";
import { Link } from "react-router-dom";
import "./404.css";

class Home extends Component {
  render() {
    return (
      <Master>
        <Section pageName={"404"} pageSubject={"Page Not Found"}>
          <div className="rata">
            <img
              src="error404.png"
              alt="404 Page Not Found"
              className="pull-right"
            />
            <br />
            <Link to="/" className="pull-right">
              Go back to the homepage
            </Link>
          </div>
        </Section>
      </Master>
    );
  }
}

export default Home;
