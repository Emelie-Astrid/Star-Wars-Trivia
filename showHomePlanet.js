let planetButton = document.querySelector("#planet-button");
let homeplanetDiv = document.querySelector("#homeplanet");

async function showHomePlanet() {
    try {
        let selectedRadio = document.querySelector('input[name="person"]:checked');
  
    if (!selectedRadio) {
        alert("Please select a character");
        return;
    }
    
    let firstChar = selectedRadio.value;

    let data = await fetch(`https://swapi.dev/api/people/?search=${firstChar}`);
    let json = await data.json();
    let characterData = json.results[0];

    let character = new Character(
        characterData.name, 
        characterData.gender, 
        characterData.height, 
        characterData.mass, 
        characterData.hairColor, 
        characterData.skinColor, 
        characterData.eyeColor, 
        characterData.films, 
        characterData.pictureUrl,
        characterData.homeworld
        );

        let homePlanetOne = await character.findHomePlanet();

        let homePlanet = document.createElement("p");
        homePlanet.innerText = `${homePlanetOne} is the homeplanet of ${firstChar}`;
        homeplanetDiv.append(homePlanet);
        console.log("hej");
    }
    catch (error) {
        console.error(error);
        }
}
async function showHomePlanetTwo() {
    try {
        let selectedRadio = document.querySelector('input[name="person2"]:checked');
  
    if (!selectedRadio) {
        alert("Please select a character");
        return;
    }
    
    let secondChar = selectedRadio.value;

    let data = await fetch(`https://swapi.dev/api/people/?search=${secondChar}`);
    let json = await data.json();
    let characterData = json.results[0];

    let character = new Character(
        characterData.name, 
        characterData.gender, 
        characterData.height, 
        characterData.mass, 
        characterData.hairColor, 
        characterData.skinColor, 
        characterData.eyeColor, 
        characterData.films, 
        characterData.pictureUrl,
        characterData.homeworld
        );

        let homePlanetTwo = await character.findHomePlanet();

        let homePlanet = document.createElement("p");
        homePlanet.innerText = `${homePlanetTwo} is the homeplanet of ${secondChar}`;
        homeplanetDiv.append(homePlanet);
    }
    catch (error) {
        console.error(error);
        }
}

planetButton.addEventListener("click", () => {
    showHomePlanet();
    showHomePlanetTwo();
});