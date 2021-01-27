
let pokeImage = document.querySelector(".pokemon")
let list = document.getElementById('#Pokemon')

// game.addEventListener('click', e => {
//   e.preventDefault();

  


function createPokemon(id, num) {

  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(pokemon => {
      showPokemon(pokemon, num)


      
        
    });
}

function createPokemons() {
  let firstPokemon = Math.round(Math.random() * 750)
  let secondPokemon = Math.round(Math.random() * 750)
  let thirdPokemon = Math.round(Math.random() * 750)
  let fourthPokemon = Math.round(Math.random() * 750)
  let fifthPokemon = Math.round(Math.random() * 750)
  let sixthPokemon = Math.round(Math.random() * 750)
  let sevenPokemon = Math.round(Math.random() * 750)
  let eighthPokemon = Math.round(Math.random() * 750)
  let ninethPokemon = Math.round(Math.random() * 750)
  let tenthPokemon = Math.round(Math.random() * 750)
  let eleventhPokemon = Math.round(Math.random() * 750)
  let twelvethPokemon = Math.round(Math.random() * 750)
  let thirdteenthPokemon = Math.round(Math.random() * 750)
  let fourteenthPokemon = Math.round(Math.random() * 750)
  let fifteenthPokemon = Math.round(Math.random() * 750)
  createPokemon(firstPokemon, 1)
  createPokemon(secondPokemon, 2)
  createPokemon(thirdPokemon, 3)
  createPokemon(fourthPokemon, 4)
  createPokemon(fifthPokemon, 5)
  createPokemon(sixthPokemon, 6)
  createPokemon(sevenPokemon, 7)
  createPokemon(eighthPokemon, 8)
  createPokemon(ninethPokemon, 9)
  createPokemon(tenthPokemon, 10)
  createPokemon(eleventhPokemon, 11)
  createPokemon(twelvethPokemon, 12)
  createPokemon(thirdteenthPokemon, 13)
  createPokemon(fourteenthPokemon, 14)
  createPokemon(fifteenthPokemon, 15)

}

function showPokemon(pokemon, num) {
  let item = document.querySelector(`#pokemon-${num}`)
  let image = item.getElementsByTagName('img')[0]
  image.setAttribute("src", pokemon.sprites.front_default)
  
  
}


createPokemons()

