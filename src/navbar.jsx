import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <Link to="/" className="logo">
        Ocean-Guardian
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about" className="active">
            About
          </Link>
        </li>
        <li>
          <Link to="/chatbot">Chat Bot</Link>
        </li>
        <li>
          <Link to="/awareness">Awareness</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/signin">Logout</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
