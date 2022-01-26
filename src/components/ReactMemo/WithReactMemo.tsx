import React from "react";

const WithReactMemo = () => {
  console.log("1: WithReactMemo.js is rendered.");

  return <p>WithReactMemo.js</p>;
};

export default React.memo(WithReactMemo); // <-- Main difference is here!
