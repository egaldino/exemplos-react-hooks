import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import ContadorPalavras from "./pages/useMemo/ContatorPalavras";
import Contador from "./pages/useCallback/Contador";

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
      </Switch>
    </Router>
  );
}

export default App;
