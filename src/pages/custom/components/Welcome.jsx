import React from "react";

// import { Container } from './styles';

function Welcome({ usuario }) {
  return (
    <div>
      <p>
        Bem vindo,{" "}
        <span style={{ color: usuario.online ? "green" : "#DC143C" }}>
          {usuario.nome}
        </span>
      </p>
    </div>
  );
}

export default Welcome;
