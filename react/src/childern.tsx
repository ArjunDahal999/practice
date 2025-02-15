import React, { Dispatch } from "react";

const Children = ({ actions }: { actions: any }) => {
  return (
    <>
      <button onClick={() => actions({ type: "increase" })}>Click</button>
      <button onClick={() => actions({ type: "decrease" })}>Click -</button>
    </>
  );
};

export default Children;
