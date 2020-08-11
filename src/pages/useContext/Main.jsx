import React, { useState } from "react";
import CurrentUserContext from "./context/CurrentUser";
import BemVindo from "./components/BemVindo";

function Main() {
  const [usuarioLogado, setUsuarioLogado] = useState({
    nome: "Fulano",
  });

  return (
    <CurrentUserContext.Provider value={{ usuarioLogado, setUsuarioLogado }}>
      <main style={{ padding: "20px" }}>
        <BemVindo />
      </main>
    </CurrentUserContext.Provider>
  );
}

export default Main;
