import React, { useContext } from "react";
import CurrentUserContext from "../context/CurrentUser";
import VerificaIdentidade from "./VerificaIdentidade";

// import { Container } from './styles';

function BemVindo() {
  const { usuarioLogado } = useContext(CurrentUserContext);

  return (
    <>
      <p>Seja muito bem vindo, {usuarioLogado.nome}</p>
      <VerificaIdentidade />
    </>
  );
}

export default BemVindo;
