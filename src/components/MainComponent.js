import React, { Component } from "react";
import CardItem from "./Card";

class MainComponent extends Component {
  state = {
    vote: [63, 54, 30, 61],
    name: [
      "Yellow Pail",
      "Supermajority: The Fantasy Congress League",
      "Tinfoild: Tailored tinfoil hats",
      "Haught or Naught",
    ],
    description: [
      "On-demand sand castle construction expertise.",
      "Earn points when your favourite politicians pass legislation.",
      "We already have measurements and shipping address.",
      "High-minded or absent-minded? You decide.",
    ],
  };
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Popular Products</h1>
        <CardItem
          name={this.state.name[0]}
          description={this.state.description[0]}
          vote={this.state.vote[0]}
        />
        <CardItem
          name={this.state.name[1]}
          description={this.state.description[1]}
          vote={this.state.vote[1]}
        />
        <CardItem
          name={this.state.name[2]}
          description={this.state.description[2]}
          vote={this.state.vote[2]}
        />
        <CardItem
          name={this.state.name[3]}
          description={this.state.description[3]}
          vote={this.state.vote[3]}
        />
      </div>
    );
  }
}

export default MainComponent;
