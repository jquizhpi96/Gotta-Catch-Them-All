 // fetching api data.
 // const name = await axios.get(`https://cors-anywhere.herokuapp.com/${url.name}`)
//  let music = document.querySelector('#music')
// music.play()
async function fetchPokemon() {
    let randomPokemonIndex = Math.round(Math.random() * 150)
    const onePokemon = `https://pokeapi.co/api/v2/pokemon/${randomPokemonIndex}`
    try {
      let response = await axios.get(onePokemon)
    //creating elements for the DOM
      let div = document.createElement('div')
      div.setAttribute("class", 'grass')
      

      let secondDiv = document.createElement('div')
      secondDiv.setAttribute("class", 'pokemon')
    
     let imageofPokemon = document.createElement('img')
      imageofPokemon.setAttribute('src', response.data.sprites.front_default)
      imageofPokemon.setAttribute('alt', "pokemonImage")
      imageofPokemon.setAttribute('class', 'image')
      
      secondDiv.append(imageofPokemon)
      div.append(secondDiv)
      
     let mainDiv = document.querySelector("#start")
      mainDiv.append(div)
      
      
       
    } catch (error) {
      console.log(error)
    
  }
}   
//fetching pokemon 12 times
fetchPokemon()
fetchPokemon()
fetchPokemon()
fetchPokemon()
fetchPokemon()
fetchPokemon()
fetchPokemon()
fetchPokemon()
fetchPokemon()
fetchPokemon()
fetchPokemon()
fetchPokemon()


//Tracking scoreboard
let scoreBoard = document.querySelector('.score')
  //console.log(scoreBoard)
let score = 0

//Removing the Pokemon onced clicked.
document.querySelector('.game').addEventListener('click', removePokemon) 

function removePokemon(e) {
  // let clickPokemon = e
  //  console.log(clickPokemon);
  e.target.lastElementChild.remove()
  score++;
  scoreBoard.textContent = score
 
  checkForWinner()
}
removePokemon(e)

//Checking for winners
function checkForWinner() {
  if (document.querySelectorAll('.image').length === 0) 
  if( scoreboard = 12)
  
  {
   alert('Congratulations, you got them all! Now go and show off your new Pokemon! :)')
  }
}






  
  