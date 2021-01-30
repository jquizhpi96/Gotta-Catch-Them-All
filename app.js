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
    
      // create the div under response
      // append to DOM
      // create image, src,
      checkForWinner()
        removePokemon()
        
       
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


function removePokemon() {
  let pokemon = document.querySelectorAll('.pokemon')
  console.log(pokemon)
  // pokemons.style.display = 'none'
  e.target.remove()
}
console.log(pokemon)
pokemon.forEach((poke) => {
    console.log('hi')
  poke.addEventListener('click', (e) => {
    console.log('hi')
    removePokemon(e)
  })
})


function checkForWinner() {
  if (document.querySelectorAll('.image').length === 0) 
  // scoreBoard === 12;
  {
   alert('You win!')
  }
}




// let lastImage;
  // let timeLimit = 20000;
  // let score = 0;
  // let countDown;
  // const pokemons = document.querySelectorAll(".image")

  

  
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
