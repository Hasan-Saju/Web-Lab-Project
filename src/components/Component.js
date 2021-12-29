import products from "../components/ProductList";
import React from "react";
import MiniComponent from "../components/MiniComponent";

function Component() {
  // const [, updateState] = React.useState();
  // const forceUpdate = React.useCallback(() => updateState({}), []);

  // function increamentVotes(a) {
  //   //console.log(a.votes);
  //   a.votes = a.votes + 1;
  //   console.log(a.votes);
  //   forceUpdate();
  // }

  products.sort((a, b) => b.votes - a.votes);

  return (
    <div>
      <body align="left">
        <div>
          <font size="7">Popular Products</font>
        </div>
        <div>
          <MiniComponent />
        </div>
      </body>
    </div>
  );
}

export default Component;
