import React from "react";

function CardItem() {
  return (
    <div style={{ margin: "20px 20px 20px 20px" }}>
      <button>
        <h6>12</h6>
      </button>
      <p style={{ color: "blue" }}>Yellow Pal </p>
      <p style={{ fontWeight: "bold" }}>
        On-demand sand castle construction expertise
      </p>
      <p style={{ color: "gray" }}>
        Submitted By{" "}
        <img src="https://img.icons8.com/office/40/000000/bird.png" />
      </p>
    </div>
  );
}

export default CardItem;
