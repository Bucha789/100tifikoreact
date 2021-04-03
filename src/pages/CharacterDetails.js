import React, {useState, useEffect} from 'react';
import getCharacters from '../services/GetCharacters';
import Header from '../components/Header'
import { LoadingAnimation } from '../utils/Animation';


export default function CharacterDetails(props) {
  const characterId = props.match.params.id
  const [loading, setLoading] = useState([false]);
  const [character, setCharacter] = useState([""]);

  useEffect(() => { //recordar que es el equivalente al componentDidMount
    setLoading(true);
    getCharacters(characterId).then(res => {
      setCharacter(res);
      setLoading(false);
    });
  }, [characterId]);
  if (loading) {
    return (
      <div className="Main">
        <LoadingAnimation />
      </div>
    );
  }
  return(
    <div className='Main'>
    <Header />
    <div className="Characters-inner">
        <article className="Characters-card">
            <img src={character.image} alt="name" />
            <h2>{character.name}</h2>
        </article>
        <article className="Characters-card">
            <h3>Episodes: <span>{character.episode.length}</span></h3>
            <h3>Status: <span>{character.status}</span></h3>
            <h3>Species: <span>{character.species}</span></h3>
            <h3>Gender: <span>{character.gender}</span></h3>
            <h3>Origin: <span>{character.origin.name}</span></h3>
            <h3>Location: <span>{character.location.name}</span></h3>
        </article>
    </div>
    </div>
  )
}