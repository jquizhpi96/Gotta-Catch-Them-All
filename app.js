document.addEventListener('DOMContentLoaded', () => {
  

  let list = document.getElementById('#Pokemon')

  // let pokemon = document.querySelectorAll(".image")


  function fetchPokemon(id, num) {

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    
      .then(res => res.json())
      .then(pokemon => {
        showPokemon(pokemon, num)
      
        // function randtime(min, max) {
        //   return Math.round(Math.random() * (max - min) + min);
        // }
      
        // randtime(20, 2000)
    
        
     
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

  // function randTime(min, max) {
  //   return Math.round(Math.random() * (max - min) + min);
  //}
 
  const start = document.querySelector('#start')
  const scoreBoard = document.querySelector('#score')
  const grass = document.querySelectorAll(".grass")
  console.log(grass)
  const img = document.querySelectorAll(".image")
  console.log(img)

  let lastGrass;
  let timeUp = false;
  let timeLimit = 20000;
  let score = 0;
  let countDown;

function pickRandomnGrass(grass) {
    const randomGrass = Math.floor(Math.random() * grass.length);
    
    const grasses = grass[randomGrass];
    if (grasses === lastGrass) {
      return pickRandomnGrass(grasses);

    }
    lastGrass = grasses;
    return grasses
}
  console.log( pickRandomnGrass(grass))
  

  //getting the pokemon to jump


  function peep() {
    const time = Math.random() * 1300 + 400;
    const image = pickRandomnGrass(grass)
    console.log(image)
    image.classList.add('up');
    setTimeout(function () { 
      image.classList.remove('up');
      if (!timeUp) peep();
    }, time); 
  } peep()

  // 2nd attempted
 
  // setInterval(
  //   function () {
  //     let image = document.querySelectorAll('.image')
  //     console.log(image)
  //       image.classList.toggle('jump')
  //     }, 250);
    
  // function movePokemon() {
  //   list.style.top = (Math.random() * window.innerHeight  + 'px');
  // }
  // movePokemon()

  


})






// const fetchData = async (id,num) => {
//   try {
//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     const data = await res.json()
//     //console.log(data)
//     pokeImage1(data)
//     pokeImage2(data)
//   } catch (err) {
//     console.log(err)
//   }

// }
// fetchData(pokemon)

// const pokeImage1 = (pokemon) => {
//   console.log(pokemon)
//   let image1 = document.querySelectorAll('.image')[0]
//   console.log(image1)
//   image1.setAttribute("src", pokemon.sprites.front_default)
// }

// const pokeImage2 = (pokemon) => {
//   let image2 = document.querySelectorAll('.image')[1]
//   console.log(image2)
//   image2.setAttribute("src", pokemon.sprites.front_default)
// }


     


  