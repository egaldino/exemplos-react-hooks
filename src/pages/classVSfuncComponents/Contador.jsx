import React, { Component } from "react";

export default class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.inicial,
    };
  }

  render() {
    return (
      <main style={{ padding: "20px" }}>
        <p>Você clicou {this.state.count} vezes</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Clique
        </button>
      </main>
    );
  }
}
