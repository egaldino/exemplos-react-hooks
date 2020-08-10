//Exemplo inspirado em https://usehooks.com/useMemo/

import React, { useState, useMemo } from "react";

export default () => {
  // Estado para o contador
  const [count, setCount] = useState(0);
  // Estado para indice da palavra a ser exibida
  const [palavraIndice, setPalavraIndice] = useState(0);

  // Array de palavras
  const palavrasArray = ["na", "minha", "máquina", "funciona"];
  const palavra = palavrasArray[palavraIndice];

  // Retorna o número de letras na palavra
  // Tem um loop desenecessário, somente para simular ação lenta
  const contarLetras = (palavra) => {
    console.log("contarLetras");
    let i = 0;
    while (i < 1000000000) i++;
    return palavra.length;
  };

  //Memoriza o resultado, para reaproveitar quando for a mesma entrada
  const numeroDeLetras = useMemo(() => contarLetras(palavra), [palavra]);

  // Causa leg, pois conta as letras novamente
  //const numeroDeLetras = contarLetras(palavra);

  return (
    <div style={{ padding: "15px" }}>
      <h2>
        Calcular número de letras (lento{" "}
        <span role="img" aria-label="slow">
          🐌
        </span>
        )
      </h2>
      <p>
        "{palavra}" tem {numeroDeLetras} letras
      </p>
      <button
        onClick={() => {
          const next =
            palavraIndice + 1 === palavrasArray.length ? 0 : palavraIndice + 1;
          setPalavraIndice(next);
        }}
      >
        Próxima palavra
      </button>

      <h2>
        Contador (rápido{" "}
        <span role="img" aria-label="fast">
          ⚡️
        </span>
        )
      </h2>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};
