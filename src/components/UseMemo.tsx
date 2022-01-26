import React, { useMemo, useState } from "react";

import WithUseMemo from "./UseMemo/WithUseMemo";
import WithoutUseMemo from "./UseMemo/WithoutUseMemo";

const UseMemo = () => {
  const [someState, setSomeState] = useState(false);
  const toggleState = () => {
    setSomeState((prev) => !prev);
  };

  //---Main difference is here!---//
  const myItemsMemo = useMemo(() => ["some data"], []);
  const myItems = ["some data"];
  //------------------------------//

  return (
    <>
      <div className="my-div">
        <p>{someState.toString()}</p>
      </div>
      <button onClick={toggleState}>Trigger re-rendering</button>
      <h4>See the result in the console</h4>
      <h4>Only WithoutUseMemo.js is supposed to re-render.</h4>
      <WithUseMemo items={myItemsMemo} />
      <WithoutUseMemo items={myItems} />
    </>
  );
};

export default UseMemo;
