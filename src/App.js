import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import ContadorPalavras from "./pages/useMemo/ContatorPalavras";
import Contador from "./pages/useCallback/Contador";
import Main from "./pages/useContext/Main";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/useMemo" exact={true}>
          <ContadorPalavras />
        </Route>
        <Route path="/useCallback" exact={true}>
          <Contador />
        </Route>
        <Route path="/useContext" exact={true}>
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
