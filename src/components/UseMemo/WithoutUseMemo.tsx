import{ useEffect } from "react";

const WithoutUseMemo = (props: {items: string[]}) => {
  useEffect(() => {
    console.log("4: WithoutUseMemo.js is rendered.");
  }, [props.items]);

  return <p>WithoutUseMemo.js</p>;
};

export default WithoutUseMemo;
