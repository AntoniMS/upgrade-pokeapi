const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
const div$$ = document.querySelector(".container");

const catchEmAll = async () => {
  const pokedex = [];

  for (let i = 1; i <= 151; i++) {
    const pokedexRes = await fetch(baseUrl + i);
    const pokedexJson = await pokedexRes.json();

    pokedex.push(pokedexJson);
  }

  const pokemon = pokedex.map((data) => ({
    name: data.name,
    image: data.sprites.other.home["front_default"],
    id: data.id,
  }));

  console.log(pokemon);
};

catchEmAll();

/* //ALTERNATIVA AL .MAP

const pokemon = [];
pokedex.forEach((element) => {
    const pokemonData = {
        name: element.name,
        id: element.id,
    }
    pokemon.push(pokemonData);
      
  }); */
