import { useCallback, useState } from "react";

export default function useCounter(initialValue = 0, step = 1) {
  const [counter, setCounter] = useState(initialValue);

  const increment = useCallback(() => {
    setCounter((prev) => prev + step);
  }, [step]);

  const decrement = useCallback(() => {
    setCounter((prev) => prev - step);
  }, [step]);

  const reset = useCallback(() => {
    setCounter(initialValue);
  }, [initialValue]);

  return { counter, increment, decrement, reset };
}