// document.addEventListener('DOMContentLoaded', () => {
 // fetching api data.
 // const name = await axios.get(`https://cors-anywhere.herokuapp.com/${url.name}`)

async function fetchPokemon() {
  for (let i = 1; i <= 150; i++) {
    const allPokemon = `https://pokeapi.co/api/v2/pokemon/${i}`
    try {
     let response = await axios.get(allPokemon)
      //console.log(response.data)
      const data = response.data.sprites.front_default
     console.log(data)
    
    } catch (error) {
      console.log(error)
    }
  }
}   
fetchPokemon()

  let div = document.querySelector(".image")
  console.log(div)

// function createPokemon() {
//   let appendingPokemon = Math.round(Math.random() * 150)
//   console.log(appendingPokemon)
// }
// createPokemon()
// const showPokeImage = ((pokemon) => {
//   const pokeImage = `
//   <img src='${pokemon.sprites.front_default}' alt ='Pokemon Image' class='image'>
// `
// })
// console.log(showPokeImage)
  // //appending elements to the DOM.
 
  //  function createPokemons() {
  //   let firstPokemon = Math.round(Math.random() * 750)
  //   let secondPokemon = Math.round(Math.random() * 750)
  //   let thirdPokemon = Math.round(Math.random() * 750)
  //   let fourthPokemon = Math.round(Math.random() * 750)
  //   let fifthPokemon = Math.round(Math.random() * 750)
  //   let sixthPokemon = Math.round(Math.random() * 750)
  //   let sevenPokemon = Math.round(Math.random() * 750)
  //   let eighthPokemon = Math.round(Math.random() * 750)
  //   let ninethPokemon = Math.round(Math.random() * 750)
  //   let tenthPokemon = Math.round(Math.random() * 750)
  //   let eleventhPokemon = Math.round(Math.random() * 750)
  //   let twelvethPokemon = Math.round(Math.random() * 750)
    // fetchPokemon(firstPokemon)
    // fetchPokemon(secondPokemon)
    // fetchPokemon(thirdPokemon)
    // fetchPokemon(fourthPokemon)
    // fetchPokemon(fifthPokemon)
    // fetchPokemon(sixthPokemon)
    // fetchPokemon(sevenPokemon)
    // fetchPokemon(eighthPokemon)
    // fetchPokemon(ninethPokemon)
    // fetchPokemon(tenthPokemon)
    // fetchPokemon(eleventhPokemon)
    // fetchPokemon(twelvethPokemon)
  //}
//   createPokemons()
//  function showPokemon() {
   
//   let image = document.createElement('img')
//      console.log(image)
//    image.setAttribute("src", pokemon.sprites.front_default)

//    }











// //making the pokemon to jump in CSS.
  
//   const scoreBoard = document.querySelector('.score')
//   const grass = document.querySelectorAll(".grass")
//   const pokemon = document.querySelectorAll(".pokemon")
//   const pokemonImage = document.querySelectorAll('.image')
//   let score = 0
//   let timeLimit = 2000;
//   let timeUp = false;
// let countdown
// //removing pokemon when clicked 
  
//   function removePokemon() {
//     console.log(pokemon)
//   }
//  removePokemon()
//  pokemon.forEach(pokemon => pokemon.addEventListener('click', removePokemon))
  
 // score.addEventListener('click', score ++)
  // img.addEventListener('click', removePokemon())

  //recording score
  // if user clicks on pokemon, they a point, otherwise, no points.
  
//start Game
  
  // function startGame(){
  //   let countdown = timeLimit / 1000
  //   scoreBoard.textContent = 0;
  //   scoreBoard.style.display = `block`;
  //   countdownBoard.textContent = countdown;
  //   timeUp = false;
  //   score = 0;
  //   setTimeout(() => {
  //     timeUp = true 
  //   }, timeLimit);

    
  // }
  
 
// function checkForWinner() {
//   if (document.querySelectorAll('.pokemon').length === 0) 
//   // scoreBoard === 12;
//   {
//    alert('You win!')
//   }
// }
//   checkForWinner()
  
  
 
  
// })



// let lastImage;
  // let timeLimit = 20000;
  // let score = 0;
  // let countDown;
  // const pokemons = document.querySelectorAll(".image")

  

  // function pickRandomnPokemon() {
  //   const randomImage = Math.floor(Math.random() * img.length);
  //  // console.log(randomImage)
  //   const images = img[randomImage];
  //   console.log(images)
  //   if (images === lastImage) {
  //     return pickRandomnPokemon(images);
  //   }
  //   lastImage = images;
  
  //   return images;
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
