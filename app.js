// document.addEventListener('DOMContentLoaded', () => {
 // fetching api data.
 // const name = await axios.get(`https://cors-anywhere.herokuapp.com/${url.name}`)
async function fetchPokemon() {
    let randomPokemonIndex = Math.round(Math.random() * 150)
    const onePokemon = `https://pokeapi.co/api/v2/pokemon/${randomPokemonIndex}`
    try {
      let response = await axios.get(onePokemon)
    
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

let scoreBoard = document.querySelector('.score')
console.log(scoreBoard)
let score = 0

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

function checkForWinner() {
  if (document.querySelectorAll('.image').length === 0) 
  if( scoreboard = 12)
  
  {
   alert('Congratulations!! You caught all the Pokemon!')
  }
}


//let timeUp = false

// function startGame() {
//   timeUp = false;
//   scoreBoard.textContent = 0;
//   setTimeout(()=> timeUp = true , 20000)


// }

  
  // function jump() {
  
  //   let startingBottomValue = 50
  //   const image = randomPokemon(img)
  //   // console.log(image)
    
  //   const moveImg = function (image) {
     
  //     image.style.bottom = startingBottomValue + 100 + 'px'
  //     setTimeout(() => {
  //       image.style.bottom = startingBottomValue + 'px'
  //     }, 1000)
  //     if (!timeLimit) jump();
  //     // console.log(moveImg)
  //   }
  //   setInterval(() => {
  //     (moveImg(image))
  //   }, 2000);
  // }
  // jump()
