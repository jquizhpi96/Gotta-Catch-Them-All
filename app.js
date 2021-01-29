document.addEventListener('DOMContentLoaded', () => {
 // fetching api data.
//  async function fetchOrigPokes(pokemonName) {
//   const allPokemon = `https://pokeapi.co/api/v2/pokemon/${id}`
 

//   try {
//     const response = await axios.get(`${allPokemon}${pokemonName}`)
//      console.log(response.data)

//     let data = response.data
//     showPokeData(data)
//     //console.log(showPokeData)

//     const descriptions = await axios.get(`${pokeDescr}${pokemonName}`)
//     let descriptionsData = descriptions.data
//     showPokeDescription(descriptionsData)

//   } catch (error) {
//    // alert(`Ooops! It looks like you didn't enter anything or what you entered was spelled incorrectly, try again!`)
//   }
// }
//fetchOrigPokes('id')

  function fetchPokemon(id, num) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(pokemon => {
        showPokemon(pokemon, num)
        
      });
  } //appending elements to the DOM.
 
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
    fetchPokemon(firstPokemon, 1)
    fetchPokemon(secondPokemon, 2)
    fetchPokemon(thirdPokemon, 3)
    fetchPokemon(fourthPokemon, 4)
    fetchPokemon(fifthPokemon, 5)
    fetchPokemon(sixthPokemon, 6)
    fetchPokemon(sevenPokemon, 7)
    fetchPokemon(eighthPokemon, 8)
    fetchPokemon(ninethPokemon, 9)
    fetchPokemon(tenthPokemon, 10)
    fetchPokemon(eleventhPokemon, 11)
    fetchPokemon(twelvethPokemon, 12)
  }
  createPokemons()
  function showPokemon(pokemon, num) {
    let item = document.querySelector(`#pokemon-${num}`)
    let image = item.getElementsByTagName('img')[0]
    image.setAttribute("src", pokemon.sprites.front_default)
  }


  //making the pokemon to jump

  
  const start = document.querySelector('#button')
  const scoreBoard = document.querySelector('#score')
  const grass = document.querySelectorAll(".grass")
  const img = document.querySelectorAll(".pokemon")
  

  
  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min)
   
   
 }
 //console.log(randomTime(200, 1000))
  
  // let lastImage;
  let timeLimit = 20000;
  let score = 0;
  let countDown;
  const pokemons = document.querySelectorAll(".image")

  

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
  
  // //removing pokemon

  function removePokemon() {
    let pokemon = document.querySelectorAll('.image')
    console.log(pokemon)
     pokemon.remove()
  }
  removePokemon()
  

// function checkForWinner() {
//   if (document.querySelectorAll('.pokemon').length === 0) {
//     console.log('You win!')
//   }
// }
//   checkForWinner()
 
  
})


