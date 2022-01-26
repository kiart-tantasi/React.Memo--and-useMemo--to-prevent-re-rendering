import { useEffect } from "react";

const WithUseMemo = (props: {items: string[]}) => {
  useEffect(() => {
    console.log("3: WithUseMemo.js is rendered.");
  }, [props.items]);

  return <p>WithUseMemo.js</p>;
};

export default WithUseMemo;
