import React, { useState } from "react";

function Contador({ inicial }) {
  const [count, setCount] = useState(inicial);

  return (
    <main style={{ padding: "20px" }}>
      <p>Count: {count}</p>
      <button onClick={() => setCount(inicial)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </main>
  );
}

export default Contador;
