import React from 'react';
import Header from '../components/Header';
import facebookLogo from '../Images/facebook.png';
import twitterLogo from '../Images/gorjeo.png';
import githubLogo from '../Images/signo-de-github.png';
import instagramLogo from '../Images/instagram.png';

export default function About() {
  return(
    <div className='Main'>
      <Header />
      <div className='About'>
        <h2>Hola, esta aplicación se hizó en react como reto de un curso de Platzi.</h2>
        <p>El que realizó el reto es un desarrollador Frontend con muchas ganas de aprender. Por eso aquí te dejo mis redes sociales para que conozcas mis avances :3</p>
        <div className='About__social-media'>
          <a href="https://www.facebook.com/un.loco.masxdxd"><img src={facebookLogo} alt="Logo de facebook"/></a>
          <a href="https://twitter.com/7Buchamon"><img src={twitterLogo} alt="Logo de twitter"/></a>
          <a href="https://www.instagram.com/juandev01/"><img src={githubLogo} alt="Logo de github"/></a>
          <a href="https://github.com/Bucha789"><img src={instagramLogo} alt="Logo de instagram"/></a>
        </div>
      </div>
    </div>
  )
}