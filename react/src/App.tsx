import React, { createContext, useContext, useState } from "react";

export const CounterContext = createContext<any>(null);

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {count}
      <Children />
    </CounterContext.Provider>
  );
};

export default App;

const Children = () => {
  const { count, setCount } = useContext(CounterContext);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((p: number) => p + 1)}>increase</button>
      <button onClick={() => setCount((p: number) => p - 1)}>sec</button>
    </>
  );
};
