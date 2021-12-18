const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
const div$$ = document.querySelector(".container");

const catchEmAll = async () => {
  const pokedex = [];
  for (let i = 1; i < 152; i++) {
    const pokedexUrl = baseUrl + [i];

    const pokedexRes = await fetch(pokedexUrl);
    const pokedexJson = await pokedexRes.json();

    pokedex.push(pokedexJson);
  }
  console.log(pokedex);
};

catchEmAll();
