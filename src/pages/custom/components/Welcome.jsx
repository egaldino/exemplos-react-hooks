import React from "react";

// import { Container } from './styles';

function Welcome({ usuario }) {
  return (
    <div>
      <p>Bem vindo, {usuario.nome}</p>
    </div>
  );
}

export default Welcome;
