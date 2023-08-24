import React, { useCallback, useState } from 'react';

export default function ComponentJ() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}