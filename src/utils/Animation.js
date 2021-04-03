import React from 'react';
import './animation.css'
import logo from '../Images/logo.png'
export function LoadingAnimation() {
  return(
    <div className='main'>
      <div className="logo">
        <img src={logo} alt="Logo de carga" />
      </div>
      <div className="animation-container">
        <div className="uno"></div>
        <div className="dos"></div>
        <div className="tres"></div>
      </div>
    </div>
  )
}