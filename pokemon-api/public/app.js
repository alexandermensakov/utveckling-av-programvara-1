fetchPokemons()
async function fetchPokemons() {
  const res = await fetch('/api/pokemon');
  let pokemon = await res.json();
  displayPokemon(pokemon);
}

function displayPokemon(pokemons) {
  document.querySelector('#pokemon').innerHTML = `
          ${pokemons.map(pokemon => `
          <div class="images">
          <h1 class="image-text">${pokemon.name}</h1>
           <img src="https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg">
          </div>`).join('')}
      `;
}


