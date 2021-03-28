const API = 'https://rickandmortyapi.com/api/character/';

async function getCharacters(name) {
  let urlPoint = name ? `${API}?name=${name}` : API;
  try{
    const response = await fetch(urlPoint);
    const data = await response.json();
    
    if (data.info.next.length > 1) {
      
    }

  } catch(err) {
    console.log(err);
  }

}
export default getCharacters;