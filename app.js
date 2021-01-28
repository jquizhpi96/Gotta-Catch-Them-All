document.addEventListener('DOMContentLoaded', () => {
  let list = document.getElementById('#Pokemon')
  // let pokemon = document.querySelectorAll(".image")
  function fetchPokemon(id, num) {
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

  
 
  const start = document.querySelector('#start')
  const scoreBoard = document.querySelector('#score')
  const grass = document.querySelectorAll(".grass")
  const img = document.querySelectorAll(".pokemon")
  console.log(img)
  let lastImage;
  // let timeUp = false;
  let timeLimit = 20000;
  let score = 0;
  let countDown;
  
  function pickRandomnPokemon(img) {
    const randomImage = Math.floor(Math.random() * img.length);
    //console.log(randomImage)
    const images = img[randomImage];
    if (images === lastImage) {
      return pickRandomnPokemon(images);
    }
    lastImage = images;
    return images;
  }
   
  function peep() {
  
    let startingBottomValue = 50
    const image = pickRandomnPokemon(img)
    //console.log(image)
    
    const moveImg = function (image) {
     
      image.style.bottom = startingBottomValue + 100 + 'px'
      setTimeout(() => {
        image.style.bottom = startingBottomValue + 'px'
      }, 250)
      if (!timeLimit) peep();
      // console.log(moveImg)
    }
    setInterval(() => {
      (moveImg(image))
    }, 1000);
  }
  peep()
  
})
