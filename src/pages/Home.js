import React, { useState, useEffect } from "react";
import CharactersDefault from "../components/CharactersDefault";
import Header from "../components/Header";
import "../styles/global.css";
import getCharacters from "../services/GetCharacters";
import { LoadingAnimation } from '../utils/Animation';

function Home() {
  const [loading, setLoading] = useState([false]);
  const [characters, setCharacters] = useState([""]);

  useEffect(() => { //recordar que es el equivalente al componentDidMount
    setLoading(true);
    getCharacters().then((character) => {
      setCharacters(character);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return (
      <div className="Main">
        <LoadingAnimation />
      </div>
    );
  }

  return (
    <div className="Main">
      <Header />
      <div className="Characters">
        <CharactersDefault characters={characters} />
      </div>
    </div>
  );
}

export default Home;
