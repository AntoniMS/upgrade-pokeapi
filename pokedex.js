const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
const div$$ = document.querySelector(".container");

const catchEmAll = async () => {
  const pokedex = [];

  for (let i = 1; i <= 151; i++) {
    const pokedexRes = await fetch(baseUrl + i);
    const pokedexJson = await pokedexRes.json();

    pokedex.push(pokedexJson);
  }

  const pokemon = [];
pokedex.forEach((data) => {
    const pokemonData = {
        name: data.name,
        image: data.sprites.other.home["front_default"],
        id: data.id,
        type: data.types.type,
        weight: data.weight,
        height: data.height,
    }
    pokemon.push(pokemonData);
      
  }); 

  printPokemon(pokemon);
};

const printPokemon = (pokemon) => {
  const pokemonHtml = pokemon.map((poke) => `
        <li class="card">
        <h1 class="card-title">#${poke.id}</h1>
        <h2 class="card-title">${poke.name}</h2>
        <div class="card-frame">
        <img class="card-image" src="${poke.image}"/>
        </div>
        <div class="info">
        <h3>Tipo: ${poke.type}</h3>
        <h3>Peso: ${Math.round(poke.weight*0.1)} kg <br> Altura: ${(poke.height)/10} m</h3>
        </div>
        </li>`
    )
    .join("");
  pokedex.innerHTML = pokemonHtml;
};

catchEmAll();

/* //ALTERNATIVA AL .MAP
    
const pokemon = [];
pokedex.forEach((data) => {
    const pokemonData = {
        name: element.name,
        id: element.id,
        image: data.sprites.other.home["front_default"],
    }
    pokemon.push(pokemonData);
      
  }); 
  
  ///////CON MAP

  const pokemon = pokedex.map((data) => ({
    name: data.name,
    image: data.sprites.other.home["front_default"],
    id: data.id,
  }));
  
  
  
  
  */
