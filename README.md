# Gotta-Catch-Them-All

Your objective is to catch the 12 Pokemon in the wild in order to become a Pokemon Master.

{link} (https://jquizhpi96.github.io/Gotta-Catch-Them-All/#start)

## API and Data Sample

{link} (https://pokeapi.co/)

    "abilities": [
        {
            "ability": {
                "name": "static",
                "url": "https://pokeapi.co/api/v2/ability/9/"
            },
            "is_hidden": false,
            "slot": 1
        },
        {
            "ability": {
                "name": "lightning-rod",
                "url": "https://pokeapi.co/api/v2/ability/31/"
            },
            "is_hidden": true,
            "slot": 3
        }
    ],
    "base_experience": 112,
    "forms": [
        {
            "name": "pikachu",
            "url": "https://pokeapi.co/api/v2/pokemon-form/25/"
        }

## Wireframes

{link} (https://whimsical.com/gotta-catch-them-all-S2sQkbNktefqodKcU7xKyr)
The first frame is the going to be the introduction to the game where the user will have t0 click a button to start.
After clickng the button the page will transition downward to another frame where the game will begin. A score and progress bar will be in place to keep track. Once the player completes the game the user will get an alert saying they won and will have the option to restart the game.

#### MVP

- Use external api to generate a set of 12 pokemon to appear in the game.
- The pokemon will be jumping in and out of the grass.
- Allow user to click on the pokemon signifying that they caught the pokemon by having them disappear.
- If the user catches all 12 pokemon, the user will get a congratulations alert with the pokemon caught, otherwise they will get the option to restart.
- Different types of pokemon will generate every time the game restarts .
- There will be a score board to track how many pokemon the user caught.

#### PostMVP

- Once caught, you will get a brief information of the pokemon's name and type as well as their audio.
- There will be a time limit of 30 seconds to catch them all.

## Project Schedule

| Day       | Deliverable                                        | Status    |
| --------- | -------------------------------------------------- | --------- |
| Jan 25-26 | Prompt / Wireframes / Priority Matrix / Timeframes | completed |
| Jan 26    | Project Approval                                   | completed |
| Jan 27    | Core Application Structure (HTML, CSS, etc.)       | completed |
| Jan 28    | Initial Clickable Model                            | completed |
| Jan 29    | MVP                                                | completed |
| Feb 1     | Presentations/Project Submission                   | completed |

## Priority Matrix

{link} (https://miro.com/welcomeonboard/pGnifZ56IIakSkWZlLMQYINKS8ZPLOBo53FSPbqoofENRky4imrP2LLrLrSdbygX)

## Timeframes

| Component                                              | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------------------------ | :------: | :------------: | :-----------: | :---------: |
| HTML Structure                                         |    m     |      1hrs      |    30 mins    |   30 mins   |
| Basic CSS Styles                                       |    m     |      2hrs      |     1 hr      |    1 hr     |
| Categorying Start and Restart Buttons                  |    m     |     2 hrs      |    30 mins    |   30 mins   |
| Working with API to generate 12 pokemon at a time      |    H     |     4 hrs      |     5 hrs     |    5 hrs    |
| Working with API to gather pokemon's information       |    H     |     3 hrs      |     6 hrs     |    6 hrs    |
| Program the pokemon to jump and disappear when clicked |    H     |     4 hrs      |     4 hrs     |    4 hrs    |
| Track and Display Score of User                        |    H     |     3 hrs      |     2 hr      |    2 hrs    |
| Display the end results                                |    H     |     2 hrs      |     1 hr      |    1 hr     |
| CSS Flexbox and Animation                              |    H     |     5 hrs      |    10 hrs     |   10 hrs    |
| Audio of pokemon and for background music              |    l     |     4 hrs      |     0 hr      |    0 hrs    |
| Total                                                  |    H     |     30 hrs     |    30 hrs     |   30 hrs    |

## Code Snippet

Since the I wanted my game to refresh with different pokemon on the screen, I had to use the Math.random function on my api call and I was so happy that I was able to achieve one of my MVP.

      async function fetchPokemon() {
      let randomPokemonIndex = Math.round(Math.random() \* 750)
      const onePokemon = `https://pokeapi.co/api/v2/pokemon/$ {randomPokemonIndex}`
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

## Change Log

I originally wanted to include background music to the game but Chrome's new policy doesn't allow autoplay music. I also wanted to include a progress bar but I decided not to because I felt like having the tracking score is enough for the user. I thought it would be too repitive to include the progress bar.

I also wanted to include all the pokemon but sinc there is over 1,000, I decided to shorten my list to the pokemon that I felt people would know more off rather than having to show the new generation of pokemon and having the user not know who they are.
