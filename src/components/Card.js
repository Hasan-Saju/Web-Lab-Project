import React from "react";

function CardItem(props) {
  return (
    <div style={{ margin: "20px 20px 20px 20px" }}>
      <button>
        <h6>{props.vote}</h6>
      </button>
      <p style={{ color: "blue" }}>{props.name} </p>
      <p style={{ fontWeight: "bold" }}>{props.description}</p>
      <p style={{ color: "gray" }}>
        Submitted By{" "}
        <img src="https://img.icons8.com/office/40/000000/bird.png" />
      </p>
    </div>
  );
}

export default CardItem;
