import React, { useState, useEffect } from "react";

function ContadorAutomatico() {
  const [count, setCount] = useState(0);
  const [pessoas, setPessoas] = useState([]);

  const carregarPessoas = () => {
    console.log("carregarPessoas");
    //carregando da api
    const pessoasApi = [
      { nome: "Siclano" },
      { nome: "Fulano" },
      { nome: "Beltranoo" },
    ];
    setInterval(() => {
      setPessoas(pessoasApi);
    }, 5000);
  };

  useEffect(() => {
    carregarPessoas();
  }, []);

  return (
    <main style={{ padding: "20px" }}>
      <ul>
        {pessoas.map((pessoa, i) => (
          <li key={`${pessoa.nome}${i}`}>{pessoa.nome}</li>
        ))}
      </ul>
      <p>Count incrementado {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Clique</button>
    </main>
  );
}

export default ContadorAutomatico;
