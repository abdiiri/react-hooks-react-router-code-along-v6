import React from "react";
import { Link } from "react-router-dom";

function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;
