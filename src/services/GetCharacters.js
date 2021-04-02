const API = 'https://rickandmortyapi.com/api/character/';

function getCharacters(name) {
  let urlPoint = name ? `${API}?name=${name}` : API;

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