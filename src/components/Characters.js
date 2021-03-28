import React from 'react';

export default function Character(info) {
  return(
    <div className='Characters-inner'>
      <article className='Characters-card'>
        <img src={image} alt="character of rick and morty"/>
        <h2>{name}</h2>
      </article>
      <article className='Characters-card'>
        <h3>Episodes: <span>{episode.length}</span></h3>
        <h3>Status: <span>{status}</span></h3>
        <h3>Species: <span>{species}</span></h3>
        <h3>Gender: <span>{gender}</span></h3>
        <h3>Origin: <span>{origin.name}</span></h3>
        <h3>Location: <span>{location.name}</span></h3>
      </article>
    </div>
  )
}