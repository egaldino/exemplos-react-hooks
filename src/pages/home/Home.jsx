import React from "react";
import { Link } from "react-router-dom";

import logo from "../../logo.svg";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <nav className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />

        <section>
          <h1>Componentes React</h1>
          <ul className="Home-list">
            <li>
              <Link className="Home-link" to="/classVSfuncComponents">
                Componentes de Classe X Componentes Funcionais
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h1>Exemplos de React Hooks</h1>

          <h2>Hooks principais</h2>
          <ul className="Home-list">
            <li>
              <Link className="Home-link" to="/useState">
                useState
              </Link>
            </li>

            <li>
              <Link className="Home-link" to="/useEffect">
                useEffect
              </Link>
            </li>

            <li>
              <Link className="Home-link" to="/useContext">
                useContext
              </Link>
            </li>
          </ul>

          <h2>Alguns hooks adicionais</h2>
          <ul className="Home-list">
            <li>
              <Link className="Home-link" to="/useReducer">
                useReducer
              </Link>
            </li>

            <li>
              <Link className="Home-link" to="/useCallback">
                useCallback
              </Link>
            </li>

            <li>
              <Link className="Home-link" to="/useMemo">
                useMemo
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h1>Extra</h1>
          <ul className="Home-list">
            <li>
              <Link className="Home-link" to="/customHook">
                Criando Hook Customizado
              </Link>
            </li>
          </ul>
        </section>
      </nav>
    </div>
  );
}

export default Home;
