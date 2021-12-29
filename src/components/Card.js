import products from "./ProductList";
import React from "react";

function Card() {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  function increamentVotes(a) {
    a.votes = a.votes + 1;
    console.log(a.votes);
    forceUpdate();
  }

  products.sort((a, b) => b.votes - a.votes);
  return (
    <div>
      {products.map((p) => (
        <div>
          <br></br>
          <img src={p.productImageUrl} width="150" height="200"></img>,
          <p>
            <font size="8">{p.title}</font>
          </p>
          <p>
            <font color="blue" size="4">
              {p.author}
            </font>
          </p>
          <p>
            <button
              backgroud-color="#4CAF50"
              onClick={increamentVotes.bind(this, p)}
            >
              <font size="5">Votes: {p.votes}</font>
            </button>
          </p>
          <p>
            <font size="4.5">{p.description}</font>
          </p>
          <p>
            <font color="green" size="4">
              Price: {p.price}$
            </font>
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

export default Card;
