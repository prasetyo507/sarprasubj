import React, { Component } from "react";
import Section from "../../common/Section";
import Master from "../Master";
import { connect } from "react-redux";
/* import Services from "../../services/Services"; */

class Home extends Component {
  componentDidMount() {
    console.log(this.props.auth.userid)
    /* Services.get("users/1/albums")
      .then(function(response) {
        // handle success
        console.log(response.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      }); */
  }
  render() {
    return (
      <Master>
        <Section pageName={"Dashboard"} pageSubject={"Control panel"}>
          <h1>Hello, Kardinah indriana meutia!</h1>
        </Section>
      </Master>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.authForm
  };
};

export default connect(mapStateToProps, null)(Home);
