const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
const div$$ =  document.querySelector(".container");

const allPokemonData = [];

const catchEmAll = () => {
    for (let i = 1; i < 151; i++) {
        const pokeUrl = baseUrl + [i];
    }
  console.log(pokeUrl)
}
    
catchEmAll();