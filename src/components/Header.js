import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className='Header'>
    <div className='Header-main'>
      <div className="Header-logo">
        <h1>
          <Link to="/">100tifico.com</Link>
        </h1>
      </div>
      <div className="Header-nav">
        <Link to="/about">About</Link>
      </div>
    </div>
    </header>
  );
}
