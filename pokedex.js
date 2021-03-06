const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
const input$$ = document.querySelector(".input");


const catchEmAll = async () => {
  const pokedex = [];

  for (let i = 1; i <= 28; i++) {

    const pokedexRes = await fetch(baseUrl + i);
    const pokedexJson = await pokedexRes.json();

    pokedex.push(pokedexJson);
  }

  const pokemon = [];
  
  pokedex.forEach((data) => {   
    const pokemonData = {

      id: data.id,
      name: data.name,
      image: data.sprites.other.home["front_default"],
      type: data.types[0].type.name,
      weight: data.weight,
      height: data.height,
    };

    pokemon.push(pokemonData);
  });

  const filteredPokemon = pokemon.filter(
    (data) =>
      data.name.toLowerCase().includes(input$$.value.toLowerCase()) ||
      data.type.toLowerCase().includes(input$$.value.toLowerCase())
  );

  printPokemon(filteredPokemon);
  console.log(pokemon);
};

const printPokemon = (pokemon) => {
  const pokeHTML = pokemon
    .map(
      (poke) => `
      <li class="card">
          <h1 class="card-subtitle"># ${poke.id}</h1>
          <h2 class="card-title">${poke.name}</h2>
        <div class="card-frame">
          <img class="card-image" src="${poke.image}"/>
        </div>
          <div class="card-info">
          <img class="typeimg" src="./styles/icons/${poke.type}.png" alt="Imagen Tipo ${poke.type}"/> 
          <h4>Weight: ${poke.weight / 10} kg <br> Height: ${poke.height / 10} m</h4>
        </div>
      </li>`
    )
    .join("");

    document.body.querySelector("#pokedex").innerHTML = pokeHTML;
  
};
input$$.addEventListener("input", catchEmAll);

catchEmAll();
