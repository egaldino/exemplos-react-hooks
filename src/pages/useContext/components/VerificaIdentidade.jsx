import React, { useContext } from "react";

import CurrentUserContext from "../context/CurrentUser";

// import { Container } from './styles';

function VerificaIdentidade() {
  const { usuarioLogado, setUsuarioLogado } = useContext(CurrentUserContext);

  const trocarUsuario = () => {
    const usuario =
      usuarioLogado.nome === "Fulano"
        ? { nome: "Siclano" }
        : { nome: "Fulano" };

    setUsuarioLogado(usuario);
  };

  return (
    <p>
      Se você não é o {usuarioLogado.nome}:{" "}
      <button onClick={() => trocarUsuario()}>clique aqui</button>
    </p>
  );
}

export default VerificaIdentidade;
