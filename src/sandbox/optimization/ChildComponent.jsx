import React, { memo } from "react";

export default memo(function ChildComponent({ data, printSomething }) {
  printSomething();
  console.log("child render");
  return <div>HELLLLLO!!! {data.firstName}</div>;
});