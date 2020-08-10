//Exemplo inspirado em https://flaviocopes.com/react-hook-usecallback/

import React, { useState, useCallback } from "react";

const functions = new Set();

export default () => {
  const [contador, setContador] = useState(0);
  const [outroContador, setOutroContador] = useState(0);

  const incrementar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  const decrementar = useCallback(() => {
    setContador(contador - 1);
  }, [contador]);

  const incrementarOutro = useCallback(() => {
    setOutroContador(outroContador + 1);
  }, [outroContador]);

  //   const incrementar = () => {
  //     setContador(contador + 1);
  //   };

  //   const decrementar = () => {
  //     setContador(contador - 1);
  //   };
  //   const incrementarOutro = () => {
  //     setOutroContador(outroContador + 1);
  //   };

  functions.add(incrementar);
  functions.add(decrementar);
  functions.add(incrementarOutro);

  console.log(functions);

  return (
    <main style={{ padding: "20px" }}>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>+</button>
      <button onClick={decrementar}>-</button>
      <br></br>
      <p>Outro Contador: {outroContador}</p>
      <button onClick={incrementarOutro}>+ (outro)</button>
    </main>
  );
};
