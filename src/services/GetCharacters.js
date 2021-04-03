const API = 'https://rickandmortyapi.com/api/character/';

function getCharacters(id) {
  let urlPoint;
  if (id) {
    urlPoint = API + id;
    return(
      fetch(urlPoint)
      .then(res => res.json())
      .then(response => {
        const characterData = response
        console.log(characterData)
        return characterData;
      })
      .catch(err => console.log(err))
    )
  };

  urlPoint = API;
  return(

    fetch(urlPoint)
    .then(res => res.json())
    .then(response => {
      const results = response.results;
      
      const characters = results.map (character => {
        const {id, name, image} = character;
        return {id, name, image}
      })
      return characters;
    })
    .catch(err => console.log(err))
  )
}
export default getCharacters;