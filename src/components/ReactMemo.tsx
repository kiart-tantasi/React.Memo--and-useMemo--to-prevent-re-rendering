import { useState } from "react";

import WithReactMemo from "./ReactMemo/WithReactMemo";
import WithoutReactMemo from "./ReactMemo/WithoutReactMemo";

const ReactMemo = () => {
  const [someState, setSomeState] = useState(false);
  const toggleState = () => {
    setSomeState((prev) => !prev);
  };

  return (
    <>
      <div className="my-div">
        <p>{someState.toString()}</p>
      </div>
      <button onClick={toggleState}>Trigger re-rendering</button>
      <h4>See the result in the console</h4>
      <h4>Only WithoutReactMemo.js is supposed to re-render.</h4>
      <WithReactMemo />
      <WithoutReactMemo />
      <hr />
    </>
  );
};

export default ReactMemo;
