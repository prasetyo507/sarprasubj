import React, { Component } from "react";
import Section from "../common/Section";
import Datatable from "../table/Datatable";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ items: data }));
  }

  render() {
    const { items } = this.state;
    return (
      <Section pageName={"Dashboard"} pageSubject={"Control panel"}>
        <Datatable items={items} />
      </Section>
    );
  }
}

export default Home;
