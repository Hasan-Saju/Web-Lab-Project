import React from "react";
import CardItem from "./Card";

function MainComponent() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Popular Products</h1>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </div>
  );
}

export default MainComponent;
