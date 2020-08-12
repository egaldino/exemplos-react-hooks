import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import ContadorClass from "./pages/classVSfuncComponents/Home";

import ContadorState from "./pages/useState/Main";
import ContadorAutomatico from "./pages/useEffect/ContadorAutomatico";
import ContadorPalavras from "./pages/useMemo/ContatorPalavras";
import Contador from "./pages/useCallback/Contador";
import Main from "./pages/useContext/Main";
import ContadorReducer from "./pages/useReducer/Contador";
import Custom from "./pages/custom/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/classVSfuncComponents" exact={true}>
          <ContadorClass />
        </Route>
        <Route path="/useState" exact={true}>
          <ContadorState />
        </Route>
        <Route path="/useEffect" exact={true}>
          <ContadorAutomatico />
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
        <Route path="/useReducer" exact={true}>
          <ContadorReducer />
        </Route>
        <Route path="/customHook" exact={true}>
          <Custom />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
