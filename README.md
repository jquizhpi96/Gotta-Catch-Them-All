# Gotta-Catch-Them-All
Your objective is to catch the 15 Pokemon in the wild in order to become a Pokemon Master in under 30 seconds 

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

|  Day | Deliverable | Status
|---|---| ---|
|Jan 25-26| Prompt / Wireframes / Priority Matrix / Timeframes | 
|Jan 26| Project Approval | 
|Jan 27| Core Application Structure (HTML, CSS, etc.) | 
|Jan 28| Initial Clickable Model  | 
|Jan 29| MVP | 
|Feb 1| Presentations/Project Submission | 

## Priority Matrix

{link} (https://miro.com/welcomeonboard/pGnifZ56IIakSkWZlLMQYINKS8ZPLOBo53FSPbqoofENRky4imrP2LLrLrSdbygX)
## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML Structure | m | 1hrs|  |  |
| Basic CSS Styles | m | 2hrs|  |  |
| Categorying Start and Restart Buttons | m | 2 hrs|  |  |
| Working with API to generate 15 pokemon at a time| H | 4 hrs |  | |
| Working with API to gather pokemon's information| H | 3 hrs |  | |
| Program the pokemon to jump and disappear when clicked| H |  4 hrs|  |  |
| Track and Display Score of User| H | 3 hrs|  |  |
| Display the end results| H | 2 hrs|  |  |
| Create timelimit for the game| H | 2 hrs |  | |
| CSS Flexbox and Animation  | H | 5 hrs|  |  |
| Audio of pokemon and for background music | H | 4 hrs|  |  |
| Total | H | 32  hrs |  | |



## Change Log
