let planetButton = document.querySelector("#planet-button");
let homeplanetDiv = document.querySelector("#homeplanet");
let planetInfo = document.querySelector("#planet-info");
let planetArr = [];

let homePlanetOne;
let homePlanetTwo;

async function showHomePlanet() {
    homeplanetDiv.innerHTML = "";
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

        homePlanetOne = await character.findHomePlanet();

        let homePlanet = document.createElement("p");
        homePlanet.innerText = `${homePlanetOne} is the homeplanet of ${firstChar}`;
        homeplanetDiv.append(homePlanet);

        planetArr.push(homePlanetOne);
        }
        catch (error) {
            console.error(error);
        }
}

async function showHomePlanetTwo() {
    homeplanetDiv.innerHTML = "";
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

        homePlanetTwo = await character.findHomePlanet();

        let homePlanet = document.createElement("p");
        homePlanet.innerText = `${homePlanetTwo} is the homeplanet of ${secondChar}`;
        homeplanetDiv.append(homePlanet);

        planetArr.push(homePlanetTwo);

    }
    catch (error) {
        console.error(error);
        }
}



function comparePlanets () {
    if (planetArr[0] === planetArr[1]) {
        let comp = document.createElement("p");
        let planet = planetArr[0];
        comp.innerText = "The characters has the same homeplanet";
        homeplanetDiv.append(comp);
    }
    planetArr = []; 
}

planetButton.addEventListener("click", () => {
    showHomePlanet();
    showHomePlanetTwo();
    setTimeout(() => {
        comparePlanets();
    }, 4000);
});