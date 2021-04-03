import React from "react";
import { Link } from "react-router-dom";
import '../styles/global.css'
export default function CharactersDefault({characters}) {
  return (
    <React.Fragment>
      {characters.map(character => {
        return (
          <article key={character.id} className="Characters-item">
            <Link to={`/character/${character.id}`}>
              <img src={character.image} alt="character of rick and morty" />
              <h2>{character.name}</h2>
            </Link>
          </article>
        );
      })}
    </React.Fragment>
  );
}

// <article className='Characters-card'>
// <h3>Episodes: <span>{episode.length}</span></h3>
// <h3>Status: <span>{status}</span></h3>
// <h3>Species: <span>{species}</span></h3>
// <h3>Gender: <span>{gender}</span></h3>
// <h3>Origin: <span>{origin.name}</span></h3>
// <h3>Location: <span>{location.name}</span></h3>
// </article>
