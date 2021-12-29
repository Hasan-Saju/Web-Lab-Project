// import react from "react";
import products from "./ProductList";
import React from "react";

function MiniComponent() {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  function increamentVotes(a) {
    //console.log(a.votes);
    a.votes = a.votes + 1;
    console.log(a.votes);
    forceUpdate();
  }

  products.sort((a, b) => b.votes - a.votes);
  return (
    <div>
      {products.map((p, i) => (
        <div>
          <p>
            <button onClick={increamentVotes.bind(this, p)}>
              <font size="5">{p.votes}</font>
            </button>
          </p>
          <br></br>
          <img src={p.productImageUrl} width="150" height="200"></img>,
          <p>
            <font size="8">{p.title}</font>
          </p>
          <p>
            <font size="4">{p.author}</font>
          </p>
          <p>
            <font size="4.5">{p.description}</font>
          </p>
          <p>
            <font size="4">Price: {p.price}$</font>
          </p>
          <p>
            <font size="4">
              {" "}
              Submitted By:{" "}
              <img src={p.submitterAvatarUrl} width="50" height="50"></img>
            </font>
          </p>
          <p>
            <hr></hr>
          </p>
        </div>
      ))}
    </div>
  );
}

export default MiniComponent;
