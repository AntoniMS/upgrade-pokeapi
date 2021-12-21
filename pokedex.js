const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
const div$$ = document.querySelector(".container");


const catchEmAll = async () => {
  
  const pokedex = [];

  for (let i = 1; i <= 42; i++) {
    const pokedexRes = await fetch(baseUrl + i);
    const pokedexJson = await pokedexRes.json();

    pokedex.push(pokedexJson);
    
  }
  const pokemon = [];
  
    pokedex.forEach((data) => {
      const pokemonData = {
        id: data.id,
        name: data.name.toUpperCase(),
        image: data.sprites.other.home["front_default"],
        types: data.types[0].type.name,
        weight: data.weight,
        height: data.height,
        
      };

      pokemon.push(pokemonData);
      

    }
  );
  printPokemon(pokemon);

};

const printPokemon = (pokemon) => {
  const pokeHTML = pokemon
    .map(
      (poke) => `
      <li class="card">
          <h1 class="card-title">#${poke.id}</h1>
          <h2 class="card-title">${poke.name}</h2>
          <div class="card-frame">
           <img class="card-image" src="${poke.image}"/>
          </div>
          <div class="card-info">
            <h3>Type: ${poke.types}</h3>
            <h3>Weight: ${Math.round(poke.weight * 0.1)} kg <br> Height: ${
        poke.height / 10
      } m</h3>
          </div>
      </li>`
    )
    .join("");
    
  pokedex.innerHTML = pokeHTML;
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
