import React, { useCallback, useMemo, useState } from "react";
import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
  const [counter, setCounter] = useState(0);

  const user = useMemo(
    () => ({
      firstName: "Tzila",
      lastName: "Aharoni",
    }),
    []
  );

  const printSomething = useCallback(() => {
    console.log("something");
  }, []);

  console.log("parent render");

  return (
    <div>
      <h4>{counter}</h4>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <ChildComponent data={user} printSomething={printSomething} />
    </div>
  );
}