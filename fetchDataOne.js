let infoButtonOne = document.querySelector("#char1-button");
let charInfo = document.querySelector("#char1-info");
let charName = document.querySelector("#char1-name");
let charImg = document.querySelector("#char1-image");
let characterInfoOne = [];
let charArrOne = [];


async function fetchDataOne() {
  compareDiv.innerHTML = "";
  dateDiv.innerHTML = "";
  charInfo.innerHTML = "";
  homeplanetDiv.innerHTML = "";
  moviesList.innerHTML = "";
  moviesListTwo.innerHTML = "";
  titlesOne.innerHTML = "";
  titlesTwo.innerHTML = "";
  planetArr.length = 0;
  rideinfo.innerHTML = "";
  highestPrice = 0;
  
    let selectedRadio = document.querySelector('input[name="person"]:checked');
  
    if (!selectedRadio) {
      alert("Please select a character");
      return;
    }
    
    let characterName = selectedRadio.value;
  
    let data = await fetch(`https://swapi.dev/api/people/?search=${characterName}`);
    let json = await data.json();
    let characterData = json.results[0];
  
    characterData.height = Number(characterData.height);
    characterData.mass = Number(characterData.mass);
  
    let character = new Character(
      characterData.name,
      characterData.gender,
      Number(characterData.height),
      Number(characterData.mass),
      characterData.hair_color,
      characterData.skin_color,
      characterData.eye_color,
      characterData.films,
      `/assets/${characterData.name.toLowerCase().replace(/ /g, "-")}.jpg`
    );
  
    charArrOne = [
      characterData.name,
      characterData.gender,
      characterData.height,
      characterData.mass,
      characterData.hair_color,
      characterData.eye_color,
      characterData.films.length,
      characterData.skin_color,
    ]
  
    printArrOne = [
      `Name: ${character.name}`,
      `Gender: ${character.gender}`,
      `Height: ${character.height} cm`,
      `Mass: ${character.mass} kg`,
      `Hair color: ${character.hairColor}`,
      `Skin color: ${character.skinColor}`,
      `Eye color: ${character.eyeColor}`,
      `Number of movies: ${character.movies.length}`,
    ];
  
    charName.innerText = characterData.name;
    charImg.src = character.pictureUrl;
}

infoButtonOne.addEventListener("click", () => {
    fetchDataOne();
});