import React from "react";
// import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='Header-main'>
      <div className="Header-logo">
        <h1>
          <a href="/">100tifico.com</a>
        </h1>
      </div>
      <div className="Header-nav">
        <a href="/about">About</a>
      </div>
    </div>
  );
}
