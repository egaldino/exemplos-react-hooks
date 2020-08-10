import React from "react";
import { Link } from "react-router-dom";

import logo from "../../logo.svg";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <nav className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>Exemplos de React Hooks</p>
        <Link className="Home-link" to="/useState">
          useState
        </Link>

        <Link className="Home-link" to="/useEffect">
          useEffect
        </Link>

        <Link className="Home-link" to="/useCallback">
          useCallback
        </Link>

        <Link className="Home-link" to="/useMemo">
          useMemo
        </Link>

        <Link className="Home-link" to="/useReducer">
          useReducer
        </Link>

        <Link className="Home-link" to="/useContext">
          useContext
        </Link>
      </nav>
    </div>
  );
}

export default Home;
